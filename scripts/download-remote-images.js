import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const workspaceRoot = process.cwd();
const outputDirectory = path.join(workspaceRoot, "src/assets/images");
const manifestPath = path.join(outputDirectory, "manifest.json");
const scanRoots = ["src", ".stitch/designs", "index.html"];
const textExtensions = new Set([".css", ".html", ".js", ".json", ".jsx", ".md", ".ts", ".tsx"]);
const ignoredDirectories = new Set([".git", "dist", "node_modules", "src/assets/images"]);
const urlPattern = /https?:\/\/[^\s"'`)<>]+/g;

const extensionByContentType = new Map([
  ["image/avif", ".avif"],
  ["image/gif", ".gif"],
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/svg+xml", ".svg"],
  ["image/webp", ".webp"],
]);

function normalizeUrl(rawUrl) {
  return rawUrl
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", "")
    .replace(/(?:&quot|[.,;])+$/, "");
}

function isIgnoredPath(filePath) {
  const relativePath = path.relative(workspaceRoot, filePath);
  return [...ignoredDirectories].some(
    (ignored) => relativePath === ignored || relativePath.startsWith(`${ignored}/`),
  );
}

async function collectFiles(targetPath) {
  const absolutePath = path.join(workspaceRoot, targetPath);
  const targetStat = await stat(absolutePath).catch(() => null);

  if (!targetStat || isIgnoredPath(absolutePath)) return [];
  if (targetStat.isFile()) {
    return textExtensions.has(path.extname(absolutePath)) ? [absolutePath] : [];
  }

  const entries = await readdir(absolutePath, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) =>
      collectFiles(path.relative(workspaceRoot, path.join(absolutePath, entry.name))),
    ),
  );

  return files.flat();
}

async function collectImageUrls() {
  const files = (await Promise.all(scanRoots.map(collectFiles))).flat();
  /** @type {Set<string>} */
  const urls = new Set();

  for (const file of files) {
    const content = await readFile(file, "utf-8");
    for (const match of content.matchAll(urlPattern)) {
      const url = normalizeUrl(match[0]);
      if (shouldProbeUrl(url)) urls.add(url);
    }
  }

  return [...urls].sort((firstUrl, secondUrl) => firstUrl.localeCompare(secondUrl));
}

function shouldProbeUrl(url) {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes("fonts.googleapis.com") || lowerUrl.includes("cdn.tailwindcss.com"))
    return false;
  if (lowerUrl.includes("registry.npmjs.org") || lowerUrl.includes("opencollective.com"))
    return false;
  if (lowerUrl.includes("googleusercontent.com")) return true;
  return /\.(avif|gif|jpe?g|png|svg|webp)(\?|#|$)/i.test(lowerUrl);
}

function extensionFor(response, url) {
  const contentType = response.headers.get("content-type")?.split(";")[0].toLowerCase() ?? "";
  const contentExtension = extensionByContentType.get(contentType);
  if (contentExtension) return contentExtension;

  const pathnameExtension = path.extname(new URL(url).pathname);
  return pathnameExtension || ".img";
}

function filenameFor(url, extension) {
  const hash = createHash("sha256").update(url).digest("hex").slice(0, 12);
  return `remote-image-${hash}${extension}`;
}

async function downloadImage(url) {
  const response = await fetch(url, { redirect: "follow" });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.startsWith("image/")) {
    return null;
  }

  const extension = extensionFor(response, url);
  const filename = filenameFor(url, extension);
  const localPath = path.join(outputDirectory, filename);
  const buffer = Buffer.from(await response.arrayBuffer());

  await writeFile(localPath, buffer);

  return {
    contentType,
    filename,
    localPath: path.relative(workspaceRoot, localPath),
    sourceUrl: url,
  };
}

async function main() {
  await mkdir(outputDirectory, { recursive: true });

  const urls = await collectImageUrls();
  const manifest = [];

  for (const url of urls) {
    try {
      const result = await downloadImage(url);
      if (result) {
        manifest.push(result);
        console.log(`Downloaded ${url} -> ${result.localPath}`);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`Skipped ${url}: ${message}`);
    }
  }

  await writeFile(`${manifestPath}`, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Wrote ${path.relative(workspaceRoot, manifestPath)}`);
  console.log(`Downloaded ${manifest.length} image${manifest.length === 1 ? "" : "s"}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

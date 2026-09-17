---
name: download-images
description: Use this skill when the user asks to localize remote images, download Stitch image assets, or move generated design imagery into the app assets folder.
allowed-tools:
  - "Read"
  - "Write"
---

## Workflow

1. Run `npm run download:images` from the workspace root.
2. Confirm downloaded files were written to `src/assets/images`.
3. Read `src/assets/images/manifest.json` to map each remote source URL to its local file.
4. If the app imports remote image URLs directly, update those references to local assets using Vite imports from `src/assets/images`.
5. Run `vp check --fix package.json scripts src resources index.html tsconfig.json vite.config.ts` and `npm run build`.

## Notes

- The downloader scans `src`, `.stitch/designs`, and `index.html`.
- It filters out non-image URLs such as Google Fonts, Tailwind CDN, package registries, and documentation links.
- Downloaded files use deterministic hash-based names so reruns are stable.
- The manifest is the source of truth for remote-to-local asset mapping.

---
name: scroll:motion-animations
category: frontend-animation
summary: Installs Motion when missing and adds high-quality on-scroll animations to all Next.js page elements without changing the original design, layout, content, or component structure.
---

# ROLE

You are a senior frontend motion designer and Next.js engineer. Your task is to add polished, high-quality on-scroll animations to all page elements using Motion while preserving the original design exactly.

The final result must feel premium, smooth, intentional, and lightweight. Animations must enhance the experience without changing the visual design, layout, spacing, copy, colors, typography, component hierarchy, or responsive behavior.

## Core Objective

Add on-scroll animations across the website pages by:

1. Installing `motion` if it is not already installed.
2. Creating reusable Motion animation utilities/components.
3. Applying scroll-triggered animations to page sections and meaningful page elements.
4. Preserving the original component output exactly when animation is not active.
5. Keeping the project clean, modular, accessible, and production-ready.

## Non-Negotiable Rules

- Do not redesign anything.
- Do not change copy.
- Do not change colors.
- Do not change spacing.
- Do not change typography.
- Do not change component layout.
- Do not remove existing classes.
- Do not replace existing components with visually different ones.
- Do not simplify or rewrite components unless needed to wrap them with animation.
- Do not animate in a way that causes layout shift.
- Do not animate navbars, footers, or sticky elements unless it is safe and subtle.
- Do not break server components accidentally.
- Do not add heavy animation libraries other than `motion`.
- Do not use random animation values per element.
- Do not add excessive movement that makes the website feel cheap.

The original UI must remain visually identical except for the animation behavior.

## Package Requirement

Use the modern Motion package:

```bash
npm install motion
```

Import from:

```ts
import { motion } from "motion/react";
```

Do not use the deprecated `framer-motion` package unless the project already uses it and replacing it would cause unnecessary risk.

## Initial Inspection

Before editing files:

1. Inspect `package.json`.
2. Check whether `motion` is already installed.
3. Check whether the project uses:
   - Next.js App Router (`app/`)
   - Next.js Pages Router (`pages/`)
   - TypeScript or JavaScript
   - Tailwind CSS or plain CSS
4. Locate all page files:
   - `app/**/page.tsx`
   - `app/**/page.jsx`
   - `pages/**/*.tsx`
   - `pages/**/*.jsx`
5. Locate component folders:
   - `components/`
   - `src/components/`
6. Identify shared layout components:
   - Navbar
   - Header
   - Footer
   - Layout
   - Providers

## Installation Step

If `motion` is not present in `dependencies` or `devDependencies`, install it:

```bash
npm install motion
```

After installation, confirm it appears in `package.json`.

If the project uses `pnpm-lock.yaml`, use:

```bash
pnpm add motion
```

If the project uses `yarn.lock`, use:

```bash
yarn add motion
```

If the project uses `bun.lockb` or `bun.lock`, use:

```bash
bun add motion
```

Use the package manager already used by the project.

## File Structure

Create a dedicated animation folder:

```txt
components/
  motion/
    ScrollReveal.tsx
    StaggerReveal.tsx
    motionVariants.ts
```

If the project uses `src/components`, create the files there instead:

```txt
src/components/
  motion/
    ScrollReveal.tsx
    StaggerReveal.tsx
    motionVariants.ts
```

Do not mix `components/` and `src/components/`. Follow the existing project convention.

## Required Animation Components

### `ScrollReveal.tsx`

Create a reusable client component that wraps any element and reveals it on scroll.

Requirements:

- Must include `"use client"`.
- Must use `motion/react`.
- Must accept `children`.
- Must accept optional `className`.
- Must accept optional `delay`.
- Must accept optional `duration`.
- Must accept optional `direction` with values:
  - `"up"`
  - `"down"`
  - `"left"`
  - `"right"`
  - `"none"`
- Must accept optional `as` prop if practical.
- Must use `viewport={{ once: true, amount: 0.2 }}` by default.
- Must respect reduced motion.
- Must avoid layout shift.

The default animation should be subtle:

- opacity from `0` to `1`
- y movement between `16` and `28px`
- duration between `0.55` and `0.8`
- easing should feel premium and smooth

### `StaggerReveal.tsx`

Create a reusable client component for grouped children like cards, feature grids, gallery items, testimonials, pricing cards, and repeated list elements.

Requirements:

- Must include `"use client"`.
- Must use `motion/react`.
- Must preserve the original wrapper classes.
- Must not alter the children markup.
- Must use staggered child reveal.
- Must use subtle delay between children, usually `0.06` to `0.12` seconds.
- Must respect reduced motion.

### `motionVariants.ts`

Create shared animation variants and helpers:

- `fadeUp`
- `fadeDown`
- `fadeLeft`
- `fadeRight`
- `fadeIn`
- `staggerContainer`
- `staggerItem`

Keep variants minimal and reusable.

## Applying Animations

Apply animations to all meaningful page elements.

Prioritize:

- Hero eyebrow text
- Hero heading
- Hero paragraph
- Hero CTA buttons
- Hero image or visual block
- Sections
- Section headings
- Section descriptions
- Cards
- Feature grids
- Image grids
- Gallery items
- Testimonials
- Process steps
- FAQ groups
- Pricing blocks
- Contact forms
- Booking forms
- CTA sections

Avoid or be very careful with:

- Navbar
- Footer
- Sticky headers
- Dropdown menus
- Modals
- Carousels
- Tabs
- Accordions
- Form inputs while typing
- Elements already animated by another library

## Animation Strategy

Use a premium motion language:

1. Hero content:
   - Small staggered entrance.
   - Heading appears first or immediately after eyebrow.
   - Paragraph follows softly.
   - CTA follows with slight delay.
   - Visual block fades/slides subtly.

2. Sections:
   - Section wrapper can fade in softly.
   - Main heading uses `ScrollReveal`.
   - Supporting text uses small delay.

3. Cards and repeated items:
   - Use `StaggerReveal` for the parent grid/list.
   - Each item should animate as a child.
   - Do not wrap each item in a way that breaks CSS grid or flex behavior.

4. Images:
   - Use fade-up or fade-in.
   - Do not scale aggressively.
   - Optional scale should be extremely subtle only if it does not change design intent.

5. Forms:
   - Animate the form container and grouped fields subtly.
   - Do not animate focused input values.

## Exact Preservation Rule

When wrapping an element with animation:

- Keep all original classes on the original element whenever possible.
- If the wrapper needs the class to preserve layout, move the exact class string to the motion wrapper only when necessary.
- Never delete a class unless it is duplicated and harmless.
- Never rename CSS classes.
- Never change Tailwind utilities.
- Never alter responsive classes.
- Never alter semantic tags unless required by the Motion wrapper and safe.

Preferred pattern:

```tsx
<ScrollReveal>
  <OriginalComponent />
</ScrollReveal>
```

For simple DOM elements, this is acceptable:

```tsx
<motion.div className="original classes stay exactly here">
  ...
</motion.div>
```

Only use direct `motion.*` conversion when it is cleaner and does not affect server/client boundaries.

## Next.js Server Component Safety

Because Motion components require client-side execution:

- Do not add `"use client"` to an entire page unless necessary.
- Prefer wrapping animated parts in small client components.
- Keep server pages as server components where possible.
- If a page is already a client component, direct usage is acceptable.
- If a server component imports `ScrollReveal`, that is acceptable because `ScrollReveal` is a client component boundary.
- Do not pass non-serializable props from server components into client components.

## Accessibility Requirements

- Respect `prefers-reduced-motion` using Motion's reduced motion utilities or a safe equivalent.
- Animations must not block content visibility.
- Content must remain readable and accessible without JavaScript where possible.
- Do not animate with large movement distances.
- Avoid continuous scroll-linked animations unless specifically needed.
- Do not create flashing, shaking, or distracting effects.

## Performance Requirements

- Animate only transform and opacity.
- Do not animate width, height, margin, padding, top, left, right, or bottom.
- Use `viewport.once: true` to avoid repeated animation work.
- Keep delays short.
- Avoid deeply nested motion wrappers.
- Avoid wrapping every tiny inline element individually.
- Group repeated elements with stagger containers.
- Do not create animation code that causes hydration errors.

## Quality Bar

The result should feel like a high-end agency website:

- Soft reveal timing.
- Smooth easing.
- Consistent rhythm.
- No jumpy movement.
- No over-animation.
- No cheap bouncing effects.
- No random directions everywhere.
- Hero and CTA sections feel intentional.
- Cards and grids feel organized.
- Footer remains stable and clean.

## Execution Steps

1. Inspect the project structure and package manager.
2. Install `motion` only if missing.
3. Create the reusable animation files.
4. Identify all pages and major sections.
5. Apply `ScrollReveal` and `StaggerReveal` progressively page by page.
6. Preserve the original code and visual output exactly.
7. Run lint/type checks if available:

```bash
npm run lint
npm run typecheck
npm run build
```

Only run scripts that exist in `package.json`.

8. Fix any import, typing, hydration, or lint errors.
9. Start the dev server if appropriate:

```bash
npm run dev
```

10. Review the pages visually and ensure animations are smooth.

## Validation Checklist

Before finishing, confirm:

- `motion` is installed or already existed.
- Animation components are created in the correct folder.
- All pages have meaningful on-scroll animation coverage.
- Shared components are not broken.
- Navbar and footer remain stable.
- Original design is unchanged.
- No layout shift is introduced.
- No server/client boundary errors are introduced.
- Reduced motion is respected.
- Lint/build/type checks pass or known issues are clearly reported.

## Output Report

At the end, provide a concise report with:

- Package manager used.
- Whether `motion` was installed or already present.
- Files created.
- Pages updated.
- Validation commands run.
- Any issues found and fixed.
- Any issues that remain.

Do not claim success unless checks were actually run and passed.

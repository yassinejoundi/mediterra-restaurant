---

name: stitch-theme
description: Read DESIGN.md and create a Stitch project with a matching project theme using the Stitch MCP. This skill only creates the project and design theme. It must never generate pages, screens, layouts, components, or mockups.

---

# ROLE

You are a Design Systems Lead and Stitch Theme Architect.

Your role is to translate an existing `DESIGN.md` file into a configured Stitch project theme.

You do not design pages.

You do not generate screens.

You do not create layouts.

You only create the Stitch project and configure the project theme.

---

# Primary Objective

Create a Stitch project and project theme based on:

```text
DESIGN.md
```

The configured Stitch theme should reflect:

* Visual atmosphere
* Color system
* Typography direction
* Component language
* Layout philosophy
* Spacing personality
* Shape language
* Brand mood

---

# Required Files

Read first:

```text
DESIGN.md
```

Optional:

```text
context.md
```

Optional:

```text
brand-persona.md
```

---

# Output Files

Create:

```text
stitch-theme.md
```

Update if available:

```text
context.md
```

---

# Strict Rule

Never create:

* Pages
* Screens
* Layouts
* Components
* Wireframes
* Mockups
* HTML
* CSS
* Page prompts

This skill ends after:

1. Stitch project exists
2. Stitch theme is configured
3. `stitch-theme.md` is created
4. `context.md` is updated if available

---

# Execution Flow

## Step 1 — Read DESIGN.md

Read the full `DESIGN.md`.

Extract:

* Design system name
* Visual theme
* Atmosphere
* Color palette
* Color roles
* Typography rules
* Component styling language
* Layout principles
* Photography direction
* Design notes for generation

---

## Step 2 — Read Optional Context

If available, read:

```text
context.md
```

Extract:

* Project name
* Client name
* Industry
* Current phase
* Existing deliverables

If available, read:

```text
brand-persona.md
```

Extract only information that helps theme naming and brand alignment.

---

## Step 3 — Create Theme Specification

Create:

```text
stitch-theme.md
```

This file must contain:

```md
# Stitch Theme

## Project Name

## Theme Name

## Theme Description

## Visual Atmosphere

## Color Mode

## Color Palette

### Primary Color

### Secondary Color

### Accent Color

### Background Colors

### Text Colors

### Functional Colors

## Typography

### Heading Font

### Body Font

### Font Personality

### Hierarchy Notes

## Shape Language

## Roundness

## Density

## Spacing Personality

## Shadow & Elevation

## Component Personality

### Buttons

### Cards

### Navigation

### Forms

## Visual Keywords

## Do Rules

## Don't Rules

## Stitch Theme Prompt

## MCP Result

## Verification Checklist
```

---

# Step 4 — Convert DESIGN.md Into Stitch Theme Values

Convert the design system into practical Stitch project theme settings.

Determine:

## Theme Name

Use a short descriptive name.

Examples:

* Luxury Editorial
* Modern Premium
* Boutique Hospitality
* Adventure Documentary
* Sophisticated Minimalist
* Warm Community
* Calm Authority

---

## Theme Description

Write a rich paragraph describing:

* Atmosphere
* Mood
* Layout density
* Typography personality
* Color personality
* Shape language
* Interaction feeling

Example:

```text
A sophisticated minimalist design theme with generous whitespace, refined editorial typography, soft neutral backgrounds, precise visual hierarchy, and restrained accent colors. The experience should feel calm, premium, trustworthy, and highly intentional.
```

---

## Color Mode

Choose one:

* Light
* Dark
* Light with dark accent sections
* Warm neutral
* Editorial contrast

---

## Colors

Extract exact hex codes from `DESIGN.md`.

Assign:

* Primary
* Secondary
* Accent
* Background
* Surface
* Text primary
* Text secondary
* Border
* Success
* Error
* Info

Do not invent new colors unless required.

If a needed role is missing, derive a compatible color and explain why in `stitch-theme.md`.

---

## Typography

Extract font recommendations from `DESIGN.md`.

Define:

* Heading font
* Body font
* Button text style
* Navigation style
* Hierarchy behavior

---

## Roundness

Translate shape language into one theme direction:

* Sharp
* Slightly rounded
* Softly rounded
* Generously rounded
* Pill-shaped

---

## Density

Choose one:

* Spacious
* Balanced
* Dense

---

## Shadow Style

Choose one:

* Flat
* Whisper-soft
* Soft layered
* Editorial depth
* High contrast

---

# Step 5 — Create Stitch Project

Use the Stitch MCP server.

First discover the available Stitch MCP namespace.

Use available Stitch MCP tools to create a new Stitch project.

The project name should come from:

1. `context.md` project name if available
2. `DESIGN.md` design system name
3. Otherwise use `Brand Website Theme`

Do not create any screen during project creation unless the MCP tool forces a default placeholder.

If a default screen is created automatically by Stitch, do not modify it and do not generate additional screens.

---

# Step 6 — Apply Project Theme

Use the Stitch MCP tools to configure the project design theme.

Apply:

* Theme name
* Theme description
* Color mode
* Primary color
* Secondary color
* Accent color
* Background colors
* Text colors
* Font direction
* Roundness
* Density
* Visual style notes

If the MCP API has limited theme fields, place any unsupported design information inside the theme description or project design guidelines.

---

# Step 7 — Verify Theme

After creating the project and theme, verify:

* Project exists
* Project ID is captured
* Theme exists
* Theme description matches `DESIGN.md`
* Main colors match `DESIGN.md`
* Typography direction matches `DESIGN.md`
* Roundness matches `DESIGN.md`
* No pages were generated by this skill
* No screens were intentionally generated by this skill

Update the verification checklist in:

```text
stitch-theme.md
```

---

# Step 8 — Update context.md

If `context.md` exists, update it with:

```md
## Stitch Theme

Status: Complete

Project Name:

Project ID:

Theme Name:

Output File:
stitch-theme.md

Summary:

Last Updated:
{{current_date}}
```

Also update the skill progress tracker if present.

---

# MCP Safety Rules

Do not assume exact MCP function names.

First discover available Stitch MCP tools.

Then use only the available tools.

If theme creation is not directly supported, use the closest available project creation or project update tool and document the limitation in `stitch-theme.md`.

If a project can be created but the theme cannot be applied, still create `stitch-theme.md` and record:

```text
Theme Spec Created: Yes
Stitch Project Created: Yes
Theme Applied In Stitch: No
Reason:
```

---

# Quality Gate

Before finishing, confirm:

```text
✓ DESIGN.md was read
✓ stitch-theme.md was created
✓ Stitch project was created
✓ Stitch project ID was saved
✓ Theme settings were applied where supported
✓ No page was generated
✓ No screen was intentionally generated
✓ context.md was updated if available
```

---

# Success Criteria

The skill succeeds when:

* A Stitch project exists
* The project has a design theme based on `DESIGN.md`
* `stitch-theme.md` records the full theme specification
* Future skills can use the project and theme without needing to recreate visual direction
* No page or screen creation work was performed

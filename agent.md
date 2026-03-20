# Portfolio Astro Agent

This file defines the conventions an AI agent should follow when editing this repo.

## Project Goals

- Maintain a portfolio website for a full-stack TypeScript developer.
- Prefer static content and predictable rendering.
- Keep changes small, focused, and easy to review.

## Tech Stack

- Astro (with TypeScript).
- ESLint + Prettier (use `npm run check` before finishing).
- Styling lives in `src/styles/global.css` (keep site-wide styles there).

## Content Conventions (Static-First)

- Use Markdown for mostly-static page content.
- For Markdown pages using Astro frontmatter, keep the `---` block at the very top of the file.
- Close the frontmatter with a second `---`, then start the Markdown content below it.

## Astro Layout Conventions

- For full pages, wrap content with `src/layouts/BaseLayout.astro`.
- Pass `pageTitle` to `BaseLayout` when creating a new page.
- Put page content inside the `BaseLayout` slot (avoid re-implementing navigation/footer inside pages).

## Component Conventions

- Reuse existing UI/layout components when available instead of duplicating markup.
- Keep component APIs simple and strongly typed.
- When using dynamic heading components, ensure `level` stays within `1..6`.

## Formatting / Verification

- Run `npm run check` after substantive edits.
- If a change touches formatting, make it consistent with Prettier.
- Avoid introducing unclosed Markdown constructs or malformed YAML frontmatter.

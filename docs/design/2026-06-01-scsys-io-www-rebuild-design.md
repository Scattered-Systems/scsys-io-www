# Scattered-Systems (`scsys.io`) — site rebuild design

**Date:** 2026-06-01 · **Branch:** `v0.0.9` · **Author:** built with Claude, dir. @FL03

## Goal

Rework the existing `scsys-io-www` into a flagship marketing site for **Scattered-Systems, LLC**, using `FL03/pzzld-org-www` as design inspiration (not a clone). Two highlights:

1. **The Portal** — the flagship, all-in-one digital portal where users design, deploy, and inhabit their own **cloud clusters** with ease.
2. **Project Eryon** — the topological substrate beneath everything, with a harmonic orchestration mechanism derived from the **neo-Riemannian theory of music**.

Standardize on **bun**. Reuse the repo's existing assets (favicon/PWA/logo). Replace the homepage particle animation with a **simplicial / topological abstract animation inspired by the generalized Tonnetz**.

## What stays (already modern)

Next 16 · React 19 · Tailwind v4 · shadcn (new-york/zinc primitives) · `next-themes` · `three` · MDX · pino · sonner · Bun · OpenNext→Cloudflare deploy (`scsys.io`). Existing `public/` assets: `logo.svg`/`logo.png`, `favicon.ico`, `icon0.svg`, `icon1.png`, `web-app-manifest-{192,512}`, `apple-icon.png`.

## Design language

Adapt pzzld's structure; re-skin the brand:

- **Type:** Fraunces (display serif, thin/large headings) · Geist (sans body) · Geist Mono (uppercase micro-labels = "terminal" voice). Loaded via `next/font/google`.
- **Palette (dark-first, OKLCH):** cool **obsidian** field; **electric cyan** primary signal (cloud/network); **violet** secondary (harmonic/Eryon). `.light` opt-out kept and WCAG-tuned.
- **Texture utilities:** `.label-mono`, `.bg-grid` (64px engineering grid), `.grain` (4% SVG film grain), `.glow-radial` (cyan), `.glow-violet` (violet), `.mask-fade-x`, `.text-balance`. Keyframes: marquee, blink, rise, drift.
- **Motion:** `motion` (`LazyMotion`/`domAnimation`) scroll-reveals + scroll-progress; one WebGL hero. All respect `prefers-reduced-motion`.

## Architecture

- `src/components/site/` — bespoke design layer: `providers`, `navbar`, `footer`, `hud`, `scroll-progress`, `reveal`, `section`, `cta`, `theme-toggle`, `logo`, `hero/`, `sections/`.
- `src/lib/config/site.ts` — single source of truth for all copy/links (`SITE`). Sections render from it.
- `src/styles/globals.css` — Tailwind v4 entry + brand design system.
- App files: new `layout.tsx` (chrome + SITE-driven metadata), `page.tsx` (compose sections), `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`.

## The animation — "Harmonic Lattice" (`hero/scene.tsx`)

Pure `three.js` (no R3F), dynamic `ssr:false`, lean chunk. A **generalized Tonnetz**: a triangular lattice (the 1-skeleton of a simplicial complex) of pitch-class nodes, mapped onto a **torus** — the Tonnetz's natural quotient manifold under octave equivalence.

- **Assembly intro:** nodes ease from a scattered shell into the ordered torus lattice (easeOutCubic, ~2.6 s) — "scattered systems, assembled."
- **Edges:** three interval families drawn as additive glowing line segments (cyan, low opacity).
- **Harmonic orchestration:** 2–3 lit **triads** (triangular faces) walk the lattice via neo-Riemannian **P/L/R edge-flips**, each a different accent (cyan/violet/teal), with afterglow — Eryon, made visible.
- **Robust harness:** theme-reactive uniforms (no rebuild on theme change), reduced-motion static assembled frame, `IntersectionObserver` + `visibilitychange` pause, DPR≤2, full teardown.

## Cleanup (pzzld residue → scsys)

`README.md`, `.env.example` (`app.pzzld.org`→`app.scsys.io`), privacy/terms MDX (rewrite for Scattered-Systems), `docker-compose.yml`, stale workflows; remove the old R3F `collapsing-particles` animation and `@react-three/fiber` dep; fix `package.json` (`engine`→`engines`, add `motion`); update `manifest.json` theme colors.

## Verify

`bun install` → `bun run lint` → `bun run build`; run `bun run dev` and screenshot the homepage (dark + light, reduced-motion).

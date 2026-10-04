# scsys-io-www

[![License](https://img.shields.io/github/license/scattered-systems/scsys-io?style=for-the-badge&logo=github)](LICENSE)

The official website for **Scattered-Systems, LLC** — the all-in-one portal for
self-orchestrating cloud clusters, powered by **Eryon**, a topological substrate
whose harmonic orchestration is derived from the neo-Riemannian theory of music.

> Cloud clusters, in harmony.

## Stack

- **Next.js 16** (App Router, React 19, React Compiler)
- **Tailwind CSS v4** + **shadcn/ui** (new-york / zinc primitives)
- **three.js** — the hero's generalized-Tonnetz "Harmonic Lattice" animation
- **motion** (scroll reveals) · **next-themes** (dark-first) · **sonner**
- **Bun** toolchain · **OpenNext → Cloudflare** deploy

## Develop

```bash
bun install
bun run dev        # http://localhost:3000
```

## Scripts

| Script | Purpose |
| --- | --- |
| `bun run dev` | Start the dev server |
| `bun run build` | Production build |
| `bun run start` | Serve the production build |
| `bun run lint` | Lint with ESLint |
| `bun run fmt` | Format with Prettier |
| `bun run cf:deploy` | Build + deploy to Cloudflare via OpenNext |

## Structure

```
src/
├── app/                      # App Router (homepage, info routes, SEO, OG image)
├── components/
│   ├── site/                 # the design layer (navbar, footer, hero, sections…)
│   │   └── hero/scene.tsx    # the generalized-Tonnetz WebGL animation
│   └── ui/                   # shadcn/ui primitives
├── lib/config/site.ts        # ★ single source of truth for all site content
└── styles/globals.css        # Tailwind v4 entry + brand design system
```

All copy, links, features, and capabilities live in
[`src/lib/config/site.ts`](src/lib/config/site.ts) — edit content there, not in
component JSX.

## Deploy

Primary target is **Cloudflare Workers** via OpenNext:

```bash
bun run cf:deploy
```

A multi-stage Dockerfile uses Node 24.19.0 and Bun 1.3.10 to build the standalone
Next.js server, then runs it as a non-root Node process. Local environment files
are excluded from image layers; Compose supplies `.env` at runtime.

### Containers

The container destination is `ghcr.io/scattered-systems/scsys-io-www`. Pull
requests, branch pushes, and tag pushes build and check the container without
logging into a registry or publishing it. The local Compose tag is `:local`.

Publishing is an explicit `Container` workflow dispatch on `main` with `publish`
enabled, after the owner has approved the private package and its access. The
workflow refuses to publish unless the existing GHCR package reports `private`
visibility and is linked to this repository. Missing, inaccessible, public, or
unlinked packages stop before registry login. Initial package creation and any
access changes require separate owner review; the workflow does not create
credentials or change permissions.

Confirm the organization's package-creation and default-inheritance settings,
the package's visibility and inherited/granular access, and this repository's
Actions access before enabling a publish. Repository visibility alone does not
establish package privacy. If additional Actions access is needed, request only
`Write` access for this repository, without adding users, teams, or repositories.

Only the publish job receives `packages: write` through the existing
`GITHUB_TOKEN`. Tags and minimal build provenance stay in GHCR. Container build
records, GitHub attestations, and shared build caches are not uploaded by this
workflow. No Docker Hub credentials are used.

## License

Licensed under the [Apache-2.0](LICENSE) license. © Scattered-Systems, LLC.

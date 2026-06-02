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

A multi-stage **Bun Dockerfile** and `docker-compose.yml` are also provided, and
the project runs on **Vercel** out of the box.

## License

Licensed under the [Apache-2.0](LICENSE) license. © Scattered-Systems, LLC.

/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/lib/config
 * @file - site.ts
 *
 * Single source of truth for the site's content. Every section reads from
 * `SITE` so copy, links, features, and capabilities can be edited in one
 * place without touching component code.
 */

/** A navigation entry rendered in the navbar and footer. */
export type NavLink = {
  label: string;
  href: string;
  /** Marks routes that exist but aren't fleshed out yet (e.g. the blog). */
  soon?: boolean;
};

/** An external presence (GitHub, X, email, …). */
export type SocialLink = {
  label: string;
  /** Short mono handle shown in the HUD/footer. */
  handle: string;
  href: string;
};

/** A capability of the flagship portal. `icon` is a lucide icon name. */
export type Feature = {
  index: string;
  icon: string;
  title: string;
  description: string;
};

/** A facet of project Eryon. */
export type Principle = {
  index: string;
  title: string;
  description: string;
};

/** A grouped capability cluster shown in the stack section. */
export type StackGroup = {
  label: string;
  items: string[];
};

/** A short definition-list fact shown in the about grid. */
export type Fact = {
  label: string;
  value: string;
};

export const SITE = {
  name: 'Scattered-Systems',
  /** Short wordmark used in dense UI (nav, HUD, mono labels). */
  short: 'scsys',
  title: 'Scattered-Systems',
  url: 'https://scsys.io',
  /** The product portal lives on its own subdomain. */
  appUrl: 'https://app.scsys.io',
  /** Owner / studio identity. */
  author: {
    name: 'Joe McCain III',
    alias: 'FL03',
    role: 'Founder & Systems Architect',
    company: 'Scattered-Systems, LLC',
    companyUrl: 'https://scsys.io',
    location: 'United States',
    /** Decorative coordinates for the observatory HUD readout. */
    coords: '38.9072°N · 77.0369°W',
  },
  /** The one-line thesis. */
  tagline: 'Cloud clusters, in harmony.',
  /** Hero supporting copy. */
  intro:
    'Scattered-Systems builds the all-in-one portal where you compose, deploy, and inhabit your own cloud clusters — and Eryon, the topological substrate that keeps every one of them in harmony.',
  /** Short "about" prose, paragraph per entry. */
  about: [
    'Scattered-Systems, LLC is a systems studio founded by Joe McCain III. We work where low-level rigor meets high-level ambition — memory-tight Rust services, WebAssembly components that run anywhere, and orchestration that behaves less like a scheduler and more like an ensemble.',
    'Our thesis is simple: distributed systems should not feel scattered. Given the right substrate, a cluster can move between states the way a piece of music moves between chords — smoothly, audibly coherent, never jarring.',
    'That substrate is Eryon, and the portal is how you put it to work.',
  ],
  nav: [
    { label: 'Portal', href: '#portal' },
    { label: 'Eryon', href: '#eryon' },
    { label: 'Platform', href: '#platform' },
    { label: 'About', href: '#about' },
    { label: 'Journal', href: '/blog', soon: true },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavLink[],
  socials: [
    {
      label: 'GitHub',
      handle: 'scattered-systems',
      href: 'https://github.com/scattered-systems',
    },
    { label: 'X', handle: '@scsys_io', href: 'https://x.com/scsys_io' },
    {
      label: 'Email',
      handle: 'support@scsys.io',
      href: 'mailto:support@scsys.io',
    },
  ] satisfies SocialLink[],
  email: 'support@scsys.io',

  /** The flagship — the all-in-one digital portal. */
  portal: {
    eyebrow: 'The portal',
    title: 'Your cloud, composed.',
    lede: 'One portal to design a cluster, bring it online, and live inside it. No ceremony, no glue code — just the topology you drew, running.',
    cta: { label: 'Enter the portal', href: 'https://app.scsys.io' },
    features: [
      {
        index: '01',
        icon: 'Boxes',
        title: 'Compose a cluster',
        description:
          'Lay out nodes, services, and links on a visual canvas. The topology you sketch is the topology that ships.',
      },
      {
        index: '02',
        icon: 'Workflow',
        title: 'Deploy in one motion',
        description:
          'Blueprint to running cluster in a single step — across our infrastructure, your own hardware, or both at once.',
      },
      {
        index: '03',
        icon: 'AudioLines',
        title: 'Self-orchestrating',
        description:
          'Eryon keeps services balanced and healing in the background, resolving load the way a chord resolves tension.',
      },
      {
        index: '04',
        icon: 'Activity',
        title: 'Live observability',
        description:
          'Watch the whole cluster breathe in real time — every node, signal, and transition rendered as it happens.',
      },
      {
        index: '05',
        icon: 'Layers',
        title: 'Bring your own infra',
        description:
          'Span clouds, edges, and bare metal from one control plane. Clusters reach wherever your compute lives.',
      },
      {
        index: '06',
        icon: 'ShieldCheck',
        title: 'Yours, end to end',
        description:
          'Own your data, your keys, and your cluster. Portable by design, with nothing locked behind our walls.',
      },
    ] satisfies Feature[],
  },

  /** The substrate — project Eryon. */
  eryon: {
    eyebrow: 'Project Eryon',
    title: 'A substrate that thinks in chords.',
    lede: 'Eryon is the topological substrate beneath every cluster. Its orchestration mechanism is derived from the neo-Riemannian theory of music — so transitions between states are voice-led, minimal, and coherent by construction.',
    paragraphs: [
      'Most orchestrators treat a cluster as a flat list of things to keep alive. Eryon treats it as a shape. Services live on a shared manifold — a generalized Tonnetz — where every reachable configuration is a point and every safe transition is a short move between neighbors.',
      'When the cluster needs to change, Eryon looks for the smallest voice-leading move: the transition that disturbs the fewest components, exactly like resolving one chord into the next. The result is orchestration without thundering herds, cold restarts, or churn.',
    ],
    principles: [
      {
        index: 'I',
        title: 'Topological by nature',
        description:
          'Cluster state lives on a manifold, not a spreadsheet. Adjacency is meaningful, and distance is real.',
      },
      {
        index: 'II',
        title: 'Harmonic orchestration',
        description:
          'Scheduling follows neo-Riemannian voice-leading — the cheapest move is the one that changes the least.',
      },
      {
        index: 'III',
        title: 'The Tonnetz, generalized',
        description:
          'The lattice in the hero is real: states are triads, and transitions are P/L/R transformations across it.',
      },
      {
        index: 'IV',
        title: 'Coherent by construction',
        description:
          'Smoothness is a property of the math, not a heuristic bolted on after the fact.',
      },
    ] satisfies Principle[],
  },

  /** Engineering pillars beneath the portal and Eryon. */
  platform: {
    eyebrow: 'The platform',
    title: 'Built on rigor, all the way down.',
    lede: 'Rust at the core, WebAssembly at the edges, and a topological orchestrator wired through the middle.',
    stack: [
      { label: 'Core', items: ['Rust', 'Async / Tokio', 'Type-safe APIs'] },
      {
        label: 'Edge',
        items: ['WebAssembly', 'WASI', 'Component Model'],
      },
      { label: 'Web', items: ['Next.js', 'React', 'Tailwind', 'Bun'] },
      { label: 'Data', items: ['Postgres', 'Supabase', 'Time-series'] },
      {
        label: 'Foundations',
        items: ['Topology', 'Neo-Riemannian theory', 'Distributed systems'],
      },
    ] satisfies StackGroup[],
    /** Higher-order principles for the marquee. */
    principles: [
      'Rust-first',
      'Edge-native',
      'Topologically sound',
      'Voice-led orchestration',
      'Own your cluster',
      'Coherent by construction',
      'Portable everywhere',
    ],
  },

  /** Decorative facts for the about grid. */
  facts: [
    { label: 'Studio', value: 'Scattered-Systems, LLC' },
    { label: 'Founded', value: '2021' },
    { label: 'Flagship', value: 'The Portal' },
    { label: 'Substrate', value: 'Eryon' },
  ] satisfies Fact[],
} as const;

export type Site = typeof SITE;

export default SITE;

/**
 * Created At: 2026.06.01:00:00:00
 * @author - @FL03
 * @directory - src/lib/config
 * @file - site.ts
 *
 * Single source of truth for the site's content. Every section reads from
 * `SITE` so copy, links, features, and ecosystem entries can be edited in one
 * place without touching component code.
 *
 * Substance is grounded in the Scattered-Systems internal docs (The Scattered
 * Papers + the Eryon technical specification): Eryon is a self-resolving
 * distributed computational substrate; Proton is the user-facing portal; the
 * mission is to democratize distributed computing.
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

/** A capability of the Proton portal. `icon` is a lucide icon name. */
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

/** A project in the Scattered-Systems portfolio. */
export type EcosystemProject = {
  name: string;
  tagline: string;
  description: string;
  status: 'building' | 'design' | 'planned';
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
  /** The Proton portal lives on its own subdomain. */
  appUrl: 'https://app.scsys.io',
  /** Owner / studio identity. */
  author: {
    name: 'Joe McCain III',
    alias: 'FL03',
    role: 'Founder',
    company: 'Scattered-Systems, LLC',
    companyUrl: 'https://scsys.io',
    location: 'United States',
    /** Decorative coordinates for the observatory HUD readout. */
    coords: '38.9072°N · 77.0369°W',
  },
  /** The one-line thesis. */
  tagline: 'Your own cloud, at any scale.',
  /** Hero supporting copy. */
  intro:
    'Scattered-Systems builds Eryon — a topological computational substrate that turns your own devices into a self-organizing personal cloud — and Proton, the portal that makes it yours.',
  /** Mission prose for the about section, paragraph per entry. */
  about: [
    'Scattered-Systems is a computational research and engineering studio built on a single conviction: the conventional architecture of distributed computing is a partial expression of what computation can be. A foundation that takes the topological, algebraic, and harmonic structure of computation seriously produces qualitatively better systems.',
    'Our mission is to democratize distributed computing — to give individuals, small teams, and resource-constrained users access to computational fabrics that conventional infrastructure reserves for enterprise scale. A phone, a laptop, or a Raspberry Pi should be enough to take part.',
    'Founded by Joe McCain III. We treat mathematical rigor as a discipline, not a flourish — and we would rather understate a claim and surprise you than overstate one and let you down.',
  ],
  nav: [
    { label: 'Proton', href: '#proton' },
    { label: 'Eryon', href: '#eryon' },
    { label: 'Ecosystem', href: '#ecosystem' },
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

  /** Proton — the user-facing portal to your personal cloud. */
  proton: {
    eyebrow: 'The portal · Proton',
    title: 'Your cloud, made yours.',
    lede: 'Eryon produces capabilities; Proton makes them addressable. It is the portal where your own devices become a personal cloud you can compose, customize, and own.',
    cta: { label: 'Request early access', href: 'https://app.scsys.io' },
    features: [
      {
        index: '01',
        icon: 'Boxes',
        title: 'Compose a personal cloud',
        description:
          'Aggregate your devices — a phone, a laptop, a Raspberry Pi — into one cloud, with no architectural seam between a single device and many.',
      },
      {
        index: '02',
        icon: 'Workflow',
        title: 'Compose with others',
        description:
          'Personal clouds join into community networks, so you can reach past your own hardware without an architectural break.',
      },
      {
        index: '03',
        icon: 'AudioLines',
        title: 'Self-resolving',
        description:
          'Eryon coordinates, balances, and heals from the geometry up — no data center to run, no central scheduler to babysit.',
      },
      {
        index: '04',
        icon: 'Activity',
        title: 'Watch it breathe',
        description:
          'See your cluster’s topology and consistency in real time, read straight off the substrate rather than guessed at.',
      },
      {
        index: '05',
        icon: 'Layers',
        title: 'Customize the experience',
        description:
          'Shape your interface from composable, generative building blocks — pin what works, rebuild what doesn’t.',
      },
      {
        index: '06',
        icon: 'ShieldCheck',
        title: 'Own it, provably',
        description:
          'Your cluster is bound to you by its shape, its data, and your key. Flat data has no shape to hash; yours does.',
      },
    ] satisfies Feature[],
  },

  /** Eryon — the computational substrate beneath everything. */
  eryon: {
    eyebrow: 'Project Eryon · the substrate',
    title: 'Computation, with shape.',
    lede: 'Eryon treats computation as a topological–algebraic–harmonic object rather than a flat data structure. Its unit of compute — a “plant” — is a tiny universal machine whose state space is a triad on a generalized Tonnetz.',
    paragraphs: [
      'Conventional systems treat data as flat, computation as isolated state-transitions, and coordination as something a scheduler imposes from above. Eryon recovers the structure that approach throws away — the relations between computational positions and the topology of the computational space itself.',
      'The 48 rooted triads of the generalized Tonnetz form a configuration space, and the neo-Riemannian group — P, L, R, and a fifth-shift — acts on it simply transitively. One set of symmetries is therefore the substrate’s geometry, its routing topology, and its addressing scheme at once. Transformations are coordinates.',
      'Nothing is centrally scheduled. Coordination emerges from topology-aware gossip, load balances as a diffusion process, and consistency is read off with sheaf cohomology. The substrate works at any scale — from a single triad upward.',
    ],
    principles: [
      {
        index: 'I',
        title: 'Topological by construction',
        description:
          'Compute lives on a manifold of tiny universal machines, sliced from one twelve-tone alphabet by the simplicial structure of the Tonnetz.',
      },
      {
        index: 'II',
        title: 'Harmonic addressing',
        description:
          'The neo-Riemannian group acts simply transitively on the 48 triads — so every position is reachable by a unique transformation, and transformations are coordinates.',
      },
      {
        index: 'III',
        title: 'Self-resolving',
        description:
          'No central scheduler. Coordination, load-balancing, and regime changes emerge from local dynamics rather than authored control.',
      },
      {
        index: 'IV',
        title: 'Coherent by cohomology',
        description:
          'Agreement is a measured quantity: sheaf cohomology says what the cluster agrees on and where a global view fails to glue.',
      },
    ] satisfies Principle[],
  },

  /** The portfolio Eryon's design pulls into existence. */
  ecosystem: {
    eyebrow: 'The portfolio',
    title: 'A substrate, and what it makes possible.',
    lede: 'Eryon is the foundation. Each project above it is a higher-order service the substrate’s design naturally pulls into existence — and each can stand on its own merits.',
    projects: [
      {
        name: 'Eryon',
        tagline: 'The substrate',
        description:
          'A self-resolving distributed computational fabric built on topology, the neo-Riemannian group, and sheaves.',
        status: 'building',
      },
      {
        name: 'Proton',
        tagline: 'The portal',
        description:
          'Where you reach, compose, and inhabit your substrate-based personal cloud.',
        status: 'design',
      },
      {
        name: 'ACME',
        tagline: 'Context engine',
        description:
          'Automated context management — context as a section of the substrate’s sheaf, not a flat key-value store.',
        status: 'design',
      },
      {
        name: 'Chaos',
        tagline: 'Topological storage',
        description:
          'Durable state persisted by simplicial position and content-addressed, kept as thin as possible.',
        status: 'design',
      },
      {
        name: 'Disarray',
        tagline: 'Multichain layer',
        description:
          'The hybrid-consensus fabric where independent clusters compose and authenticate.',
        status: 'design',
      },
      {
        name: 'Aether',
        tagline: 'Composed compute',
        description:
          'Compute service over the composed, multi-cluster fabric.',
        status: 'planned',
      },
      {
        name: 'Reaction',
        tagline: 'Social space',
        description:
          'A decentralized social space and gig economy over the substrate’s identity and consensus primitives.',
        status: 'planned',
      },
      {
        name: 'GVF',
        tagline: 'Generative visuals',
        description:
          'A framework for composable, dynamic visual experiences built over the substrate.',
        status: 'planned',
      },
    ] satisfies EcosystemProject[],
    /** Higher-order principles for the marquee. */
    principles: [
      'Topology-aware',
      'Self-resolving',
      'No central scheduler',
      'Works at any scale',
      'Transformations are coordinates',
      'Coherent by cohomology',
      'Democratized compute',
    ],
  },

  /** Decorative facts for the about grid. */
  facts: [
    { label: 'Studio', value: 'Scattered-Systems, LLC' },
    { label: 'Founded', value: '2021' },
    { label: 'Substrate', value: 'Eryon' },
    { label: 'Portal', value: 'Proton' },
  ] satisfies Fact[],
} as const;

export type Site = typeof SITE;

export default SITE;

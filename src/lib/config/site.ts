/** Public company copy. Product direction is distinct from availability. */
export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; handle: string; href: string };
export type Fact = { label: string; value: string };

const contact = { label: 'Get in touch', href: 'mailto:support@scsys.io' };

export const SITE = {
  name: 'Scattered-Systems',
  short: 'scsys',
  title: 'Scattered-Systems',
  url: 'https://scsys.io',
  author: {
    name: 'Joe McCain III',
    alias: 'FL03',
    role: 'Founder',
    company: 'Scattered-Systems, LLC',
    companyUrl: 'https://scsys.io',
    location: 'United States',
    // Retained for the existing, unused HUD component.
    coords: '38.9072°N · 77.0369°W',
  },
  tagline: 'Harmonizing compute. Distributing possibility.',
  intro:
    'Scattered-Systems is building an ecosystem for digital spaces people can shape, work in, and connect on their own terms.',
  hero: {
    lines: ['HARMONIZING COMPUTE.', 'DISTRIBUTING POSSIBILITY.'],
    primary: { label: 'Explore the ecosystem', href: '/#ecosystem' },
    secondary: contact,
    note: 'Product direction, grounded in research.',
  },
  nav: [
    { label: 'Ecosystem', href: '/#ecosystem' },
    { label: 'Proton', href: '/#proton' },
    { label: 'Reaction', href: '/#reaction' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/blog' },
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
  cta: contact,
  ecosystem: {
    title: 'Individual agency. Shared possibility.',
    lede: 'Two complementary products guide the ecosystem: a workspace for your own work, and a relational application for working with others.',
    note: 'These are product and research directions. Availability and capabilities will be described as they are established.',
    projects: [
      {
        name: 'Proton',
        role: 'Generative workspace',
        description:
          'A personal environment for creating, reading, and managing digital work.',
        status: 'Product direction',
        href: '/#proton',
      },
      {
        name: 'Reaction',
        role: 'Relational collaboration',
        description:
          'Opportunity, coordination, and exchange across independently controlled environments.',
        status: 'Product direction',
        href: '/#reaction',
      },
      {
        name: 'Eryon',
        role: 'Proposed compute substrate',
        description:
          'Research toward a distributed virtual operating system supporting the ecosystem.',
        status: 'Research · proposed',
        href: '/#eryon',
      },
    ],
  },
  proton: {
    name: 'Proton',
    title: 'A workspace that starts with you.',
    lede: 'Proton is a generative digital workspace. Its current priority is the portal, workspace manager, and editor: a coherent place to create, read, organize, and return to your work.',
    status: 'Current product direction',
    features: [
      {
        title: 'Create and edit',
        description:
          'Purposeful reader and editor views are the starting point for useful work.',
      },
      {
        title: 'Keep work connected',
        description:
          'Workspace navigation and retained resources give the environment continuity.',
      },
      {
        title: 'Shape the environment',
        description:
          'The broader direction is an adaptable visual shell for permitted resources and services.',
      },
    ],
    cta: {
      label: 'Ask about Proton',
      href: 'mailto:support@scsys.io?subject=Proton',
    },
  },
  reaction: {
    name: 'Reaction',
    title: 'Connection, with independence intact.',
    lede: 'Reaction is the relational application for collaboration, opportunity, and exchange. Its direction brings people and organizations together across environments they control independently.',
    detail:
      'Relationships give shared work its context. Participation, coordination, and enterprise belong here, while each environment retains its own boundaries.',
    status: 'Product direction',
    cta: {
      label: 'Ask about Reaction',
      href: 'mailto:support@scsys.io?subject=Reaction',
    },
  },
  eryon: {
    title: 'Research beneath the experience.',
    lede: 'Eryon is a proposed distributed virtual operating system and compute substrate. Its research explores the foundations for execution, state, and resource placement.',
    note: 'This is a research direction, not a claim of a deployed distributed OS or guaranteed runtime behavior.',
    // Do not turn internal Plant/VNode definitions or proof results into marketing claims.
    cta: {
      label: 'Discuss the research',
      href: 'mailto:support@scsys.io?subject=Eryon%20research',
    },
  },
  aboutTitle: 'Building for people and the systems they share.',
  about: [
    'Scattered-Systems is an ecosystem and platform company founded by Joe McCain III. We bring research and engineering together around a long-term goal: more agency over the digital spaces where people live and work.',
    'Proton centers the individual workspace. Reaction centers relationships and shared opportunity. Research into the enabling foundations supports that direction, with each capability judged by its own evidence.',
  ],
  facts: [
    { label: 'Company', value: 'Scattered-Systems, LLC' },
    { label: 'Founder', value: 'Joe McCain III' },
    { label: 'Products', value: 'Proton · Reaction' },
    { label: 'Research', value: 'Eryon' },
  ] satisfies Fact[],
  contact: {
    title: 'Start a conversation.',
    description:
      'Interested in the company, the product direction, or the research? Get in touch with Scattered-Systems.',
  },
  journal: {
    title: 'The journal.',
    description:
      'Notes from Scattered-Systems on our products, research, and engineering.',
    empty: 'No articles published yet.',
  },
} as const;
export type Site = typeof SITE;
export default SITE;

export type DocStatus = "published" | "draft" | "pending";

export type NavItem = {
  title: string;
  href: string;
  status?: DocStatus;
  chapter?: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const nav: NavGroup[] = [
  {
    title: "Real Time Web",
    items: [
      { title: "What is Real Time Web?", href: "/docs/introduction", chapter: "Start here" },
      { title: "Why Real Time Web?", href: "/docs/introduction/why", chapter: "Start here" },
      { title: "Two webs", href: "/docs/introduction/two-webs", chapter: "Start here" },
      { title: "Data and information", href: "/docs/introduction/data-and-information", chapter: "Start here" },
      { title: "What it can do", href: "/docs/introduction/what-it-can-do", chapter: "Start here" },
      { title: "How it works", href: "/docs/introduction/how-it-works", chapter: "How it works" },
      { title: "Vision and principles", href: "/docs/introduction/vision", chapter: "How it works" },
      { title: "How participation works", href: "/docs/introduction/onboarding", status: "draft", chapter: "How it works" },
      { title: "Morphic Architecture", href: "/docs/architecture", chapter: "The architecture" },
      { title: "Infrastructure Layer", href: "/docs/architecture/infrastructure", chapter: "The architecture" },
      { title: "Network / Security Layer", href: "/docs/architecture/network", chapter: "The architecture" },
      { title: "Domain / Application Layer", href: "/docs/architecture/domain", chapter: "The architecture" },
      { title: "Resource / Ownership Layer", href: "/docs/architecture/resource", chapter: "The architecture" },
      { title: "Ghost Space", href: "/docs/architecture/ghost-space", chapter: "The architecture" },
      { title: "Ghosts and twins", href: "/docs/architecture/ghosts-and-twins", chapter: "The architecture" },
      { title: "Bijective network", href: "/docs/architecture/bijective-network", chapter: "The architecture" },
      { title: "Morphic services", href: "/docs/architecture/morphic-services", chapter: "The architecture" },
      { title: "Data Channels", href: "/docs/architecture/data-channels", status: "draft", chapter: "The architecture" },
      { title: "Identity", href: "/docs/architecture/identity", status: "draft", chapter: "Still open" },
      { title: "Domains", href: "/docs/architecture/domains", status: "draft", chapter: "Still open" },
      { title: "Discovery", href: "/docs/architecture/discovery", status: "draft", chapter: "Still open" },
      { title: "Authentication", href: "/docs/architecture/authentication", status: "draft", chapter: "Still open" },
      { title: "Interoperability", href: "/docs/architecture/interoperability", status: "draft", chapter: "Still open" },
    ],
  },
  {
    title: "Brand",
    items: [
      { title: "Introduction", href: "/docs/brand" },
      { title: "Vision", href: "/docs/brand/vision" },
      { title: "Mission", href: "/docs/brand/mission" },
      { title: "Values", href: "/docs/brand/values" },
      { title: "Brand Personality", href: "/docs/brand/personality" },
      { title: "Target Audience", href: "/docs/brand/audience" },
      { title: "Position", href: "/docs/brand/position" },
      { title: "Brand Promise", href: "/docs/brand/promise" },
      { title: "Brand Proof", href: "/docs/brand/proof" },
      { title: "Brand Concept", href: "/docs/brand/concept" },
    ],
  },
  {
    title: "Implementation",
    items: [
      { title: "Overview", href: "/docs/implementation" },
      { title: "Synx", href: "/docs/implementation/synx" },
      { title: "Morph Space", href: "/docs/implementation/morph" },
      { title: "Skalle", href: "/docs/implementation/skalle", status: "draft" },
    ],
  },
  {
    title: "Research",
    items: [
      { title: "Technical Resources", href: "/docs/research", status: "pending" },
      { title: "Experiments", href: "/docs/research/experiments", status: "pending" },
      { title: "Reference Implementations", href: "/docs/research/implementations" },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "Summary", href: "/docs/reference/glossary" },
      { title: "FAQ", href: "/docs/reference/faq" },
      { title: "Governance", href: "/docs/reference/governance", status: "pending" },
      { title: "Contributing", href: "/docs/reference/contributing", status: "pending" },
    ],
  },
];

export function getAdjacentDocs(pathname: string): {
  prev?: NavItem;
  next?: NavItem;
} {
  const group =
    nav.find((entry) => entry.items.some((item) => item.href === pathname)) ??
    (pathname === "/docs" ? nav[0] : undefined);
  if (!group) return {};

  if (pathname === "/docs") {
    return { next: group.items[0] };
  }

  const index = group.items.findIndex((item) => item.href === pathname);
  if (index < 0) return {};
  return {
    prev: group.items[index - 1],
    next: group.items[index + 1],
  };
}

export const explorePaths = [
  {
    href: "/docs/introduction",
    label: "Real Time Web",
    text: "Start with what it is, then why, then the two webs.",
  },
  {
    href: "/docs/architecture/identity",
    label: "Identity",
    text: "Understand identities, domains, and optional authentication.",
  },
  {
    href: "/docs/architecture/data-channels",
    label: "Data",
    text: "Understand real-time data channels and shared state.",
  },
  {
    href: "/docs/implementation",
    label: "Implementation",
    text: "Named implementations: Synx, Morph Space, and others planning to build.",
  },
  {
    href: "/docs/research",
    label: "Research",
    text: "Explore experiments and technical resources.",
  },
];

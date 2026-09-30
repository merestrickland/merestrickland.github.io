export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export type ProjectHighlight = {
  emoji: string;
  text: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  tagline?: string;
  technicalHighlights?: ProjectHighlight[];
  stack?: string[];
  /** Live production URL — shown as an external-link icon on the home list */
  liveUrl?: string;
  media?: ProjectMedia[];
  /** Homepage/screenshot preview for the list thumbnail */
  previewImage?: string;
  /** Outline asset in /public, e.g. "/images/projects/my-app-outline.svg" */
  outlineImage?: string;
};

export const professionalProjects: ProjectItem[] = [
  {
    id: "applied-intuition",
    title: "Applied Intuition",
    liveUrl: "https://www.appliedintuition.com",
    previewImage: "/images/projects/applied-intuition/homepage.png",
    // outlineImage: "/images/projects/applied-intuition-outline.svg",
    tagline:
      "Corporate marketing site on Next.js and Sanity CMS — page-builder pages, a newsroom, and internationalization across English, Japanese, Korean, and Arabic.",
    technicalHighlights: [
      {
        emoji: "🧱",
        text: "Built a typed page-builder that maps Sanity blocks to React components, with TypeScript failing the build if a block has no UI — editors assemble pages in the CMS without a deploy, and missing blocks don’t silently ship blank",
      },
      {
        emoji: "⚙️",
        text: "Worked in a GROQ code-generation pipeline instead of hand-maintaining giant query strings, so a schema change flows through to typed component props instead of drifting out of sync",
      },
      {
        emoji: "🌍",
        text: "Kept translations in Sanity with English fallback, then made Arabic opt-in per document rather than a full site locale — Middle East pages could ship with RTL without advertising /ar URLs that 404",
      },
      {
        emoji: "👁️",
        text: "Shipped Sanity Presentation and draft mode so editors preview unpublished pages on the real site before publish, instead of guessing from the Studio form",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS",
      "Storybook",
    ],
  },
  {
    id: "peddle-seller",
    title: "Peddle Seller",
    liveUrl: "https://sell.peddle.com",
    tagline:
      "End-to-end car-selling experience for Peddle customers — from instant offer to scheduling pickup — built on Next.js and an in-house design system.",
    technicalHighlights: [
      {
        emoji: "🔀",
        text: "Built a branching multi-step seller flow where answers change which slides come next, while still tracking progress — so sellers could finish a valid offer even when the path got longer or shorter mid-funnel",
      },
      {
        emoji: "📦",
        text: "Kept offer state in React Context rather than a global store: the draft only lived inside the funnel tree, which kept the rest of the app from re-rendering on every answer and made the flow easier to reason about",
      },
      {
        emoji: "💾",
        text: "Persisted drafts with LocalForage instead of localStorage so we could store a larger, structured offer object asynchronously (IndexedDB under the hood) — sellers could refresh mid-funnel without starting over",
      },
      {
        emoji: "⚠️",
        text: "Added a side-effects layer for conflicting answers (title, keys, drivability) with clarifying modals, so bad combinations got caught before submit",
      },
      {
        emoji: "🧩",
        text: "Extracted Apex as a packaged Storybook design system used by Seller, Publisher Embed, and marketing — it became the shared UI template instead of three diverging component sets",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "React Context",
      "Apex (design system)",
      "CSS Modules",
      "Storybook",
    ],
    media: [
      {
        type: "image",
        src: "/images/projects/peddle-seller/01_peddle_seller.jpg",
        alt: "Peddle Seller screenshot",
      },
      {
        type: "image",
        src: "/images/projects/peddle-seller/02_peddle_seller.jpg",
        alt: "Peddle Seller screenshot",
      },
      {
        type: "image",
        src: "/images/projects/peddle-seller/03_peddle_seller.jpg",
        alt: "Peddle Seller screenshot",
      },
      {
        type: "video",
        src: "/images/projects/peddle-seller/peddle_seller_walkthrough.mp4",
      },
    ],
  },
  // {
  //   id: "peddle-marketing",
  //   title: "Peddle Marketing",
  //   tagline:
  //     "Peddle’s consumer marketing site on Next.js and Sanity CMS, with SEO landing pages, partnership funnels, and GSAP-driven motion.",
  // },
  /*
  {
    id: "larson-doors",
    title: "Larson Doors",
    tagline:
      "High-performance e-commerce site for Larson Doors, built on Next.js App Router and powered by Shopify's Storefront API.",
    technicalHighlights: [
      "Architected a headless commerce storefront on Next.js App Router and Shopify Storefront API, using React Server Components and Server Actions for product catalog, cart mutations, and checkout handoff",
      "Integrated Bloomreach SPA SDK with a custom React component mapping layer, enabling marketers to compose landing pages, articles, and reusable content blocks without redeploys",
      "Built a multi-step Paradigm product configurator with dynamic pricing, option selection, and variant-aware gallery updates wired into Shopify product pages",
      "Extended the Shopify data layer with GraphQL codegen, metafield-driven product info/resources/documentation, variant gallery images, and a Shopify Function to automatically remove non-sellable SKUs at cart transform time",
      "Delivered merchandising and discovery UX including mega-navigation, product series compare tables, collection grids with sorting/filtering, Bazaarvoice reviews with structured data, and PriceSpider dealer lookup",
      "Shipped across Netlify environments (PR previews, staging, production) with localized redirects, Storybook for component development, and automated lint/typecheck/Jest quality gates",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "Shopify Storefront API",
      "Bloomreach",
      "Tailwind CSS 4",
      "TypeScript",
      "Storybook",
      "GraphQL Codegen",
      "Netlify",
      "pnpm",
    ],
  },
  {
    id: "level-home",
    title: "Level Home",
    tagline:
      "Marketing and e-commerce site for a smart lock brand, built on Next.js and Shopify with scroll-driven product storytelling.",
    technicalHighlights: [
      "Architected a hybrid static-export deployment where Next.js pages ship alongside Craft CMS — with a custom build pipeline that extracts header/footer HTML via JSDOM, compiles scoped Tailwind CSS for Twig templates, and minifies standalone JS for shared global navigation across both platforms",
      "Integrated Shopify Storefront API for headless commerce: build-time product/collection generation, client-side cart with cookie persistence, variant selection with metafield-driven upsells and cross-sells, and rich text rendering from Shopify metaobjects",
      "Built a reusable GSAP animation system with scroll-pinned panel timelines, data-attribute-driven parallax and reveal effects, and responsive matchMedia breakpoints — powering a multi-scene homepage and long-form product story pages for flagship locks",
      "Delivered flagship product story pages (Smart Deadbolt, Invisible Lock, Keypad) as immersive scroll-driven marketing experiences with quick-buy modals, media annotations, and Bazaarvoice review integration",
      "Automated CI/CD with GitHub Actions: static export on push, artifact sync to a compiled deploy repo, and Shopify webhook-triggered rebuilds to keep product catalog pages in sync with the store",
    ],
    stack: [
      "Next.js 14",
      "React 18",
      "Tailwind CSS 3",
      "GSAP",
      "Shopify Storefront API",
      "GraphQL",
      "Cloudinary",
      "Storybook",
      "Zustand",
      "GitHub Actions",
      "Craft CMS",
      "Netlify",
    ],
  },
  */
  /*
  {
    id: "privy-auth-demo",
    title: "Privy Auth Demo",
    liveUrl: "https://demo.privy.io",
    tagline:
      "Public developer playground for Privy — wallet, email, SMS, and social login with real-time theming and embedded wallets.",
    technicalHighlights: [
      {
        emoji: "➕",
        text: "Extended the live configurator and post-login dashboard for new social providers (Instagram, TikTok, LinkedIn) so the demo could show each method as Privy shipped it, instead of waiting on a separate marketing update",
      },
      {
        emoji: "🎨",
        text: "Wired appearance and login-method config through React context into PrivyProvider — developers change colors, logo, and method order and see the widget update immediately, which made the demo a try-before-you-integrate tool rather than a static screenshot",
      },
      {
        emoji: "💻",
        text: "Rendered auth inline on desktop and as a modal on mobile, so the embed-in-page story was visible on large screens without breaking the tappable flow on phones",
      },
      {
        emoji: "📋",
        text: "Persisted theme choices and exported a paste-ready PrivyProvider snippet (internal render keys stripped) so a customized session could become a real integration instead of dying when they closed the tab",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Privy React SDK",
      "Tailwind CSS",
    ],
  },
  */
  {
    id: "privy-docs",
    title: "Privy Docs",
    liveUrl: "https://docs.privy.io",
    tagline:
      "Privy developer docs on VitePress — custom docs components and a migration off the previous Docusaurus site.",
    technicalHighlights: [
      {
        emoji: "🚚",
        text: "Moved the existing Docusaurus docs into VitePress in the product monorepo, so guide content lived next to the app instead of in a separate docs repo",
      },
      {
        emoji: "🧩",
        text: "Built Vue docs components (feature cards, expandable lists, tags, note boxes) and registered them on the VitePress theme, so markdown pages could use richer layout than default VitePress shortcodes",
      },
      {
        emoji: "🗺️",
        text: "Added feature cards as a navigation pattern on docs pages, so readers could jump into a topic from a card grid instead of a long link list",
      },
      {
        emoji: "🌗",
        text: "Styled lists, headers, and cards to hold up on both light and dark docs backgrounds, including hard-coding colors where theme tokens washed out",
      },
    ],
    stack: ["VitePress", "Vue", "TypeScript", "Markdown"],
    media: [
      {
        type: "image",
        src: "/images/projects/privy-docs/01_privy_docs.jpg",
        alt: "Privy Docs screenshot",
      },
      {
        type: "image",
        src: "/images/projects/privy-docs/02_privy_docs.jpg",
        alt: "Privy Docs screenshot",
      },
      {
        type: "image",
        src: "/images/projects/privy-docs/03_privy_docs.jpg",
        alt: "Privy Docs screenshot",
      },
      {
        type: "image",
        src: "/images/projects/privy-docs/04_privy_docs.jpg",
        alt: "Privy Docs screenshot",
      },
    ],
  },
  {
    id: "peddle-publisher-embed",
    title: "Peddle Publisher Embed",
    liveUrl: "https://peddle-publisher-example-nextjs.onrender.com/",
    tagline:
      "Third-party sell-your-car widget for Peddle partners — drop-in script, iframe modal, and a multi-step vehicle offer flow.",
    technicalHighlights: [
      {
        emoji: "🥾",
        text: "Shipped a drop-in bootstrap with an operations queue, rather than making partners wait for the full script — they paste a head snippet once, call boot/open/hydrate immediately, and we can ship embed updates without asking them to change their install",
      },
      {
        emoji: "🪟",
        text: "Ran the offer UI in an iframe instead of injecting React into the partner page, so their CSS and JS couldn’t break the flow — then used postMessage for open, close, and handover across origins",
      },
      {
        emoji: "💧",
        text: "Added partner hydrate to prefill known vehicle data and jump to the first unanswered step, so marketplace partners didn’t make sellers re-enter information they already had",
      },
      {
        emoji: "🤝",
        text: "Built the in-iframe questionnaire through offer creation and handover to Peddle Seller, so a lead started on a partner site could finish as a real Peddle offer",
      },
    ],
    media: [
      {
        type: "image",
        src: "/images/projects/peddle-publisher-embed/01_peddle_embed.jpg",
        alt: "Peddle Publisher Embed screenshot",
      },
      {
        type: "image",
        src: "/images/projects/peddle-publisher-embed/02_peddle_embed.jpg",
        alt: "Peddle Publisher Embed screenshot",
      },
      {
        type: "video",
        src: "/images/projects/peddle-publisher-embed/peddle_embed_walkthrough.mp4",
      },
    ],
    stack: ["Next.js", "React", "CSS Modules", "postMessage / iframe"],
  },
  /*
  {
    id: "privy-web-presence",
    title: "Privy Web Presence",
    tagline:
      "Privy marketing site and developer docs — product storytelling for the public site and technical guidance for integrating Privy auth.",
  },
  */
];

export const siteLinks = [
  { label: "Email me!", href: "mailto:mere.strickland@gmail.com", large: true },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Bio", href: "/bio" },
] as const;

export function findProject(id: string): ProjectItem | undefined {
  return professionalProjects.find((project) => project.id === id);
}

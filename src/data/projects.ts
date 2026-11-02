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
    tagline:
      "Corporate marketing site on Next.js and Sanity CMS — page-builder pages, a newsroom, and internationalization across English, Japanese, Korean, and Arabic.",
    technicalHighlights: [
      {
        emoji: "🧱",
        text: "Built out the page-builder components (sections) the marketing team uses to populate pages, and connected them to Sanity's content editor so they can publish new pages without developer input.",
      },
      {
        emoji: "🎨",
        text: "Built a separate site for brand guidelines to document best practices for using the logo, colors, type, and photography. In Sanity the whole brand site is one document, with a field for each section. The team edits that document directly, and a login keeps the site off the public website.",
      },
      {
        emoji: "📰",
        text: "Built out the newsroom and article templates, which includes article index page, pages for each story, and rich text with headings, quotes, images, links, and tables. Authors and articles are their own documents, so an author is written once and credited on any story, and an article can be featured on other pages without copying it.",
      },
      {
        emoji: "🌍",
        text: "Shipped the site in Japanese, Korean, and Arabic alongside English. Translations are stored per field in Sanity rather than as a copy of each page. English stays at the root and other languages come from a URL prefix (e.g. /ja, /kr, /ar). Arabic is switched on page by page, so /ar URLs and hreflang only exist where a translation does, links fall back to English everywhere else, and the layout mirrors for right-to-left reading.",
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
    media: [
      {
        type: "image",
        src: "/images/projects/applied-intuition/01_applied_intuition.jpg",
        alt: "Applied Intuition screenshot",
      },
      {
        type: "image",
        src: "/images/projects/applied-intuition/02_applied_intuition.jpg",
        alt: "Applied Intuition screenshot",
      },
      {
        type: "image",
        src: "/images/projects/applied-intuition/03_applied_intuition.jpg",
        alt: "Applied Intuition screenshot",
      },
      {
        type: "video",
        src: "/images/projects/applied-intuition/applied_intuition_walkthrough.mp4",
      },
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
        text: "Built the question flow that turns a seller’s car into an offer, where each answer shapes what comes next, like a VIN filling in the year, make, and model. Answers that conflict, like a car with no keys marked as drivable, trigger a clarifying question so bad offers are caught before submission. Progress is saved in the URL and browser, so a refresh picks up where the seller left off.",
      },
      // {
      //   emoji: "📋",
      //   text: "Built what a seller sees after accepting: the status of their sale, the pickup window and tow carrier, tips for getting the title ready, and the option to cancel. The same page adapts to each stage of the sale, so sellers always know what happens next",
      // },
      // {
      //   emoji: "🛠️",
      //   text: "Built the tools behind the scenes. Peddle staff can search offers and adjust prices, partner accounts only see the offers they should, and a seller who starts a second offer for the same car gets pointed back to the one they already have",
      // },
      {
        emoji: "📈",
        text: "Added tracking across the question flow, so the team could see at which point a potential seller dropped off, not just whether they finished. Sent accepted offers to Facebook with seller details to match sales to ads, and measured A/B tests by real outcomes like accepted offers. All of it goes through one tracking layer, so a component fires a single event and every analytics tool receives it.",
      },
      {
        emoji: "🧩",
        text: "Packaged Apex, Peddle’s in-house design system, as a private npm package shared by the seller flow, marketing website, and mini-flow widget. Beyond UI components, it holds shared logic like sign-in, API calls, and analytics, so a fix ships to every app at once instead of being copied into each one. Every pull request publishes a preview version that an app can install and try before release, and Storybook serves as both the documentation and the basis for visual tests that catch unintended UI changes.",
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
  */
  {
    id: "level-home",
    title: "Level Home",
    liveUrl: "https://level.co",
    tagline:
      "Marketing and e-commerce site for a smart lock brand — Next.js and Shopify product pages alongside scroll-driven story pages.",
    technicalHighlights: [
      {
        emoji: "🛒",
        text: "Shipped Shopify cart and product-page details: variant swatches, quantity limits, a cart loading state, and discount-code error handling, so buyers can finish a purchase without a silent fail.",
      },
      {
        emoji: "🏷️",
        text: "Moved product badges, like a sale label, from one tag per product to one per finish, so one finish can be on sale while another isn’t. Older product-level tags still work as a fallback, and the product grid and product page always show the same badge.",
      },
      {
        emoji: "⭐",
        text: "Added Bazaarvoice customer reviews to product pages and added targeted CSS styling to match the site instead of the widget’s defaults. Each product page also carries structured data with its price, shipping, and rating, so Google can show stars and price right in search results.",
      },
      {
        emoji: "🗺️",
        text: "Made the rebuilt site easy for search engines to read. Each product and category has one canonical URL, so a page reached through different paths isn’t counted as a duplicate, and a lock’s story page and its buy view are linked as one series instead of competing in search. Also added proper headings to story pages and an HTML sitemap linked from the footer.",
      },
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Shopify Storefront API"],
    media: [
      {
        type: "image",
        src: "/images/projects/level/01_level.jpg",
        alt: "Level Home screenshot",
      },
      {
        type: "image",
        src: "/images/projects/level/02_level.jpg",
        alt: "Level Home screenshot",
      },
      {
        type: "image",
        src: "/images/projects/level/03_level.jpg",
        alt: "Level Home screenshot",
      },
      {
        type: "video",
        src: "/images/projects/level/level_walkthrough.mp4",
      },
    ],
  },
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
        text: "Moved the existing Docusaurus docs into VitePress in the product monorepo, so guide content lived next to the app instead of in a separate docs repo.",
      },
      {
        emoji: "🧩",
        text: "Built custom Vue components for the docs, like feature cards, expandable lists, tags, and note boxes, that writers can drop into any markdown page. Feature cards double as navigation, so readers can jump into a topic from a grid instead of scanning a long list of links.",
      },
      {
        emoji: "🌗",
        text: "Styled lists, headers, and cards to hold up on both light and dark backgrounds.",
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
        text: "Built a one-snippet install, so partners add the widget by pasting a short script into their site. It loads the full widget in the background, and anything a partner asks for before it’s ready, like opening the widget, waits in line and runs once it loads. Because the snippet never changes, Peddle can ship widget updates without partners touching their site.",
      },
      {
        emoji: "🪟",
        text: "Ran the widget in an iframe on the partner’s page instead of mixing it into their code, so their styles and scripts can’t break it. The page and the widget pass simple messages back and forth to open, close, and hand off the seller.",
      },
      {
        emoji: "💧",
        text: "Added prefill for partners that already know about the car, like a car marketplace. They pass in its details up front, and the widget fills in those answers and skips ahead to the first question the seller still needs to answer.",
      },
      {
        emoji: "🤝",
        text: "Built the questions inside the widget all the way through to a real offer, then handed the seller over to Peddle’s main site to finish the sale, so a lead that starts on a partner’s site ends up as an actual Peddle offer.",
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

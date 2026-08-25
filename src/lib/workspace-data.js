// Centralized source-of-truth for Hanaa's personal design workspace.
// Project facts come ONLY from the real Behance pages + user-provided categories.
// Nothing invented: metrics, roles, tools, dates are taken verbatim from Behance.

export const portraitImg =
  "https://media.base44.com/images/public/6a74e259812493f24dfd3921/6ffc3cb48_generated_image.png";

// Ja3far — Hanaa's real cat, stylized as the studio mascot / unpaid creative director
export const ja3farImg =
  "https://media.base44.com/images/public/6a74e259812493f24dfd3921/fd2a9367c_generated_image.png";

export const profile = {
  name: "Hanaa",
  fullName: "Hanaa Mohammed",
  role: "UI/UX Designer",
  roles: ["UI/UX Designer", "Product Thinker", "Creative Problem Solver"],
  withFrontEnd: "Front-End background",
  tagline: "I take messy problems and turn \u201cwhat if?\u201d into experiences worth using.",
  heroLead: "I take",
  heroLines: ["messy problems,", "question the obvious,"],
  heroBridge: "and turn",
  heroHighlight: "\u201cwhat if?\u201d",
  heroInto: "into",
  heroCloser: "experiences worth using.",
  intro:
    "I\u2019m Hanaa \u2014 a UI/UX Designer who asks better questions, explores weird possibilities, and turns unclear ideas into digital experiences that actually make sense.",
  positioning:
    "I take unclear ideas, understand the problem, explore the possibilities, and turn them into polished digital experiences.",
  bridge: "I bridge the gap between ideas, design and implementation.",
  secretWeapon: "Before I learned how to design interfaces, I learned how they are built.",
  frontEndValue: ["Components", "Constraints", "Responsive behavior", "Interaction", "Developer handoff", "Technical feasibility"],
  oneLiners: [
    "I live somewhere between Figma and the browser.",
    "Design taught me why. Front-End taught me how.",
    "I learned how products are built before I learned how to make them beautiful.",
  ],
  availability: "Available for design work",
  coffee: 87,
  mood: "Curious",
  behance: "https://www.behance.net/hanaaali11",
  linkedin: "https://www.linkedin.com/in/hanaa-mohammed-5b9384369/",
  email: "hanaamohammedali2@gmail.com",
  cvUrl:
    "https://media.base44.com/files/public/6a74e259812493f24dfd3921/9be9a91dc_hanaaMohamedcv.pdf",
  cvSummary:
    "UI/UX Designer specialized in building scalable, high-fidelity products and intuitive user journeys through design systems and structural precision.",
  tools: ["Figma", "Canva", "Illustrator", "Photoshop", "Design Thinking"],
};

export const ACCENTS = {
  yellow: "bg-yellow text-ink",
  teal: "bg-teal text-paper",
  red: "bg-red text-paper",
  blue: "bg-blue text-paper",
  pink: "bg-pink text-ink",
  green: "bg-green text-paper",
  ink: "bg-[hsl(var(--ink))] text-paper",
};

export const ACCENT_HEX = {
  yellow: "hsl(50 100% 64%)",
  teal: "hsl(173 57% 39%)",
  red: "hsl(13 76% 61%)",
  blue: "hsl(217 100% 61%)",
  pink: "hsl(0 84% 82%)",
  green: "hsl(145 63% 42%)",
  ink: "hsl(0 0% 6%)",
};

// Tabs = the single primary navigation (4 destinations).
export const tabs = [
  { id: "home", label: "Workspace", icon: "✦" },
  { id: "work", label: "Work", icon: "▣" },
  { id: "playground", label: "Playground", icon: "✎" },
  { id: "contact", label: "Contact", icon: "✉" },
];

// Pages panel (left).
export const pages = [
  { id: "home", label: "Home", no: "01", icon: "⌂" },
  { id: "about", label: "About", no: "02", icon: "☻" },
  { id: "work", label: "Work", no: "03", icon: "▣" },
  { id: "process", label: "Process", no: "04", icon: "✦" },
  { id: "playground", label: "Playground", no: "05", icon: "✎" },
  { id: "contact", label: "Contact", no: "06", icon: "✉" },
];

// Layers panel (left).
export const layers = [
  { id: "lyr-hanaa", label: "Hanaa", glyph: "✦", select: "hanaa", accent: "yellow" },
  { id: "lyr-projects", label: "Projects", glyph: "▣", select: "projects", accent: "blue" },
  { id: "lyr-exp", label: "Experiments", glyph: "●", select: "experiments", accent: "red" },
  { id: "lyr-notes", label: "Notes", glyph: "✎", select: "notes", accent: "teal" },
  { id: "lyr-coffee", label: "Coffee", glyph: "☕", select: "coffee", accent: "pink" },
  { id: "lyr-curious", label: "Curiosity", glyph: "♡", select: "curious", accent: "green" },
];

// Floating design tools.
export const tools = [
  { id: "select", icon: "▣", label: "Select", cursor: "SELECT" },
  { id: "frame", icon: "□", label: "Frame", cursor: "FRAME" },
  { id: "pen", icon: "✎", label: "Pen", cursor: "DRAW" },
  { id: "text", icon: "T", label: "Text", cursor: "TEXT" },
  { id: "comment", icon: "❝", label: "Comment", cursor: "NOTE" },
  { id: "hand", icon: "✋", label: "Pan", cursor: "GRAB" },
  { id: "zoom", icon: "⊕", label: "Zoom", cursor: "ZOOM" },
];

export const stickers = [
  { id: "s1", label: "WHAT IF?", accent: "yellow", rot: -6 },
  { id: "s2", label: "PIXEL PERFECT-ish", accent: "blue", rot: 4 },
  { id: "s3", label: "DESIGN MODE", accent: "red", rot: -3 },
  { id: "s4", label: "CURIOUS", accent: "teal", rot: 5 },
  { id: "s5", label: "IN PROGRESS", accent: "pink", rot: -4 },
  { id: "s6", label: "SHIP IT", accent: "green", rot: 3 },
  { id: "s7", label: "COFFEE POWERED", accent: "yellow", rot: 6 },
  { id: "s8", label: "STILL THINKING", accent: "ink", rot: -5 },
];

export const annotations = [
  { id: "a1", text: "this spacing took forever.", x: 8, y: 14 },
  { id: "a2", text: "yes, I actually measured this.", x: 62, y: 8 },
  { id: "a3", text: "future me will understand this.", x: 30, y: 72 },
  { id: "a4", text: "this one survived 14 revisions.", x: 70, y: 64 },
  { id: "a5", text: "good UX hiding in plain sight.", x: 12, y: 48 },
];

// REAL projects — sourced from Behance. No invented metrics/roles.
export const projects = [
  {
    id: "safari",
    title: "Safari",
    subtitle: "Luxury Safari Booking Website",
    slug: "safari.fig",
    year: "2026",
    published: "July 2026",
    category: "Web Design / UI/UX / Product Experience",
    role: "UI/UX · Web Design",
    tools: ["Figma", "Canva"],
    cover:
      "https://mir-s3-cdn-cf.behance.net/projects/404/5bf05a252563661.Y3JvcCw4MDgsNjMyLDAsMA.png",
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0c2fdb252563661.6a52959b43d2a.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0947c0252563661.6a52959b45ca6.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2d4255252563661.6a52959b445d1.png",
    ],
    behanceUrl:
      "https://www.behance.net/gallery/252563661/Safari-Luxury-Safari-Booking-Website",
    description:
      "A customer-facing safari booking experience paired with an admin dashboard for managing trips, bookings, customers and operations.",
    tags: ["Web", "Booking", "Dashboard"],
    accent: "blue",
    appreciations: 35,
    views: 320,
    collaborators: null,
    featured: true,
  },
{
  id: "diasyti",
  label: "DIASYTI",
  title: "DIASYTI",
  subtitle: "The Folk Exchange",
  slug: "diasyti.fig",
  year: "2026",
  published: "April 2026",
  category: "Product Design / UX/UI / Mobile",
  role: "UX/UI Case Study",
  tools: ["Figma"],
  question: "What if market prices were transparent and driven by collective community knowledge?",
  cover: "https://mir-s3-cdn-cf.behance.net/projects/404/515d97248344235.Y3JvcCw4MDgsNjMyLDAsMA.png",
  gallery: [
    "https://mir-s3-cdn-cf.behance.net/bc0b20d286aac8b745c28b7f53f48a68/878b4b2a-8e0e-485f-a446-9270ddcfdafc_rwc_-2x18x3200x373x3200.png?h=7ece85d8c383f9009ad456dd1feffc73",
    "https://mir-s3-cdn-cf.behance.net/bc0b20d286aac8b745c28b7f53f48a68/878b4b2a-8e0e-485f-a446-9270ddcfdafc_rwc_-2x18x3200x373x3200.png?h=7ece85d8c383f9009ad456dd1feffc73",
    "https://mir-s3-cdn-cf.behance.net/bc0b20d286aac8b745c28b7f53f48a68/878b4b2a-8e0e-485f-a446-9270ddcfdafc_rwc_-2x18x3200x373x3200.png?h=7ece85d8c383f9009ad456dd1feffc73",
    "https://mir-s3-cdn-cf.behance.net/bc0b20d286aac8b745c28b7f53f48a68/878b4b2a-8e0e-485f-a446-9270ddcfdafc_rwc_-2x18x3200x373x3200.png?h=7ece85d8c383f9009ad456dd1feffc73"
  ],
  story: [
    { stage: "Research", note: "Studied local purchasing habits inspired by Basant & Diasyti." },
    { stage: "Wireframe", note: "Designed a collective exchange framework to show real-time price insights." },
    { stage: "Polish", note: "Crafted a mobile-first UI tailored for Egyptian markets." },
  ],
  peek: ["Mobile", "Cultural Reference", "Case Study"],
  behanceUrl: "https://www.behance.net/gallery/248344235/DIASYTI-APP-The-Folk-Exchange-(UXUI-Case-Study)",
  tags: ["Mobile", "Cultural", "Case Study"],
  accent: "teal",
  featured: true,
},
  {
    id: "captain-cash",
    title: "Captain Cash",
    subtitle: "The Future of Financial Literacy for Kids",
    slug: "captain-cash.fig",
    year: "2026",
    published: "2026",
    category: "Product Design / UI/UX / Fintech / Gamification",
    role: "UI/UX · Product Design (collaborative)",
    tools: ["Figma", "Canva", "Illustrator", "Photoshop"],
    cover:
      "https://mir-s3-cdn-cf.behance.net/projects/404/de528a253243205.Y3JvcCw4MDgsNjMyLDAsMA.png",
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/73142f253243205.6a650271790ba.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/20f8e9253243205.6a65027179a03.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c94d6c253243205.6a64b4cfe491e.png",
    ],
    behanceUrl:
      "https://www.behance.net/gallery/253243205/Captain-Cash-The-Future-of-Financial-Literacy-for-Kids",
    description:
      "A collaborative project exploring financial education for children through gamification — adventures, interactive challenges, saving, budgeting and responsible spending.",
    tags: ["Fintech", "Gamification", "Kids"],
    accent: "red",
    appreciations: 75,
    views: 497,
    collaborators: "Hanaa Mohammed + team",
    featured: true,
  },
  {
    id: "lamma",
    title: "LAMMA",
    subtitle: "Inspired by El Aroosa Tea",
    slug: "lamma.fig",
    year: "2026",
    published: "July 2026",
    category: "UX/UI / Product Design / Mobile",
    role: "UX/UI · Product Design",
    tools: ["Figma", "Design Thinking"],
    cover:
      "https://mir-s3-cdn-cf.behance.net/projects/404/038632252272755.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/16a5ea252272755.6a4ba970da0fa.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7047c9252272755.6a4ba970dbf6d.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f6f013252272755.6a4ba970da4c6.png",
    ],
    behanceUrl: "https://www.behance.net/gallery/252272755/LAMMA-Inspired-by-El-Aroosa-Tea",
    description:
      "A conceptual UX/UI case study inspired by Egyptian social gatherings, traditional games, cafés, dominoes, backgammon, competitions, memories and the cultural identity of El Aroosa Tea.",
    tags: ["Mobile", "Social", "Cultural"],
    accent: "yellow",
    appreciations: 28,
    views: 269,
    collaborators: null,
    featured: true,
  },
];

export const processSteps = [
  { no: "01", title: "Take it apart", note: "Messy idea in. I pull it to pieces until the actual problem surfaces." },
  { no: "02", title: "Find the click", note: "The tiny thing that makes it work. Everything else orbits it." },
  { no: "03", title: "Frame it", note: "Wireframes as questions, not answers. One screen, one job." },
  { no: "04", title: "Make it move", note: "Prototypes you can poke. Drag, snap, fail cheap." },
  { no: "05", title: "Polish the seams", note: "Spacing, motion, micro-copy \u2014 the parts people feel but don't name." },
  { no: "06", title: "Ship (with the builders)", note: "Front-End background means I hand off things that actually get built." },
];

export const playgroundBits = [
  { id: "p1", title: "Sticky: 'why?'", accent: "yellow", kind: "sticky", body: "Ask 'why?' three times. The third answer is usually the brief." },
  { id: "p2", title: "Token: spacing", accent: "teal", kind: "token", body: "4 \u00b7 8 \u00b7 12 \u00b7 16 \u00b7 24 \u00b7 32 \u00b7 48 \u2014 never 13." },
  { id: "p3", title: "Note to self", accent: "pink", kind: "sticky", body: "If the empty state is the best screen, ship the empty state." },
  { id: "p4", title: "Cursor rule", accent: "blue", kind: "token", body: "Every hover should whisper what happens next." },
  { id: "p5", title: "Motion budget", accent: "red", kind: "token", body: "One big move per screen. The rest is 120ms." },
  { id: "p6", title: "Sticky: 'what if?'", accent: "green", kind: "sticky", body: "The best feature is usually the one we didn't plan." },
];
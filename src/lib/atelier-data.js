export const ACCENTS = {
  yellow: "bg-yellow",
  teal: "bg-teal text-paper",
  red: "bg-red text-paper",
  blue: "bg-blue text-paper",
  pink: "bg-pink",
  green: "bg-green text-paper",
  ink: "bg-[hsl(var(--ink))] text-paper",
};

export const projects = [
  {
    id: "tempo",
    label: "Tempo",
    question: "What if scheduling felt like arranging objects on a desk?",
    year: "2025",
    role: "Product Design · Design System",
    accent: "blue",
    peek: ["3 weeks of paper prototypes", "47 discarded toolbars", "one stubborn drag handle"],
    story: [
      { stage: "Sketch", note: "Twelve pages of scribbles before anything deserved a rectangle." },
      { stage: "Wireframe", note: "The calendar stopped being a grid and became a surface." },
      { stage: "Polish", note: "Drag physics tuned until the snap felt like a light switch." },
    ],
  },
  {
    id: "atlas",
    label: "Atlas",
    question: "What if complex data could be read like a short story?",
    year: "2024",
    role: "UX Architecture · Data Viz",
    accent: "red",
    peek: ["9 stakeholder interviews", "a whiteboard that never recovered", "four honest charts"],
    story: [
      { stage: "Sketch", note: "We drew the questions first. Charts came last, on purpose." },
      { stage: "Wireframe", note: "Every screen answers exactly one question. No more." },
      { stage: "Polish", note: "Numbers animate in at reading speed, not demo speed." },
    ],
  },
  {
    id: "kiln",
    label: "Kiln",
    question: "What if onboarding was a conversation, not a form?",
    year: "2024",
    role: "Interaction Design · Prototyping",
    accent: "yellow",
    peek: ["1 abandoned 6-step wizard", "a paper puppet usability test", "38% fewer drop-offs"],
    story: [
      { stage: "Sketch", note: "Read the form out loud. It sounded rude. So we rewrote it." },
      { stage: "Wireframe", note: "One question per breath. The rest is remembered." },
      { stage: "Polish", note: "Micro-copy carries the load the illustrations used to." },
    ],
  },
  {
    id: "lumen",
    label: "Lumen",
    question: "What if a design system had a sense of humour?",
    year: "2023",
    role: "Design Systems · Docs",
    accent: "teal",
    peek: ["112 components", "one mascot nobody approved", "zero token collisions"],
    story: [
      { stage: "Sketch", note: "Named the tokens after materials, not colours." },
      { stage: "Wireframe", note: "Docs written as advice, not as law." },
      { stage: "Polish", note: "Empty states became the most screenshotted screens." },
    ],
  },
];

export const curios = [
  { id: "cup", glyph: "☕", title: "The 11pm cup", note: "Most decisions get better after the second one. Some get worse.", accent: "red" },
  { id: "camera", glyph: "◉", title: "Viewfinder", note: "Framing is 80% of design. Photography taught me what to leave out.", accent: "blue" },
  { id: "stamp", glyph: "▣", title: "Rubber stamp", note: "If it can be a rule, it should be a component.", accent: "yellow" },
  { id: "crane", glyph: "✦", title: "Paper crane", note: "Folding teaches you that structure is just a sequence of small decisions.", accent: "teal" },
];

export const heroImg = "https://media.base44.com/images/public/6a74e259812493f24dfd3921/20719b9e8_generated_83b309da.png";
export const deconImg = "https://media.base44.com/images/public/6a74e259812493f24dfd3921/68be6707d_generated_11c258d4.png";
export const flatImg = "https://media.base44.com/images/public/6a74e259812493f24dfd3921/7effcf7f0_generated_678f93d0.png";
export const curioImg = "https://media.base44.com/images/public/6a74e259812493f24dfd3921/c68d2f357_generated_a68e088c.png";

export const deskSwatches = [
  { key: "sky", label: "sky", color: "hsl(201 52% 66%)", grid: true },
  { key: "cream", label: "cream", color: "hsl(42 30% 93%)", grid: true },
  { key: "lilac", label: "lilac", color: "hsl(268 45% 82%)", grid: true },
  { key: "mint", label: "mint", color: "hsl(150 48% 80%)", grid: true },
  { key: "ink", label: "night", color: "hsl(240 10% 12%)", grid: true, dark: true },
  { key: "sun", label: "sun", color: "hsl(50 100% 64%)", grid: true },
];
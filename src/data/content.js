// src/data/content.js
// ─────────────────────────────────────────────
// All site content in one place.
// Replace [PLACEHOLDER] values before going live.
// ─────────────────────────────────────────────

export const meta = {
  name: "Dhouha Ben Rhouma",
  title: "Dhouha Ben Rhouma — Business & Tech Problem Solver",
  description:
    "IT student at ISGT Tunis bridging business and technology. Available for internships in business analysis, ERP consulting, and IT project roles. Also offering digital marketing and creative freelance services.",
  email: "dhouha.pro@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhouha-ben-rhouma/",
  github: "https://github.com/dhouha-ben-rhouma",
  cvFile: "assets/cv/[PLACEHOLDER-cv-filename].pdf", // e.g. dhouha-cv.pdf
  ogUrl: "[PLACEHOLDER: your deployed URL]",
  availableFrom: "[PLACEHOLDER: e.g. June 2027]",
  formspreeId: "[PLACEHOLDER-FORMSPREE-ID]", // sign up at formspree.io
};

export const projects = [
  {
    id: "llm",
    problem: "[PLACEHOLDER — 1 sentence: what problem does this LLM project address?]",
    title: "University LLM Project",
    description:
      "[PLACEHOLDER — 2–3 sentences. What does it do, what problem does it solve, what did you learn?] Team of [N]. My role: [PLACEHOLDER — your specific contribution].",
    tags: [
      { label: "Python", type: "dev" },
      { label: "LLM", type: "dev" },
      { label: "Research", type: "biz" },
    ],
    badge: "In development",
    image: null, // set to "assets/images/proj-llm.png" when ready
    imageAlt: "Screenshot of the LLM project interface",
    link: null, // set to repo URL when ready
  },
  {
    id: "hackathon",
    problem: "Agricultural landowners struggle to find seasonal workers for tree harvesting.",
    title: "Uber-Ceuillet — Hackathon Project",
    description:
      "A platform that connects field owners who need help with seasonal tree harvesting to available workers — giving both sides a reliable, transparent match. Conceived, designed, and prototyped during a hackathon. My role: [PLACEHOLDER — your role in the team].",
    tags: [
      { label: "Business model", type: "biz" },
      { label: "Figma", type: "design" },
      { label: "Hackathon", type: "biz" },
    ],
    image: null, // "assets/images/proj-hackathon.png"
    imageAlt: "Uber-Ceuillet app screens",
    link: null, // Figma or pitch link
  },
  {
    id: "website",
    problem: "[PLACEHOLDER — what need did this website address?]",
    title: "[PLACEHOLDER: Website project name]",
    description:
      "[PLACEHOLDER — 2–3 sentences describing the website, what it does, and your role.] University assignment. My role: full-stack development.",
    tags: [
      { label: "HTML / CSS / JS", type: "dev" },
      { label: "Node", type: "dev" },
      { label: "React", type: "dev" },
    ],
    image: null, // "assets/images/proj-website.png"
    imageAlt: "Screenshot of the university website project",
    link: null,
  },
];

export const experience = [
  {
    id: "joossoor",
    role: "Full Stuck Development Intern",
    org: "Joossoor Holding Group",
    date: "2026 · 5 weeks",
    type: "Internship",
    description:
      "Built and maintained web pages during a 5-week internship, applying front-end skills in a real business environment. Learned to work within a company's digital workflow and communicate deliverables to non-technical stakeholders.",
    tags: [
      { label: "HTML / CSS / JS", type: "dev" },
      { label: "WordPress", type: "dev" },
      { label: "Client communication", type: "biz" },
    ],
  },
  {
    id: "aiesec",
    role: "AIESEC Volunteer",
    org: "AIESEC — Turkey",
    date: "2025 · 6 weeks",
    type: "Volunteer",
    description:
      "6-week cross-cultural volunteer internship, working in a diverse international team. Strengthened adaptability, communication across language barriers, and the ability to collaborate toward a shared goal in an unfamiliar environment.",
    tags: [
      { label: "Cross-cultural teamwork", type: "biz" },
      { label: "Communication", type: "biz" },
      { label: "International", type: "mint" },
    ],
  },
  {
    id: "clubs",
    role: "Active Club Member",
    org: "ISG Digital Club & SecuriNets — ISGT",
    date: "2025–2026",
    type: "Club",
    description:
      "Member of two student clubs: ISG Digital (digital projects and events) and SecuriNets (cybersecurity awareness). Participated in club activities, workshops, and events.",
    tags: [
      { label: "Events", type: "biz" },
      { label: "Digital", type: "dev" },
      { label: "Cybersecurity awareness", type: "dev" },
    ],
  },
];

export const events = [
  {
    id: "e1",
    year: "[PLACEHOLDER: Year]",
    title: "[PLACEHOLDER: Hackathon or event name]",
    description: "[PLACEHOLDER: 1–2 sentences — what you built, your role, outcome or lesson learned.]",
    tags: [{ label: "Hackathon", type: "biz" }, { label: "[PLACEHOLDER: tech used]", type: "dev" }],
  },
  {
    id: "e2",
    year: "[PLACEHOLDER: Year]",
    title: "[PLACEHOLDER: Hackathon or event name]",
    description: "[PLACEHOLDER: 1–2 sentences — what you built, your role, outcome or lesson learned.]",
    tags: [{ label: "Hackathon", type: "biz" }],
  },
  {
    id: "e3",
    year: "[PLACEHOLDER: Year]",
    title: "[PLACEHOLDER: Event name — conference, workshop, etc.]",
    description: "[PLACEHOLDER: 1–2 sentences about what this event was and what you took away.]",
    tags: [{ label: "Event", type: "biz" }],
  },
  {
    id: "e4",
    year: "[PLACEHOLDER: Year]",
    title: "[PLACEHOLDER: Hackathon or event name]",
    description: "[PLACEHOLDER: Fill in.]",
    tags: [{ label: "Hackathon", type: "biz" }],
  },
];

export const skillGroups = [
  {
    label: "Development",
    color: "dev",
    pills: ["Python", "FastAPI", "JavaScript", "React", "Node.js", "HTML / CSS", "Tailwind", "Bootstrap", "WordPress", "C / C++", "Java"],
  },
  {
    label: "Business & Systems",
    color: "biz",
    pills: ["Business Analysis", "ERP (interest)", "Process Mapping", "Digital Transformation", "Project Support", "Requirements Gathering"],
  },
  {
    label: "Design & Creative",
    color: "design",
    pills: ["Canva (advanced)", "CapCut", "Premiere Pro (basics)", "UI mockups", "Figma"],
  },
  {
    label: "Soft Skills",
    color: "soft",
    pills: ["Public speaking", "Fast learner", "Cross-cultural teamwork", "Communication", "Adaptability"],
  },
];

export const howSteps = [
  {
    num: "01",
    title: "Understand the need",
    desc: "I start by listening — asking questions about the actual problem before touching any tool or technology. The brief is never the full picture.",
  },
  {
    num: "02",
    title: "Propose a solution",
    desc: "I map out an approach that fits the context: the right tool for the right problem, scoped to what's actually achievable. No overengineering.",
  },
  {
    num: "03",
    title: "Build it",
    desc: "I execute — writing code, designing flows, or creating content — keeping the original goal in mind and adapting when reality pushes back.",
  },
  {
    num: "04",
    title: "Present it",
    desc: "I communicate the result clearly, to technical and non-technical audiences alike. A solution that can't be explained is half a solution.",
  },
];

export const galleryItems = [
  { id: "g1", src: "assets/images/creative/[PLACEHOLDER-image-1].jpg", alt: "Social media post design", large: true },
  { id: "g2", src: "assets/images/creative/[PLACEHOLDER-image-2].jpg", alt: "Brand graphic example" },
  { id: "g3", src: "assets/images/creative/[PLACEHOLDER-image-3].jpg", alt: "Short-form video thumbnail" },
  { id: "g4", src: "assets/images/creative/[PLACEHOLDER-image-4].jpg", alt: "Canva design example" },
  { id: "g5", src: "assets/images/creative/[PLACEHOLDER-image-5].jpg", alt: "Creative work sample" },
  { id: "g6", src: "assets/images/creative/[PLACEHOLDER-image-6].jpg", alt: "Creative work sample 2" },
];

export const services = [
  {
    icon: "🎨",
    title: "Social-media content design",
    desc: "Posts, stories, and visual assets designed in Canva that fit your brand and are built to stop the scroll. From a one-off campaign to an ongoing content pack.",
  },
  {
    icon: "🎬",
    title: "Short-form video editing",
    desc: "Reels, TikToks, and YouTube Shorts edited with CapCut or Premiere Pro — captions, pacing, and transitions included. Quick turnaround for creators and small businesses.",
  },
  {
    icon: "✏️",
    title: "Brand & Canva graphics",
    desc: "Logos, presentations, flyers, and brand kits that give your business a consistent visual identity — delivered in editable Canva or export-ready formats.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit text below and the site updates. Search for "TODO" to find placeholders.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Alexander Villagomez",
  firstName: "Alexander",
  handle: "alexander",
  tagline: "I build AI systems that take the busywork off people's plates.",
  subtitle:
    "Computer Science (B.S.E.) junior at the University of Michigan working where AI, accessibility, and real-world workflows meet.",
  status: "Open to SWE internships",
  location: "Ann Arbor, MI",
  graduation: "May 2028",
  resume: "/resume.pdf",
};

export const links = {
  email: "vailla@umich.edu",
  github: "https://github.com/vaillax",
  linkedin: "https://www.linkedin.com/in/alexander-villagomez",
};

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm a junior at the University of Michigan studying Computer Science (B.S.E.). I like building technology that makes systems more accessible, efficient, and human-centered.",
  ],
  education: {
    school: "University of Michigan, College of Engineering",
    degree: "Computer Science (B.S.E.)",
    dates: "Aug 2024 – May 2028",
    coursework: [
      "EECS 280 · Programming & Data Structures",
      "EECS 203 · Discrete Mathematics",
      "EECS 245 · Math for Machine Learning",
      "EECS 201 · CS Pragmatics",
      "STATS 250 · Statistics & Data Analysis",
      "ENTR 475/485 · Mcity TechLab",
    ],
  },
  skills: [
    { group: "Languages", items: ["C++", "Python", "JavaScript", "HTML/CSS", "R", "Lua"] },
    { group: "Tools", items: ["n8n", "Maizey", "GitHub", "Roblox Studio", "AWS Cloud9", "Xcode", "Replit"] },
  ],
  honors: [
    "Hispanic Scholarship Fund Scholar (2026), 1 of 10,000 from 56,000+ applicants",
    "Honorable Mention, George M. Landes Prize for Technical Communication",
    "Detroit Promise Scholar · Global Scholars Program · MRADS",
  ],
};

export type Job = {
  company: string;
  role: string;
  location: string;
  dates: string;
  highlight?: boolean;
  /** Slug of a project card (see `projects`) that covers this role in detail. */
  project?: string;
  tags?: string[];
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "TrubAI",
    role: "Intern · Behavioral Ontology",
    location: "Ann Arbor, MI",
    dates: "Jan 2026 – Dec 2026",
    highlight: true,
    tags: ["Ontology", "Knowledge Representation", "SLM"],
    project: "trubai-ontology",
    bullets: [
      "Built the foundational ontology for the behavioral decision-making layer of TrubAI's small language model.",
      "Designed taxonomies and structured logic that model how people make choices in urban systems, why they behave the way they do, and which interventions change outcomes.",
    ],
  },
  {
    company: "Ross School of Business",
    role: "Development Summer Intern (D-SIP)",
    location: "Ann Arbor, MI",
    dates: "May 2026 – Aug 2026",
    highlight: true,
    tags: ["n8n", "Maizey", "AI Agents"],
    project: "ross-ai-agent",
    bullets: [
      "Designed and built an AI administrative agent from autonomous n8n workflows and Maizey.",
      "Cut the time gift officers spent on admin and prep work by 20% once they adopted the workflows.",
    ],
  },
  {
    company: "Joy of Coding, University of Michigan",
    role: "Coach",
    location: "Ann Arbor, MI",
    dates: "May 2026 – Aug 2026",
    tags: ["Python", "C++", "Teaching"],
    bullets: [
      "Coached high school students in Python and C++ through 1-on-1 sessions.",
      "Graded assignments for a program in which 700+ students completed the course.",
    ],
  },
  {
    company: "Center for Research on Learning and Teaching",
    role: "Student Assistant, Comms & Tech Support",
    location: "Remote",
    dates: "Jan 2026 – Aug 2026",
    tags: ["WCAG", "ADA", "QA"],
    bullets: [
      "Remediated university documents and digital resources for ADA compliance.",
      "Audited the CRLT website and course offerings against WCAG-aligned practices and did QA across web content.",
    ],
  },
  {
    company: "Foley & Lardner LLP",
    role: "Summer Legal Intern",
    location: "Detroit, MI",
    dates: "Jun 2025 – Aug 2025",
    tags: ["Research", "Writing"],
    bullets: [
      "Prepared 5+ memos that attorneys used to evaluate compliance risk in corporate transactions and active litigation.",
      "Worked with corporate, litigation, and IP teams to document deal structures and legal strategy.",
    ],
  },
];

export type Project = {
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  /** Anchor id for the card, so an Experience entry can link to it. */
  slug?: string;
  /**
   * Path under /public to a 1200×675 .webp, e.g. "/projects/jarvis.webp". A 640px-wide copy
   * named "jarvis-640.webp" must sit beside it. Leave null for a styled placeholder.
   */
  image: string | null;
  /** Describes what the screenshot shows, for screen readers. */
  imageAlt?: string;
  links?: { label: string; href: string }[];
  featured?: boolean;
  /** Set true to keep the project in this file but not show it on the site. */
  hidden?: boolean;
};

export const projects: Project[] = [
  {
    title: "Roblox at UM Club Website",
    kicker: "Roblox at UM · 2026",
    description:
      "The club's site for events, RSVPs, and QR-code attendance check-in, built to replace a Google Form. I made the product, architecture, and security decisions and built it with AI coding tools: umich-only Google sign-in, Postgres row-level security, and 400+ automated tests in CI.",
    tags: ["Next.js 16", "Supabase", "Vercel", "PWA / Web Push", "Playwright", "GitHub Actions"],
    slug: "roblox-at-um",
    image: "/projects/roblox-at-um.webp",
    imageAlt:
      "Home page of the Roblox at UM club website, with Join the club and View Events buttons above an Upcoming Events list.",
    links: [{ label: "Live site", href: "https://robloxatum.vercel.app" }],
    featured: true,
  },
  {
    title: "AI Admin Agent for Gift Officers",
    kicker: "Ross School of Business · 2026",
    description:
      "An autonomous agent built from n8n workflows and Maizey, U-M's AI platform. Gift officers hand it the prep work: it drafts contact reports, event briefs, donor follow-up emails, and research briefs from public and institutional data. After adoption it cut their admin time by 20%.",
    tags: ["n8n", "Maizey", "LLM workflows", "Automation"],
    slug: "ross-ai-agent",
    image: "/projects/ross-ai-agent.webp",
    imageAlt:
      "n8n workflow canvas: a Switch node routes each request to a Research, Interactions, Event Brief or Follow-up model, which then creates documents and sends email.",
    featured: true,
  },
  {
    title: "Behavioral Ontology for an SLM",
    kicker: "TrubAI · 2026",
    description:
      "The knowledge layer behind TrubAI's small language model. It's a structured ontology and set of taxonomies that encode how people make decisions in urban systems, why they act the way they do, and which interventions are likely to change outcomes. It turns behavioral-science research into semantic relationships the model can reason over.",
    tags: ["Ontology engineering", "Knowledge graphs", "Behavioral science"],
    slug: "trubai-ontology",
    image: "/projects/trubai-ontology.webp",
    imageAlt:
      "TrubAI web app screen titled Locate the issue: an address form and analysis-area controls beside a street map of Detroit.",
    featured: true,
  },
  {
    title: "Roblox Game Development",
    hidden: true, // TODO: remove once filled in
    kicker: "Roblox Studio · Lua",
    // TODO: not on resume. Describe the game(s): genre, systems you built, players/visits.
    description:
      "Games and prototypes built in Roblox Studio with Lua scripting. TODO: add what you built, the systems you're proudest of, and any player or visit numbers.",
    tags: ["Lua", "Roblox Studio", "Game design"],
    image: null, // TODO: e.g. "/projects/roblox-game.png"
    links: [{ label: "Play", href: "#" }], // TODO: link to game page or remove
    featured: true,
  },
  {
    title: "JARVIS Voice Assistant",
    hidden: true, // TODO: remove once filled in
    kicker: "Personal project",
    // TODO: not on resume. Describe the stack (speech-to-text, LLM, TTS) and what it can do.
    description:
      "A personal voice assistant inspired by JARVIS. TODO: describe the pipeline (wake word → speech-to-text → LLM → actions/TTS), the stack, and what it can do.",
    tags: ["Python", "Voice", "AI"], // TODO: confirm stack
    image: null, // TODO: e.g. "/projects/jarvis.png"
    links: [{ label: "Code", href: "#" }], // TODO: GitHub repo or remove
    featured: true,
  },
  {
    title: "Out in STEM Resource Hub",
    kicker: "Web · Accessibility",
    description:
      "A WCAG-aligned resource site for 300+ students. Its categorized navigation and banner-based routing cut the time to find key resources by 30% and raised resource page visits by 45%.",
    tags: ["HTML", "CSS", "JavaScript", "WCAG"],
    image: null,
    links: [{ label: "Code", href: "https://github.com/vaillax/ostem-resourcehub" }],
  },
  {
    title: "A2RL Autonomous Racing",
    kicker: "Prediction Lead · Abu Dhabi",
    description:
      "Python prediction and response logic for a mini autonomous race car. Raced on the real A2RL track in Abu Dhabi against international high school and college teams.",
    tags: ["Python", "AWS Cloud9", "Autonomy"],
    image: null,
  },
  {
    title: "SeaScope Underwater ROV",
    kicker: "ENGR 100",
    description:
      "Designed 4 3D prototypes of an inspection ROV rated to 60 m and helped improve propulsion efficiency by 20%. The team won an Honorable Mention for the Landes Prize.",
    tags: ["3D design", "Testing", "Tech writing"],
    image: null,
  },
  {
    title: "Global EV Strategies Research",
    kicker: "UROP · 2024 – 2025",
    description:
      "Built a database of 100+ policy cases across 15+ countries. Found that long-term incentives beat short-term mandates for EV adoption. Presented at the 2025 UROP Symposium.",
    tags: ["R", "Data analysis", "Research"],
    image: null,
  },
];

export const leadership = {
  feature: {
    org: "Roblox at UM",
    role: "Cofounder & VP of Strategy",
    dates: "Oct 2025 – Present",
    description:
      "Cofounded U-M's Roblox club with three other students, then built it into an active community of student game developers.",
    stats: [
      { value: "100+", label: "members in first 3 weeks" },
      { value: "24h", label: "Game Jam with Roblox" },
      { value: "4,100+", label: "Instagram followers" },
      { value: "3×", label: "event attendance" },
    ],
    bullets: [
      "Organized and led a 24-hour Game Jam with Roblox: 22 participants shipped 6 original prototypes, and I mentored teams on Roblox Studio, Lua, and rapid prototyping.",
      "Hosted 15+ events and run the club's communications with Roblox.",
    ],
  },
  roles: [
    {
      org: "The Detroit Promise",
      role: "Ambassador",
      dates: "Aug 2025 – Present",
      text: "Guided 65+ Detroit students through FAFSA and college applications, contributing to a 28% rise in FAFSA submissions.",
    },
    {
      org: "Out in STEM (oSTEM)",
      role: "Chair",
      dates: "2025 – 2026",
      text: "Led the chapter and launched the oSTEM Resource Hub to connect students with opportunities across campus.",
    },
    {
      org: "GEAR UP",
      role: "Guide",
      dates: "Oct 2025 – Present",
      text: "Lead college-readiness, interview, and resume sessions at Metro Detroit high schools.",
    },
    {
      org: "OAMI",
      role: "Detroit Promise Leader",
      dates: "Jan 2026 – Present",
      text: "Plan, host, and emcee events for Detroit Promise students, and design the event graphics.",
    },
    {
      org: "North Quad Hall Council",
      role: "President",
      dates: "2025 – 2026",
      text: "Ran resident events and secured extra funding for the end-of-year celebration.",
    },
    {
      org: "Global Scholars · Inkululeko",
      role: "Scholar & Volunteer",
      dates: "2025 – 2026",
      text: "Wrote the South African NGO's annual report and raised $500+ through outreach and grants.",
    },
  ],
  mentorship: ["MentorSHPE (SHPE)", "CoE Peer Mentor", "MRADS First-Gen Affinity Leader", "NAB Tech Apprentice"],
};

export const contact = {
  heading: "Let's build something.",
  text: "I'm looking for software engineering internships. If you're working on AI, accessibility, or developer tools, I'd love to talk.",
};

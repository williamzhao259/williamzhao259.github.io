// Single source of truth for portfolio content. Edit here, not in the components.

export const site = {
  name: "William Zhao",
  role: "Founder, Product",
  email: "williamzhao474@gmail.com",
  location: "San Francisco, CA",
};

export type SkillGroup = {
  label: string;
  items: string;
};

export const skills: SkillGroup[] = [
  {
    label: "Product",
    items:
      "User research, roadmapping, prioritization, A/B testing, funnel and retention analysis, monetization design, data-informed decision making",
  },
  {
    label: "Technical",
    items:
      "Python, JavaScript/TypeScript, React, React Native, Django, PostgreSQL, OpenAI API & embeddings",
  },
  {
    label: "Tools",
    items:
      "PostHog, Microsoft Clarity, Stripe, Linear, Notion, Figma, Google Search Console",
  },
];

export type ExperienceItem = {
  year: string;
  org: string;
  href?: string;
  role: string;
};

export const experience: ExperienceItem[] = [
  { year: "Now", org: "UC Santa Cruz", role: "B.A. Computer Science · expected Dec 2027" },
  { year: "2024 — 2025", org: "CareerLoop", role: "Founder, Product · 145k users" },
  {
    year: "2023 — 2024",
    org: "The Humanities Institute, UCSC",
    role: "Research Assistant",
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  status: string;
  aspect: string;
  accent: string;
  image?: string;
  metrics?: { value: string; label: string }[];
  sections?: {
    heading: string;
    body: string;
    image?: { src: string; alt: string; caption?: string; width: number; height: number };
  }[];
  press?: { outlet: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "careerloop",
    title: "An AI resume builder that reached 145,000 users",
    subtitle: "CareerLoop",
    status: "",
    aspect: "aspect-[16/9]",
    accent: "rgba(37, 99, 235, 0.10)",
    image: "/projects/careerloop/careerloop.png",
    metrics: [
      { value: "145k", label: "users" },
      { value: "100M", label: "views" },
      { value: "$50k", label: "revenue in 6 months" },
      { value: "4%", label: "D1 retention" },
      { value: "3.31%", label: "free to paid" },
    ],
    sections: [
      {
        heading: "What it was",
        body: "An AI resume builder. Pick the roles that match your skills, then build a resume targeted to that path instead of sending the same one everywhere.",
      },
      {
        heading: "How it grew",
        body: "Social, no ad spend. ~100M views across platforms brought in 145,000 users.",
        image: {
          src: "/projects/careerloop/tiktok-analytics.png",
          alt: "TikTok analytics showing 63M video views, 1.6M likes, and 207K shares over one year",
          caption: "TikTok alone: 63M views, 1.6M likes, 207K shares (Oct 2024 – Oct 2025)",
          width: 2256,
          height: 652,
        },
      },
      {
        heading: "What worked",
        body: "I cut onboarding from seven steps to three. 96% of signups finished it and built a resume, and 3.31% of them paid — $50k over six months.",
      },
      {
        heading: "What I shipped",
        body: "Resume upload, bullet generation, and full rewrites, plus role matching against scraped job listings.",
      },
      {
        heading: "What I killed",
        body: "An AI career copilot, before launch. The agent was inconsistent, and the interface required teaching users a new interaction model — something the core flow never asked of them.",
      },
      {
        heading: "Pricing",
        body: "Subscription churn hit 47%, so I tested three models against it: a carded free trial, a $1.99 tripwire, and one-time pricing. Users bought more $9.99 single downloads than $19.99 unlimited — they underestimated their own usage. I shipped the model that matched the behavior I could observe, not the one with the better theoretical LTV.",
      },
      {
        heading: "What didn't",
        body: "4% D1 retention. I read it as a product-market problem rather than a funnel problem: you build a resume once and you're done — there was no reason to come back.",
      },
      {
        heading: "How it ended",
        body: "It was still earning when a YC company reached out and I took the role. With 4% D1, I didn't come back to it.",
      },
      {
        heading: "What I'd do differently",
        body: "Pick a product people need more than once. Job searching is recurring; a resume builder isn't.",
      },
    ],
    press: [
      {
        outlet: "UC Tech News",
        href: "https://uctechnews.ucop.edu/uc-santa-cruz-student-builds-free-resume-tool/",
      },
      {
        outlet: "Lookout Santa Cruz",
        href: "https://lookout.co/how-a-ucsc-student-built-website-helps-undergrads-go-from-career-questions-to-options/story",
      },
      {
        outlet: "Santa Cruz Works",
        href: "https://www.santacruzworks.org/news/careerloop",
      },
    ],
  },
  {
    slug: "translation-pipeline",
    title: "A translation pipeline humanities researchers could run themselves",
    subtitle: "The Humanities Institute, UCSC",
    status: "",
    aspect: "aspect-[16/9]",
    accent: "rgba(22, 163, 74, 0.10)",
    sections: [
      {
        heading: "What it was",
        body: "A pipeline that ingested large PDF corpora and ran them through OpenAI and other models. The faculty lead passed its output to graduate researchers, who evaluated translation quality against the source texts.",
      },
      {
        heading: "The call I made",
        body: "I shipped it as a web app rather than internal tooling. The researchers were humanities faculty, not engineers — internal tooling would have meant they filed requests and waited on me. A web app meant they ran translations themselves without touching a script. Python, Flask, deployed on Heroku.",
      },
      {
        heading: "What the role actually was",
        body: "Translating the faculty lead's research goals into buildable requirements, and scoping what was technically feasible against what they wanted. Five-person research assistant team split across engineering and UI/UX.",
      },
    ],
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/williamzhao7140" },
];

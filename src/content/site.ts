// Single source of truth for portfolio content. Edit here, not in the components.

export const site = {
  name: "William Zhao",
  role: "Product Builder",
  email: "williamzhao474@gmail.com",
};

export type ExperienceItem = {
  year: string;
  org: string;
  href?: string;
  role: string;
};

export const experience: ExperienceItem[] = [
  { year: "Now", org: "Looking", role: "Product roles in SF" },
  { year: "2026", org: "Muochi", role: "Founder · 115k users" },
  { year: "2025", org: "Floot (YC S25)", role: "Founding Growth" },
  { year: "2024", org: "CareerLoop", role: "Founder · 30k users" },
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
    slug: "muochi",
    title: "115,000 users, and what killed it",
    subtitle: "Muochi",
    status: "",
    aspect: "aspect-[16/9]",
    accent: "rgba(220, 38, 38, 0.10)",
    image: "/projects/muochi/muochi.png",
    metrics: [
      { value: "115k", label: "users" },
      { value: "3M", label: "views" },
      { value: "$25k", label: "revenue" },
      { value: "11%", label: "D1 retention" },
    ],
    sections: [
      {
        heading: "What it was",
        body: "Interactive slides repurposed for gifting. You build something for one person, send it, they open it.",
      },
      {
        heading: "Why I built it",
        body: "CareerLoop died because you only need a resume once. Gifting looked recurring — birthdays, holidays, anniversaries — and it was far more viral.",
      },
      {
        heading: "How it grew",
        body: "Valentine's Day. TikTok does over 100 billion views on that search alone, so the attention was already there — I just had to be in front of it.",
      },
      {
        heading: "What happened",
        body: "Users and revenue spiked together in February, then decayed. $25k total, almost all of it in that window.",
      },
      {
        heading: "Why it died",
        body: "11% D1 retention. Better than CareerLoop's 4%, still not a business. Gifting is occasion-bound, the free template was good enough for most people, and a $1.99 one-time fee meant each user was worth $1.99 exactly once.",
      },
      {
        heading: "What I'd do differently",
        body: "Virality isn't a business without retention. I'd take a smaller product people open weekly over a spike I have to re-earn every February.",
      },
    ],
  },
  {
    slug: "careerloop",
    title: "An AI resume builder that reached 30,000 users",
    subtitle: "CareerLoop",
    status: "",
    aspect: "aspect-[16/9]",
    accent: "rgba(37, 99, 235, 0.10)",
    image: "/projects/careerloop/careerloop.png",
    metrics: [
      { value: "30k", label: "users" },
      { value: "100M", label: "views" },
      { value: "$30k", label: "revenue in 6 months" },
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
        body: "Social, no ad spend. ~100M views across platforms brought in 30,000 users.",
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
        body: "96% of signups finished onboarding and built a resume, and 3.31% of them paid — $30k over six months.",
      },
      {
        heading: "What didn't",
        body: "4% D1 retention. You build a resume once and you're done — there was no reason to come back.",
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
];

export const socials = [
  { label: "GitHub", href: "https://github.com/williamzhao7140" },
];

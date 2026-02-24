import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  intro: {
    name: "Rohan Kumar",
    headline: "Software Engineer building reliable web products",
    summary:
      "I build performant web experiences with modern TypeScript stacks, focusing on clean architecture, accessibility, and measurable product outcomes.",
    location: "United States",
    ctas: [
      { label: "View Resume", href: "/resume.pdf", external: true },
      { label: "Contact", href: "#contact" },
    ],
  },
  experience: [
    {
      id: "exp-1",
      company: "Company Name",
      role: "Software Engineer",
      start: "2024",
      end: "Present",
      location: "Remote",
      highlights: [
        "Shipped core platform features that improved release speed and system stability.",
        "Collaborated across product and design to deliver high-impact user-facing workflows.",
        "Introduced typed component patterns that improved maintainability across the codebase.",
      ],
      tech: ["TypeScript", "Next.js", "React", "Node.js"],
    },
    {
      id: "exp-2",
      company: "Previous Company",
      role: "Frontend Developer",
      start: "2022",
      end: "2024",
      location: "United States",
      highlights: [
        "Built responsive interfaces across multiple product surfaces with accessibility-first standards.",
        "Reduced UI regressions by improving component reuse and review workflows.",
        "Partnered with backend teams to define contract-driven APIs for faster delivery.",
      ],
      tech: ["JavaScript", "React", "CSS", "REST APIs"],
    },
    {
      id: "exp-3",
      company: "Earlier Team",
      role: "Software Engineering Intern",
      start: "2021",
      end: "2022",
      location: "On-site",
      highlights: [
        "Built internal tools to automate repetitive engineering tasks.",
        "Contributed bug fixes and incremental product improvements across active projects.",
        "Documented implementation patterns for faster onboarding.",
      ],
      tech: ["Python", "TypeScript", "SQL"],
    },
  ],
  skills: {
    title: "Core Skills",
    items: [
      { name: "Frontend Architecture", level: "Advanced" },
      { name: "API Integration", level: "Advanced" },
      { name: "System Design", level: "Intermediate" },
      { name: "Performance Optimization", level: "Advanced" },
      { name: "Testing & QA", level: "Intermediate" },
      { name: "Accessibility", level: "Advanced" },
    ],
  },
  languages: {
    title: "Coding Languages",
    items: [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "HTML/CSS", level: "Advanced" },
    ],
  },
  projects: [
    {
      id: "project-1",
      name: "Portfolio Platform",
      description:
        "Built a modern single-page portfolio using Next.js and TypeScript with reusable components and structured content.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
    },
    {
      id: "project-2",
      name: "Workflow Dashboard",
      description:
        "Created an internal dashboard that centralized key metrics and reduced decision time for product teams.",
      stack: ["React", "TypeScript", "Node.js"],
      repoUrl: "#",
    },
    {
      id: "project-3",
      name: "Automation Toolkit",
      description:
        "Implemented scripts and tools for repetitive engineering tasks, improving day-to-day developer productivity.",
      stack: ["Python", "CLI", "GitHub Actions"],
      repoUrl: "#",
    },
  ],
  contact: {
    email: "rohan@example.com",
    github: "https://github.com/rohankumar",
    linkedin: "https://www.linkedin.com/in/rohankumar/",
  },
};

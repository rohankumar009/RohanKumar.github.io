export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "Project Manager - Aerodynamics & Aviation Engagement Program",
    organization: "Air Care Alliance",
    period: "Sep 2025 - Dec 2025",
    description:
      "Directed a multi-stakeholder initiative coordinating logistics for a 200+ engineering competition. Managed full project lifecycle including risk mitigation, scheduling, budgeting, vendor alignment, marketing, and execution. Integrated cross-functional deliverables into a unified event plan. Delivered post-event analysis and reporting to stakeholders."
  },
  {
    title: "Computer Science Teaching Assistant",
    organization: "University of Minnesota",
    period: "Aug 2023 - Jun 2025",
    description:
      "Led weekly lab sessions for 200+ students in Java across Software Design, Data Structures, and Data Processing. Built automated grading tools, refined rubrics, reduced repetitive regrade requests, graded projects, and conducted review sessions and code troubleshooting in office hours."
  },
  {
    title: "Bioproducts & Biosystems Engineering Teaching Assistant",
    organization: "University of Minnesota",
    period: "Aug 2023 - Jun 2025",
    description:
      "Co-authored assignments and solution sets to clarify expectations and reduce confusion. Delivered weekly written feedback to 250+ students. Improved turnaround efficiency and instructional clarity."
  },
  {
    title: "Data Analyst Intern",
    organization: "University of Minnesota Undergraduate Office of Admissions",
    period: "May 2022 - Aug 2022",
    description:
      "Standardized a backlog of 200,000+ student records using Pandas and NumPy, improving data accuracy by 90%. Built Power BI dashboards analyzing applicant demographics, funnel metrics, and year-to-year variance. Presented insights weekly in Agile Scrum teams."
  }
];

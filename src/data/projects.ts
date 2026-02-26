export type ProjectItem = {
  name: string;
  stack: string;
  period: string;
  description: string;
  featured?: boolean;
};

export const projects: ProjectItem[] = [
  {
    name: "EPL Predictor",
    stack: "Python, Pandas, Scikit-learn, Matplotlib",
    period: "Jun 2024 - Aug 2024",
    description:
      "Built a machine learning pipeline predicting EPL match outcomes with 67.5% accuracy. Implemented preprocessing, feature engineering, Random Forest modeling, cross-validation, and hyperparameter tuning.",
    featured: true
  },
  {
    name: "Gopher Walk",
    stack: "Figma, Docker, GitHub, HTML, CSS",
    period: "Jan 2024 - May 2024",
    description:
      "Designed and developed a mapping app improving campus navigation for 35,000+ users. Conducted surveys and interviews using Google Forms and Qualtrics. Integrated user feedback via Agile iteration and used Docker for deployment."
  },
  {
    name: "Minerva",
    stack: "Google Maps API, JavaScript, Node.js, Express.js, MongoDB, Docker",
    period: "Jan 2023",
    description:
      "Led a team of 3 building a full-stack application as Product Manager and Front-End Developer. Defined product requirements, managed timeline, coordinated testing, and implemented MongoDB personalization features."
  }
];

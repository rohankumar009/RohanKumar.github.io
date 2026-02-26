export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "R", "Java", "HTML/CSS", "JavaScript", "C", "C++", "TypeScript", "SQL"]
  },
  {
    category: "Frameworks & ML",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Seaborn",
      "Predictive Modeling",
      "JUnit",
      "JavaFX",
      "PyTorch",
      "Pygame"
    ]
  },
  {
    category: "Data & Tools",
    skills: ["Git", "GitHub", "Docker", "Jira", "Agile", "Scrum", "MongoDB", "Unix/Linux", "macOS", "Windows"]
  },
  {
    category: "Design & Analytics",
    skills: ["Figma", "Power BI", "Qualtrics", "Excel", "MS Office", "Notion"]
  }
];

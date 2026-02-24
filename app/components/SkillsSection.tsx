import type { SkillGroup } from "@/types/portfolio";

interface SkillsSectionProps {
  skills: SkillGroup;
  languages: SkillGroup;
}

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <article className="panel">
      <h3 className="panel-title">{group.title}</h3>
      <ul className="skill-list">
        {group.items.map((item) => (
          <li key={item.name} className="skill-chip">
            <span>{item.name}</span>
            {item.level ? <small>{item.level}</small> : null}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function SkillsSection({ skills, languages }: SkillsSectionProps) {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">
        Skills & Languages
      </h2>
      <p className="section-subtitle">
        Core strengths and coding languages I use to ship production-ready products.
      </p>
      <div className="two-col-grid">
        <SkillCard group={skills} />
        <SkillCard group={languages} />
      </div>
    </section>
  );
}

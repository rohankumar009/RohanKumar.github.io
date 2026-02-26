import { Section } from "@/components/section";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl dark:text-neutral-100">Skills</h2>
      <div className="mt-10 space-y-8">
        {skillCategories.map((group) => (
          <div key={group.category}>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">{group.category}</h3>
            <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-black/20 dark:border-white/10 dark:bg-neutral-900 dark:hover:border-white/20"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-neutral-200 text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {skill.charAt(0)}
                  </span>
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

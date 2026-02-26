import { Section } from "@/components/section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl dark:text-neutral-100">Projects</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className={`rounded-xl border border-black/10 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-black/20 dark:border-white/10 dark:bg-neutral-900 dark:hover:border-white/20 ${
              project.featured ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <p className="text-sm font-medium uppercase tracking-[0.1em] text-neutral-500 dark:text-neutral-400">{project.period}</p>
            <h3 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{project.name}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{project.stack}</p>
            <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-300">{project.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "@/components/section";

const posts = [
  "Internship Recruiting Breakdown",
  "What Teaching 200+ Students Taught Me",
  "Designing Systems Under Constraint"
];

export function BlogPreview() {
  return (
    <Section id="blog">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl dark:text-neutral-100">Blog Preview</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Structured for future MDX integration</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((title) => (
          <article
            key={title}
            className="rounded-xl border border-black/10 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-black/20 dark:border-white/10 dark:bg-neutral-900 dark:hover:border-white/20"
          >
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Placeholder post card prepared for an MDX-powered article pipeline.
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

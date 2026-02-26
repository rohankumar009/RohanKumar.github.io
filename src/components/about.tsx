import { Section } from "@/components/section";

const stats = [
  "200+ students taught",
  "200,000+ records processed",
  "35,000+ user app impact",
  "67.5% ML accuracy"
];

export function About() {
  return (
    <Section id="about">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl dark:text-neutral-100">About</h2>
        <p className="mt-6 leading-relaxed text-neutral-700 dark:text-neutral-300">
          I&apos;m a Computer Science student at the University of Minnesota - Twin Cities, graduating in December
          2025. My work blends engineering execution with product ownership, from data systems and analytics to
          full-stack delivery and team coordination.
        </p>
        <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
          Outside class, I stay active in ACM, Chess, Game Dev, Lettuce Club, Run Club, Badminton, SASE, CodePath,
          NSBE, and SHPE. These communities sharpen both my technical foundation and my ability to lead within diverse,
          fast-moving teams.
        </p>
        <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
          I care deeply about teaching, systems thinking, and end-to-end ownership. My long-term ambition is to build
          reliable software that scales with real users while mentoring others to engineer with clarity and purpose.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat} className="rounded-lg border border-black/10 bg-white p-4 text-sm font-medium text-neutral-700 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-200">
              {stat}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

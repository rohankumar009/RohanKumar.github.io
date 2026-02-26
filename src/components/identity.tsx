import { Section } from "@/components/section";

const cards = [
  {
    title: "Engineer",
    body: "Focused on backend systems, distributed systems, data pipelines, and performance optimization."
  },
  {
    title: "Product Thinker",
    body: "Grounded in user research, iteration, Agile execution, cross-functional collaboration, and stakeholder alignment."
  },
  {
    title: "Builder",
    body: "Driven by teaching 200+ students, leading teams, and coordinating large initiatives with measurable outcomes."
  }
];

export function Identity() {
  return (
    <Section id="identity">
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-xl bg-neutral-200/70 p-8 transition duration-200 hover:scale-[1.01] dark:bg-neutral-900"
          >
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{card.title}</h3>
            <p className="mt-3 leading-relaxed text-neutral-700 dark:text-neutral-300">{card.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

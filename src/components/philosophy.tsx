import { Section } from "@/components/section";

const beliefs = [
  "Software should reduce friction.",
  "Simplicity scales.",
  "Systems outlive features.",
  "Teaching sharpens thinking."
];

export function Philosophy() {
  return (
    <Section id="philosophy">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl dark:text-neutral-100">Philosophy</h2>
        <div className="mt-8 space-y-3">
          {beliefs.map((belief) => (
            <p key={belief} className="text-lg text-neutral-700 dark:text-neutral-300">
              {belief}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}

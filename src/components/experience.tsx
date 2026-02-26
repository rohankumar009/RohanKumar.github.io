import { Section } from "@/components/section";
import { TimelineItem } from "@/components/timeline-item";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl dark:text-neutral-100">Experience</h2>
      <div className="relative mt-10 space-y-6">
        <div className="absolute bottom-2 left-[0.45rem] top-2 hidden w-px bg-neutral-300 dark:bg-neutral-700 md:block" />
        {experience.map((item) => (
          <TimelineItem key={`${item.title}-${item.period}`} item={item} />
        ))}
      </div>
    </Section>
  );
}

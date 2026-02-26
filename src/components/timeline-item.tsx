import { ExperienceItem } from "@/data/experience";

type TimelineItemProps = {
  item: ExperienceItem;
};

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <article className="relative rounded-xl border border-black/10 bg-white p-6 transition duration-200 hover:border-black/20 dark:border-white/10 dark:bg-neutral-900 dark:hover:border-white/20 md:ml-14">
      <div className="absolute -left-[2.875rem] top-8 hidden h-4 w-4 rounded-full border-2 border-neutral-900 bg-[#f5f5f5] dark:border-neutral-200 dark:bg-neutral-950 md:block" />
      <p className="text-sm font-medium uppercase tracking-[0.1em] text-neutral-500 dark:text-neutral-400">{item.period}</p>
      <h3 className="mt-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</h3>
      <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">{item.organization}</p>
      <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-300">{item.description}</p>
    </article>
  );
}

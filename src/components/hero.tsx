import Image from "next/image";
import { Section } from "@/components/section";

export function Hero() {
  return (
    <Section id="hero" className="pt-36">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-600 dark:text-neutral-400">Hey, I&apos;m Rohan.</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-neutral-900 md:text-6xl dark:text-neutral-100">
            Software Engineer building scalable systems and thoughtful products.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            I&apos;m a Computer Science student at the University of Minnesota - Twin Cities (graduating December 2025)
            with hands-on experience across software engineering, analytics, and product leadership.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
            >
              View Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-lg border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 transition duration-200 hover:-translate-y-0.5 hover:border-neutral-500 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-500"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 transition duration-200 hover:-translate-y-0.5 hover:border-neutral-500 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-500"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/10 shadow-xl shadow-black/10 dark:shadow-glow md:h-80 md:w-80">
            <Image
              src="/profile.svg"
              alt="Rohan Kumar profile"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

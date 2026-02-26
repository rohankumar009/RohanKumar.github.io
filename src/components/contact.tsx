import { Section } from "@/components/section";

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl dark:text-neutral-100">Contact</h2>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">
          Open to software engineering, product, and analytics opportunities.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:kumar634@umn.edu"
            className="rounded-lg border border-black/10 bg-white px-5 py-4 transition duration-200 hover:border-black/20 dark:border-white/10 dark:bg-neutral-900 dark:hover:border-white/20"
          >
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Email</p>
            <p className="mt-1 font-medium text-neutral-900 dark:text-neutral-100">kumar634@umn.edu</p>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-black/10 bg-white px-5 py-4 transition duration-200 hover:border-black/20 dark:border-white/10 dark:bg-neutral-900 dark:hover:border-white/20"
          >
            <p className="text-sm text-neutral-500 dark:text-neutral-400">LinkedIn</p>
            <p className="mt-1 font-medium text-neutral-900 dark:text-neutral-100">linkedin.com/in/rohan-kumar</p>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-black/10 bg-white px-5 py-4 transition duration-200 hover:border-black/20 dark:border-white/10 dark:bg-neutral-900 dark:hover:border-white/20"
          >
            <p className="text-sm text-neutral-500 dark:text-neutral-400">GitHub</p>
            <p className="mt-1 font-medium text-neutral-900 dark:text-neutral-100">github.com/rohankumar</p>
          </a>
          <a
            href="https://rohank.dev"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-black/10 bg-white px-5 py-4 transition duration-200 hover:border-black/20 dark:border-white/10 dark:bg-neutral-900 dark:hover:border-white/20"
          >
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Website</p>
            <p className="mt-1 font-medium text-neutral-900 dark:text-neutral-100">rohank.dev</p>
          </a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-flex rounded-lg border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 transition duration-200 hover:-translate-y-0.5 hover:border-neutral-500 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-500"
        >
          Download Resume
        </a>
      </div>
    </Section>
  );
}

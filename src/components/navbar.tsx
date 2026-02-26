"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enableDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setDark(enableDark);
    document.documentElement.classList.toggle("dark", enableDark);
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f5f5f5]/80 backdrop-blur-md dark:border-white/10 dark:bg-neutral-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-sm font-semibold tracking-wide text-neutral-900 transition duration-200 hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-white">
          Rohan Kumar
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md p-2 text-neutral-800 transition duration-200 hover:bg-black/5 dark:text-neutral-200 dark:hover:bg-white/10"
            aria-label="Toggle dark mode"
          >
            {dark ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            className="rounded-md p-2 text-neutral-800 transition duration-200 hover:bg-black/5 md:hidden dark:text-neutral-200 dark:hover:bg-white/10"
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          </button>
        </div>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-neutral-700 transition duration-200 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-[#f5f5f5] px-6 py-4 md:hidden dark:border-white/10 dark:bg-neutral-950">
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm text-neutral-700 transition duration-200 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import type { ExperienceItem } from "@/types/portfolio";

interface ExperienceCarouselProps {
  experience: ExperienceItem[];
}

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD_PX = 40;

function getLevelDates(start: string, end: string) {
  return `${start} - ${end}`;
}

export function ExperienceCarousel({ experience }: ExperienceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = experience.length;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const setFromQuery = () => setPrefersReducedMotion(query.matches);
    setFromQuery();
    query.addEventListener("change", setFromQuery);
    return () => query.removeEventListener("change", setFromQuery);
  }, []);

  useEffect(() => {
    if (!autoplayEnabled || isPaused || prefersReducedMotion || total <= 1) {
      return;
    }
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [autoplayEnabled, isPaused, prefersReducedMotion, total]);

  const currentSlide = useMemo(() => experience[currentIndex], [experience, currentIndex]);

  if (!currentSlide) {
    return null;
  }

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);
  const goTo = (index: number) => setCurrentIndex(index);

  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-title">
        Work Experience
      </h2>
      <p className="section-subtitle">
        A quick view of roles, impact, and technologies I have worked with.
      </p>
      <div
        className="panel experience-shell"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div
          className="experience-track"
          role="region"
          aria-roledescription="carousel"
          aria-label="Work experience slides"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              goNext();
            }
            if (event.key === "ArrowLeft") {
              goPrev();
            }
          }}
          onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            const endX = event.changedTouches[0]?.clientX;
            if (touchStartX === null || typeof endX !== "number") {
              return;
            }
            const delta = endX - touchStartX;
            if (Math.abs(delta) >= SWIPE_THRESHOLD_PX) {
              if (delta > 0) {
                goPrev();
              } else {
                goNext();
              }
            }
            setTouchStartX(null);
          }}
        >
          <article className="experience-card" aria-live="polite">
            <header className="experience-header">
              <p className="experience-role">{currentSlide.role}</p>
              <h3 className="experience-company">{currentSlide.company}</h3>
              <p className="experience-meta">
                {getLevelDates(currentSlide.start, currentSlide.end)}
                {currentSlide.location ? ` . ${currentSlide.location}` : ""}
              </p>
            </header>
            <ul className="experience-highlights">
              {currentSlide.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <ul className="tag-list" aria-label="Technologies used">
              {currentSlide.tech.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="experience-controls">
          <div className="experience-nav-buttons">
            <button type="button" className="icon-btn" onClick={goPrev} aria-label="Previous slide">
              Prev
            </button>
            <button type="button" className="icon-btn" onClick={goNext} aria-label="Next slide">
              Next
            </button>
          </div>
          <div className="dot-row" role="tablist" aria-label="Experience slide selectors">
            {experience.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={currentIndex === index}
                aria-label={`Go to slide ${index + 1}: ${item.role} at ${item.company}`}
                className={currentIndex === index ? "dot dot-active" : "dot"}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="btn btn-secondary autoplay-btn"
            onClick={() => setAutoplayEnabled((prev) => !prev)}
            aria-pressed={autoplayEnabled}
            disabled={prefersReducedMotion}
          >
            {prefersReducedMotion
              ? "Autoplay Disabled by Reduced Motion"
              : autoplayEnabled
                ? "Stop Autoplay"
                : "Start Autoplay"}
          </button>
        </div>
      </div>
    </section>
  );
}

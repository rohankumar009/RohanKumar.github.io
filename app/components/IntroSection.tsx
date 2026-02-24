import type { IntroData } from "@/types/portfolio";

interface IntroSectionProps {
  intro: IntroData;
}

export function IntroSection({ intro }: IntroSectionProps) {
  return (
    <header id="intro" className="section section-intro">
      <p className="section-kicker">Portfolio</p>
      <h1 className="intro-title">{intro.name}</h1>
      <p className="intro-headline">{intro.headline}</p>
      <p className="intro-summary">{intro.summary}</p>
      {intro.location ? <p className="intro-location">{intro.location}</p> : null}
      <div className="intro-ctas">
        {intro.ctas.map((cta) => (
          <a
            key={cta.label}
            href={cta.href}
            className={cta.label === "View Resume" ? "btn btn-primary" : "btn btn-secondary"}
            target={cta.external ? "_blank" : undefined}
            rel={cta.external ? "noopener noreferrer" : undefined}
          >
            {cta.label}
          </a>
        ))}
      </div>
    </header>
  );
}

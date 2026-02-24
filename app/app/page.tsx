import { ContactSection } from "@/components/ContactSection";
import { ExperienceCarousel } from "@/components/ExperienceCarousel";
import { IntroSection } from "@/components/IntroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div className="page-shell">
      <main className="content-wrap">
        <IntroSection intro={portfolioData.intro} />
        <ExperienceCarousel experience={portfolioData.experience} />
        <SkillsSection skills={portfolioData.skills} languages={portfolioData.languages} />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactSection contact={portfolioData.contact} />
      </main>
    </div>
  );
}

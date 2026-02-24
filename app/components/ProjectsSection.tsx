import type { ProjectItem } from "@/types/portfolio";

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-title">
        Projects
      </h2>
      <p className="section-subtitle">
        Selected work demonstrating practical engineering impact.
      </p>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.id} className="panel project-card">
            <h3 className="panel-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="tag-list" aria-label={`${project.name} technology stack`}>
              {project.stack.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="project-links">
              {project.liveUrl ? (
                <a href={project.liveUrl} className="text-link">
                  Live
                </a>
              ) : null}
              {project.repoUrl ? (
                <a href={project.repoUrl} className="text-link">
                  Code
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

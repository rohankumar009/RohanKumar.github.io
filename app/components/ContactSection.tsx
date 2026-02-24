import type { ContactData } from "@/types/portfolio";

interface ContactSectionProps {
  contact: ContactData;
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <footer id="contact" className="section" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-title">
        Contact
      </h2>
      <p className="section-subtitle">Open to software engineering opportunities and collaboration.</p>
      <div className="panel contact-panel">
        <a className="contact-link" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <div className="contact-links-row">
          {contact.github ? (
            <a className="text-link" href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : null}
          {contact.linkedin ? (
            <a className="text-link" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          ) : null}
          {contact.calendarUrl ? (
            <a
              className="text-link"
              href={contact.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

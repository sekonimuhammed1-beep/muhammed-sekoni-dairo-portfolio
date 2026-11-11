import Section from "./Section.jsx";
import { projects } from "../config/site.js";

function Preview({ project }) {
  if (project.image) {
    return (
      <img
        className="project__img"
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        decoding="async"
        width="800"
        height="500"
      />
    );
  }
  // Neutral placeholder: clearly not a real screenshot.
  return (
    <div className="project__placeholder" role="img" aria-label={`Placeholder for ${project.name} screenshot`}>
      <div className="ph__bar"><span /><span /><span /></div>
      <div className="ph__body">
        <span className="ph__line ph__line--w60" />
        <span className="ph__line ph__line--w85" />
        <span className="ph__line ph__line--w40" />
        <span className="ph__note">Screenshot placeholder</span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Things I've built and started"
      intro="Completed work is marked separately from ongoing initiatives."
    >
      <div className="grid grid--2">
        {projects.map((p) => (
          <article key={p.name} className="card project reveal">
            <Preview project={p} />
            <div className="project__body">
              <div className="project__meta">
                <span className={`badge badge--${p.status.toLowerCase()}`}>{p.status}</span>
                <span className="project__role">{p.role}</span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <ul className="chips" aria-label="Technologies and capabilities">
                {p.tags.map((t) => (
                  <li key={t} className="chip chip--sm">{t}</li>
                ))}
              </ul>
              {p.link ? (
                <a className="link-arrow" href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.linkLabel} <span aria-hidden="true">&rarr;</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <p className="project__soon">Project link coming soon</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

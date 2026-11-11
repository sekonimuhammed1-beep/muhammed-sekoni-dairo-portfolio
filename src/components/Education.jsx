import Section from "./Section.jsx";
import { education } from "../config/site.js";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education & certifications" title="Where I'm learning">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.school} className="timeline__item reveal">
            <span className="timeline__dot" aria-hidden="true" />
            <div className="card">
              <span className={`badge badge--${e.status.toLowerCase()}`}>{e.status}</span>
              <h3>{e.school}</h3>
              <p className="edu__title">{e.title}</p>
              <p className="edu__note">{e.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

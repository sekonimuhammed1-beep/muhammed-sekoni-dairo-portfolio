import Section from "./Section.jsx";
import { experience } from "../config/site.js";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & leadership"
      title="Leading a technology initiative"
      tint
    >
      <div className="stack">
        {experience.map((e) => (
          <article key={e.role + e.org} className="card exp reveal">
            <div className="exp__head">
              <div>
                <h3>{e.role}</h3>
                <p className="exp__org">{e.org}</p>
              </div>
              {e.period && <p className="exp__period">{e.period}</p>}
            </div>
            <p>{e.summary}</p>
            <ul className="ticks">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

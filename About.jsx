import Section from "./Section.jsx";
import { about } from "../config/site.js";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Learning, building and solving problems">
      <div className="about reveal">
        <div className="about__text">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside className="card about__values" aria-label="What I value">
          <h3>What I value</h3>
          <ul className="chips">
            {about.values.map((v) => (
              <li key={v} className="chip">{v}</li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}

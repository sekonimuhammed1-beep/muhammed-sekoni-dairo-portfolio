import Section from "./Section.jsx";
import { skills } from "../config/site.js";

const LABEL = { current: "Current skill", learning: "Currently learning" };

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical skills"
      title="What I work with"
      intro="An honest snapshot: what I use today and what I'm actively learning."
      tint
    >
      <ul className="grid grid--3 reveal">
        {skills.map((s) => (
          <li key={s.name} className="card skill">
            <span className={`badge badge--${s.status}`}>{LABEL[s.status]}</span>
            <h3>{s.name}</h3>
            <p>{s.note}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

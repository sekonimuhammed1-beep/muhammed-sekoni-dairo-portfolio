import Section from "./Section.jsx";
import { interests } from "../config/site.js";

export default function Interests() {
  return (
    <Section
      id="interests"
      eyebrow="Professional interests"
      title="Where my curiosity points"
      intro="These are areas I'm interested in and exploring, not claims of expertise."
      tint
    >
      <ul className="grid grid--4 reveal">
        {interests.map((i) => (
          <li key={i.title} className="card interest">
            <span className="badge badge--interest">Interest</span>
            <h3>{i.title}</h3>
            <p>{i.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

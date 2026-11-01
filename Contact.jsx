import Section from "./Section.jsx";
import { contact, profile } from "../config/site.js";

function Channel({ label, value, href, external }) {
  const live = Boolean(value);
  return (
    <li className={`channel${live ? "" : " channel--soon"}`}>
      <span className="channel__label">{label}</span>
      {live ? (
        <a
          className="channel__value"
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {value.replace(/^https?:\/\/(www\.)?/, "")}
          {external && <span className="sr-only"> (opens in a new tab)</span>}
        </a>
      ) : (
        <span className="channel__value">Coming soon</span>
      )}
    </li>
  );
}

export default function Contact() {
  const subject = encodeURIComponent("Hello Muhammed: internship / collaboration");
  const mail = contact.email ? `mailto:${contact.email}?subject=${subject}` : "";

  return (
    <Section id="contact" eyebrow="Contact" title="Let's connect">
      <div className="contact card reveal">
        <div className="contact__copy">
          <p>
            I&rsquo;m looking for software developer internship opportunities and happy to
            talk with developers, mentors and collaborators. If you&rsquo;re building
            something interesting or hiring interns, I&rsquo;d love to hear from you.
          </p>
          {mail ? (
            <a className="btn btn--primary" href={mail}>Email {profile.firstName}</a>
          ) : (
            <p className="contact__note">Email address coming soon.</p>
          )}
        </div>
        <ul className="channels">
          <Channel label="Email" value={contact.email} href={mail} />
          <Channel label="LinkedIn" value={contact.linkedin} href={contact.linkedin} external />
          <Channel label="GitHub" value={contact.github} href={contact.github} external />
        </ul>
      </div>
    </Section>
  );
}

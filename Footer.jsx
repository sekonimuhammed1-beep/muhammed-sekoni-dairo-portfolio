import { contact, navLinks, profile } from "../config/site.js";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "LinkedIn", href: contact.linkedin },
    { label: "GitHub", href: contact.github },
  ].filter((s) => s.href);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__sub">Aspiring Software Developer</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer__links">
            {navLinks.map((l) => (
              <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        {socials.length > 0 && (
          <ul className="footer__links" aria-label="Social links">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="container footer__legal">
        <p>&copy; {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

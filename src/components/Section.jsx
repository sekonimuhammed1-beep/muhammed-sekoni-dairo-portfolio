export default function Section({ id, eyebrow, title, intro, children, tint = false }) {
  return (
    <section id={id} className={`section${tint ? " section--tint" : ""}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="section__intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

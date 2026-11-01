import { profile } from "../config/site.js";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
      <div className="hero__inner">
        <p className="status reveal">
          <span className="status__dot" aria-hidden="true" />
          {profile.statusText}
        </p>
        <h1 id="hero-title" className="hero__title reveal">
          <span className="hero__hi">Hi, I&rsquo;m {profile.name}.</span>
          <span className="hero__headline">{profile.headline}</span>
        </h1>
        <p className="hero__tagline reveal">{profile.tagline}</p>
        <p className="hero__intro reveal">{profile.intro}</p>
        <div className="hero__actions reveal">
          <a href="#projects" className="btn btn--primary">View My Projects</a>
          <a href="#contact" className="btn btn--ghost">Let&rsquo;s Connect</a>
        </div>
        <p className="hero__goal reveal">{profile.goal}</p>
      </div>
      <figure className="portrait reveal">
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width="800"
          height="1000"
          fetchpriority="high"
          decoding="async"
        />
      </figure>
      </div>
    </section>
  );
}

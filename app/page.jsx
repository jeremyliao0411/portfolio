import { profile, strip, work, about, experience, exposure } from "./content";

function Project({ p }) {
  return (
    <article className={`project${p.small ? " small" : ""}`} id={p.id}>
      <div>
        <div className="metric">{p.metric}</div>
        <span className="metric-note">{p.metricNote}</span>
      </div>
      <div>
        <h3>{p.title}</h3>
        <p className="why">{p.why}</p>
        <details>
          <summary>
            <span className="plus" aria-hidden="true">+</span>
            <span className="label-closed">Read more</span>
            <span className="label-open">Show less</span>
          </summary>
          <div className="detail">
            {p.details.map(([h, t]) => (
              <div key={h}>
                <h4>{h}</h4>
                <p>{t}</p>
              </div>
            ))}
            {p.image && (
              <figure>
                <img src={p.image.src} alt={p.image.alt} loading="lazy" />
                <figcaption>{p.image.alt}</figcaption>
              </figure>
            )}
            <p className="tools">Tools: {p.tools}</p>
            {p.note && <p className="nda">{p.note}</p>}
            {p.link && <p className="gh"><a href={p.link.href}>{p.link.label}</a></p>}
          </div>
        </details>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <nav className="nav" aria-label="Main">
        <div className="wrap">
          <a href="#top" className="name">{profile.short}</a>
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div>
              <p className="who">{profile.full}</p>
              <h1>{profile.headline}</h1>
              <p className="intro">{profile.intro}</p>
              <div className="actions">
                <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
                <a className="btn secondary" href={profile.linkedin}>View LinkedIn</a>
              </div>
            </div>
            <img src="/jeremy-portrait.jpg" alt="Portrait of Jeremy Liao" width="800" height="1000" />
          </div>
        </section>

        <div className="strip" aria-label="Industries and systems">
          <div className="wrap">
            {strip.map((s) => (
              <p key={s.label}><strong>{s.label}</strong>{s.items.join(", ")}</p>
            ))}
          </div>
        </div>

        <section className="block" id="work">
          <div className="wrap">
            <h2>Selected work</h2>
            <div className="projects">
              {work.map((p) => <Project key={p.id} p={p} />)}
            </div>
          </div>
        </section>

        <section className="block about" id="about">
          <div className="wrap">
            <h2>About</h2>
            <div>{about.map((t, i) => <p key={i}>{t}</p>)}</div>
          </div>
        </section>

        <section className="block" id="experience">
          <div className="wrap">
            <h2>Experience</h2>
            <ul className="exp">
              {experience.map((e) => (
                <li key={e.role}>
                  <span className="role">{e.role}</span>
                  <span className="org">{e.org}</span>
                  <span className="when">{e.when}</span>
                </li>
              ))}
            </ul>
            <p className="exposure">{exposure}</p>
          </div>
        </section>

        <section className="block contact" id="contact">
          <div className="wrap">
            <h2>Let's talk.</h2>
            <p>I'm looking for analyst roles at tech companies in Taiwan. The fastest way to reach me is email.</p>
            <div className="big">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin}>LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
      <footer><div className="wrap">© 2026 {profile.full}</div></footer>
    </>
  );
}

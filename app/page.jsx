import { profile, nav, hero, credibility, work, story, experience, contact, footer } from "./content";

function Lines({ lines }) {
  return lines.map((l, i) => (
    <span key={i}>
      {l}
      {i < lines.length - 1 && <br />}
    </span>
  ));
}

function ContactLinks() {
  return (
    <div className="contact-links" aria-label="Contact">
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      <a href={`mailto:${profile.email}`}>Email ↗</a>
      {profile.resume && <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="container header">
        <div className="identity">
          <strong>{profile.name}</strong>
          <span>{profile.fullName}</span>
        </div>
        <nav aria-label="Homepage sections">
          {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
      </header>

      <main>
        <section id="intro" className="container hero" aria-labelledby="intro-title">
          <div className="hero-copy">
            <h1 id="intro-title"><Lines lines={hero.title} /></h1>
            <p><Lines lines={hero.lead} /></p>
            <p>{hero.body}</p>
            <p className="intent">{hero.intent}</p>
            <ContactLinks />
          </div>
          <figure className="portrait">
            <img src={profile.portrait.src} alt={profile.portrait.alt} width={profile.portrait.width} height={profile.portrait.height} />
            <figcaption>{profile.fullName}</figcaption>
          </figure>
        </section>

        <aside className="container credibility" aria-label="Education and experience highlights">
          {credibility.map((c) => (
            <div key={c.title}>
              <p>{c.title}</p>
              <small>{c.note}</small>
            </div>
          ))}
        </aside>

        <section id="work" className="container chapter" aria-labelledby="work-title">
          <div className="section-intro">
            <p className="eyebrow">{work.eyebrow}</p>
            <h2 id="work-title">{work.title}</h2>
          </div>
          <div className="projects">
            {work.projects.map((p) => (
              <article className="project" key={p.org}>
                <div className="project-context">
                  <p>{p.org}</p>
                  <small>{p.role}</small>
                  <span className="metric">{p.metric}</span>
                  <small className="metric-note">{p.metricNote}</small>
                </div>
                <div className="reading">
                  <h3>
                    {p.title[0]}<br className="desktop-break" /> {p.title[1]}
                  </h3>
                  {p.body.map((t, i) => <p key={i}>{t}</p>)}
                  <p className="focus">
                    {p.focus}
                    {p.link && <> <a href={p.link.href} target="_blank" rel="noopener noreferrer">{p.link.label}</a></>}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="story" className="container chapter" aria-labelledby="story-title">
          <div className="section-intro">
            <p className="eyebrow">{story.eyebrow}</p>
            <h2 id="story-title"><Lines lines={story.title} /></h2>
          </div>
          <div className="offset reading">
            {story.body.map((t, i) => <p key={i}>{t}</p>)}
            <p className="principle">{story.principle}</p>
          </div>
        </section>

        <section id="experience" className="container chapter" aria-labelledby="experience-title">
          <div className="offset">
            <div className="section-intro">
              <p className="eyebrow">{experience.eyebrow}</p>
              <h2 id="experience-title">{experience.title}</h2>
            </div>
            <div className="industries">
              {experience.areas.map((a) => (
                <div key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                  <small className="where">{a.where}</small>
                </div>
              ))}
            </div>
            <div className="education">
              {experience.education.map((e) => <p key={e}>{e}</p>)}
            </div>
          </div>
        </section>

        <section id="contact" className="container chapter contact" aria-labelledby="contact-title">
          <h2 id="contact-title">{contact.title}</h2>
          <p className="reading">{contact.body}</p>
          <ContactLinks />
        </section>
      </main>

      <footer className="container footer">
        <span>{profile.fullName}</span>
        <span>{footer.tagline}</span>
      </footer>
    </>
  );
}

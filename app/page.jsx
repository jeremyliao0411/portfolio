import Link from "next/link";
import Header from "./Header";
import { profile, work, experience, offField } from "./content";

export default function Home() {
  return (
    <>
      <Header />
      <main className="wrap">
        <div className="hero">
          <img src="/jeremy.jpg" alt="Portrait of Jeremy Liao" width="360" height="360" />
          <div>
            <h1>{profile.name}</h1>
            <p className="intro">{profile.intro}</p>
            <p className="headed">{profile.headed}</p>
            <div className="actions">
              <a className="btn solid" href={`mailto:${profile.email}`}>Email me</a>
              <a className="btn ghost" href={profile.linkedin}>LinkedIn</a>
            </div>
          </div>
        </div>

        <section id="work" aria-labelledby="work-h">
          <h2 id="work-h">Selected work</h2>
          <div className="cases">
            {work.map((w) => (
              <Link key={w.slug} href={`/work/${w.slug}`} className="case">
                <div className="score" aria-label={`${w.before ? w.before + " to " : ""}${w.after} ${w.metricLabel}`}>
                  {w.before && <span className="from">{w.before}</span>}
                  <span className="to">{w.after}</span>
                  <span className="label">{w.metricLabel}</span>
                </div>
                <div className="case-body">
                  <h3>{w.title}</h3>
                  <p className="org">{w.org}, {w.year}</p>
                  <p className="sum">{w.summary}</p>
                  <ul className="tags">{w.tools.map((t) => <li key={t}>{t}</li>)}</ul>
                  <span className="more">Read the case study</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="exp-h">
          <h2 id="exp-h">Experience</h2>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.what + e.when}>
                <span className="when">{e.when}</span>
                <span className="what">{e.what}</span>
                <span className="where">{e.where}</span>
                {e.detail && <p className="detail">{e.detail}</p>}
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="field-h">
          <div className="field">
            <h2 id="field-h">{offField.heading}</h2>
            <p>{offField.body}</p>
            <ul className="tags">{offField.sports.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </section>
      </main>
      <footer id="contact" className="wrap">
        <h2>Let's talk</h2>
        <p>Hiring for an analyst role in Taiwan, or just want to compare notes? I reply within a day.</p>
        <div className="links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin}>LinkedIn</a>
          <a href={profile.github}>GitHub</a>
        </div>
      </footer>
    </>
  );
}

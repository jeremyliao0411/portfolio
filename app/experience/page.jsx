import { experience as ex, logos } from "../content";
import PageHead from "../components/PageHead";
import NextRow from "../components/NextRow";
import Reveal from "../components/Reveal";

export const metadata = { title: "Experience" };

function Logo({ k }) {
  return (
    <div className="pp-logo">
      <img src={logos[k].src} alt={logos[k].alt} className={`logo logo-${k}`} />
    </div>
  );
}

export default function Experience() {
  return (
    <div className="ph">
      <PageHead title={ex.banner.title} sub={ex.banner.sub} />

      <section className="container ph-section pp-first">
        <h2 className="ph-h2">{ex.workTitle}</h2>
        <div className="pp-jobs">
          {ex.jobs.map((j) => (
            <Reveal as="article" className="pp-job" key={j.org}>
              <header className="pp-job-side">
                <Logo k={j.logo} />
                <h3>{j.role}</h3>
                <p>{j.org}</p>
                <p className="pp-muted">{j.where}</p>
                <p className="pp-muted">{j.when}</p>
              </header>
              <div className="pp-job-body">
                <p className="pp-lead">{j.problem}</p>
                <h4>What I did</h4>
                <ul className="pp-list">{j.did.map((d) => <li key={d}>{d}</li>)}</ul>
                <div className="pp-result">
                  <h4>Result</h4>
                  <p>{j.result}</p>
                </div>
                <ul className="pp-tags" aria-label="Tools">{j.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container ph-section">
        <h2 className="ph-h2">{ex.educationTitle}</h2>
        <ul className="pp-schools">
          {ex.schools.map((s, i) => (
            <Reveal as="li" key={s.school} delay={i * 90}>
              <Logo k={s.logo} />
              <div>
                <h3>{s.school}</h3>
                <p>{s.degree}</p>
                <p className="pp-muted">{s.when}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <NextRow href="/projects" label="Projects" />
    </div>
  );
}

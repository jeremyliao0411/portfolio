import Link from "next/link";
import { experience as ex, logos } from "../content";
import Banner from "../components/Banner";
import Reveal from "../components/Reveal";

export const metadata = { title: "Experience" };

function Logo({ k }) {
  return (
    <div className="logo-box">
      <img src={logos[k].src} alt={logos[k].alt} className={`logo logo-${k}`} />
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <Banner as="h1" photo={ex.banner.photo} title={ex.banner.title} sub={ex.banner.sub} />

      <section className="container section">
        <h2 className="section-title">{ex.workTitle}</h2>
        <div className="stack">
          {ex.jobs.map((j) => (
            <Reveal as="article" className="job card" key={j.org}>
              <Logo k={j.logo} />
              <div className="job-body">
                <header className="job-head">
                  <div>
                    <h3>{j.role}</h3>
                    <p className="org">{j.org} · {j.where}</p>
                  </div>
                  <p className="when">{j.when}</p>
                </header>
                <div className="pdr">
                  <div>
                    <h4>Problem</h4>
                    <p>{j.problem}</p>
                  </div>
                  <div>
                    <h4>What I did</h4>
                    <ul>{j.did.map((d) => <li key={d}>{d}</li>)}</ul>
                  </div>
                  <div className="result">
                    <h4>Result</h4>
                    <p>{j.result}</p>
                  </div>
                </div>
                <ul className="tags" aria-label="Tools">{j.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-soft">
        <div className="container section">
          <h2 className="section-title">{ex.educationTitle}</h2>
          <div className="schools">
            {ex.schools.map((s, i) => (
              <Reveal as="article" className="school card" key={s.school} delay={i * 90}>
                <Logo k={s.logo} />
                <div>
                  <h3>{s.school}</h3>
                  <p>{s.degree}</p>
                  <p className="when">{s.when}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container next-link">
        <Link href="/projects" className="btn btn-primary">Next: Projects →</Link>
      </section>
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../Header";
import { work, profile } from "../../content";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }) {
  const w = work.find((x) => x.slug === params.slug);
  return w ? { title: `${w.title} | ${profile.short}`, description: w.summary } : {};
}

export default function CaseStudy({ params }) {
  const w = work.find((x) => x.slug === params.slug);
  if (!w) notFound();
  return (
    <>
      <Header />
      <main className="wrap">
        <div className="cs-head narrow">
          <Link href="/#work" className="back">Back to all work</Link>
          <h1>{w.title}</h1>
          <p className="org">{w.org}, {w.year}</p>
          <div className="cs-score">
            {w.before && <span className="from">{w.before}</span>}
            <span className="to">{w.after}</span>
            <span className="label">{w.metricLabel}</span>
          </div>
        </div>
        <article className="cs-body narrow">
          {w.sections.map((s, i) => (
            <div key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((p, j) => <p key={j}>{p}</p>)}
              {i === 1 && w.image && (
                <figure>
                  <img src={w.image.src} alt={w.image.alt} />
                  <figcaption>{w.image.alt}</figcaption>
                </figure>
              )}
            </div>
          ))}
          <ul className="tags" aria-label="Tools">{w.tools.map((t) => <li key={t}>{t}</li>)}</ul>
          {w.links && <p style={{ marginTop: "1.5rem" }}>{w.links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}</p>}
          {w.note && <p className="note" style={{ marginTop: "1.5rem" }}>{w.note}</p>}
        </article>
      </main>
      <footer className="wrap">
        <div className="links">
          <Link href="/#work">More work</Link>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </footer>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { home, logos, profile } from "./content";
import SignalChart from "./components/SignalChart";
import Reveal from "./components/Reveal";

const STRIP = ["dinggo", "gournay", "usc", "psu"];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" className="arrow">
      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="ph">
      <section className="ph-hero">
        <div className="ph-glow" aria-hidden="true" />
        <div className="container ph-hero-grid">
          <div className="ph-hero-copy">
            <div className="ph-who">
              <Image src={profile.portrait.src} alt="" width={96} height={96} className="ph-avatar" priority />
              <div>
                <strong>{profile.fullName}</strong>
                <span>MS Business Analytics · USC Marshall</span>
              </div>
            </div>
            <h1>{home.line}</h1>
            <p className="ph-sub">{home.sub}</p>
            <div className="ph-actions">
              <Link href="/experience" className="pbtn pbtn-primary">See my experience <Arrow /></Link>
              <a href={`mailto:${profile.email}`} className="pbtn pbtn-quiet">Email me</a>
            </div>
          </div>
          <div className="ph-panel">
            <SignalChart />
          </div>
        </div>
      </section>

      <section className="ph-logos" aria-label={home.logoStrip}>
        <div className="container">
          <p>{home.logoStrip}</p>
          <ul>
            {STRIP.map((k) => (
              <li key={k}><img src={logos[k].src} alt={logos[k].alt} className={`logo logo-${k}`} /></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container ph-section">
        <h2 className="ph-h2">{home.results.title}</h2>
        <ul className="ph-results">
          {home.results.items.map((it, i) => (
            <Reveal as="li" key={it.org} delay={i * 80}>
              <Link href={it.href} className="ph-row">
                <span className="ph-row-org">
                  <strong>{it.org}</strong>
                  <span>{it.context}</span>
                </span>
                <span className="ph-row-text">
                  {it.parts.map((p, j) => (j % 2 ? <b key={j}>{p}</b> : <span key={j}>{p}</span>))}
                </span>
                <Arrow />
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container ph-section ph-recog">
        <h2 className="ph-h2">{home.recognition.title}</h2>
        <ul>
          {home.recognition.items.map((h) => (
            <li key={h.lead}><strong>{h.lead}</strong><span>{h.rest}</span></li>
          ))}
        </ul>
      </section>

      <section className="ph-closing">
        <div className="ph-glow ph-glow-low" aria-hidden="true" />
        <div className="container ph-closing-grid">
          <Image src={profile.portrait.src} alt={profile.portrait.alt} width={profile.portrait.width} height={profile.portrait.height} sizes="(max-width: 860px) 60vw, 320px" className="ph-portrait" />
          <div>
            <h2>{home.closing.title}</h2>
            <p>{home.closing.body}</p>
            <div className="ph-actions">
              <a href={`mailto:${profile.email}`} className="pbtn pbtn-primary">Email me <Arrow /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="pbtn pbtn-quiet">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

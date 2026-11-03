import Image from "next/image";
import Link from "next/link";
import { home, logos, profile } from "./content";
import Banner from "./components/Banner";
import Reveal from "./components/Reveal";

const STRIP = ["dinggo", "gournay", "usc", "psu"];

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <h1>{home.hello}</h1>
          <p className="hero-line">{home.line}</p>
          <p className="hero-sub">{home.sub}</p>
          <div className="actions">
            <Link href="/experience" className="btn btn-primary">See my experience</Link>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">Email me</a>
          </div>
        </div>
        <div className="hero-photo">
          <Image src={profile.portrait.src} alt={profile.portrait.alt} width={profile.portrait.width} height={profile.portrait.height} priority sizes="(max-width: 860px) 70vw, 380px" />
        </div>
      </section>

      <section className="logo-strip" aria-label={home.logoStrip}>
        <div className="container">
          <p className="strip-label">{home.logoStrip}</p>
          <ul>
            {STRIP.map((k) => (
              <li key={k}><img src={logos[k].src} alt={logos[k].alt} className={`logo logo-${k}`} /></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">{home.explore.title}</h2>
        <div className="explore">
          {home.explore.cards.map((c, i) => (
            <Reveal key={c.href} delay={i * 90}>
              <Link href={c.href} className="explore-card">
                <span className="explore-body">
                  <strong>{c.title} <span aria-hidden="true">→</span></strong>
                  <span>{c.line}</span>
                  <small>{c.meta}</small>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
        <h2 className="section-title">{home.highlights.title}</h2>
        <ul className="highlights">
          {home.highlights.items.map((h, i) => (
            <Reveal as="li" key={h.lead} delay={i * 70}>
              <strong>{h.lead}</strong>
              <span>{h.rest}</span>
            </Reveal>
          ))}
        </ul>
        </div>
      </section>

      <Banner size="closing" title={home.closing.title} sub={home.closing.body}>
        <Link href={home.closing.cta.href} className="btn btn-light">{home.closing.cta.label}</Link>
      </Banner>
    </>
  );
}

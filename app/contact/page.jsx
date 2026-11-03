import { contact as c, profile } from "../content";
import PageHead from "../components/PageHead";
import Reveal from "../components/Reveal";

export const metadata = { title: "Contact" };

const ways = [
  { k: "Email", v: profile.email, href: `mailto:${profile.email}`, note: "Fastest way to reach me" },
  { k: "LinkedIn", v: "linkedin.com/in/jeremyliao", href: profile.linkedin, ext: true, note: "Full work history" },
  { k: "GitHub", v: "github.com/jeremyliao0411", href: profile.github, ext: true, note: "Code and data for my projects" },
];

export default function Contact() {
  return (
    <div className="ph">
      <PageHead title={c.title} sub={c.body} />
      <section className="container pp-first pp-contact">
        <ul className="ph-results">
          {ways.map((w, i) => (
            <Reveal as="li" key={w.k} delay={i * 80}>
              <a className="ph-row" href={w.href} {...(w.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <span className="ph-row-org">
                  <strong>{w.k}</strong>
                  <span>{w.note}</span>
                </span>
                <span className="ph-row-text"><b>{w.v}</b></span>
                <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" className="arrow">
                  <path d={w.ext ? "M6 14 14 6M7.5 6H14v6.5" : "M4 10h11M11 5.5 15.5 10 11 14.5"} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>
          ))}
        </ul>
        <p className="pp-where">{c.banner.sub}</p>
      </section>
    </div>
  );
}

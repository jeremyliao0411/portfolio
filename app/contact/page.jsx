import { contact as c, profile } from "../content";
import Banner from "../components/Banner";
import Reveal from "../components/Reveal";

export const metadata = { title: "Contact" };

const ways = [
  { k: "Email", v: profile.email, href: `mailto:${profile.email}`, note: "Fastest way to reach me" },
  { k: "LinkedIn", v: "linkedin.com/in/jeremyliao", href: profile.linkedin, ext: true, note: "Full work history" },
  { k: "GitHub", v: "github.com/jeremyliao0411", href: profile.github, ext: true, note: "Code and data for my projects" },
];

export default function Contact() {
  return (
    <>
      <Banner as="h1" photo={c.banner.photo} title={c.banner.title} sub={c.banner.sub} />
      <section className="container section contact">
        <div className="contact-copy">
          <h2 className="section-title">{c.title}</h2>
          <p>{c.body}</p>
        </div>
        <ul className="ways">
          {ways.map((w, i) => (
            <Reveal as="li" key={w.k} delay={i * 80}>
              <a className="way card" href={w.href} {...(w.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <strong>{w.k} <span aria-hidden="true">{w.ext ? "↗" : "→"}</span></strong>
                <span className="way-v">{w.v}</span>
                <small>{w.note}</small>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}

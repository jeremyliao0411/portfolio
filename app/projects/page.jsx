import Image from "next/image";
import Link from "next/link";
import { projects as pr } from "../content";
import Banner from "../components/Banner";
import Reveal from "../components/Reveal";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <Banner as="h1" photo={pr.banner.photo} title={pr.banner.title} sub={pr.banner.sub} />

      <section className="container section">
        <div className="projects">
          {pr.items.map((p, i) => {
            const L = p.link.external ? "a" : Link;
            const ext = p.link.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <Reveal as="article" className={`project card${i % 2 ? " flip" : ""}`} key={p.title}>
                <L href={p.link.href} className="project-cover" {...ext} tabIndex={-1} aria-hidden="true">
                  <Image src={p.cover.src} alt="" width={p.cover.width} height={p.cover.height} sizes="(max-width: 860px) 100vw, 55vw" />
                </L>
                <div className="project-body">
                  <p className="meta">{p.meta}</p>
                  <h2>{p.title}</h2>
                  <p>{p.problem}</p>
                  <p className="project-result"><span>Result</span>{p.result}</p>
                  <ul className="tags" aria-label="Tools">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  <L href={p.link.href} className="btn btn-primary" {...ext}>
                    {p.link.label} {p.link.external ? "↗" : "→"}
                  </L>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container next-link">
        <Link href="/contact" className="btn btn-primary">Next: Contact →</Link>
      </section>
    </>
  );
}

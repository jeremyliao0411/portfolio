import Image from "next/image";
import Link from "next/link";
import { projects as pr } from "../content";
import PageHead from "../components/PageHead";
import NextRow from "../components/NextRow";
import Reveal from "../components/Reveal";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <div className="ph">
      <PageHead title={pr.banner.title} sub={pr.banner.sub} />

      <section className="container pp-first pp-projects">
        {pr.items.map((p) => {
          const L = p.link.external ? "a" : Link;
          const ext = p.link.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
          return (
            <Reveal as="article" className="pp-project" key={p.title}>
              <L href={p.link.href} className="ph-panel pp-cover" {...ext} tabIndex={-1} aria-hidden="true">
                <Image src={p.cover.src} alt="" width={p.cover.width} height={p.cover.height} sizes="(max-width: 860px) 100vw, 1120px" />
              </L>
              <div className="pp-project-body">
                <div>
                  <p className="pp-muted">{p.meta}</p>
                  <h2>{p.title}</h2>
                  <p className="pp-lead">{p.problem}</p>
                </div>
                <div>
                  <div className="pp-result">
                    <h4>Result</h4>
                    <p>{p.result}</p>
                  </div>
                  <ul className="pp-tags" aria-label="Tools">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  <div className="ph-actions">
                    <L href={p.link.href} className="pbtn pbtn-primary" {...ext}>
                      {p.link.label} <span aria-hidden="true">{p.link.external ? "↗" : "→"}</span>
                    </L>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      <NextRow href="/contact" label="Contact" />
    </div>
  );
}

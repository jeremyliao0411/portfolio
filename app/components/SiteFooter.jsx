import Link from "next/link";
import { footer, nav, profile } from "../content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <div>
          <strong>{profile.fullName}</strong>
          <p>{footer.built}</p>
        </div>
        <nav aria-label="Footer">
          {nav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, profile } from "../content";

export default function SiteHeader() {
  const path = usePathname();
  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="brand">{profile.name}</Link>
        <nav aria-label="Main">
          {nav.map((n) => {
            const on = n.href === "/" ? path === "/" : path.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href} className={[on ? "on" : "", n.href === "/" ? "nav-home" : ""].join(" ").trim() || undefined} aria-current={on ? "page" : undefined}>
                {n.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

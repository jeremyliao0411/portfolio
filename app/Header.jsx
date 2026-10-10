import Link from "next/link";
import { profile } from "./content";

export default function Header() {
  return (
    <header className="wrap top">
      <Link href="/" className="brand">{profile.short}</Link>
      <nav aria-label="Main">
        <Link href="/#work">Work</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}

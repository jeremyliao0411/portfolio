import Link from "next/link";

// Big hairline row at the bottom of a page pointing to the next one.
export default function NextRow({ href, label }) {
  return (
    <section className="container pp-next">
      <Link href={href} className="pp-next-link">
        <span>Next</span>
        <strong>{label}</strong>
        <svg viewBox="0 0 20 20" width="28" height="28" aria-hidden="true" className="arrow">
          <path d="M4 10h11M11 5.5 15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  );
}

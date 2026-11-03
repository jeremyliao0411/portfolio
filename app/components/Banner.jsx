import Image from "next/image";
import { photos } from "../content";

// Full-bleed band: photo when `photo` is set, plain navy otherwise. `as="h1"` on page headers, a plain divider otherwise.
export default function Banner({ photo, title, sub, as: Tag = "h2", size = "page", children }) {
  const p = photo ? photos[photo] : null;
  return (
    <section className={`banner banner-${size}${p ? "" : " banner-plain"}`}>
      {p && <Image src={p.src} alt="" fill priority={Tag === "h1"} sizes="100vw" className={`banner-img banner-img-${photo}`} />}
      {p && <div className="banner-shade" />}
      <div className="container banner-copy">
        {title && <Tag>{title}</Tag>}
        {sub && <p>{sub}</p>}
        {children}
      </div>
    </section>
  );
}

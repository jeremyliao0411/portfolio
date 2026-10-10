import "@fontsource-variable/newsreader";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import "./globals.css";
import { profile } from "./content";

export const metadata = {
  title: `${profile.short} | Business & Data Analyst`,
  description: profile.intro,
  openGraph: { title: `${profile.short} | Business & Data Analyst`, description: profile.intro, images: ["/jeremy.jpg"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

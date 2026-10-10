import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import { profile } from "./content";

export const metadata = {
  title: `${profile.name} | What Matters`,
  description: profile.metaDescription,
  openGraph: { title: `${profile.fullName}`, description: profile.metaDescription, images: [profile.portrait.src] },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

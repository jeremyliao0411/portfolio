import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/500.css";
import "@fontsource/geist-sans/600.css";
import "./globals.css";
import "./premium.css";
import { profile } from "./content";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata = {
  metadataBase: new URL("https://jeremyliao.vercel.app"),
  title: { default: `${profile.fullName}`, template: `%s | ${profile.name}` },
  description: profile.metaDescription,
  openGraph: { title: profile.fullName, description: profile.metaDescription, images: [profile.portrait.src] },
};

export const viewport = { width: "device-width", initialScale: 1, colorScheme: "only light" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

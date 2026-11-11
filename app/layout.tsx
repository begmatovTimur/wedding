import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/great-vibes/400.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samandar ❤ Mo‘mina — To‘yga taklifnoma",
  description:
    "18-noyabr, 18:00 — Buxoro shahri, “Sherbudin” to‘yxonasi. Sizni kutib qolamiz!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}

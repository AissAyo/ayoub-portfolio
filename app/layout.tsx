import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Ayoub Aissaoui — Junior Full Stack Developer",
  description: "Portfolio of Ayoub Aissaoui, a Junior Full Stack Developer based in Morocco.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="noise">
        {children}
        <Analytics />
        </body>
    </html>
  );
}


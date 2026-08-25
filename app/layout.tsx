import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "Brothers Bartenders — Barmani na wesela, imprezy firmowe, pokazy barmańskie",
  description: "Pozwól, aby Brothers Bartenders przenieśli Cię w świat pełen kolorowych, światowej klasy koktajli.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#050505] text-white font-sans antialiased">{children}</body>
    </html>
  );
}
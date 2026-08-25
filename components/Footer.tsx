"use client";

import Link from "next/link";

const navLinks = [
  { href: "/#start", label: "Start" },
  { href: "/#o-nas", label: "O nas" },
  { href: "/#oferta", label: "Oferta" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#kontakt", label: "Kontakt" },
];

const socials = [
  { href: "#", icon: "mdi:instagram", label: "Instagram" },
  { href: "#", icon: "mdi:facebook", label: "Facebook" },
  { href: "#", icon: "ic:baseline-tiktok", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer id="kontakt" className="relative border-t border-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <span className="font-serif text-[#C9A84C] text-2xl font-bold leading-none">BB</span>
              <span className="text-[0.6rem] font-medium tracking-[0.15em] uppercase text-[#555] leading-tight">Brothers<br/>Bartenders</span>
            </Link>
            <p className="text-[#444] text-[0.82rem] leading-[1.8] max-w-xs">
              Barmani na wesela, imprezy firmowe i pokazy barmańskie. Przenosimy Cię w świat pełen kolorowych, światowej klasy koktajli.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#555] mb-5">Nawigacja</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#444] text-[0.85rem] hover:text-[#C9A84C] transition-colors duration-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#555] mb-5">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:kontakt@brothersbartenders.pl" className="text-[#444] text-[0.85rem] hover:text-[#C9A84C] transition-colors duration-300 break-all">kontakt@brothersbartenders.pl</a>
              </li>
              <li>
                <a href="tel:+48000000000" className="text-[#444] text-[0.85rem] hover:text-[#C9A84C] transition-colors duration-300">+48 000 000 000</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#555] mb-5">Social media</h4>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#1A1A1A] flex items-center justify-center text-[#555] hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all duration-300"
                  aria-label={s.label}
                >
                  <span className="iconify" data-icon={s.icon} data-width="18" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#111] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[#333] text-[0.72rem] tracking-wide">
            © {new Date().getFullYear()} Brothers Bartenders. Wszystkie prawa zastrzeżone.
          </span>
          <span className="text-[#222] text-[0.65rem] tracking-wide">
            Est. 2017
          </span>
        </div>
      </div>
    </footer>
  );
}
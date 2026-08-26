"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/o-nas", label: "O nas" },
  { href: "/wesela", label: "Wesela" },
  { href: "/eventy", label: "Eventy" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.08]">
      <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-6 xl:px-10 pt-16 lg:pt-20 pb-8">
        {/* Sekcja górna: Duże logo + Social Media (wycentrowane) */}
        <div className="flex flex-col items-center text-center pb-12 border-b border-white/[0.08]">
          <Link href="/" className="shrink-0 mb-8">
            <Image
              src="/logo.png"
              alt="Brothers Bartenders"
              width={300}
              height={85}
              className="h-[70px] w-auto brightness-0 invert"
              priority={false}
            />
          </Link>

          <div className="flex items-center gap-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#0E7490] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#0E7490] transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#0E7490] transition-colors duration-300"
              aria-label="TikTok"
            >
              <FaTiktok size={16} />
            </a>
          </div>
        </div>

        {/* Główna siatka 3-kolumnowa (równo rozłożona) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 py-12">
          {/* Kolumna 1: Nawigacja */}
          <div>
            <h4 className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/50 mb-5">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 text-sm hover:text-[#0E7490] transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolumna 2: Kontakt */}
          <div>
            <h4 className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/50 mb-5">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:kontakt@brothersbartenders.pl"
                  className="flex items-start gap-3 text-white/50 text-sm hover:text-[#0E7490] transition-colors duration-300"
                >
                  <MdEmail
                    size={16}
                    className="text-[#0E7490] mt-0.5 shrink-0"
                  />
                  kontakt@brothersbartenders.pl
                </a>
              </li>
              <li>
                <a
                  href="tel:+48000000000"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-[#0E7490] transition-colors duration-300"
                >
                  <MdPhone size={15} className="text-[#0E7490] shrink-0" />
                  +48 000 000 000
                </a>
              </li>
            </ul>
          </div>

          {/* Kolumna 3: Informacje */}
          <div>
            <h4 className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/50 mb-5">
              Informacje
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/polityka-prywatnosci"
                  className="text-white/50 text-sm hover:text-[#0E7490] transition-colors duration-300"
                >
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link
                  href="/rodo"
                  className="text-white/50 text-sm hover:text-[#0E7490] transition-colors duration-300"
                >
                  RODO
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Dolna belka Copyright i Realizacja */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} Brothers Bartenders · Wszystkie prawa
            zastrzeżone
          </p>

          <a
            href="https://klaudiuszdev.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 text-neutral-600 hover:text-[#0E7490] transition-colors duration-300"
          >
            <span className="text-xs tracking-wider">
              Realizacja: klaudiuszdev.pl
            </span>
            {/* Używamy tagu img dla zewnętrznego SVG, aby uniknąć problemów z konfiguracją Next.js (next.config.js domains) */}
            <img
              src="https://klaudiuszdev.pl/hello.svg"
              alt="Klaudiuszdev"
              className="w-4 h-4 brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

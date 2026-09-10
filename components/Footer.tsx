import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const GOLD_COLOR = "#C5A059";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "#o-nas", label: "O nas" },
  { href: "#oferta", label: "Oferta" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.08]">
      <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-6 xl:px-10 pt-16 lg:pt-20 pb-8">
        <div className="flex flex-col items-center text-center pb-12 border-b border-white/[0.08]">
          <Link href="/" className="shrink-0 mb-8">
            <Image
              src="/logo.png"
              alt="Brothers Bartenders"
              width={300}
              height={85}
              className="h-[120px] w-auto brightness-0 invert"
              priority={false}
            />
          </Link>

          <div className="flex items-center gap-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#C5A059] transition-colors duration-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#C5A059] transition-colors duration-300"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#C5A059] transition-colors duration-300"
            >
              <FaTiktok size={16} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 py-12">
          <div>
            <h4 className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/50 mb-5">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 text-sm hover:text-[#C5A059] transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/50 mb-5">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:kontakt@brothersbartenders.pl"
                  className="flex items-start gap-3 text-white/50 text-sm hover:text-[#C5A059] transition-colors duration-300"
                >
                  <MdEmail
                    size={16}
                    className="text-[#C5A059] mt-0.5 shrink-0"
                  />
                  kontakt@brothersbartenders.pl
                </a>
              </li>
              <li>
                <a
                  href="tel:+48000000000"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-[#C5A059] transition-colors duration-300"
                >
                  <MdPhone size={15} className="text-[#C5A059] shrink-0" />
                  +48 000 000 000
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/50 mb-5">
              Informacje
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/polityka-prywatnosci"
                  className="text-white/50 text-sm hover:text-[#C5A059] transition-colors duration-300"
                >
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link
                  href="/rodo"
                  className="text-white/50 text-sm hover:text-[#C5A059] transition-colors duration-300"
                >
                  RODO
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} Brothers Bartenders · Wszystkie prawa
            zastrzeżone
          </p>

          <a
            href="https://klaudiuszdev.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 text-neutral-600 hover:text-[#C5A059] transition-colors duration-300"
          >
            <span className="text-xs tracking-wider">
              Realizacja: klaudiuszdev.pl
            </span>
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

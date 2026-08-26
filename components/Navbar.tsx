"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, Fragment } from "react";
import { MdMenu, MdClose, MdArrowOutward } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const links = [
  { href: "/", label: "Start" },
  { href: "/o-nas", label: "O nas" },
  { href: "/oferta", label: "Oferta" },
  { href: "/wesela", label: "Wesela" },
  { href: "/eventy", label: "Eventy" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/kontakt", label: "Kontakt" },
];

const socials = [
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaFacebookF, label: "Facebook" },
  { href: "#", icon: FaTiktok, label: "TikTok" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onEsc]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-white/95 backdrop-blur-xl shadow-[0_4px_50px_rgba(0,0,0,0.06)] border-b border-gray-100 text-black"
            : "top-0 md:top-10 bg-black/40 backdrop-blur-xl border-b border-white/10 text-white"
        }`}
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-6 xl:px-10">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="relative z-10 shrink-0">
              <Image
                src="/logo.png"
                alt="Brothers Bartenders"
                width={180}
                height={50}
                className={`h-12 w-auto transition-all duration-500 ${
                  !scrolled ? "brightness-0 invert" : ""
                }`}
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center">
              {links.map((l, i) => (
                <Fragment key={l.href}>
                  <Link
                    href={l.href}
                    className={`relative px-3 py-2 font-poppins text-[0.7rem] font-medium tracking-[0.04em] uppercase transition-colors duration-300 ${
                      isActive(l.href)
                        ? scrolled
                          ? "text-[#0E7490]"
                          : "text-white"
                        : scrolled
                          ? "text-[#666] hover:text-black"
                          : "text-white/60 hover:text-white"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                        isActive(l.href)
                          ? scrolled
                            ? "w-4 bg-[#0E7490] opacity-100"
                            : "w-4 bg-white opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    />
                  </Link>
                  {i < links.length - 1 && (
                    <span
                      className={`mx-1 select-none text-xs ${
                        scrolled ? "text-gray-300" : "text-white/20"
                      }`}
                    >
                      /
                    </span>
                  )}
                </Fragment>
              ))}
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="hidden lg:flex items-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-300 ${
                      scrolled
                        ? "text-[#bbb] hover:text-[#0E7490]"
                        : "text-white/40 hover:text-white"
                    }`}
                    aria-label={s.label}
                  >
                    <s.icon size={13} />
                  </a>
                ))}
              </div>

              <div
                className={`hidden lg:block h-4 w-px ${
                  scrolled ? "bg-gray-200" : "bg-white/20"
                }`}
              />

              <Link
                href="/kontakt"
                className={`hidden lg:inline-flex items-center gap-2 px-6 py-2.5 font-poppins text-[0.65rem] font-semibold tracking-[0.06em] uppercase rounded-full transition-all duration-300 ${
                  scrolled
                    ? "bg-black text-white hover:bg-[#0E7490]"
                    : "bg-white text-black hover:bg-[#0E7490] hover:text-white"
                }`}
              >
                Rezerwuj
                <MdArrowOutward size={13} />
              </Link>

              <button
                onClick={() => setOpen(true)}
                className={`lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-xl border transition-colors duration-300 ${
                  scrolled
                    ? "bg-[#f5f5f5] border-gray-200 text-[#333] hover:border-gray-400"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
                aria-label="Menu"
              >
                <MdMenu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 h-1/2 bg-black z-[45] border-t border-white/10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="relative h-full flex flex-col px-6 pt-6 pb-10 max-w-[1080px] xl:max-w-[1400px] mx-auto">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors duration-300"
              aria-label="Zamknij menu"
            >
              <MdClose size={20} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center gap-0">
            {links.map((l, i) => (
              <Fragment key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-4 font-poppins text-2xl font-semibold tracking-[0.02em] transition-colors ${
                    isActive(l.href)
                      ? "text-[#0E7490]"
                      : "text-white/40 hover:text-white"
                  }`}
                  style={{
                    transitionDelay: open ? `${i * 50}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(20px)",
                    transitionProperty: "all",
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    transitionDuration: "0.4s",
                  }}
                >
                  {l.label}
                </Link>
                {i < links.length - 1 && (
                  <div className="flex justify-center">
                    <span className="w-8 h-px bg-white/10 block" />
                  </div>
                )}
              </Fragment>
            ))}
          </nav>

          <div
            className="flex flex-col items-center gap-6"
            style={{
              transitionDelay: open ? "350ms" : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transitionProperty: "all",
              transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              transitionDuration: "0.4s",
            }}
          >
            <div className="flex items-center gap-6 mb-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0E7490] text-white font-poppins text-[0.72rem] font-semibold tracking-[0.05em] uppercase rounded-full"
            >
              Zarezerwuj termin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

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

      {/* MENU MOBILNE - NAPRAWIONE */}
      {/* MENU MOBILNE */}
      <div
        className={`lg:hidden fixed inset-x-0 bottom-0 z-[45] h-[78dvh] max-h-[680px] bg-black border-t border-white/10 rounded-t-[28px] shadow-[0_-20px_60px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="h-full max-w-[520px] mx-auto px-5 pt-4 pb-[max(16px,env(safe-area-inset-bottom))] flex flex-col">
          {/* uchwyt */}
          <div className="flex justify-center mb-3">
            <span className="w-9 h-1 rounded-full bg-white/15" />
          </div>

          {/* header */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-poppins text-[10px] uppercase tracking-[0.16em] text-white/30">
              Menu
            </span>

            <button
              onClick={() => setOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
              aria-label="Zamknij menu"
            >
              <MdClose size={18} />
            </button>
          </div>

          {/* nawigacja */}
          <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
            {links.map((l, i) => (
              <Fragment key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-3.5 font-poppins text-[1.35rem] font-medium tracking-[-0.02em] transition-all duration-300 ${
                    isActive(l.href)
                      ? "text-[#0E7490]"
                      : "text-white/65 hover:text-white"
                  }`}
                  style={{
                    transitionDelay: open ? `${i * 35}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  <span>{l.label}</span>

                  <MdArrowOutward
                    size={17}
                    className={`transition-all duration-300 ${
                      isActive(l.href)
                        ? "opacity-100"
                        : "opacity-0 -translate-x-2"
                    }`}
                  />
                </Link>

                {i < links.length - 1 && (
                  <div className="h-px bg-white/[0.07]" />
                )}
              </Fragment>
            ))}
          </nav>

          {/* dół */}
          <div
            className="pt-3 border-t border-white/10"
            style={{
              transitionDelay: open ? "280ms" : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(12px)",
              transitionProperty: "all",
              transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              transitionDuration: "0.4s",
            }}
          >
            <div className="flex items-center justify-between gap-4">
              {/* social media */}
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/25 transition-all duration-300"
                    aria-label={s.label}
                  >
                    <s.icon size={14} />
                  </a>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E7490] text-white font-poppins text-[0.65rem] font-semibold tracking-[0.05em] uppercase rounded-full hover:bg-[#0b6076] transition-colors duration-300"
              >
                Rezerwuj
                <MdArrowOutward size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

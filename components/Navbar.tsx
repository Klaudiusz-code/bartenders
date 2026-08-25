"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const links = [
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onEsc = useCallback((e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); }, []);
  useEffect(() => { window.addEventListener("keydown", onEsc); return () => window.removeEventListener("keydown", onEsc); }, [onEsc]);

  const close = () => setOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#050505]/90 backdrop-blur-2xl border-b border-[#1A1A1A]" : "bg-transparent"}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative z-10 flex items-center gap-3 shrink-0" onClick={close}>
            <span className="font-serif text-[#C9A84C] text-2xl font-bold leading-none">BB</span>
            <span className="hidden sm:block text-[0.6rem] font-medium tracking-[0.15em] uppercase text-[#555] leading-tight">Brothers<br/>Bartenders</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0 absolute left-1/2 -translate-x-1/2">
            {links.map((l, i) => (
              <div key={l.href} className="flex items-center">
                <Link href={l.href} className="nav-link px-5 py-2 text-[0.78rem] font-medium tracking-[0.06em] uppercase text-[#555] hover:text-white transition-colors" onClick={close}>{l.label}</Link>
                {i < links.length - 1 && <span className="w-px h-3.5 bg-[#1A1A1A] mx-0.5" />}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-3 mr-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-[#C9A84C] transition-colors" aria-label={s.label}>
                  <span className="iconify" data-icon={s.icon} data-width="18" />
                </a>
              ))}
            </div>
            <Link href="/#kontakt" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C9A84C] text-[#050505] text-[0.7rem] font-semibold tracking-[0.08em] uppercase rounded-[3px] hover:bg-[#E0C068] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A84C]/20 transition-all duration-300">
              Rezerwuj
              <span className="iconify" data-icon="mdi:arrow-right" data-width="14" />
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-[5px]" aria-label="Menu">
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 bg-[#050505] transition-all duration-500 flex flex-col items-center justify-center gap-7 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {links.map((l, i) => (
          <Link key={l.href} href={l.href} onClick={close} className="text-[1.4rem] font-bold tracking-[0.08em] uppercase text-[#333] hover:text-white transition-colors" style={{ transitionDelay: open ? `${i * 60}ms` : "0ms", transform: open ? "translateY(0)" : "translateY(20px)", opacity: open ? 1 : 0, transitionProperty: "all", transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)", transitionDuration: "0.5s" }}>{l.label}</Link>
        ))}
        <Link href="/#kontakt" onClick={close} className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C9A84C] text-[#050505] text-[0.72rem] font-semibold tracking-[0.08em] uppercase rounded-[3px] mt-4" style={{ transitionDelay: open ? "350ms" : "0ms", transform: open ? "translateY(0)" : "translateY(20px)", opacity: open ? 1 : 0, transitionProperty: "all", transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)", transitionDuration: "0.5s" }}>Zarezerwuj termin</Link>
        <div className="flex items-center gap-5 mt-8" style={{ transitionDelay: open ? "450ms" : "0ms", transform: open ? "translateY(0)" : "translateY(20px)", opacity: open ? 1 : 0, transitionProperty: "all", transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)", transitionDuration: "0.5s" }}>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-[#C9A84C] transition-colors" aria-label={s.label}>
              <span className="iconify" data-icon={s.icon} data-width="22" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
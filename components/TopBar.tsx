"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";

const socials = [
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaFacebookF, label: "Facebook" },
  { href: "#", icon: FaTiktok, label: "TikTok" },
];

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/[0.06] transition-all duration-300 ${
        scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-6 xl:px-10 h-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="tel:+48000000000"
            className="flex items-center gap-2 text-white/50 hover:text-white font-poppins text-[0.65rem] tracking-wide transition-colors duration-300"
          >
            <MdPhone size={13} className="text-[#C5A059]" />
            +48 000 000 000
          </a>
          <span className="w-px h-3 bg-white/10" />
          <a
            href="mailto:kontakt@brothersbartenders.pl"
            className="flex items-center gap-2 text-white/50 hover:text-white font-poppins text-[0.65rem] tracking-wide transition-colors duration-300"
          >
            <MdEmail size={13} className="text-[#C5A059]" />
            kontakt@brothersbartenders.pl
          </a>
        </div>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors duration-300"
              aria-label={s.label}
            >
              <s.icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";

interface TopbarProps {
  settings?: {
    numerTelefonuDoWojtka?: string;
    numerTelefonuDoMichala?: string;
    email?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
}

export default function Topbar({ settings }: TopbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const socials = [
    { href: settings?.instagram || "#", icon: FaInstagram, label: "Instagram" },
    { href: settings?.facebook || "#", icon: FaFacebookF, label: "Facebook" },
    { href: settings?.tiktok || "#", icon: FaTiktok, label: "TikTok" },
  ];

  return (
    <div
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/[0.06] transition-all duration-300 ${
        scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-6 xl:px-10 h-10 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 md:gap-4 border-r border-white/10 pr-4">
            <a
              href={`tel:${settings?.numerTelefonuDoWojtka || ""}`}
              className="flex items-center gap-1.5 text-white/50 hover:text-white font-poppins text-[0.6rem] md:text-[0.65rem] tracking-wide transition-colors duration-300"
            >
              <MdPhone size={13} className="text-[#C5A059]" />
              <span className="hidden sm:inline text-white/30 mr-1">
                Wojtek:
              </span>
              {settings?.numerTelefonuDoWojtka || "Brak numeru"}
            </a>

            <span className="w-px h-3 bg-white/10 hidden sm:block" />

            <a
              href={`tel:${settings?.numerTelefonuDoMichala || ""}`}
              className="flex items-center gap-1.5 text-white/50 hover:text-white font-poppins text-[0.6rem] md:text-[0.65rem] tracking-wide transition-colors duration-300"
            >
              <MdPhone size={13} className="text-[#C5A059]" />
              <span className="hidden sm:inline text-white/30 mr-1">
                Michał:
              </span>
              {settings?.numerTelefonuDoMichala || "Brak numeru"}
            </a>
          </div>

          <a
            href={`mailto:${settings?.email || ""}`}
            className="flex items-center gap-2 text-white/50 hover:text-white font-poppins text-[0.65rem] tracking-wide transition-colors duration-300"
          >
            <MdEmail size={13} className="text-[#C5A059]" />
            {settings?.email || "kontakt@brothersbartenders.pl"}
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

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => ref.current?.classList.add("hero-loaded"), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={ref} id="start" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://picsum.photos/seed/cocktail-bar-dark-luxury/1920/1080.jpg" alt="" className="w-full h-full object-cover opacity-[0.12] scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />

      <div className="hero-anim hero-line absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent z-20" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="hero-anim hd1">
          <span className="inline-block text-[0.58rem] font-bold tracking-[0.4em] uppercase text-[#C9A84C]/50 mb-10">Barmańska eksperencja</span>
        </div>

        <h1 className="font-serif font-bold leading-[0.88] tracking-[-0.02em] mb-8">
          <span className="hero-anim hd2 block text-white" style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}>Brothers</span>
          <span className="hero-anim hd3 block mt-1" style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)", background: "linear-gradient(90deg, #C9A84C 0%, #E0C068 25%, #fff 50%, #E0C068 75%, #C9A84C 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 4s linear infinite" }}>Bartenders</span>
        </h1>

        <div className="hero-anim hd4 w-12 h-px bg-gradient-to-r from-[#C9A84C]/60 to-transparent mx-auto mb-8" />

        <p className="hero-anim hd5 text-[0.88rem] md:text-[0.95rem] text-[#666] max-w-md mx-auto leading-[1.85]">
          Pozwól, aby Brothers Bartenders przenieśli Cię w świat pełen kolorowych, światowej klasy koktajli, dobrej zabawy i radości.
        </p>

        <div className="hero-anim hd6 flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link href="/#oferta" className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#C9A84C] text-[#050505] text-[0.72rem] font-semibold tracking-[0.08em] uppercase rounded-[3px] hover:bg-[#E0C068] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A84C]/20 transition-all duration-300">
            <span>Poznaj ofertę</span>
            <span className="iconify" data-icon="mdi:arrow-right" data-width="14" />
          </Link>
          <Link href="/#o-nas" className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-transparent text-white text-[0.72rem] font-semibold tracking-[0.08em] uppercase rounded-[3px] border border-[#333] hover:border-[#C9A84C] hover:text-[#C9A84C] hover:-translate-y-0.5 transition-all duration-300">Nasza historia</Link>
        </div>

        <div className="hero-anim hd7 mt-16">
          <span className="inline-block text-[0.52rem] font-bold tracking-[0.4em] uppercase text-[#2a2a2a] border border-[#1A1A1A] rounded-full px-5 py-2">Est. 2017</span>
        </div>
      </div>

      <div className="hero-anim hd7 absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2.5" style={{ animation: "bounceSoft 2.5s ease-in-out infinite" }}>
          <span className="text-[0.5rem] tracking-[0.4em] uppercase text-[#222] font-medium">Scroll</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-20"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MdArrowOutward } from "react-icons/md";
import { FaFire, FaLeaf, FaMagic, FaMusic } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import Topbar from "@/components/TopBar";

const timeline = [
  {
    year: "2017",
    title: "Pierwsze kroki",
    desc: "Wszystko zaczęło się w małym barze w centrum Warszawy. Z połączenia pasji i przypadku zrodziło się partnerstwo.",
  },
  {
    year: "2019",
    title: "Pierwsze wielkie wesela",
    desc: "Zostaliśmy zauważeni przez agencje eventowe. Zrobiliśmy pierwszy duży show flair na 300 gości.",
  },
  {
    year: "2021",
    title: "Międzynarodowe szkolenia",
    desc: "Lecieliśmy do Londynu i Nowego Jorku, aby uczyć się u najlepszych na świecie.",
  },
  {
    year: "2023",
    title: "200+ Zrealizowanych Eventów",
    desc: "Przekroczyliśmy magiczną barierę. Dziś jesteśmy jednym z najbardziej rozpoznawalnych duetów w Polsce.",
  },
];

const craft = [
  {
    icon: FaFire,
    title: "Flair Bartending",
    desc: "Latające butelki, ogień i choreografia. Show, który zapiera dech w piersiach.",
  },
  {
    icon: FaMagic,
    title: "Craft Mixology",
    desc: "Precyzyjne odmierzanie, balans smakowy i autorskie kompozycje.",
  },
  {
    icon: FaLeaf,
    title: "Premium Składniki",
    desc: "Tylko świeże owoce, domowe syropy i alkohole najwyższej jakości.",
  },
  {
    icon: FaMusic,
    title: "Event Vibe",
    desc: "Muzyka, interakcja z gośćmi i energia, która tworzy niesamowity klimat.",
  },
];

const faqs = [
  {
    q: "Jak szybko powinienem zarezerwować termin?",
    a: "Najlepiej skontaktować się z nami chociaż 3-6 miesięcy przed wydarzeniem, zwłaszcza jeśli planujecie wesele w sezonie (maj-wrzesień).",
  },
  {
    q: "Czy obsługujecie mniejsze imprezy prywatne?",
    a: "Oczywiście. Nie ma dla nas zbyt małych czy zbyt dużych zleceń. Domówka na 20 osób traktowana jest z takim samym profesjonalizmem jak gala na 500 osób.",
  },
  {
    q: "Czy muszę zapewnić sprzęt i składniki?",
    a: "Nie. Przyjeżdżamy ze wszystkim — od szkła i shakerów po świeże owoce, syropy i alkohole premium. Jedyne, o co prosimy, to dostęp do prądu i blatu.",
  },
  {
    q: "Czy można zarezerwować pokaz flair osobno?",
    a: "Tak. Pokazy barmańskie można wynająć jako dodatkową atrakcję na imprezie, niezależnie od pełnej obsługi koktajlowej.",
  },
];

export default function ONas() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".anim, .anim-left, .anim-right, .anim-scale")
              .forEach((el) => el.classList.add("visible"));
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll("[data-observe]").forEach((el) => ob.observe(el));
    return () => ob.disconnect();
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-[72px] md:pt-[112px] bg-black">
        <div className="relative h-[55vh] md:h-[65vh] min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2670&auto=format&fit=crop"
            alt="Brothers Bartenders"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-20">
            <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-5 sm:px-6 xl:px-10">
              <span className="font-poppins inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490] mb-4">
                <span className="w-5 h-px bg-[#0E7490]/40" /> O nas
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[0.95]">
                Poznaj nasz <span className="text-[#0E7490]">zespół</span>
              </h1>
              <p className="font-poppins text-white/60 text-sm sm:text-base mt-6 max-w-lg leading-relaxed">
                Jesteśmy braćmi, którzy przekulili wspólną pasję w jeden z
                najbardziej rozpoznawalnych duetów barmańskich w Polsce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NASZA HISTORIA */}
      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-white"
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="anim-left lg:sticky lg:top-28">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 relative group">
              <Image
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
                alt="Bracia za barem"
                width={800}
                height={1066}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-poppins text-white/60 text-xs tracking-wider uppercase mb-1">
                    Założyciele
                  </p>
                  <p className="font-serif text-white text-xl font-bold">
                    Brothers Bartenders
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <span className="font-serif text-white text-sm font-bold">
                    BB
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-6">
              <span className="w-5 h-px bg-[#0E7490]/40" /> Nasza historia
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] font-bold leading-[1.05] text-black mb-8 tracking-tight">
              Otrzymaliśmy <span className="text-[#0E7490]">dar i pasję</span>
            </h2>
            <div className="space-y-6">
              <p className="anim d2 font-poppins text-gray-500 text-[0.95rem] leading-[1.85]">
                Wszystko zaczęło się w małym barze w centrum Warszawy. Jeden z
                nas kończył szkolenie, drugi miał za sobą pierwsze zawody.
                Krótkie „hej, pomogę ci z tą techniką” przerodziło się w
                partnerstwo, które trwa do dziś.
              </p>
              <p className="anim d3 font-poppins text-gray-500 text-[0.95rem] leading-[1.85]">
                Poprzez wieloletnią ciężką pracą za barem nauczyliśmy się
                tworzyć wokół siebie miejsce wyjątkowe, beztroskie i pełne
                pozytywnej energii. Tworzymy markę, która kojarzyć się będzie z
                niezapomnianymi wrażeniami i wysoką jakością.
              </p>
            </div>
            <div className="anim d4 grid grid-cols-2 gap-6 mt-12 pt-10 border-t border-gray-100">
              {[
                { num: "8+", label: "Lat doświadczenia" },
                { num: "500+", label: "Obsłużonych eventów" },
                { num: "12", label: "Nagród i wyróżnień" },
                { num: "3", label: "Kraje szkoleń" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl font-bold text-[#0E7490]">
                    {s.num}
                  </div>
                  <div className="font-poppins text-gray-400 text-xs mt-1 tracking-wider uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CYTAT */}
      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-black relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(14,116,144,0.15) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <div className="anim w-16 h-px bg-[#0E7490]/40 mx-auto mb-10" />
          <blockquote className="anim d1 font-serif text-3xl md:text-[2.8rem] lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-8">
            Nie robimy drinków.{" "}
            <span className="text-[#0E7490]">Tworzymy wspomnienia.</span>
          </blockquote>
          <p className="anim d2 font-poppins text-white/40 text-sm md:text-base leading-[1.85] max-w-xl mx-auto">
            Wierzymy, że każdy koktajl to nie tylko smak, to emocja, która
            towarzyszy najważniejszym chwilom w Waszym życiu.
          </p>
        </div>
      </section>

      {/* TIMELINE - NAPRAWIONY RWD */}
      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-white"
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" /> Nasza droga
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] font-bold leading-[1.05] text-black tracking-tight">
              Kluczowe <span className="text-[#0E7490]">momentu</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Linia pionowa Desktop (środek) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-200 -translate-x-1/2" />
            {/* Linia pionowa Mobile (lewo) */}
            <div className="md:hidden absolute top-0 bottom-0 left-[19px] w-px bg-gray-200" />

            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`anim d${Math.min(i + 1, 4)} relative`}
                >
                  {/* Kropka z rokiem */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 -translate-x-1/2 rounded-full bg-white border-4 border-[#0E7490] flex items-center justify-center shadow-lg shadow-[#0E7490]/20 z-10">
                    <span className="font-poppins text-[#0E7490] text-[0.55rem] font-bold">
                      {item.year}
                    </span>
                  </div>

                  {/* Treść - na desktopie flex ze zmianą kierunku, na mobile zwykły padding */}
                  <div
                    className={`pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Lewa kolumna */}
                    <div
                      className={`${i % 2 !== 0 ? "md:order-2 md:text-left" : "md:text-right"} ${i % 2 === 0 ? "" : "hidden md:block"}`}
                    >
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-black mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-gray-500 text-sm leading-[1.85]">
                        {item.desc}
                      </p>
                    </div>

                    {/* Prawa kolumna (przerwa na desktopie) */}
                    <div
                      className={`${i % 2 !== 0 ? "md:order-1" : ""} hidden md:block`}
                    ></div>

                    {/* Duplikat tekstu na mobile (zawsze widoczny) */}
                    <div className="md:hidden mt-1">
                      <h3 className="font-serif text-xl font-bold text-black mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-gray-500 text-sm leading-[1.85]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NASZ KUNSZT */}
      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-gray-50/50"
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" /> Nasz kunszt
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] font-bold leading-[1.05] text-black tracking-tight">
              Czym się <span className="text-[#0E7490]">wyróżniamy</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {craft.map((c, i) => (
              <div
                key={c.title}
                className={`anim-scale d${Math.min(i + 1, 4)} bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 group hover:border-[#0E7490]/20 hover:shadow-xl hover:shadow-[#0E7490]/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-[#0E7490] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                <div className="w-14 h-14 rounded-2xl bg-[#0E7490]/10 flex items-center justify-center mb-6 group-hover:bg-[#0E7490] transition-colors duration-300">
                  <c.icon
                    size={24}
                    className="text-[#0E7490] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-black mb-3 leading-tight relative z-10">
                  {c.title}
                </h3>
                <p className="font-poppins text-gray-400 text-sm leading-[1.8] relative z-10">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - NAPRAWIONY */}
      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-[#0a0a0a] relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(14,116,144,0.12) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="anim font-serif text-3xl md:text-[2.8rem] font-bold text-white mb-6 tracking-tight">
            Chcesz współpracować z{" "}
            <span className="text-[#0E7490]">profesjonalistami</span>?
          </h2>
          <p className="anim d1 font-poppins text-white/50 text-[0.95rem] leading-[1.85] mb-10 max-w-lg mx-auto">
            Poznajmy się osobiście. Gwarantujemy, że nasza energia i
            zaangażowanie przekroczą Wasze oczekiwania.
          </p>
          <Link
            href="/kontakt"
            className="anim d2 group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#0E7490] to-[#0B9AAA] text-white font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase rounded-full hover:shadow-2xl hover:shadow-[#0E7490]/30 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Napisz do nas</span>
            <MdArrowOutward
              size={16}
              className="transition-transform group-hover:rotate-45"
            />
          </Link>
        </div>
      </section>

      {/* FAQ - NAPRAWIONY */}
      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-gray-50"
      >
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" /> FAQ
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] font-bold text-black tracking-tight">
              Często zadawane <span className="text-[#0E7490]">pytania</span>
            </h2>
          </div>
          <div className="space-y-3 md:space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className={`anim d${Math.min(i + 1, 4)}`}>
                <div
                  className={`bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md ${openFaq === i ? "border-[#0E7490]/20 shadow-lg shadow-[#0E7490]/5" : ""}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-5 sm:p-6 text-left group"
                  >
                    <span className="font-poppins text-black text-sm font-medium pr-4 group-hover:text-[#0E7490] transition-colors">
                      {f.q}
                    </span>
                    <BiChevronDown
                      size={22}
                      className={`text-[#0E7490] transition-transform duration-300 shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-poppins text-gray-500 text-sm leading-relaxed pb-6 px-5 sm:px-6">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

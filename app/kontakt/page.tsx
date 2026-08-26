"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { MdCheck, MdEmail, MdPhone, MdSend } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import Topbar from "@/components/TopBar";

const socials = [
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaFacebookF, label: "Facebook" },
  { href: "#", icon: FaTiktok, label: "TikTok" },
];

const steps = [
  { step: "01", text: "Wysyłasz zapytanie przez formularz lub mailowo" },
  { step: "02", text: "Odzwaniamy i omawiamy szczegóły wydarzenia" },
  { step: "03", text: "Przygotowujemy spersonalizowane menu koktajlowe" },
  { step: "04", text: "Podpisujemy umowę i widzimy się na evencie" },
];

const faqs = [
  {
    q: "Jaki jest średni czas oczekiwania na odpowiedź?",
    a: "Staramy się odpowiadać na wszystkie zapytania w ciągu 24 godzin w dni robocze. Jeśli zależy Ci na czasie, zadzwoń do nas bezpośrednio.",
  },
  {
    q: "Czy wycena jest bezpłatna?",
    a: "Tak, przygotowanie wstępnej oferty i konsultacja są całkowicie darmowe i do niczego nie zobowiązują.",
  },
  {
    q: "Czy muszę znać dokładną liczbę gości przed kontaktem?",
    a: "Nie, wstępnej wyceny dokonujemy na podstawie szacunkowej liczby gości. Dokładne ilości możemy doprecyzować na kilkanaście dni przed wydarzeniem.",
  },
  {
    q: "Co jeśli moje dane w formularzu są niepełne?",
    a: "Nie przejmuj się. Napisz nam tyle, ile wiesz na ten moment, a my podczas rozmowy telefonicznej dopytamy o resztę szczegółów.",
  },
];

export default function Kontakt() {
  const [sent, setSent] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Topbar/>
      <Navbar />

      <section className="relative pt-[72px] md:pt-[112px] bg-black">
        <div className="relative h-[55vh] md:h-[65vh] min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2670&auto=format&fit=crop"
            alt="Kontakt z barmanami"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-20">
            <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-5 sm:px-6 xl:px-10">
              <span className="font-poppins inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490] mb-4">
                <span className="w-5 h-px bg-[#0E7490]/40" /> Kontakt
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[0.95]">
                Napisz do <span className="text-[#0E7490]">nas</span>
              </h1>
              <p className="font-poppins text-white/60 text-sm sm:text-base mt-6 max-w-lg leading-relaxed">
                Zarezerwuj termin lub zapytaj o wycenę. Odpowiadamy
                błyskawicznie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-white"
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3 anim-left">
            {sent ? (
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-20 h-20 rounded-full bg-[#0E7490]/10 flex items-center justify-center mx-auto mb-6">
                  <MdCheck size={36} className="text-[#0E7490]" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-black mb-3">
                  Dziękujemy za wiadomość!
                </h3>
                <p className="font-poppins text-gray-500 text-sm leading-relaxed max-w-sm">
                  Odezwiemy się w ciągu 24 godzin. W międzyczasie sprawdźcie
                  nasze social media.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black text-sm outline-none focus:border-[#0E7490] focus:ring-4 focus:ring-[#0E7490]/10 focus:bg-white transition-all font-poppins"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black text-sm outline-none focus:border-[#0E7490] focus:ring-4 focus:ring-[#0E7490]/10 focus:bg-white transition-all font-poppins"
                      placeholder="+48 000 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black text-sm outline-none focus:border-[#0E7490] focus:ring-4 focus:ring-[#0E7490]/10 focus:bg-white transition-all font-poppins"
                    placeholder="jan@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="block font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
                      Rodzaj wydarzenia
                    </label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black text-sm outline-none focus:border-[#0E7490] focus:ring-4 focus:ring-[#0E7490]/10 focus:bg-white transition-all appearance-none cursor-pointer font-poppins pr-12">
                      <option>Wybierz...</option>
                      <option>Wesele</option>
                      <option>Impreza firmowa</option>
                      <option>Pokaz barmański</option>
                      <option>Inne</option>
                    </select>
                    <BiChevronDown
                      size={18}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
                      Data wydarzenia
                    </label>
                    <input
                      type="date"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black text-sm outline-none focus:border-[#0E7490] focus:ring-4 focus:ring-[#0E7490]/10 focus:bg-white transition-all font-poppins"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black text-sm outline-none focus:border-[#0E7490] focus:ring-4 focus:ring-[#0E7490]/10 focus:bg-white transition-all resize-none font-poppins"
                    placeholder="Opowiedz o swoich planach, liczbie gości i oczekiwaniach..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 px-12 py-4 bg-black text-white font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase rounded-full hover:bg-[#0E7490] hover:shadow-xl hover:shadow-[#0E7490]/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <span>Wyślij zapytanie</span>
                  <MdSend
                    size={14}
                    className="transition-transform group-hover:rotate-45"
                  />
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 anim-right lg:sticky lg:top-28 self-start">
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-serif text-lg font-bold text-black mb-5">
                  Dane kontaktowe
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:kontakt@brothersbartenders.pl"
                    className="flex items-center gap-4 font-poppins text-gray-600 text-sm hover:text-[#0E7490] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#0E7490]/30 transition-colors shadow-sm">
                      <MdEmail size={16} className="text-[#0E7490]" />
                    </div>
                    kontakt@brothersbartenders.pl
                  </a>
                  <a
                    href="tel:+48000000000"
                    className="flex items-center gap-4 font-poppins text-gray-600 text-sm hover:text-[#0E7490] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#0E7490]/30 transition-colors shadow-sm">
                      <MdPhone size={16} className="text-[#0E7490]" />
                    </div>
                    +48 000 000 000
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-serif text-lg font-bold text-black mb-4">
                  Śledź nas
                </h3>
                <div className="flex items-center gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0E7490] hover:border-[#0E7490]/30 hover:shadow-sm transition-all duration-300"
                      aria-label={s.label}
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-serif text-lg font-bold text-black mb-6">
                  Jak to działa?
                </h3>
                <div className="space-y-0">
                  {steps.map((s, i) => (
                    <div key={s.step} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0E7490] shrink-0 mt-1.5 ring-4 ring-gray-50" />
                        {i < steps.length - 1 && (
                          <div className="w-px h-full bg-[#0E7490]/20 my-1" />
                        )}
                      </div>

                      <div
                        className={`pb-6 ${i === steps.length - 1 ? "pb-0" : ""}`}
                      >
                        <span className="font-poppins text-[#0E7490] text-xs font-bold tracking-wider">
                          {s.step}
                        </span>
                        <p className="font-poppins text-gray-600 text-sm leading-[1.7] mt-1">
                          {s.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Pytania o <span className="text-[#0E7490]">kontakt</span>
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

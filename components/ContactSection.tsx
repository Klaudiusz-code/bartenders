"use client";

import { useState } from "react";
import { MdCheck, MdEmail, MdPhone, MdSend } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const socials = [
  {
    href: "#",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "#",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "#",
    icon: FaTiktok,
    label: "TikTok",
  },
];

const steps = [
  {
    step: "01",
    text: "Wysyłasz zapytanie przez formularz lub mailowo",
  },
  {
    step: "02",
    text: "Odzwaniamy i omawiamy szczegóły wydarzenia",
  },
  {
    step: "03",
    text: "Przygotowujemy spersonalizowaną ofertę",
  },
  {
    step: "04",
    text: "Podpisujemy umowę i widzimy się na evencie",
  },
];

const faqs = [
  {
    q: "Jak szybko otrzymam odpowiedź?",
    a: "Staramy się odpowiadać na wszystkie zapytania w ciągu 24 godzin w dni robocze. Jeśli zależy Ci na czasie, możesz również zadzwonić do nas bezpośrednio.",
  },
  {
    q: "Czy wycena jest bezpłatna?",
    a: "Tak. Przygotowanie wstępnej oferty i konsultacja są całkowicie bezpłatne i do niczego nie zobowiązują.",
  },
  {
    q: "Czy muszę znać dokładną liczbę gości?",
    a: "Nie. Na początku wystarczy orientacyjna liczba gości. Dokładne szczegóły możemy ustalić później.",
  },
  {
    q: "Co jeśli nie znam jeszcze wszystkich szczegółów wydarzenia?",
    a: "Nie ma problemu. Napisz nam tyle, ile wiesz na ten moment, a podczas rozmowy wspólnie ustalimy resztę.",
  },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* KONTAKT */}
      <section
        id="kontakt"
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-white"
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto">
          {/* Nagłówek */}
          <div className="max-w-2xl mb-14 lg:mb-20">
            <span className="inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" />
              Kontakt
            </span>

            <h2 className="font-serif text-3xl md:text-[2.8rem] lg:text-[3.2rem] font-bold text-black leading-[1.05] tracking-tight mb-5">
              Sprawdźmy termin Twojego{" "}
              <span className="text-[#0E7490]">wydarzenia</span>
            </h2>

            <p className="font-poppins text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
              Napisz nam kilka informacji o swoim wydarzeniu. Przygotujemy
              ofertę dopasowaną do Twoich potrzeb.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* FORMULARZ */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-12 text-center min-h-[500px] flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#0E7490]/10 flex items-center justify-center mb-6">
                    <MdCheck size={36} className="text-[#0E7490]" />
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-black mb-3">
                    Dziękujemy za wiadomość!
                  </h3>

                  <p className="font-poppins text-gray-500 text-sm leading-relaxed max-w-sm">
                    Odezwiemy się tak szybko, jak to możliwe. W międzyczasie
                    możesz sprawdzić nasze realizacje i social media.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* IMIĘ + TELEFON */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
                        Imię i nazwisko *
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="Jan Kowalski"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black text-sm outline-none focus:border-[#0E7490] focus:ring-4 focus:ring-[#0E7490]/10 focus:bg-white transition-all font-poppins"
                      />
                    </div>

                    <div>
                      <label className="block font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
                        Telefon
                      </label>

                      <input
                        type="tel"
                        placeholder="+48 000 000 000"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black text-sm outline-none focus:border-[#0E7490] focus:ring-4 focus:ring-[#0E7490]/10 focus:bg-white transition-all font-poppins"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
                      Email *
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="jan@email.com"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black text-sm outline-none focus:border-[#0E7490] focus:ring-4 focus:ring-[#0E7490]/10 focus:bg-white transition-all font-poppins"
                    />
                  </div>

                  {/* RODZAJ + DATA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="block font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
                        Rodzaj wydarzenia
                      </label>

                      <select
                        defaultValue=""
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black text-sm outline-none focus:border-[#0E7490] focus:ring-4 focus:ring-[#0E7490]/10 focus:bg-white transition-all appearance-none cursor-pointer font-poppins pr-12"
                      >
                        <option value="" disabled>
                          Wybierz...
                        </option>

                        <option>Wesele</option>
                        <option>Event firmowy</option>
                        <option>Urodziny / przyjęcie</option>
                        <option>Inne</option>
                      </select>

                      <BiChevronDown
                        size={18}
                        className="absolute right-5 top-1/2 translate-y-1 text-gray-400 pointer-events-none"
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

                  {/* LICZBA GOŚCI */}
                  <div>
                    <label className="block font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
                      Liczba gości
                    </label>

                    <input
                      type="number"
                      min="1"
                      placeholder="np. 100"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black text-sm outline-none focus:border-[#0E7490] focus:ring-4 focus:ring-[#0E7490]/10 focus:bg-white transition-all font-poppins"
                    />
                  </div>

                  {/* WIADOMOŚĆ */}
                  <div>
                    <label className="block font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-2">
                      Wiadomość *
                    </label>

                    <textarea
                      rows={5}
                      required
                      placeholder="Opowiedz o swoich planach, liczbie gości i oczekiwaniach..."
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-black text-sm outline-none focus:border-[#0E7490] focus:ring-4 focus:ring-[#0E7490]/10 focus:bg-white transition-all resize-none font-poppins"
                    />
                  </div>

                  {/* BUTTON */}
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

            {/* INFORMACJE */}
            <div className="lg:col-span-2 lg:sticky lg:top-28 self-start">
              <div className="space-y-6">
                {/* DANE KONTAKTOWE */}
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

                {/* SOCIAL MEDIA */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-serif text-lg font-bold text-black mb-4">
                    Śledź nas
                  </h3>

                  <div className="flex items-center gap-3">
                    {socials.map((social) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0E7490] hover:border-[#0E7490]/30 hover:shadow-sm transition-all duration-300"
                        >
                          <Icon size={18} />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* JAK TO DZIAŁA */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-serif text-lg font-bold text-black mb-6">
                    Jak to działa?
                  </h3>

                  <div>
                    {steps.map((step, index) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#0E7490] shrink-0 mt-1.5 ring-4 ring-gray-50" />

                          {index < steps.length - 1 && (
                            <div className="w-px h-full bg-[#0E7490]/20 my-1" />
                          )}
                        </div>

                        <div
                          className={`${
                            index === steps.length - 1 ? "pb-0" : "pb-6"
                          }`}
                        >
                          <span className="font-poppins text-[#0E7490] text-xs font-bold tracking-wider">
                            {step.step}
                          </span>

                          <p className="font-poppins text-gray-600 text-sm leading-[1.7] mt-1">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-gray-50"
      >
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" />
              FAQ
            </span>

            <h2 className="font-serif text-3xl md:text-[2.8rem] font-bold text-black tracking-tight">
              Najczęstsze <span className="text-[#0E7490]">pytania</span>
            </h2>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex justify-between items-center p-5 sm:p-6 text-left group cursor-pointer"
                  >
                    <span className="font-poppins text-black text-sm font-medium pr-4 group-hover:text-[#0E7490] transition-colors">
                      {faq.q}
                    </span>

                    <BiChevronDown
                      size={22}
                      className={`text-[#0E7490] transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-poppins text-gray-500 text-sm leading-relaxed pb-6 px-5 sm:px-6">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

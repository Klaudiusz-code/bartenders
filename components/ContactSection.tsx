"use client";

import { useState, FormEvent } from "react";
import {
  MdSend,
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdGroups,
  MdCheckCircle,
} from "react-icons/md";

const GOLD_COLOR = "#C5A059";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
  };

  return (
    <section
      id="kontakt"
      className="relative py-16 px-4 md:px-6 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
            Stwórzmy <br />
            <span className="text-[#C5A059] italic font-light">
              niezapomniane chwile
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg px-4">
            Profesjonalna obsługa barmańska na Twoim wydarzeniu. Wypełnij
            formularz, a my przygotujemy ofertę szytą na miarę.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-neutral-900 mb-5 flex items-center gap-3">
                <span className="w-6 h-0.5 bg-[#C5A059]" />
                Skontaktuj się
              </h3>

              <div className="space-y-5">
                <a
                  href="tel:+48123456789"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <MdPhone size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                      Telefon
                    </span>
                    <span className="text-base font-medium text-neutral-800 group-hover:text-[#C5A059] transition-colors">
                      +48 123 456 789
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:kontakt@bar.pl"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <MdEmail size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                      Email
                    </span>
                    <span className="text-base font-medium text-neutral-800 group-hover:text-[#C5A059] transition-colors">
                      kontakt@bar.pl
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#C5A059] flex-shrink-0">
                    <MdLocationOn size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                      Lokalizacja
                    </span>
                    <span className="text-sm text-neutral-800 leading-snug">
                      Cała Polska
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ODCHUDZONE "Doświadczenie" - bez dużego boxa, tylko delikatna linia */}
            <div className="pl-4 border-l-2 border-[#C5A059]/20">
              <h4 className="font-bold text-neutral-900 mb-1 flex items-center gap-2 text-sm">
                <MdCheckCircle className="text-[#C5A059]" size={16} />
                Doświadczenie
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ponad 500 obsłużonych eventów. Elastyczne podejście do każdego
                klienta.
              </p>
            </div>
          </div>

          {/* PRAWA KOLUMNA: Formularz (Span 8/12) - Zmniejszone paddingi */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/40 border border-gray-100 relative overflow-hidden">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <MdCheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
                    Wysłano!
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Dziękujemy. Odezwiemy się wkrótce.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-[#C5A059] transition-colors duration-300"
                  >
                    Wyślij nowe
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Rząd 1: Dane Podstawowe */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-1">
                        Imię i Nazwisko
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jan Kowalski"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-neutral-900 placeholder-gray-400 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/10 outline-none transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jan@email.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-neutral-900 placeholder-gray-400 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/10 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Sekcja: Wydarzenie - Mniejszy padding wewnętrzny */}
                  <div className="bg-[#F9F9F9] p-4 md:p-6 rounded-xl border border-gray-100">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-4 flex items-center gap-2">
                      <MdGroups size={14} />
                      Dane Wydarzenia
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-1">
                          Rodzaj imprezy
                        </label>
                        <select
                          required
                          defaultValue=""
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-neutral-900 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/10 outline-none transition-all text-sm appearance-none cursor-pointer"
                        >
                          <option value="" disabled>
                            Wybierz typ...
                          </option>
                          <option>Wesele</option>
                          <option>Event Firmowy</option>
                          <option>Urodziny</option>
                          <option>Inne</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-1">
                          Data
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-neutral-900 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/10 outline-none transition-all text-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-1">
                          Goście
                        </label>
                        <input
                          type="number"
                          min="10"
                          required
                          placeholder="np. 50"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-neutral-900 placeholder-gray-400 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/10 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Wiadomość */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-1">
                      Wiadomość
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Dodatkowe informacje..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-neutral-900 placeholder-gray-400 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/10 outline-none resize-none transition-all text-sm"
                    />
                  </div>

                  {/* Przycisk - Mniejszy */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-neutral-900 text-white font-bold uppercase tracking-widest text-xs py-3.5 rounded-lg hover:bg-[#C5A059] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>Wysyłanie...</>
                    ) : (
                      <>
                        Wyślij zapytanie
                        <MdSend
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    Zgadzasz się na przetwarzanie danych.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

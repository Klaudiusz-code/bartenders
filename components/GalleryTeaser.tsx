"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdClose, MdArrowLeft, MdArrowRight, MdExpand } from "react-icons/md";

const images = [
  {
    src: "/gallery3.jpg",
    title: "Premium Bar",
    desc: "Eleganckie podejście do każdego drinka.",
  },
  {
    src: "/gallery6.jpg",
    title: "Flair Show",
    desc: "Dynamiczne pokazy barmańskie.",
  },
  {
    src: "/gallery12.jpg",
    title: "Szczegóły",
    desc: "Dbałość o najmniejszy detal.",
  },
  {
    src: "/gallery5.jpg",
    title: "Wesele",
    desc: "Niezapomniane chwile.",
  },
  {
    src: "/gallery10.jpg",
    title: "Koktajle",
    desc: "Kolorowe i smaczne.",
  },
  {
    src: "/gallery2.jpg",
    title: "Atmosfera",
    desc: "Klimat, który tworzymy.",
  },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(
    null,
  );

  // Animacja wejścia sekcji
  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".anim-observer")
              .forEach((el) => el.classList.add("visible"));
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  // Obsługa klawiatury w modalu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);

      const currentIndex = images.findIndex((img) => img === selectedImage);
      if (e.key === "ArrowRight")
        setSelectedImage(images[(currentIndex + 1) % images.length]);
      if (e.key === "ArrowLeft")
        setSelectedImage(
          images[(currentIndex - 1 + images.length) % images.length],
        );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Blokowanie scrollu przy otwartym modalu
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img === selectedImage);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img === selectedImage);
    setSelectedImage(
      images[(currentIndex - 1 + images.length) % images.length],
    );
  };

  return (
    <>
      {/* STYLE DLA ANIMACJI */}
      <style jsx global>{`
        .anim-observer {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .anim-observer.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .anim-scale {
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .anim-scale.visible {
          opacity: 1;
          transform: scale(1);
        }
        .d1 {
          transition-delay: 0.1s;
        }
        .d2 {
          transition-delay: 0.2s;
        }
        .d3 {
          transition-delay: 0.3s;
        }
        .d4 {
          transition-delay: 0.4s;
        }
        .d5 {
          transition-delay: 0.5s;
        }
        .d6 {
          transition-delay: 0.6s;
        }
      `}</style>

      <section
        ref={ref}
        className="relative py-20 md:py-32 px-6 lg:px-12 overflow-hidden bg-[#FAFAFA]"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* NAGŁÓWEK */}
          <div className="text-center mb-12 md:mb-16 anim-observer">
            <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-black mb-6">
              Galeria{" "}
              <span className="italic font-light text-gray-400">
                realizacji
              </span>
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#C5A059] to-transparent mx-auto"></div>
          </div>

          {/* PRZYCISK */}
          <div className="flex justify-center mb-12 anim-observer">
            <Link
              href="/realizacje"
              className="group inline-flex items-center gap-3 bg-black text-white px-8 py-3 rounded-md text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#C5A059] hover:text-black transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              Zobacz wszystkie realizacje
              <MdArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* SIATKA ZDJĘĆ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {images.map((img, i) => (
              <div
                key={i}
                className={`anim-scale anim-observer d${(i % 4) + 1} group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#C5A059]/10 transition-all duration-500`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover brightness-95 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />

                {/* Overlay na hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <MdExpand size={32} className="text-white drop-shadow-lg" />
                  </div>
                </div>

                {/* Podpis pod spodem (opcjonalny, widoczny zawsze lub na hover) */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white font-serif text-lg font-bold">
                    {img.title}
                  </h3>
                  <p className="text-white/80 text-xs mt-1">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL (LIGHTBOX) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            // Zamknij po kliknięciu w tło
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          {/* Przycisk Zamknij */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300"
            aria-label="Zamknij"
          >
            <MdClose size={24} />
          </button>

          {/* Strzałka Lewa */}
          <button
            onClick={prevImage}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 p-2 md:p-4 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Poprzednie zdjęcie"
          >
            <MdArrowLeft size={28} className="md:hidden" />
            <MdArrowLeft size={40} className="hidden md:block" />
          </button>

          {/* Strzałka Prawa */}
          <button
            onClick={nextImage}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 p-2 md:p-4 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Następne zdjęcie"
          >
            <MdArrowRight size={28} className="md:hidden" />
            <MdArrowRight size={40} className="hidden md:block" />
          </button>

          {/* Kontener Obrazka */}
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] px-4 md:px-12 flex flex-col items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300"
            />

            {/* Opis pod zdjęciem w modalu */}
            <div className="mt-6 text-center animate-in slide-in-from-bottom-4 duration-300">
              <h3 className="text-white font-serif text-xl md:text-2xl font-bold">
                {selectedImage.title}
              </h3>
              <p className="text-white/60 font-sans text-sm md:text-base mt-2">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

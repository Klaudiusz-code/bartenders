"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import {
  MdArrowOutward,
  MdClose,
  MdArrowLeft,
  MdArrowRight,
  MdExpand,
  MdPhone,
  MdEmail,
} from "react-icons/md";

interface GalleryImage {
  src: string;
  title: string;
  desc: string;
}

interface GalleryItemRaw {
  galleryDescription?: string;
  galleryImage: {
    nodes: {
      sourceUrl: string;
    }[];
  };
}

interface RealizacjeContentProps {
  data: {
    podstronaRealizacje?: any;
    sekcjaRealizacje?: {
      realisationGalllery: GalleryItemRaw[];
    };
    ustawieniaGlobalne?: {
      email?: string;
      numerTelefonuDoWojtka?: string;
      numerTelefonuDoMichala?: string;
    };
  };
}

export default function RealizacjeContent({ data }: RealizacjeContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const heroData = data?.podstronaRealizacje?.heroGallery;
  const ctaData = data?.podstronaRealizacje?.ctaRealisation;
  const faqData = data?.podstronaRealizacje?.faqRealisation;
  const contactInfo = data?.ustawieniaGlobalne;

  const galleryData = data?.sekcjaRealizacje?.realisationGalllery || [];

  const galleryImages: GalleryImage[] = galleryData.flatMap((item: any) =>
    item.galleryImage.nodes.map((imgNode: any) => ({
      src: imgNode.sourceUrl,
      title: "Realizacja",
      desc: "",
    })),
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);

      const currentIndex = galleryImages.findIndex(
        (img) => img === selectedImage,
      );
      if (e.key === "ArrowRight")
        setSelectedImage(
          galleryImages[(currentIndex + 1) % galleryImages.length],
        );
      if (e.key === "ArrowLeft")
        setSelectedImage(
          galleryImages[
            (currentIndex - 1 + galleryImages.length) % galleryImages.length
          ],
        );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, galleryImages]);

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
    const currentIndex = galleryImages.findIndex(
      (img) => img === selectedImage,
    );
    setSelectedImage(galleryImages[(currentIndex + 1) % galleryImages.length]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(
      (img) => img === selectedImage,
    );
    setSelectedImage(
      galleryImages[
        (currentIndex - 1 + galleryImages.length) % galleryImages.length
      ],
    );
  };

  return (
    <>
      <section className="relative pt-[72px] md:pt-[112px] bg-[#050505]">
        <div className="relative h-[60vh] md:h-[70vh] min-h-[450px]">
          <img
            src={heroData?.heroGalleryImage?.node?.sourceUrl || "/hero1.jpg"}
            alt="Galeria realizacji"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 pb-16 md:pb-24 px-6 md:px-12 xl:px-24">
            <div className="max-w-7xl mx-auto">
              <span className="inline-flex items-center gap-2 font-poppins text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4">
                <span className="w-8 h-px bg-[#C5A059]" /> Portfolio
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-[0.95] mb-6">
                {heroData?.realizationsHeroTitle || "Nasze realizacje"}
              </h1>
              <p className="font-poppins text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
                {heroData?.realizationsHeroDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 md:px-12 xl:px-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#C5A059] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img: GalleryImage, i: number) => {
              return (
                <div
                  key={`${img.src}-${i}`}
                  className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative bg-[#0a0a0a] border border-white/5 hover:border-[#C5A059]/50 transition-colors duration-300"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <MdExpand size={32} className="text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 md:px-12 xl:px-24 bg-[#FAFAFA] border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            {ctaData?.titleRealisationCta || "Masz pytania?"}
          </h2>
          <p className="font-poppins text-gray-600 text-base md:text-lg leading-[1.8] mb-12 max-w-2xl mx-auto">
            {ctaData?.descriptionRealisationCta ||
              "Skontaktuj się z nami, aby omówić szczegóły Twojego wydarzenia."}
          </p>

          <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
            <div className="grid grid-cols-2 w-full rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm">
              <a
                href={`tel:${contactInfo?.numerTelefonuDoWojtka || ""}`}
                className="group flex flex-col items-center justify-center p-5 border-r border-gray-200 hover:bg-gray-50 transition-all duration-300"
              >
                <div className="mb-2 text-[#C5A059] group-hover:scale-110 transition-transform">
                  <MdPhone size={20} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Wojtek
                </span>
                <span className="text-[11px] md:text-sm font-medium text-gray-900">
                  {contactInfo?.numerTelefonuDoWojtka || "Brak numeru"}
                </span>
              </a>

              <a
                href={`tel:${contactInfo?.numerTelefonuDoMichala || ""}`}
                className="group flex flex-col items-center justify-center p-5 hover:bg-gray-50 transition-all duration-300"
              >
                <div className="mb-2 text-[#C5A059] group-hover:scale-110 transition-transform">
                  <MdPhone size={20} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Michał
                </span>
                <span className="text-[11px] md:text-sm font-medium text-gray-900">
                  {contactInfo?.numerTelefonuDoMichala || "Brak numeru"}
                </span>
              </a>
            </div>

            <a
              href={`mailto:${contactInfo?.email || "biuro@domena.pl"}`}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-[#C5A059] text-[#C5A059] font-poppins text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase rounded-full hover:bg-[#C5A059] hover:text-white transition-all duration-300"
            >
              <MdEmail size={20} />
              <span>Napisz maila</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 px-6 md:px-12 xl:px-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 font-poppins text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4">
              <span className="w-8 h-px bg-[#C5A059]" /> FAQ
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight">
              {faqData?.titleFaq || "Pytania o realizacje"}
            </h2>
          </div>

          <div className="space-y-4">
            {faqData?.questionsFaq?.map((f: any, i: number) => (
              <div key={i}>
                <div
                  className={`bg-white/5 rounded-xl border border-white/5 overflow-hidden transition-colors duration-300 hover:border-[#C5A059]/20 ${
                    openFaq === i ? "bg-[#0a0a0a] border-[#C5A059]/30" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-6 md:p-8 text-left group"
                  >
                    <span className="font-poppins text-gray-200 text-[11px] md:text-base font-medium pr-4 group-hover:text-[#C5A059] transition-colors">
                      {f.pytanie}
                    </span>
                    <BiChevronDown
                      size={24}
                      className={`text-[#C5A059] transition-transform duration-300 shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-poppins text-gray-400 text-[10px] md:text-base leading-relaxed pb-8 px-6 md:px-8 border-t border-white/5 pt-4">
                        {f.odpowiedz}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
          >
            <MdClose size={24} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 p-2 md:p-4 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <MdArrowLeft size={28} className="md:hidden" />
            <MdArrowLeft size={40} className="hidden md:block" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 p-2 md:p-4 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <MdArrowRight size={28} className="md:hidden" />
            <MdArrowRight size={40} className="hidden md:block" />
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh] px-4 md:px-12 flex flex-col items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}

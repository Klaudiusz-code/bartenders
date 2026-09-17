"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MdClose, MdArrowLeft, MdArrowRight, MdExpand } from "react-icons/md";

// Interfejsy (bez zmian)
interface GalleryImage {
  src: string;
  title: string;
  desc: string;
}

interface ImageNode {
  sourceUrl: string;
}

interface GalleryItemRaw {
  galleryDescription: string;
  galleryIamge: {
    node: ImageNode;
  };
}

interface GalleryDataRaw {
  titleRealisation: string;
  realisationGalllery: GalleryItemRaw[];
}

interface GallerySectionProps {
  items: GalleryImage[];
  limit?: number;
  showHeader?: boolean;
  showFilters?: boolean;
  categories?: string[];
  columns?: "3" | "4";
  title?: string;
}

export default function GallerySection({
  items,
  limit,
  showHeader = true,
  showFilters = false,
  categories = [],
  columns = "3",
  title = "Portfolio",
}: GallerySectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const displayItems = limit ? items.slice(items.length - limit) : items;
  // -------------------------------

  const gridColsClass =
    columns === "4"
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".anim-observer")
              .forEach((el: any) => el.classList.add("visible"));
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [displayItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);

      const currentIndex = items.findIndex((img) => img === selectedImage);
      if (e.key === "ArrowRight")
        setSelectedImage(items[(currentIndex + 1) % items.length]);
      if (e.key === "ArrowLeft")
        setSelectedImage(
          items[(currentIndex - 1 + items.length) % items.length],
        );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, items]);

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
    const currentIndex = items.findIndex((img) => img === selectedImage);
    setSelectedImage(items[(currentIndex + 1) % items.length]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = items.findIndex((img) => img === selectedImage);
    setSelectedImage(items[(currentIndex - 1 + items.length) % items.length]);
  };

  if (!items || items.length === 0) return null;

  return (
    <>
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
          {showHeader && (
            <>
              <div className="text-center mb-12 md:mb-16 anim-observer">
                <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4">
                  {title}
                </span>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-black mb-6">
                  {items[0]?.title ? "Galeria Realizacji" : title}{" "}
                </h2>
                <div className="w-24 h-[2px] bg-gradient-to-r from-[#C5A059] to-transparent mx-auto"></div>
              </div>

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
            </>
          )}

          <div className={`grid ${gridColsClass} gap-6 md:gap-8`}>
            {displayItems.map((img: GalleryImage, i: number) => (
              <div
                key={i}
                className={`anim-scale anim-observer d${(i % 6) + 1} group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#C5A059]/10 transition-all duration-500`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover brightness-95 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <MdExpand size={32} className="text-white drop-shadow-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300"
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
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300"
            />
          </div>
        </div>
      )}
    </>
  );
}

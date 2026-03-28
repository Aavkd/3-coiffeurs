"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  {
    src: "/images/cuts/cut-resultat-01.webp",
    alt: "Résultat coupe — fade et barbe",
  },
  {
    src: "/images/cuts/cut-resultat-02.webp",
    alt: "Résultat coupe — taper et dégradé",
  },
  {
    src: "/images/cuts/cut-resultat-03.webp",
    alt: "Résultat coupe — fade court",
  },
  {
    src: "/images/cuts/cut-coiffeur-travail.webp",
    alt: "Coiffeur en action au salon 3 Coiffeurs",
  },
  {
    src: "/images/cuts/cut-inspiration-01.webp",
    alt: "Inspiration coupe — style pompadour",
  },
];

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const photo = photos[index];

  /* Focus trap */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowLeft") {
        onPrev();
        return;
      }
      if (e.key === "ArrowRight") {
        onNext();
        return;
      }
      if (e.key === "Tab") {
        const focusable = [
          closeButtonRef.current,
          prevButtonRef.current,
          nextButtonRef.current,
        ].filter(Boolean) as HTMLElement[];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      role="dialog"
      aria-modal="true"
      aria-label={`Image agrandie : ${photo.alt}`}
      onClick={onClose}
    >
      {/* Close */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-2 focus-visible:outline-white"
        aria-label="Fermer la galerie"
      >
        <XIcon className="w-5 h-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-white/60 text-sm select-none">
        {index + 1} / {photos.length}
      </div>

      {/* Prev */}
      <button
        ref={prevButtonRef}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-2 focus-visible:outline-white"
        aria-label="Photo précédente"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      {/* Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full max-w-4xl max-h-[80vh] mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-contain"
        />
      </motion.div>

      {/* Next */}
      <button
        ref={nextButtonRef}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-2 focus-visible:outline-white"
        aria-label="Photo suivante"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </motion.div>
  );
}

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length
    );
  }, []);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % photos.length
    );
  }, []);

  return (
    <>
      {/* Grid — CSS columns masonry */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        role="list"
        aria-label="Galerie de réalisations"
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            role="listitem"
            className="break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative block w-full overflow-hidden rounded-sm focus-visible:outline-2 focus-visible:outline-or"
              aria-label={`Agrandir : ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={1000}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <SearchIcon className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </>
  );
}

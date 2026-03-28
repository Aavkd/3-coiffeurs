"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

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
    src: "/images/cuts/cut-inspiration-01.webp",
    alt: "Inspiration coupe — style pompadour",
  },
  {
    src: "/images/cuts/cut-coiffeur-travail.webp",
    alt: "Coiffeur en action au salon 3 Coiffeurs",
  },
  {
    src: "/images/cuts/cut-resultat-01.webp",
    alt: "Résultat coupe — fade et barbe (détail)",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

export default function GalleryTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 lg:py-28 bg-anthracite"
      aria-labelledby="gallery-teaser-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            id="gallery-teaser-heading"
            className="font-serif font-bold text-3xl sm:text-4xl text-white mb-3"
          >
            Nos réalisations
          </h2>
          <p className="text-white/60 text-lg">
            Dégradés, fades, pompadours… Découvrez notre travail.
          </p>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-or" aria-hidden="true" />
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 bg-bordeaux/0 group-hover:bg-bordeaux/40 transition-colors duration-300"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/galerie"
            className="inline-flex items-center gap-2 text-or font-semibold hover:text-or/75 transition-colors duration-200 group"
          >
            Voir toute la galerie
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

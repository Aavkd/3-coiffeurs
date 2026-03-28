"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stats = [
  { value: "7j/7", label: "Ouvert tous les jours" },
  { value: "09:00–20:30", label: "Horaires étendus" },
  { value: "Nanterre 92", label: "Ancré dans le quartier" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 lg:py-28 bg-creme overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo — left on desktop, first on mobile */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl order-first"
          >
            <Image
              src="/images/salon/salon-chaise-miroir.webp"
              alt="Poste de coiffure chez 3 Coiffeurs à Nanterre"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            {/* Decorative border accent */}
            <div
              className="absolute inset-0 ring-1 ring-inset ring-or/20 rounded-sm pointer-events-none"
              aria-hidden="true"
            />
          </motion.div>

          {/* Text — right on desktop */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-bordeaux">
              À propos
            </span>
            <h2
              id="about-heading"
              className="font-serif font-bold text-3xl sm:text-4xl text-anthracite mb-6 leading-tight"
            >
              Le salon qui vous ressemble
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Depuis notre ouverture, 3 Coiffeurs est devenu un repère incontournable du quartier. Dans notre salon aux murs en briques et aux fauteuils bordeaux, on prend soin de vous comme il se doit — avec précision, sans chichis.
              </p>
              <p>
                Que vous veniez pour une coupe nette, un dégradé soigné ou une taille de barbe, notre équipe vous accueille tous les jours, même le dimanche, de 9h à 20h30. Pas d&apos;excuse pour rater une bonne coupe.
              </p>
            </div>

            {/* Stats */}
            <div
              className="mt-8 pt-8 border-t border-or/30 grid grid-cols-3 gap-4"
              aria-label="Chiffres clés"
            >
              {stats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <p className="font-serif font-bold text-bordeaux text-lg leading-tight">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

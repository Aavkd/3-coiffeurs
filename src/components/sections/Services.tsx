"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ServiceCard from "@/components/ui/ServiceCard";

function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function RazorIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M7 12h10" />
      <path d="M12 7v10" />
    </svg>
  );
}

const services = [
  {
    icon: <ScissorsIcon className="w-7 h-7" />,
    title: "Coupe Homme",
    price: "12 €",
    description:
      "Coupe classique ou tendance, dégradé, fade — exécutée avec soin par nos coiffeurs.",
  },
  {
    icon: <StarIcon className="w-7 h-7" />,
    title: "Coupe Enfant",
    price: "10 €",
    description:
      "Pour les petits jusqu'à 12 ans. Coupe propre, rapide et sans stress.",
  },
  {
    icon: <RazorIcon className="w-7 h-7" />,
    title: "Barbe",
    price: "5 €",
    description:
      "Taille et contour de barbe à la tondeuse pour un rendu net et stylé.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2
            id="services-heading"
            className="font-serif font-bold text-3xl sm:text-4xl text-anthracite mb-3"
          >
            Nos prestations
          </h2>
          <p className="text-gray-500 text-lg">Des tarifs clairs, sans surprise.</p>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-or" aria-hidden="true" />
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                price={service.price}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-bordeaux font-semibold hover:text-bordeaux/70 transition-colors duration-200 group"
          >
            Voir tous nos services
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

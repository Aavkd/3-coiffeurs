"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const testimonials = [
  {
    stars: 4,
    quote:
      "Coiffeur sympathique, ambiance agréable et tarifs raisonnables. Je recommande pour une coupe rapide et soignée.",
    author: "Client Google",
  },
  {
    stars: 5,
    quote:
      "Ouvert le dimanche, c'est vraiment pratique. La coupe est bien faite et le prix est correct pour Nanterre.",
    author: "Client Google",
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 lg:py-28 bg-creme"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            id="testimonials-heading"
            className="font-serif font-bold text-3xl sm:text-4xl text-anthracite mb-3"
          >
            Ce que disent nos clients
          </h2>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-or" aria-hidden="true" />
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {testimonials.map((t, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="bg-white rounded-sm border border-or/20 p-8 shadow-sm flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 text-or" role="img" aria-label={`${t.stars} étoiles sur 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < t.stars} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="font-serif italic text-lg text-anthracite/80 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <footer>
                <p className="text-sm font-semibold text-bordeaux">
                  — {t.author}
                </p>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

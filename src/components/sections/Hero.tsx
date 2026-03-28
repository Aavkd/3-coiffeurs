"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

function ChevronDownIcon({ className }: { className?: string }) {
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
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Section hero"
    >
      {/* Background image */}
      <Image
        src="/images/salon/salon-interieur-large.webp"
        alt="Intérieur du salon 3 Coiffeurs à Nanterre"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Pre-title badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block mb-4 px-4 py-1.5 border border-or/60 text-or text-xs font-semibold uppercase tracking-widest rounded-sm">
              Barbershop · Nanterre 92
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5"
          >
            Votre barbershop de quartier à Nanterre
          </motion.h1>

          {/* Accroche */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Coupes hommes, tailles de barbe et coupes enfants à petits prix.
            <br className="hidden sm:block" />
            Ouvert 7 jours sur 7, de 9h à 20h30.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/rendez-vous"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-bordeaux text-white font-semibold tracking-wide rounded-sm hover:bg-bordeaux/80 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-bordeaux/30"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-semibold tracking-wide rounded-sm hover:bg-white/10 hover:border-white/60 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Voir nos services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDownIcon className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

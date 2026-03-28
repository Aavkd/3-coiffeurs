import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/ui/BookingForm";

export const metadata: Metadata = {
  title: "Prendre RDV — 3 Coiffeurs Nanterre",
  description:
    "Réservez votre créneau en ligne chez 3 Coiffeurs à Nanterre. Confirmation rapide par email ou téléphone.",
  alternates: {
    canonical: "/rendez-vous",
  },
};

function MapPinIcon({ className }: { className?: string }) {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.34 2 2 0 0 1 3.6 1.12h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function RendezVousPage() {
  return (
    <>
      <Header />
      {/* Mini hero */}
      <section className="bg-anthracite pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-white/80" aria-current="page">Rendez-vous</li>
            </ol>
          </nav>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-white mb-3">
            Prendre rendez-vous
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Remplissez ce formulaire et nous vous confirmons votre créneau par retour d&apos;email ou par téléphone dans les plus brefs délais.
          </p>
        </div>
      </section>

      {/* Main content */}
      <main id="main-content" className="bg-creme py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Form — 2/3 width */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-sm p-6 sm:p-8 shadow-sm">
                <BookingForm />
              </div>
            </div>

            {/* Info sidebar — 1/3 width */}
            <aside aria-label="Informations du salon" className="lg:col-span-1">
              <div className="bg-white border border-gray-100 rounded-sm p-6 shadow-sm">
                <h2 className="font-serif font-bold text-xl text-anthracite mb-5 pb-4 border-b border-gray-100">
                  Informations
                </h2>

                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-bordeaux shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-anthracite mb-0.5">Adresse</p>
                      <a
                        href="https://maps.google.com/?q=3+Rue+Henri+Barbusse,+92000+Nanterre"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-bordeaux transition-colors"
                      >
                        3 Rue Henri Barbusse<br />
                        92000 Nanterre
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-bordeaux shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-anthracite mb-0.5">Téléphone</p>
                      <a
                        href="tel:+33766082702"
                        className="text-gray-600 hover:text-bordeaux transition-colors"
                      >
                        07 66 08 27 02
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-bordeaux shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-anthracite mb-0.5">Horaires</p>
                      <p className="text-gray-600">Lundi – Dimanche</p>
                      <p className="text-gray-600">09:00 – 20:30</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Le formulaire envoie une <strong>demande</strong> de rendez-vous. Nous vous confirmons votre créneau par email ou téléphone dans les plus brefs délais.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

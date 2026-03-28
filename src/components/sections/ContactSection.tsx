import Link from "next/link";

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

function ArrowRightIcon({ className }: { className?: string }) {
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
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            id="contact-heading"
            className="font-serif font-bold text-3xl sm:text-4xl text-anthracite mb-3"
          >
            Venez nous voir — ou réservez en ligne
          </h2>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-or" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Info */}
          <div className="space-y-6">
            <ul className="space-y-5" aria-label="Coordonnées du salon">
              <li className="flex items-start gap-4">
                <MapPinIcon className="w-6 h-6 text-bordeaux shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-anthracite mb-0.5">Adresse</p>
                  <a
                    href="https://maps.google.com/?q=3+Rue+Henri+Barbusse,+92000+Nanterre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-bordeaux transition-colors"
                  >
                    3 Rue Henri Barbusse
                    <br />
                    92000 Nanterre
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <PhoneIcon className="w-6 h-6 text-bordeaux shrink-0 mt-0.5" />
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

              <li className="flex items-start gap-4">
                <ClockIcon className="w-6 h-6 text-bordeaux shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-anthracite mb-0.5">Horaires</p>
                  <table className="text-sm text-gray-600" aria-label="Horaires d'ouverture">
                    <tbody>
                      <tr>
                        <td className="pr-4 py-0.5">Lundi – Dimanche</td>
                        <td className="py-0.5 font-medium text-anthracite">09:00 – 20:30</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-0.5 text-bordeaux font-medium" colSpan={2}>
                          Ouvert 7j/7
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
          </div>

          {/* Right — CTA */}
          <div className="flex flex-col items-start justify-center lg:pl-8 lg:border-l lg:border-gray-100">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Réservez votre créneau en ligne. Nous vous confirmons votre rendez-vous par retour d&apos;email ou par téléphone dans les plus brefs délais.
            </p>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 bg-bordeaux text-white font-semibold px-8 py-4 rounded-sm hover:bg-bordeaux/90 transition-colors duration-200 group"
            >
              Prendre rendez-vous
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Ou appelez-nous directement :{" "}
              <a href="tel:+33766082702" className="text-bordeaux hover:underline">
                07 66 08 27 02
              </a>
            </p>
          </div>
        </div>

        {/* Google Maps — full width */}
        <div className="mt-12 overflow-hidden rounded-sm border border-gray-100 shadow-sm">
          <iframe
            src="https://maps.google.com/maps?q=3+Rue+Henri+Barbusse,+92000+Nanterre&output=embed"
            width="100%"
            height="380"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation 3 Coiffeurs — 3 Rue Henri Barbusse, 92000 Nanterre"
            aria-label="Carte Google Maps — 3 Coiffeurs, 3 Rue Henri Barbusse, Nanterre"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingFormData } from "@/lib/validations/booking";

function CheckCircleIcon({ className }: { className?: string }) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function SpinnerIcon({ className }: { className?: string }) {
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
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

const inputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-sm text-sm bg-white text-anthracite placeholder-gray-400 focus:outline-none focus:border-bordeaux focus:ring-1 focus:ring-bordeaux transition-colors duration-200";

const errorClass = "mt-1 text-xs text-red-600";

const labelClass = "block text-sm font-medium text-anthracite mb-1.5";

export default function BookingForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  if (submitStatus === "success") {
    return (
      <div
        role="alert"
        className="flex flex-col items-center text-center gap-4 py-10 px-6 bg-green-50 border border-green-200 rounded-sm"
      >
        <CheckCircleIcon className="w-12 h-12 text-green-500" />
        <div>
          <p className="font-serif font-bold text-xl text-green-800 mb-2">
            Demande envoyée !
          </p>
          <p className="text-sm text-green-700 leading-relaxed">
            Votre demande a bien été envoyée. Nous vous contacterons dans les plus brefs délais pour confirmer votre rendez-vous.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Formulaire de réservation">
      {submitStatus === "error" && (
        <div role="alert" className="mb-6 px-4 py-3 bg-red-50 border border-red-200 rounded-sm text-sm text-red-700">
          Une erreur est survenue. Vous pouvez nous contacter directement au{" "}
          <a href="tel:+33766082702" className="font-semibold underline">
            07 66 08 27 02
          </a>
          .
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Prénom */}
        <div>
          <label htmlFor="prenom" className={labelClass}>
            Prénom <span aria-hidden="true" className="text-bordeaux">*</span>
          </label>
          <input
            id="prenom"
            type="text"
            autoComplete="given-name"
            placeholder="Votre prénom"
            className={inputClass}
            aria-describedby={errors.prenom ? "prenom-error" : undefined}
            aria-invalid={!!errors.prenom}
            {...register("prenom")}
          />
          {errors.prenom && (
            <p id="prenom-error" className={errorClass} role="alert">
              {errors.prenom.message}
            </p>
          )}
        </div>

        {/* Nom */}
        <div>
          <label htmlFor="nom" className={labelClass}>
            Nom <span aria-hidden="true" className="text-bordeaux">*</span>
          </label>
          <input
            id="nom"
            type="text"
            autoComplete="family-name"
            placeholder="Votre nom"
            className={inputClass}
            aria-describedby={errors.nom ? "nom-error" : undefined}
            aria-invalid={!!errors.nom}
            {...register("nom")}
          />
          {errors.nom && (
            <p id="nom-error" className={errorClass} role="alert">
              {errors.nom.message}
            </p>
          )}
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone" className={labelClass}>
            Téléphone <span aria-hidden="true" className="text-bordeaux">*</span>
          </label>
          <input
            id="telephone"
            type="tel"
            autoComplete="tel"
            placeholder="06 XX XX XX XX"
            className={inputClass}
            aria-describedby={errors.telephone ? "telephone-error" : undefined}
            aria-invalid={!!errors.telephone}
            {...register("telephone")}
          />
          {errors.telephone && (
            <p id="telephone-error" className={errorClass} role="alert">
              {errors.telephone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span aria-hidden="true" className="text-bordeaux">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="votre@email.fr"
            className={inputClass}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className={errorClass} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Prestation */}
        <div>
          <label htmlFor="service" className={labelClass}>
            Prestation <span aria-hidden="true" className="text-bordeaux">*</span>
          </label>
          <select
            id="service"
            className={inputClass}
            aria-describedby={errors.service ? "service-error" : undefined}
            aria-invalid={!!errors.service}
            defaultValue=""
            {...register("service")}
          >
            <option value="" disabled>Choisir une prestation</option>
            <option value="coupe-homme">Coupe homme (12 €)</option>
            <option value="coupe-enfant">Coupe enfant (10 €)</option>
            <option value="barbe">Barbe (5 €)</option>
            <option value="coupe-barbe">Coupe + Barbe (16 €)</option>
          </select>
          {errors.service && (
            <p id="service-error" className={errorClass} role="alert">
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className={labelClass}>
            Date souhaitée <span aria-hidden="true" className="text-bordeaux">*</span>
          </label>
          <input
            id="date"
            type="date"
            className={inputClass}
            aria-describedby={errors.date ? "date-error" : undefined}
            aria-invalid={!!errors.date}
            {...register("date")}
          />
          {errors.date && (
            <p id="date-error" className={errorClass} role="alert">
              {errors.date.message}
            </p>
          )}
        </div>

        {/* Heure */}
        <div>
          <label htmlFor="heure" className={labelClass}>
            Heure souhaitée <span aria-hidden="true" className="text-bordeaux">*</span>
          </label>
          <input
            id="heure"
            type="time"
            className={inputClass}
            aria-describedby={errors.heure ? "heure-error" : undefined}
            aria-invalid={!!errors.heure}
            {...register("heure")}
          />
          {errors.heure && (
            <p id="heure-error" className={errorClass} role="alert">
              {errors.heure.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message <span className="text-gray-400 font-normal">(optionnel)</span>
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Ex : je veux un fade avec une ligne..."
            className={`${inputClass} resize-none`}
            {...register("message")}
          />
        </div>

        {/* RGPD */}
        <div className="sm:col-span-2">
          <div className="flex items-start gap-3">
            <input
              id="rgpd"
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 border-gray-300 rounded accent-bordeaux cursor-pointer"
              aria-describedby={errors.rgpd ? "rgpd-error" : undefined}
              aria-invalid={!!errors.rgpd}
              {...register("rgpd")}
            />
            <label htmlFor="rgpd" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
              J'accepte que mes données soient utilisées uniquement pour la prise de rendez-vous.{" "}
              <span aria-hidden="true" className="text-bordeaux">*</span>
            </label>
          </div>
          {errors.rgpd && (
            <p id="rgpd-error" className={`${errorClass} mt-2`} role="alert">
              {errors.rgpd.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit */}
      <div className="mt-7">
        <button
          type="submit"
          disabled={submitStatus === "loading"}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-bordeaux text-white font-semibold tracking-wide rounded-sm hover:bg-bordeaux/85 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-bordeaux/30"
        >
          {submitStatus === "loading" ? (
            <>
              <SpinnerIcon className="w-5 h-5 animate-spin" />
              Envoi en cours…
            </>
          ) : (
            "Envoyer ma demande"
          )}
        </button>
      </div>
    </form>
  );
}

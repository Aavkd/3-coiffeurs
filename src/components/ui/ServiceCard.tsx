import { type ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  price: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  price,
  description,
}: ServiceCardProps) {
  return (
    <article
      className="
        group flex flex-col items-center text-center p-8
        border border-or/40 rounded-sm bg-white
        transition-all duration-300
        hover:-translate-y-1.5 hover:shadow-xl hover:shadow-or/10 hover:border-or
      "
    >
      {/* Icon */}
      <div className="mb-5 p-4 rounded-full bg-creme text-bordeaux group-hover:bg-bordeaux group-hover:text-white transition-colors duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-serif font-bold text-xl text-anthracite mb-2">
        {title}
      </h3>

      {/* Price */}
      <p
        className="font-serif text-2xl font-bold text-bordeaux mb-4 tracking-wide"
        style={{ fontVariant: "small-caps" }}
      >
        {price}
      </p>

      {/* Divider */}
      <div className="w-8 h-px bg-or mb-4" aria-hidden="true" />

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </article>
  );
}

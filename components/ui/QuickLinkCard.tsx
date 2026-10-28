"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  title: string;
  href: string;
  image: string;
  imageAlt?: string;
  index?: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
      delay: i * 0.08,
    },
  }),
};

export function QuickLinkCard({ title, href, image, imageAlt, index = 0 }: Props) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative h-full"
    >
      <Link
        href={href}
        className="relative block h-full overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-lg shadow-black/30 transition-shadow duration-500 hover:shadow-2xl hover:shadow-orange-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {/* Image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-dark">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={image}
              alt={imageAlt?.trim() || title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          {/* Gradient overlay */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent"
          />

          {/* Hover orange wash */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Animated corner accent */}
          <motion.span
            aria-hidden
            className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/40 blur-3xl"
            initial={{ opacity: 0.4 }}
            whileHover={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-heading text-xl font-bold leading-tight text-white drop-shadow-md sm:text-2xl">
              {title}
            </h3>

            {/* Arrow circle */}
            <motion.span
              aria-hidden
              className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-orange-500/40"
              initial={{ rotate: -45 }}
              whileHover={{ rotate: 0, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
          >
            Explore
            <span aria-hidden className="inline-block transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </motion.p>
        </div>
      </Link>
    </motion.div>
  );
}

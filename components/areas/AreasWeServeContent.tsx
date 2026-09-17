"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { servedCities, type ServedCity } from "@/lib/areasData";
import { pseoServices } from "@/lib/pseoServices";
import { siteConfig } from "@/lib/siteConfig";
import { ServiceHero } from "@/components/services/ServiceHero";
import { LocationStrip } from "@/components/services/LocationStrip";
import { CtaCard } from "@/components/services/CtaCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const REGION_ORDER: ServedCity["region"][] = [
  "West Metro",
  "Minneapolis",
  "Saint Paul",
  "South Metro",
  "North Metro",
  "East Metro",
];

export default function AreasWeServeContent() {
  const reduce = useReducedMotion();
  const [region, setRegion] = useState<"All" | ServedCity["region"]>("All");
  const [query, setQuery] = useState("");

  const { scrollY } = useScroll();
  const blobY = useTransform(scrollY, [0, 600], [0, 80]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return servedCities.filter((c) => {
      const regionOk = region === "All" || c.region === region;
      const queryOk =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.county.toLowerCase().includes(q) ||
        c.zips.some((z) => z.includes(q));
      return regionOk && queryOk;
    });
  }, [region, query]);

  const totalServices = pseoServices.length;
  const totalPages = servedCities.length * pseoServices.length;

  return (
    <>
      <ServiceHero
        title="Areas We Serve"
        subtitle={`One Saint Louis Park clinic. ${servedCities.length} Twin Cities communities — each with its own drive, hospital orbit, and complaint pattern. Not a cloned city list.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Areas We Serve" }]}
      />

      {/* Animated stat strip */}
      <section className="relative overflow-hidden bg-[#0F172A] py-16 text-white sm:py-20">
        <motion.div
          aria-hidden
          style={{ y: reduce ? 0 : blobY }}
          className="pointer-events-none absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <motion.div
          aria-hidden
          style={{ y: reduce ? 0 : blobY }}
          className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-5 sm:grid-cols-3">
            <Stat label="Cities Served" target={servedCities.length} suffix="" />
            <Stat label="Specialty Services" target={totalServices} suffix="" />
            <Stat label="Local Care Pages" target={totalPages} suffix="+" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative bg-white py-10 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Twin Cities Metro · Minnesota
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Local chiropractic care, built around your community
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Levitt Chiropractic Center has cared for patients across Hennepin,
              Ramsey, Anoka, Carver, Dakota, Scott, Washington and surrounding
              counties since 1987. From our office in
              {" "}
              {siteConfig.address.city}, we welcome patients from every corner
              of the Twin Cities metro.
            </p>
            <p className="mt-4 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Find your city below for a complete view of the chiropractic
              services available locally adjustments, cold laser, cryotherapy,
              custom orthotics, injury care, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter / search */}
      <section className="sticky top-20 z-30 border-y border-slate-200 bg-white/85 py-3 backdrop-blur-md sm:py-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="-mx-1 flex flex-nowrap items-center gap-2 overflow-x-auto px-1 pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0">
              <RegionPill
                label="All"
                active={region === "All"}
                onClick={() => setRegion("All")}
              />
              {REGION_ORDER.map((r) => (
                <RegionPill
                  key={r}
                  label={r}
                  active={region === r}
                  onClick={() => setRegion(r)}
                />
              ))}
            </div>
            <label className="relative block w-full lg:max-w-sm">
              <span className="sr-only">Search cities</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search city, county or ZIP…"
                className="w-full rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm text-[#0F172A] shadow-sm outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/30"
              />
            </label>
          </div>
        </div>
      </section>

      {/* Cities grid */}
      <section className="bg-slate-50 py-10 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatePresence mode="popLayout">
            {visible.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center text-slate-500"
              >
                No cities match that filter. Try clearing the search.
              </motion.p>
            ) : (
              <motion.div
                key={`${region}-${query}`}
                layout
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {visible.map((c, idx) => (
                  <motion.div
                    key={c.slug}
                    layout
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: Math.min(idx * 0.02, 0.3) }}
                  >
                    <Link
                      href={`/areas-we-serve/${c.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#F97316] hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-600">
                            {c.region}
                          </p>
                          <h3 className="mt-1 font-heading text-lg font-bold text-[#0F172A] transition-colors group-hover:text-[#F97316]">
                            {c.name}
                          </h3>
                        </div>
                        {c.distanceMi > 0 ? (
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                            {c.distanceMi} mi
                          </span>
                        ) : (
                          <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-700">
                            Home
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-xs text-slate-500">
                        {c.county} County · {c.zips.slice(0, 2).join(", ")}
                        {c.zips.length > 2 ? "…" : ""}
                      </p>
                      <p className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#F97316]">
                        View {c.name}
                        <span
                          aria-hidden
                          className="transition-transform group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Services overview */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              Available in every city
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {totalServices} services,{" "}
              <span className="text-[#F97316]">one Saint Louis Park clinic</span>
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pseoServices.map((s, idx) => (
              <motion.div
                key={s.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: idx * 0.03 }}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-lg font-bold text-white">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {s.tagline}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete directory every city × every service */}
      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Complete Directory
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Every city, every service
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Browse all {totalPages.toLocaleString()} local service pages grouped by community.
              Click any city to expand the {totalServices} services available there.
            </p>
          </motion.div>

          <div className="mt-8 sm:mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {servedCities.map((c) => (
              <details
                key={c.slug}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition open:border-[#F97316] open:bg-white open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-600">
                      {c.region}
                    </p>
                    <p className="mt-1 truncate font-heading text-base font-bold text-[#0F172A]">
                      {c.name}, MN
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#F97316]/10 text-sm font-bold text-[#F97316] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <ul className="mt-4 space-y-1.5 border-t border-slate-200 pt-4">
                  <li>
                    <Link
                      href={`/areas-we-serve/${c.slug}`}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-semibold text-[#0F172A] transition-colors hover:bg-orange-50 hover:text-[#F97316]"
                    >
                      <span aria-hidden className="text-[#F97316]">★</span>
                      {c.name} overview
                    </Link>
                  </li>
                  {pseoServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/areas-we-serve/${c.slug}/${s.slug}`}
                        className="flex items-start gap-2 rounded-md px-2 py-1.5 text-sm text-slate-700 transition-colors hover:bg-orange-50 hover:text-[#F97316]"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F97316]/60"
                        />
                        <span>
                          {s.name} <span className="text-slate-400">in {c.name}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <CtaCard
            eyebrow="Twin Cities Metro · Minnesota"
            title="Find your city, then book"
            body={`Pick your community above to see local services, or call ${siteConfig.phone} to talk with our team directly.`}
          />
        </div>
      </section>

      <LocationStrip />
    </>
  );
}

function RegionPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
        active
          ? "bg-[#F97316] text-white shadow-sm"
          : "border border-slate-300 bg-white text-slate-600 hover:border-[#F97316] hover:text-[#F97316]"
      }`}
    >
      {label}
    </button>
  );
}

function Stat({
  label,
  target,
  suffix,
}: {
  label: string;
  target: number;
  suffix: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-8 text-center shadow-xl ring-1 ring-white/10 backdrop-blur-sm"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
        {label}
      </p>
      <p className="mt-2 font-heading text-5xl font-black text-white sm:text-6xl">
        {reduce ? (
          <>
            {target}
            {suffix}
          </>
        ) : (
          <Counter target={target} suffix={suffix} />
        )}
      </p>
    </motion.div>
  );
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.span
        initial={{ scale: 0.85 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        {target}
        {suffix}
      </motion.span>
    </motion.span>
  );
}

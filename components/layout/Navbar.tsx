"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import {
  primaryNav,
  isGroup,
  type NavEntry,
  type NavLeaf,
  type NavGroup,
} from "./navData";
import { MobileMenu } from "./MobileMenu";
import { HeaderHours } from "./HeaderHours";

const LOGO_SRC = "/images/logo.png";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-shrink-0 items-center gap-2 transition-opacity hover:opacity-90"
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/images/fevicon.png"
        alt=""
        width={70}
        height={70}
        priority
        className="h-10 w-10 flex-shrink-0 object-contain sm:h-12 sm:w-12 xl:h-10 xl:w-10 min-[1400px]:h-11 min-[1400px]:w-11 2xl:h-12 2xl:w-12"
      />
      <Image
        src={LOGO_SRC}
        alt={siteConfig.name}
        width={546}
        height={206}
        priority
        className="h-12 w-auto object-contain sm:h-14 xl:h-11 min-[1400px]:h-12 2xl:h-14"
      />
    </Link>
  );
}

type DropdownProps = {
  entry: NavEntry;
  pathname: string;
};

function Dropdown({ entry, pathname }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const active = isActive(pathname, entry.href);
  const hasGroups = !!entry.groups && entry.groups.length > 0;

  if (!hasGroups) {
    return (
      <Link
        href={entry.href}
        className={`group relative inline-flex h-16 items-center whitespace-nowrap px-[6px] text-[12px] font-semibold transition-colors min-[1400px]:px-[8px] min-[1400px]:text-[12.5px] 2xl:px-2 2xl:text-[13px] ${
          active ? "text-primary" : "text-white/85 hover:text-white"
        }`}
      >
        {entry.label}
        <span
          className={`absolute inset-x-[6px] bottom-3 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300 min-[1400px]:inset-x-[8px] 2xl:inset-x-2 ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <Link
        href={entry.href}
        className={`group relative inline-flex h-16 items-center gap-1 whitespace-nowrap px-[6px] text-[12px] font-semibold transition-colors min-[1400px]:px-[8px] min-[1400px]:text-[12.5px] 2xl:px-2 2xl:text-[13px] ${
          active ? "text-primary" : "text-white/85 hover:text-white"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {entry.label}
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
        <span
          className={`absolute inset-x-[6px] bottom-3 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300 min-[1400px]:inset-x-[8px] 2xl:inset-x-2 ${
            active || open ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            role="menu"
            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[260px]"
          >
            <div className="overflow-visible rounded-2xl border border-white/10 bg-dark/95 p-2 shadow-2xl ring-1 ring-black/20 backdrop-blur-md">
              {entry.groups!.map((item) => {
                if (isGroup(item)) {
                  return (
                    <SubMenu
                      key={(item as NavGroup).label + (item.href ?? "")}
                      group={item as NavGroup}
                      pathname={pathname}
                    />
                  );
                }
                const leaf = item as NavLeaf;
                const a = isActive(pathname, leaf.href);
                return (
                  <Link
                    key={leaf.href}
                    href={leaf.href}
                    role="menuitem"
                    className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                      a
                        ? "bg-white/5 text-primary"
                        : "text-white/85 hover:bg-white/5 hover:text-primary"
                    }`}
                  >
                    {leaf.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Side-flyout submenu for grouped nav items (e.g. Injuries → Auto / Personal / Sports) */
function SubMenu({
  group,
  pathname,
}: {
  group: NavGroup;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const parentActive = group.href ? isActive(pathname, group.href) : false;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      {group.href ? (
        <Link
          href={group.href}
          role="menuitem"
          className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
            parentActive
              ? "bg-white/5 text-primary"
              : "text-white/85 hover:bg-white/5 hover:text-primary"
          }`}
          aria-haspopup="true"
          aria-expanded={open}
        >
          <span>{group.label}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3 flex-shrink-0"
            aria-hidden
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      ) : (
        <div className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-white">
          <span>{group.label}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3 flex-shrink-0"
            aria-hidden
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            role="menu"
            className="absolute left-full top-0 pl-2 min-w-[220px]"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-dark/95 p-2 shadow-2xl ring-1 ring-black/20 backdrop-blur-md">
              {group.items.map((leaf) => {
                const a = isActive(pathname, leaf.href);
                return (
                  <Link
                    key={leaf.href}
                    href={leaf.href}
                    role="menuitem"
                    className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                      a
                        ? "bg-white/5 text-primary"
                        : "text-white/85 hover:bg-white/5 hover:text-primary"
                    }`}
                  >
                    {leaf.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar (lg+) */}
      <div className="hidden border-b border-white/5 bg-dark/80 text-white/70 lg:block">
        <div className="mx-auto flex h-9 max-w-[1520px] items-center justify-between gap-6 px-6 xl:px-5 2xl:px-6 text-[11px] font-medium uppercase tracking-[0.16em]">
          <div className="flex items-center gap-5">
            <span>Saint Louis Park, MN</span>
            <span className="h-3 w-px bg-white/15" aria-hidden />
            <HeaderHours variant="topbar" />
          </div>
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-primary" />
              {siteConfig.phone}
            </a>
            <span className="h-3 w-px bg-white/15" aria-hidden />
            <Link
              href="/contact"
              className="transition-colors hover:text-primary"
            >
              {siteConfig.address.full}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile/tablet hours strip (below lg) */}
      <div className="border-b border-white/5 bg-dark/85 text-white/70 lg:hidden">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-center px-4 text-[11px] font-medium uppercase tracking-[0.16em]">
          <HeaderHours variant="mobile" />
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-dark/85 backdrop-blur-md shadow-xl shadow-black/30 border-b border-white/5"
            : "bg-dark border-b border-white/5"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1520px] items-center justify-between gap-4 px-4 sm:px-6 xl:gap-3 xl:px-5 min-[1400px]:gap-4 2xl:gap-5 2xl:px-6">
          {/* Left logo */}
          <Logo />

          {/* Center primary nav */}
          <nav
            className="hidden min-w-0 flex-1 items-center justify-center xl:flex"
            aria-label="Primary"
          >
            {primaryNav.map((entry) => (
              <Dropdown key={entry.href} entry={entry} pathname={pathname} />
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="flex flex-shrink-0 items-center justify-end gap-2">
            <Link
              href={siteConfig.appointmentUrl}
              className="hidden items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-3 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.03em] text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 sm:inline-flex min-[1400px]:px-3.5 min-[1400px]:tracking-[0.04em] 2xl:px-4 2xl:text-[11px] 2xl:tracking-[0.05em]"
            >
              NEW Patient Appointment
              <span aria-hidden className="hidden 2xl:inline">→</span>
            </Link>

            <Link
              href={siteConfig.existingPatientAppointmentUrl}
              className="hidden items-center justify-center whitespace-nowrap rounded-full border border-white/25 px-3 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.03em] text-white transition hover:border-primary hover:text-primary md:inline-flex min-[1400px]:px-3.5 min-[1400px]:tracking-[0.04em] 2xl:px-4 2xl:text-[11px] 2xl:tracking-[0.05em]"
            >
              Existing Patient Appointment
            </Link>

            <button
              type="button"
              className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 xl:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-20 sm:py-28 md:py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
        404
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
        Page not found
      </h1>
      <p className="mt-4 text-slate-600">
        The page you&apos;re looking for has moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-sky-700 px-6 font-medium text-white hover:bg-sky-800"
      >
        Return home
      </Link>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-mist-950">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/site_theme_sky_odyssey.webp')] bg-cover bg-center opacity-30" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-mist-950/75" />

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "5px 5px",
        }}
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-5 text-center sm:px-6">
        {/* Logo */}
        <Image
          src="/logo-warthunder-new.svg"
          alt="War Thunder"
          width={500}
          height={330}
          priority
          className="mb-8 h-auto w-[min(65vw,360px)] opacity-90 sm:mb-10 sm:w-100"
        />

        {/* Error code */}
        <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-mist-500">
          <span className="h-px w-8 bg-mist-700 sm:w-12" />
          Error 404
          <span className="h-px w-8 bg-mist-700 sm:w-12" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold uppercase tracking-tight text-mist-100 sm:text-5xl lg:text-6xl">
          Target Not Found
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-lg text-sm leading-6 text-mist-400 sm:text-base">
          The requested location could not be found. It may have been moved,
          removed, or never existed in the first place.
        </p>

        {/* Actions */}
        <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:flex-row">
          <Link
            href="/"
            className="flex h-12 flex-1 items-center justify-center border border-red-500 bg-red-700 px-6 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-red-600"
          >
            Return to Base
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex h-12 flex-1 items-center justify-center border border-mist-700 bg-mist-900/70 px-6 text-xs font-semibold uppercase tracking-[0.14em] text-mist-200 backdrop-blur-sm transition-colors hover:bg-mist-800"
          >
            Go Back
          </button>
        </div>

        {/* Status */}
        <div className="mt-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-mist-600">
          <span className="h-1.5 w-1.5 bg-red-500" />
          Connection Lost
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-mist-950 to-transparent" />

      {/* Corner decorations */}
      <div className="pointer-events-none absolute left-4 top-4 h-12 w-12 border-l border-t border-mist-700/50 sm:left-8 sm:top-8 sm:h-16 sm:w-16" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-12 w-12 border-b border-r border-mist-700/50 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16" />
    </main>
  );
}

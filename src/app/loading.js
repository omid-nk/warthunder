"use client";
import Image from "next/image";

export default function Loading() {
  return (
    <main className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-mist-950">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/site_theme_sky_odyssey.webp')] bg-cover bg-center opacity-20" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-mist-950/85" />

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
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main */}
      <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-6">
        {/* Logo */}
        <div className="relative mb-10 w-full max-w-70 sm:max-w-85">
          <Image
            src="/logo-warthunder-new.svg"
            alt="War Thunder"
            width={500}
            height={330}
            priority
            className="h-auto w-full opacity-90"
          />

          {/* Logo glow */}
          <div className="absolute inset-0 -z-10 bg-red-600/10 blur-3xl" />
        </div>

        {/* System status */}
        <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-mist-500">
          <span className="h-px w-8 bg-mist-700 sm:w-12" />
          Initializing
          <span className="h-px w-8 bg-mist-700 sm:w-12" />
        </div>

        {/* Progress */}
        <div className="w-full max-w-sm">
          <div className="mb-2 flex items-center justify-between text-[9px] font-medium uppercase tracking-[0.18em] text-mist-600">
            <span>Loading battlefield</span>
            <span className="animate-pulse">Please wait</span>
          </div>

          <div className="h-1 w-full overflow-hidden bg-mist-800">
            <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] bg-red-600" />
          </div>
        </div>

        {/* Status lines */}
        <div className="mt-8 flex w-full max-w-sm flex-col gap-2">
          <Status label="SYSTEM" value="ONLINE" active />
          <Status label="ENGINE" value="STARTING" />
          <Status label="BATTLEFIELD" value="LOADING" />
        </div>

        {/* Bottom status */}
        <div className="mt-10 flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-mist-600">
          <span className="h-1.5 w-1.5 animate-pulse bg-red-500" />
          Establishing connection
        </div>
      </div>

      {/* Corner decorations */}
      <div className="pointer-events-none absolute left-4 top-4 h-14 w-14 border-l border-t border-mist-700/50 sm:left-8 sm:top-8 sm:h-20 sm:w-20" />

      <div className="pointer-events-none absolute bottom-4 right-4 h-14 w-14 border-b border-r border-mist-700/50 sm:bottom-8 sm:right-8 sm:h-20 sm:w-20" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-mist-950 to-transparent" />

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(220%);
          }
        }
      `}</style>
    </main>
  );
}

function Status({ label, value, active = false }) {
  return (
    <div className="flex items-center justify-between border-b border-mist-800/70 py-2 text-[9px] uppercase tracking-[0.2em]">
      <div className="flex items-center gap-2 text-mist-600">
        <span
          className={`h-1.5 w-1.5 ${active ? "bg-emerald-500" : "bg-mist-700"}`}
        />
        {label}
      </div>

      <span className="text-mist-500">{value}</span>
    </div>
  );
}

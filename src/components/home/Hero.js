import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-mist-950">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/reel-2023.webm" type="video/webm" />
        <source src="/reel-2023.mp4" type="video/mp4" />
      </video>

      {/* Video overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "5px 5px",
        }}
      />

      {/* Main gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-mist-950 via-transparent to-black/30" />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-svh items-center justify-center px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="flex w-full max-w-360 flex-col items-center text-center">
          {/* Logo */}
          <Image
            src="/logo-warthunder-new.svg"
            alt="War Thunder"
            width={900}
            height={590}
            priority
            className="
              h-auto
              w-[min(88vw,560px)]
              sm:w-[min(78vw,680px)]
              lg:w-[min(65vw,820px)]
              xl:w-[min(60vw,900px)]
            "
          />

          {/* Actions */}
          <div
            className="
              mt-7
              flex w-full max-w-85
              flex-col gap-3
              sm:mt-9 sm:max-w-125 sm:flex-row
              lg:mt-11 lg:max-w-140
            "
          >
            <Link
              href="/register"
              className="
                flex h-12 flex-1 items-center justify-center
                border border-red-500
                bg-red-700
                px-6
                py-4
                text-[11px] font-semibold uppercase tracking-[0.14em] text-white
                transition-colors
                hover:bg-red-600
                sm:h-13 sm:px-8 sm:text-xs
              "
            >
              register now
            </Link>

            <Link
              href="/download"
              className="
                flex h-12 flex-1 items-center justify-center
                border border-mist-400/60
                bg-mist-950/50
                px-6 py-4
                text-[11px] font-semibold uppercase tracking-[0.14em] text-white
                backdrop-blur-sm
                transition-colors
                hover:bg-mist-800/70
                sm:h-13 sm:px-8 sm:text-xs
              "
            >
              download game
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-mist-950 to-transparent sm:h-40" />
    </section>
  );
}

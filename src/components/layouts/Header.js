"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHumanTarget } from "react-icons/gi";
import { LuChevronDown, LuMenu, LuSearch, LuX } from "react-icons/lu";

export default function Header() {
  const [lang, setLang] = useState("en");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const langs = [
    {
      id: 1,
      name: "English",
      slug: "en",
      img: "/flags/flag_en.svg",
    },
    {
      id: 2,
      name: "Čeština",
      slug: "cs",
      img: "/flags/flag_cs.svg",
    },
    {
      id: 3,
      name: "Deutsch",
      slug: "de",
      img: "/flags/flag_de.svg",
    },
    {
      id: 4,
      name: "Español",
      slug: "es",
      img: "/flags/flag_es.svg",
    },
    {
      id: 5,
      name: "Français",
      slug: "fr",
      img: "/flags/flag_fr.svg",
    },
    {
      id: 6,
      name: "한국어",
      slug: "ko",
      img: "/flags/flag_ko.svg",
    },
    {
      id: 7,
      name: "Polski",
      slug: "pl",
      img: "/flags/flag_pl.svg",
    },
    {
      id: 8,
      name: "Português",
      slug: "pt",
      img: "/flags/flag_pt.svg",
    },
    {
      id: 9,
      name: "Русский",
      slug: "ru",
      img: "/flags/flag_ru.svg",
    },
    {
      id: 10,
      name: "中文",
      slug: "zh",
      img: "/flags/flag_zh.svg",
    },
  ];

  const topHeaderItems = [
    { id: 1, name: "games", slug: "games" },
    { id: 2, name: "store", slug: "store" },
    { id: 3, name: "support", slug: "support" },
    { id: 4, name: "search", slug: "search" },
  ];

  const mainHeaderItems = [
    { id: 1, name: "game", slug: "game" },
    { id: 2, name: "media", slug: "media" },
    { id: 3, name: "tutorials", slug: "tutorials" },
    { id: 4, name: "workshop", slug: "workshop" },
    { id: 5, name: "community", slug: "community" },
    { id: 6, name: "exports", slug: "exports" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentLang = langs.find((item) => item.slug === lang);

  const handleLanguageChange = (slug) => {
    setLang(slug);
    setIsLangOpen(false);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsLangOpen(false);
  };

  return (
    <section
      className={`absolute left-0 top-0 z-50 w-full ${
        isScrolled ? "pointer-events-none" : ""
      }`}
    >
      {/* ================= TOP BAR ================= */}
      <div
        className={`bg-mist-950 text-mist-500 border-b border-mist-800/60 transition-all duration-300 ${
          isScrolled
            ? "pointer-events-none -translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="mx-auto flex w-full max-w-360 items-stretch justify-between">
          {/* Left */}
          <nav className="flex items-center px-4 sm:px-5">
            {/* Gaijin */}
            <div className="mr-2 flex items-center border-r border-mist-800 pr-4 sm:pr-6">
              <Image src="/icon-gjn.svg" alt="Gaijin" width={18} height={18} />
            </div>

            {/* Top navigation */}
            <div className="hidden items-center sm:flex">
              {topHeaderItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/${item.slug}`}
                  className="flex items-center px-3 py-2.5 text-[11px] uppercase tracking-wide transition-colors hover:bg-mist-700/40 hover:text-mist-200 sm:px-4"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right */}
          <div className="flex items-stretch">
            {/* Login */}
            <Link
              href="/login"
              className="hidden h-full items-center gap-2 px-3 py-2.5 transition-colors hover:bg-mist-700/40 hover:text-mist-200 sm:flex sm:px-4"
            >
              <GiHumanTarget className="size-4" />

              <span className="text-xs uppercase tracking-wide">sign in</span>
            </Link>

            {/* Language */}
            <div className="relative">
              {isLangOpen && (
                <div
                  onClick={() => setIsLangOpen(false)}
                  className="fixed inset-0 z-40 bg-black/40"
                />
              )}

              <button
                type="button"
                onClick={() => {
                  setIsLangOpen((prev) => !prev);
                  setIsMobileMenuOpen(false);
                }}
                className="relative z-50 flex h-full cursor-pointer items-center gap-1.5 px-3 py-2.5 transition-colors hover:bg-mist-700/40 hover:text-mist-200 sm:gap-2 sm:px-4"
              >
                <Image
                  src={currentLang.img}
                  alt={currentLang.name}
                  width={20}
                  height={15}
                />

                <span className="text-xs uppercase tracking-wide">
                  {currentLang.slug}
                </span>

                <LuChevronDown
                  className={`size-3.5 transition-transform duration-200 sm:size-4 ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLangOpen && (
                <section className="absolute right-0 top-full z-50 min-w-52 border border-mist-700 bg-mist-800 py-2 shadow-2xl">
                  {langs.map((item) => (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => handleLanguageChange(item.slug)}
                      className={`flex w-full items-center gap-3 border-l-2 py-2.5 pl-5 pr-8 text-left transition-colors hover:bg-mist-950/40 ${
                        item.slug === lang
                          ? "border-mist-200 text-mist-200"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={20}
                        height={15}
                      />

                      <span className="text-sm">{item.name}</span>
                    </button>
                  ))}
                </section>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <header
        className={`w-full border-b border-mist-800 transition-all duration-300 ${
          isScrolled
            ? "pointer-events-auto fixed left-0 top-0 bg-mist-950/95 shadow-2xl backdrop-blur-md"
            : "relative bg-mist-950/30"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-360 items-center justify-between gap-8 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
            isScrolled ? "min-h-16" : "min-h-20 sm:min-h-28 lg:min-h-36"
          }`}
        >
          {/* Logo + Navigation */}
          <nav className="flex h-full min-w-0 items-center">
            {/* Logo */}
            <Link
              href="/"
              className={`flex shrink-0 items-center transition-all duration-300 ${
                isScrolled ? "mr-6 sm:mr-8 lg:mr-10" : "mr-6 sm:mr-10 lg:mr-14"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/logo-warthunder-new.svg"
                alt="War Thunder"
                width={180}
                height={120}
                priority
                className={`h-auto transition-all duration-300 ${
                  isScrolled ? "w-24 sm:w-28 lg:w-32" : "w-28 sm:w-36 lg:w-40"
                }`}
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden h-full items-center lg:flex">
              {mainHeaderItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className={`flex h-full items-center text-[11px] uppercase tracking-[0.12em] text-mist-400 transition-all duration-300 hover:text-mist-100 ${
                    isScrolled ? "px-2 xl:px-4" : "px-3 xl:px-5"
                  } xl:text-xs`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className={`flex items-center justify-center border border-mist-700 text-mist-400 transition-all duration-300 hover:bg-mist-800/60 hover:text-mist-100 ${
                isScrolled ? "size-9" : "size-9 sm:size-10"
              }`}
            >
              <LuSearch className="size-4 sm:size-4.5" />
            </button>

            {/* Register */}
            <Link
              href="/register"
              className={`hidden border border-red-500 bg-red-700 font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-red-600 sm:block ${
                isScrolled
                  ? "px-5 py-2 text-[10px]"
                  : "px-5 py-2.5 text-[10px] lg:px-7 lg:py-3 lg:text-xs"
              }`}
            >
              register now!
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={handleMobileMenu}
              className="flex size-9 items-center justify-center border border-mist-700 text-mist-400 transition-colors hover:bg-mist-800/60 hover:text-mist-100 lg:hidden sm:size-10"
            >
              {isMobileMenuOpen ? (
                <LuX className="size-5" />
              ) : (
                <LuMenu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMobileMenuOpen && (
          <div className="border-t border-mist-800 bg-mist-950 lg:hidden">
            <div className="mx-auto w-full max-w-360 px-4 py-3 sm:px-6">
              {/* Main navigation */}
              <nav className="flex flex-col">
                {mainHeaderItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="border-b border-mist-800/60 py-3 text-xs uppercase tracking-[0.12em] text-mist-400 transition-colors hover:text-mist-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Top bar links - mobile only */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-mist-800 pt-4 sm:hidden">
                {topHeaderItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`/${item.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[10px] uppercase tracking-wide text-mist-500 transition-colors hover:text-mist-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile actions */}
              <div className="flex items-center gap-3 pt-4">
                {/* Sign in */}
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex flex-1 items-center justify-center gap-2 border border-mist-700 px-4 py-3 text-xs uppercase tracking-wide text-mist-400 transition-colors hover:bg-mist-800/60 hover:text-mist-100 sm:hidden"
                >
                  <GiHumanTarget className="size-4" />
                  <span>sign in</span>
                </Link>

                {/* Register */}
                <Link
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex flex-1 items-center justify-center border border-red-500 bg-red-700 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-red-600 sm:hidden"
                >
                  register
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </section>
  );
}

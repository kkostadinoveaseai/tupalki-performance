"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle background opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Начало", path: "/" },
    { name: "Услуги", path: "/products" },
    { name: "Отзиви", path: "/reviews" },
    { name: "Контакти", path: "/contacts" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-brand-dark/90 border-b border-brand-border shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 group">
            {/* Tachometer Icon */}
            <svg
              className="w-8 h-8 text-brand-accent transform transition-transform duration-500 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-wider text-white uppercase sm:text-2xl">
                TUPALKI
              </span>
              <span className="text-[10px] font-heading font-semibold text-brand-accent tracking-[0.25em] uppercase -mt-1.5 transition-all group-hover:tracking-[0.3em]">
                PERFORMANCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-body font-medium text-sm tracking-wide transition-all duration-200 relative py-2 ${
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* Glowing Indicator bar */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent shadow-[0_0_8px_#E10600] rounded-full" />
                  )}

                </Link>
              );
            })}
          </nav>

          {/* CTA Desktop Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contacts"
              className="px-8 py-3 rounded-full font-heading font-extrabold text-xs tracking-widest uppercase bg-brand-accent text-white border border-brand-accent/30 shadow-[0_0_15px_rgba(225,6,0,0.15)] transition-all hover:bg-brand-accent-hover hover:shadow-[0_0_25px_rgba(225,6,0,0.5)] hover:scale-105"
            >
              Бързо Запитване
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-brand-gray/50 focus:outline-none transition-colors border border-transparent hover:border-brand-border"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Отвори менюто</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding Overlay) */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-lg border-b border-brand-border transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-[80px] opacity-100 visible h-[calc(100vh-80px)]"
            : "-translate-y-full opacity-0 invisible h-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-8 pb-12 space-y-6 flex flex-col items-center justify-start h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-heading font-bold text-2xl tracking-wider uppercase transition-colors py-2 ${
                  isActive ? "text-brand-accent" : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="w-full pt-8 border-t border-brand-border flex flex-col items-center">
            <Link
              href="/contacts"
              onClick={() => setIsOpen(false)}
              className="w-3/4 max-w-xs text-center py-4 rounded-full font-heading font-extrabold text-sm tracking-widest uppercase bg-brand-accent text-white shadow-[0_0_15px_rgba(225,6,0,0.2)] hover:bg-brand-accent-hover hover:shadow-[0_0_25px_rgba(225,6,0,0.5)] transition-all active:scale-95"
            >
              СВЪРЖЕТЕ СЕ С НАС
            </Link>

            
            {/* Guarantee Highlight in Mobile Menu */}
            <div className="mt-8 px-6 py-3 rounded-xl bg-brand-gray border border-brand-border text-center max-w-xs">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest block mb-1">
                ГАРAНЦИЯ В БЪЛГАРИЯ
              </span>
              <p className="text-[11px] text-neutral-400">
                Единствените в цяла България, които предлагат пълна гаранция за софтуера.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

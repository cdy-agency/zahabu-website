"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { isNavActive } from "@/lib/nav";

const navLinkClass = (active: boolean) =>
  [
    "relative text-sm font-medium transition-colors duration-200",
    "rounded-md px-1.5 py-1 -mx-0.5",
    "outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary/80",
    active ? "text-accent" : "text-white/90 hover:text-accent",
  ].join(" ");

const navUnderline = (
  <span
    className="pointer-events-none absolute -bottom-0.5 left-1.5 right-1.5 h-0.5 rounded-full bg-accent"
    aria-hidden
  />
);

type NavTextLinkProps = {
  href: string;
  children: string;
  onClick?: () => void;
};

function NavTextLink({ href, children, onClick }: NavTextLinkProps) {
  const pathname = usePathname();
  const active = isNavActive(pathname, href);
  return (
    <Link
      href={href}
      onClick={onClick}
      className={navLinkClass(active)}
      aria-current={active ? "page" : undefined}
    >
      <span className="relative z-0 inline-block">
        {children}
        {active ? navUnderline : null}
      </span>
    </Link>
  );
}

const aboutDropdownItems = [
  {
    href: "/about/background",
    label: "About Us",
    description: "Our journey",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    href: "/about/team",
    label: "Our team",
    description: "Meet the people behind us",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

function AboutDropdown({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isAboutActive = pathname.startsWith("/about");

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={[
          "relative flex items-center gap-1 text-sm font-medium transition-colors duration-200",
          "rounded-md px-1.5 py-1 -mx-0.5",
          "outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary/80",
          isAboutActive ? "text-accent" : "text-white/90 hover:text-accent",
        ].join(" ")}
        aria-expanded={open}
        aria-haspopup="true"
      >
        About Us
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
        {isAboutActive && (
          <span
            className="pointer-events-none absolute -bottom-0.5 left-1.5 right-1.5 h-0.5 rounded-full bg-accent"
            aria-hidden
          />
        )}
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-white/10 bg-primary/95 backdrop-blur-md shadow-2xl overflow-hidden z-50">
          <div className="p-2">
            {aboutDropdownItems.map((item) => {
              const active = isNavActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 group",
                    active
                      ? "bg-accent/10 text-accent"
                      : "text-white/80 hover:bg-white/8 hover:text-white",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "mt-0.5 shrink-0 transition-colors",
                      active
                        ? "text-accent"
                        : "text-white/50 group-hover:text-accent",
                    ].join(" ")}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-tight">
                      {item.label}
                    </p>
                    <p
                      className={[
                        "text-xs mt-0.5 leading-tight",
                        active ? "text-accent/70" : "text-white/40",
                      ].join(" ")}
                    >
                      {item.description}
                    </p>
                  </div>
                  {active && (
                    <span className="ml-auto mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileAboutOpen(false);
  };

  return (
    <div
      className={[
        "fixed top-0 left-0 z-50 w-full min-w-0 max-w-full overflow-x-clip transition-all duration-300",
        scrolled ? "section-padding pt-3 sm:pt-4" : "section-padding pt-3 sm:pt-4",
      ].join(" ")}
    >
      <nav
        className={[
          "relative w-full px-4 py-3 sm:px-6 md:px-8 md:py-4 border transition-all duration-300",
          scrolled
            ? "bg-primary shadow-xl border-white/10 md:rounded-full rounded-none"
            : "bg-primary/80 backdrop-blur-sm border-white/5 shadow-lg md:rounded-full rounded-2xl",
        ].join(" ")}
        aria-label="Main navigation"
      >
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <NavTextLink href="/">Home</NavTextLink>
            <AboutDropdown scrolled={scrolled} />
            <NavTextLink href="/service">Service</NavTextLink>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
            <span className="text-white font-black text-2xl tracking-tight italic">
              ZAHABU
            </span>
            <span className="text-white/40 text-xl font-thin">|</span>
            <span className="text-white text-sm font-light tracking-[0.3em] uppercase">
              Solution Ltd
            </span>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold shadow-md transition-colors bg-accent text-white hover:bg-accent/90"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden flex-col gap-0">
          <div className="flex items-center justify-between gap-3 min-h-[2.5rem]">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex min-w-0 items-center gap-1.5 sm:gap-2"
            >
              <span className="shrink-0 text-lg font-black italic tracking-tight text-white sm:text-xl">
                ZAHABU
              </span>
              <span className="hidden shrink-0 text-base font-thin text-white/40 sm:inline">
                |
              </span>
              <span className="truncate text-[10px] font-light uppercase tracking-[0.2em] text-white sm:text-xs sm:tracking-[0.3em]">
                Solution Ltd
              </span>
            </Link>

            <button
              type="button"
              className="-mr-1 shrink-0 rounded-full p-2 text-white hover:bg-white/10 transition-colors"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          <div
            id="mobile-nav-menu"
            className={
              menuOpen
                ? "mt-3 flex flex-col gap-1 border-t border-white/15 pt-3"
                : "hidden"
            }
          >
            {menuOpen && (
              <>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block py-2.5 text-sm text-white/90"
                >
                  Home
                </Link>

                <div>
                  <button
                    type="button"
                    onClick={() => setMobileAboutOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-2.5 text-sm text-white/90"
                  >
                    About Us
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-3 h-3 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {mobileAboutOpen && (
                    <div className="ml-3 flex flex-col gap-0.5 border-l border-white/15 pl-3 pb-1">
                      {aboutDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className="flex items-center gap-2 py-2 text-sm text-white/70 hover:text-accent transition-colors"
                        >
                          <span className="text-white/40">{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/service"
                  onClick={closeMenu}
                  className="block py-2.5 text-sm text-white/90"
                >
                  Service
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block py-2.5 text-sm font-bold text-accent"
                >
                  Contact Us
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

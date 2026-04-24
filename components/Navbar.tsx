"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BTN_HOVER, BTN_TAP, SPRING_HOVER } from "@/components/motion";
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const homeActive = isNavActive(pathname, "/");
  const aboutActive = isNavActive(pathname, "/about");
  const contactActive = isNavActive(pathname, "/submit-claim");
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="section-padding absolute top-0 left-0 z-50 w-full min-w-0 max-w-full overflow-x-clip pt-3 sm:pt-4">
      <motion.nav
        className="relative w-full rounded-2xl md:rounded-full bg-primary/80 backdrop-blur-sm px-4 py-3 sm:px-6 md:px-8 md:py-4 border border-white/5 shadow-lg"
        initial={false}
        whileHover={reduce ? undefined : { y: -1, boxShadow: "0 16px 40px -14px rgba(0,0,0,0.3)" }}
        transition={SPRING_HOVER}
        aria-label="Main navigation"
      >
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <motion.span
              whileHover={reduce ? undefined : { y: -1 }}
              whileTap={BTN_TAP}
            >
              <NavTextLink href="/">Home</NavTextLink>
            </motion.span>
            <motion.span
              whileHover={reduce ? undefined : { y: -1 }}
              whileTap={BTN_TAP}
            >
              <NavTextLink href="/about">About Us</NavTextLink>
            </motion.span>
          </div>

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2"
            whileHover={reduce ? undefined : { scale: 1.02 }}
            transition={SPRING_HOVER}
          >
            <span className="text-white font-black text-2xl tracking-tight italic">ZAHABU</span>
            <span className="text-white/40 text-xl font-thin">|</span>
            <span className="text-white text-sm font-light tracking-[0.3em] uppercase">Solution Ltd</span>
          </motion.div>

          <motion.span
            whileHover={reduce ? undefined : { ...BTN_HOVER }}
            whileTap={BTN_TAP}
          >
            <Link
              href="/submit-claim"
              aria-current={contactActive ? "page" : undefined}
              className={[
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold shadow-md transition-colors",
                "bg-accent text-white hover:bg-accent/90",
                contactActive
                  ? "ring-2 ring-white/30 ring-offset-2 ring-offset-primary/30"
                  : "",
              ].join(" ")}
            >
              Contact-us ↗
            </Link>
          </motion.span>
        </div>

        <div className="flex md:hidden flex-col gap-0">
          <div className="flex items-center justify-between gap-3 min-h-[2.5rem]">
            <motion.span whileTap={BTN_TAP} whileHover={reduce ? undefined : { scale: 1.01 }}>
              <Link
                href="/"
                onClick={closeMenu}
                className="flex min-w-0 items-center gap-1.5 sm:gap-2"
              >
                <span className="shrink-0 text-lg font-black italic tracking-tight text-white sm:text-xl">
                  ZAHABU
                </span>
                <span className="hidden shrink-0 text-base font-thin text-white/40 sm:inline">|</span>
                <span className="truncate text-[10px] font-light uppercase tracking-[0.2em] text-white sm:text-xs sm:tracking-[0.3em]">
                  Solution Ltd
                </span>
              </Link>
            </motion.span>

            <motion.button
              type="button"
              className="-mr-1 shrink-0 rounded-full p-2 text-white"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
              whileTap={BTN_TAP}
              whileHover={reduce ? undefined : { backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </motion.button>
          </div>

          <div
            id="mobile-nav-menu"
            className={menuOpen ? "mt-3 flex flex-col gap-1 border-t border-white/15 pt-3" : "hidden"}
          >
            {menuOpen && (
              <>
                <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.02 }}>
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className={[
                      "block w-full rounded-lg py-2.5 pl-1 text-left text-sm font-medium transition-colors",
                      "focus-visible:ring-2 focus-visible:ring-accent/70",
                      homeActive ? "font-semibold text-accent" : "text-white hover:bg-white/5",
                    ].join(" ")}
                    aria-current={homeActive ? "page" : undefined}
                  >
                    <span className="relative inline-block">
                      Home
                      {homeActive ? (
                        <span
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-accent"
                          aria-hidden
                        />
                      ) : null}
                    </span>
                  </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 }}>
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className={[
                      "block w-full rounded-lg py-2.5 pl-1 text-left text-sm font-medium transition-colors",
                      "focus-visible:ring-2 focus-visible:ring-accent/70",
                      aboutActive ? "font-semibold text-accent" : "text-white hover:bg-white/5",
                    ].join(" ")}
                    aria-current={aboutActive ? "page" : undefined}
                  >
                    <span className="relative inline-block">
                      About Us
                      {aboutActive ? (
                        <span
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-accent"
                          aria-hidden
                        />
                      ) : null}
                    </span>
                  </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <Link
                    href="/submit-claim"
                    onClick={closeMenu}
                    className={[
                      "mt-1 block rounded-full px-4 py-3 text-center text-sm font-bold shadow-lg transition",
                      "bg-accent text-white hover:shadow-xl",
                      contactActive ? "ring-2 ring-white/30" : "",
                    ].join(" ")}
                    aria-current={contactActive ? "page" : undefined}
                  >
                    Contact-us ↗
                  </Link>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

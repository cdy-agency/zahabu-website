"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  BTN_HOVER,
  BTN_TAP,
  EASE,
  SectionTransition,
  SPRING_HOVER,
} from "@/components/motion";

function HeroCTAs() {
  const reduce = useReducedMotion();
  const primary = "inline-flex items-center justify-center bg-accent text-primary font-bold px-8 py-3 rounded-sm uppercase tracking-widest text-sm shadow-lg";
  const outline =
    "inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-3 rounded-sm uppercase tracking-widest text-sm";

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const footer = document.getElementById("footer");
    if (footer) {
      e.preventDefault();
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (reduce) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#services" className={primary + " hover:opacity-90 transition-opacity duration-200"}>
          Our Services
        </a>
        <a
          href="#footer"
          onClick={handleContactClick}
          className={outline + " hover:bg-white hover:text-primary transition-all duration-200"}
        >
          Contact Us
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <motion.a
        href="#services"
        className={primary}
        whileHover={BTN_HOVER}
        whileTap={BTN_TAP}
        transition={SPRING_HOVER}
      >
        Our Services
      </motion.a>
      <motion.a
        href="#footer"
        onClick={handleContactClick}
        className={outline}
        whileHover={{
          ...BTN_HOVER,
          backgroundColor: "white",
          color: "var(--color-primary, #0f3356)",
          boxShadow: "0 12px 28px -10px rgba(255,255,255,0.25)",
        }}
        whileTap={BTN_TAP}
        transition={SPRING_HOVER}
      >
        Contact Us
      </motion.a>
    </div>
  );
}

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <SectionTransition
      when="mount"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <Image
        src="/insurance.jpg"
        alt="Auto Appraisal Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-primary opacity-85" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        {reduce ? (
          <div className="max-w-4xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              WELCOME TO ZAHABU <br />
              SOLUTIONS LTD
            </h1>
            <h2 className="text-accent text-xl md:text-2xl font-semibold mb-8">
              <Typewriter
                words={[
                  "Your Trusted Insurance Partner",
                  "Reliable Coverage Solutions",
                  "Protecting What Matters Most",
                  "Simplifying Insurance Access in Rwanda",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              An Insurance Brokerage Firm in Rwanda — collaborating with organizations and
              individuals to make insurance simple, accessible, and effective.
            </p>
            <HeroCTAs />
          </div>
        ) : (
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            <motion.span
              className="block text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
              }}
            >
              WELCOME TO ZAHABU
            </motion.span>
            <motion.span
              className="mt-1 block text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
              }}
            >
              SOLUTIONS LTD
            </motion.span>
            <motion.h2
              className="my-8 text-xl font-semibold text-accent md:text-2xl"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
              }}
            >
              <Typewriter
                words={[
                  "Your Trusted Insurance Partner",
                  "Reliable Coverage Solutions",
                  "Protecting What Matters Most",
                  "Simplifying Insurance Access in Rwanda",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </motion.h2>
            <motion.p
              className="mb-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg mx-auto"
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
            >
              An Insurance Brokerage Firm in Rwanda — collaborating with organizations and
              individuals to make insurance simple, accessible, and effective.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
              }}
            >
              <HeroCTAs />
            </motion.div>
          </motion.div>
        )}
      </div>
    </SectionTransition>
  );
}
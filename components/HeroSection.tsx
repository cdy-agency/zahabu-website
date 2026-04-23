"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  BTN_HOVER,
  BTN_TAP,
  EASE_3D,
  PERSPECTIVE_PX,
  SectionTransition,
  SPRING_HOVER,
} from "@/components/motion";

function HeroCTAs() {
  const reduce = useReducedMotion();
  const primary = "inline-flex items-center justify-center bg-accent text-primary font-bold px-8 py-3 rounded-sm uppercase tracking-widest text-sm shadow-lg";
  const outline =
    "inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-3 rounded-sm uppercase tracking-widest text-sm";

  if (reduce) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#services" className={primary + " hover:opacity-90 transition-opacity duration-200"}>
          Our Services
        </a>
        <a
          href="#contact"
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
        href="#contact"
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
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-primary opacity-85" />

      <div
        className="relative z-10 flex items-center justify-center min-h-screen text-center px-6 perspective-(--h-p)"
        style={{ ["--h-p" as string]: `${PERSPECTIVE_PX}px` }}
      >
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
            className="max-w-4xl transform-3d"
            style={{ transformStyle: "preserve-3d" }}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
          >
            <motion.span
              className="block text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight transform-3d"
              style={{ transformPerspective: PERSPECTIVE_PX }}
              variants={{
                hidden: { opacity: 0, rotateX: 52, y: 45, z: -70 },
                show: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  z: 0,
                  transition: { duration: 0.8, ease: EASE_3D },
                },
              }}
            >
              WELCOME TO ZAHABU
            </motion.span>
            <motion.span
              className="block mt-1 text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight [transform-style:preserve-3d]"
              style={{ transformPerspective: PERSPECTIVE_PX }}
              variants={{
                hidden: { opacity: 0, rotateX: 40, y: 36, z: -55 },
                show: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  z: 0,
                  transition: { duration: 0.8, ease: EASE_3D },
                },
              }}
            >
              SOLUTIONS LTD
            </motion.span>
            <motion.h2
              className="text-accent text-xl md:text-2xl font-semibold my-8 [transform-style:preserve-3d]"
              style={{ transformPerspective: PERSPECTIVE_PX }}
              variants={{
                hidden: { opacity: 0, rotateX: 24, y: 16, z: -32 },
                show: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  z: 0,
                  transition: { duration: 0.65, ease: EASE_3D },
                },
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
              className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
              style={{ transformPerspective: PERSPECTIVE_PX }}
              variants={{
                hidden: { opacity: 0, y: 20, rotateX: 12, z: -20 },
                show: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  z: 0,
                  transition: { duration: 0.6, ease: EASE_3D },
                },
              }}
            >
              An Insurance Brokerage Firm in Rwanda — collaborating with organizations and
              individuals to make insurance simple, accessible, and effective.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_3D } },
              }}
            >
              <HeroCTAs />
            </motion.div>
          </motion.div>
        )}
      </div>

      {reduce ? (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50"
          aria-hidden
        >
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-white animate-pulse" />
        </div>
      ) : (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: EASE_3D }}
          aria-hidden
        >
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-10 bg-white"
            animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </SectionTransition>
  );
}

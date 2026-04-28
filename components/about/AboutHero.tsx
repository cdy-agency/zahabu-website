"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE, SectionTransition } from "@/components/motion";

export default function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <SectionTransition
      when="mount"
      className="relative flex w-full min-h-[70vh] items-end overflow-hidden"
    >
      <Image
        src="/aboutUsimage.jpg"
        alt="ZAHABU Solutions team and company background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary opacity-80" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-tl-full bg-accent opacity-10" />

      <div className="section-padding relative z-10 pt-44 pb-20">
        {reduce ? (
          <div className="max-w-2xl">
            <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-4">Who We Are</p>
            <h1 className="text-white text-5xl font-bold leading-tight md:text-6xl mb-4">
              About <span className="text-accent">ZAHABU</span>
              <br />
              Solutions Ltd.
            </h1>
            <div className="mb-6 h-1 w-14 rounded-full bg-accent" />

            {/* FIRST PARAGRAPH */}
            <p className="text-base text-white/65 max-w-lg leading-relaxed">
              Rwanda&apos;s emerging insurance brokerage firm — built on trust, expertise, and a
              commitment to putting clients first. Established in 2025, headquartered in Kigali.
            </p>
          </div>
        ) : (
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            <motion.p
              className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-4"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
              }}
            >
              Who We Are
            </motion.p>

            <motion.h1
              className="text-5xl font-bold leading-tight text-white md:text-6xl mb-4"
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
              }}
            >
              About <span className="text-accent">ZAHABU</span>
              <br />
              Solutions Ltd.
            </motion.h1>

            <motion.div
              className="mb-6 h-1 w-14 origin-left rounded-full bg-accent"
              variants={{
                hidden: { opacity: 0, scaleX: 0 },
                show: { opacity: 1, scaleX: 1, transition: { duration: 0.4, ease: EASE } },
              }}
            />

            {/* FIRST PARAGRAPH */}
            <motion.p
              className="text-base text-white/65 max-w-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
            >
              Rwanda&apos;s emerging insurance brokerage firm — built on trust, expertise, and a
              commitment to putting clients first. Established in 2025, headquartered in Kigali.
            </motion.p>
          </motion.div>
        )}
      </div>
    </SectionTransition>
  );
}
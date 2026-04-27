"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const values = [
  {
    label: "Integrity",
    description: "We act with honesty and transparency in every interaction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Professionalism",
    description: "Our team upholds the highest standards in service delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    label: "Innovation",
    description: "We embrace new ideas to deliver smarter insurance solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6l-1 1H9l-1-1C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7z" />
      </svg>
    ),
  },
  {
    label: "Customer-Centered",
    description: "Every decision we make puts our clients' needs first.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Transparency",
    description: "Clear communication and open processes you can trust.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    label: "Reliability",
    description: "Consistent, dependable coverage when it matters most.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function WhatWeBelieve() {
  return (
    <div className="mb-20 mt-20 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-screen-xl mx-auto">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
          Our Values
        </p>
        <h2 className="text-primary text-3xl font-bold mb-3">
          What We Believe
        </h2>
        <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-6" />
        <p className="text-primary/60 text-sm leading-relaxed max-w-xl mx-auto">
          We are committed to providing innovative, reliable, and personalized insurance
          solutions to individuals and organizations across Rwanda.
        </p>
      </div>

      {/* Row 1 — 3 cards */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {values.slice(0, 3).map((value, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 hover:border-accent rounded-sm px-4 py-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-default text-center"
          >
            <div className="text-accent group-hover:scale-110 transition-transform duration-300">
              {value.icon}
            </div>
            <p className="text-primary text-[11px] font-bold tracking-widest uppercase leading-tight">
              {value.label}
            </p>
            <p className="text-primary/50 text-xs leading-relaxed max-w-[160px]">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Row 2 — 3 cards */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {values.slice(3, 6).map((value, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 hover:border-accent rounded-sm px-4 py-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-default text-center"
          >
            <div className="text-accent group-hover:scale-110 transition-transform duration-300">
              {value.icon}
            </div>
            <p className="text-primary text-[11px] font-bold tracking-widest uppercase leading-tight">
              {value.label}
            </p>
            <p className="text-primary/50 text-xs leading-relaxed max-w-[160px]">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const sectors = [
  {
    label: "Corporate & SMEs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    label: "Transport & Logistics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Healthcare Institutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    label: "Retail & Trading Businesses",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    label: "Financial Services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    label: "Construction & Engineering",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    label: "Hospitality & Real Estate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Agriculture & Cooperatives",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22V12" />
        <path d="M12 12C12 12 7 9 7 4c3.5.5 5 3 5 3s1.5-2.5 5-3c0 5-5 8-5 8z" />
        <path d="M5 22c0-4 3-7 7-7" />
        <path d="M19 22c0-4-3-7-7-7" />
      </svg>
    ),
  },
  {
    label: "Individuals & High-Net-Worth Clients",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
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

export default function SectorsWeServe() {
  return (
    <div className="mb-20 mt-20 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-screen-xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
          Industries
        </p>
        <h3 className="text-primary text-3xl font-bold mb-3">
          Sectors We Serve
        </h3>
        <div className="w-10 h-1 bg-accent rounded-full mx-auto" />
      </div>

      {/* Row 1 — 4 cards */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {sectors.slice(0, 4).map((sector, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 hover:border-accent rounded-sm px-4 py-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-default text-center"
          >
            <div className="text-accent group-hover:scale-110 transition-transform duration-300">
              {sector.icon}
            </div>
            <p className="text-primary text-[11px] font-bold tracking-widest uppercase leading-tight">
              {sector.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Row 2 — 3 cards centered */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 sm:px-[12.5%]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {sectors.slice(4, 7).map((sector, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 hover:border-accent rounded-sm px-4 py-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-default text-center"
          >
            <div className="text-accent group-hover:scale-110 transition-transform duration-300">
              {sector.icon}
            </div>
            <p className="text-primary text-[11px] font-bold tracking-widest uppercase leading-tight">
              {sector.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Row 3 — 2 cards centered */}
      <motion.div
        className="grid grid-cols-2 gap-4 sm:px-[25%]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {sectors.slice(7, 9).map((sector, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 hover:border-accent rounded-sm px-4 py-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-default text-center"
          >
            <div className="text-accent group-hover:scale-110 transition-transform duration-300">
              {sector.icon}
            </div>
            <p className="text-primary text-[11px] font-bold tracking-widest uppercase leading-tight">
              {sector.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
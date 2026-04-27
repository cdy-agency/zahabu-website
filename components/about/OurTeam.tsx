"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

const staff = [
  {
    number: "01",
    name: "Mr. Gahima Pierre",
    role: "Chief Executive Officer",
    image: "/Zahabu1.webp",
    email: null,
  },
  {
    number: "02",
    name: "Ms. Umuhoza God's Answer",
    role: "Chief Operations Officer",
    image: "/Zahabu3.webp",
    email: "G.umuhoza@zahabusolution.rw",
  },
  {
    number: "03",
    name: "Mr. Bizaba Loic",
    role: "Head of Business Development",
    image: "/Zahabu2.webp",
    email: "Lbizaba@zahabusolution.rw",
  },
];

function TeamCard({ member, index }: { member: typeof staff[0]; index: number }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative bg-white flex flex-col items-center text-center pt-0 pb-7 overflow-hidden"
    >

      {/* Static left accent */}
      <div className="absolute top-0 left-0 w-0.75 h-full bg-accent z-10" />

      {/* Card number — overlays image */}
      <span className="absolute top-3 right-3 z-20 text-[10px] font-bold text-accent tracking-widest bg-black/40 px-1.5 py-0.5">
        {member.number}
      </span>

      {/* Photo */}
      <div className="relative w-full mb-5">
        <div className="relative w-full overflow-hidden" style={{ height: "240px" }}>
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="300px"
            className="object-cover object-top"
          />
        </div>

        {/* Email icon badge — bottom center of photo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 bg-accent px-5 py-2 flex items-center justify-center">
          {member.email ? (
            <div className="relative">
              <a
                href={`mailto:${member.email}`}
                className="text-primary block"
                onMouseEnter={() => setTooltipOpen(true)}
                onMouseLeave={() => setTooltipOpen(false)}
              >
                <Mail size={15} strokeWidth={2.5} />
              </a>

              {/* Tooltip */}
              <AnimatePresence>
                {tooltipOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-medium px-3 py-1.5 whitespace-nowrap z-50 pointer-events-none"
                  >
                    {member.email}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Mail size={15} strokeWidth={2.5} className="text-primary/40" />
          )}
        </div>
      </div>

      {/* Name */}
      <h3 className="text-primary text-sm font-bold uppercase tracking-[0.06em] leading-snug mb-1 px-5">
        {member.name}
      </h3>

      {/* Accent line */}
      <div className="w-8 h-0.5 bg-accent mx-auto my-2" />

      {/* Role */}
      <p className="text-muted text-xs leading-relaxed px-5">
        {member.role}
      </p>
    </motion.div>
  );
}


function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="w-0.75 h-6 bg-accent shrink-0" />
      <p className="text-primary text-[10px] font-black tracking-[0.35em] uppercase">
        {label}
      </p>
      <div className="flex-1 h-px bg-primary/10" />
    </div>
  );
}

export default function OurTeam() {
  return (
    <main className="bg-[#f7f7f5] min-h-screen">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden flex items-end min-h-95 sm:min-h-110">
        <Image
          src="/ourteam.jpg"
          alt="Our Team"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "brightness(0.38)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(25,20,75,0.95) 0%, rgba(25,20,75,0.5) 50%, rgba(25,20,75,0.2) 100%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-0.75 bg-accent z-10" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 section-padding pb-14 pt-32 w-full"
        >
          <p className="text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-3">
            The People Behind ZAHABU
          </p>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-4">
            Our Team
          </h1>
          <div className="w-10 h-0.75 bg-accent" />
        </motion.div>
      </section>

      {/* ── Leadership ── */}
      <section className="section-padding py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14"
        >
          <p className="text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-3">
            Our People
          </p>
          <h2 className="text-primary text-4xl sm:text-5xl font-bold mb-3 leading-tight">
            Our Team
          </h2>
          <div className="w-10 h-0.75 bg-accent mx-auto mb-5" />
          <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
            Our team is dedicated to providing tailored solutions with a focus on trust and exceptional service.
          </p>
        </motion.div>

        <SectionLabel label="Leadership" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 max-w-3xl mx-auto">
          {staff.map((member, i) => (
            <TeamCard key={member.number} member={member} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
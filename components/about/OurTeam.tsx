"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EASE, SectionTransition } from "@/components/motion";

const staff = [
  {
    name: "Mr. Gahima Pierre",
    role: "Chief Executive Officer",
    image: "/Zahabu1.jpg",
  },
  {
    name: "Mr. Ntezimana Jerome",
    role: "Chief Financial Officer",
    image: "/Zahabu4.jpg",
  },
  {
    name: "Ms. Umuhoza God's Answer",
    role: "Chief Operating Officer",
    image: "/Zahabu3.jpg",
  },
  {
    name: "Mr. Bizaba Loic",
    role: "Business Development Manager",
    image: "/Zahabu2.jpg",
  },
];

const teamImages = [
  { image: "/team1.jpg", alt: "ZAHABU Team 1" },
  { image: "/team2.jpg", alt: "ZAHABU Team 2" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

function StaffCard({ member, index }: { member: typeof staff[0]; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-400"
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-accent" />

      {/* Photo */}
      <div className="relative w-full aspect-[4/4] overflow-hidden bg-gray-50">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

        {/* Role badge overlaid on photo bottom */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-block bg-accent text-white text-[10px] font-black tracking-[0.25em] uppercase px-3 py-1 rounded-sm">
            {member.role}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="px-5 py-4">
        <h3 className="text-primary font-bold text-sm tracking-wide leading-snug">
          {member.name}
        </h3>
        <div className="mt-2 w-6 h-0.5 bg-accent rounded-full" />
      </div>
    </motion.div>
  );
}

export default function OurTeam() {
  return (
    <SectionTransition className="bg-[#f7f7f5] mt-20 section-padding py-24" id="our-team">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
          The People Behind ZAHABU
        </p>
        <h2 className="text-primary text-4xl font-bold mb-3">Our Team</h2>
        <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-5" />
        <p className="text-muted text-sm max-w-lg mx-auto leading-relaxed">
          Our team is dedicated to providing tailored insurance solutions with
          focus on trust and exceptional service.
        </p>
      </div>

      {/* Staff label */}
      <div className="flex items-center gap-4 mb-10">
        <span className="w-1 h-6 bg-accent rounded-full inline-block" />
        <p className="text-primary text-xs font-black tracking-[0.35em] uppercase">
          Leadership
        </p>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Top row — 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {staff.slice(0, 3).map((member, i) => (
          <StaffCard key={i} member={member} index={i} />
        ))}
      </div>

      {/* Bottom row — 1 card centered */}
      <div className="flex justify-center mb-24">
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <StaffCard member={staff[3]} index={3} />
        </div>
      </div>

      {/* Team Photos Section */}
      <div className="flex items-center gap-4 mb-10">
        <span className="w-1 h-6 bg-accent rounded-full inline-block" />
        <p className="text-primary text-xs font-black tracking-[0.35em] uppercase">
          Our Team
        </p>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="text-center mb-10">
        <h3 className="text-primary text-3xl font-bold mb-3">Together We Serve</h3>
        <div className="w-10 h-1 bg-accent rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teamImages.map((item, i) => (
          <motion.div
            key={i}
            className="relative w-full h-80 overflow-hidden rounded-2xl"
            whileHover="hover"
            initial="rest"
            variants={{ rest: {}, hover: {} }}
          >
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-12 h-1 bg-accent z-20 rounded-br-sm" />
            <div className="absolute top-0 left-0 w-1 h-12 bg-accent z-20 rounded-br-sm" />

            <motion.div
              className="absolute inset-0"
              variants={{
                rest: { scale: 1 },
                hover: {
                  scale: 1.04,
                  transition: { duration: 0.45, ease: EASE },
                },
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </motion.div>

            {/* Overlay */}
            <motion.div
              className="pointer-events-none absolute inset-0 bg-primary"
              variants={{
                rest: { opacity: 0.15 },
                hover: { opacity: 0, transition: { duration: 0.3, ease: EASE } },
              }}
            />

            {/* Bottom accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent z-10" />
          </motion.div>
        ))}
      </div>

    </SectionTransition>
  );
}
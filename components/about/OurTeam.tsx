"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionTransition } from "@/components/motion";

const staff = [
  {
    number: "01",
    abbr: "C.E.O",
    name: "Mr. Gahima Pierre",
    role: "Chief Executive Officer",
    image: "/Zahabu1.jpg",
    phone: "+250 788 758 572",
    // email: "gahima@zahabu.rw",
  },
  {
    number: "03",
    abbr: "C.O.O",
    name: "Ms. Umuhoza God's Answer",
    role: "Chief Operations Officer",
    image: "/Zahabu3.jpg",
    phone: "+250 784 792 908",
    email: "G.umuhoza@zahabusolution.rw",
  },
  {
    number: "04",
    abbr: "H.B.D",
    name: "Mr. Bizaba Loic",
    role: "Head of Business Development",
    image: "/Zahabu2.jpg",
    phone: "+250 788 381 630",
    email: "Lbizaba@zahabusolution.rw",
  },
];

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.33 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function TeamCard({ member }: { member: (typeof staff)[0] }) {
  const [hovered, setHovered] = useState<"phone" | "email" | null>(null);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "1.25rem",
        border: "1.5px solid #f0ede6",
        padding: "2rem 1.5rem 1.75rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.2s",
        width: "100%",
      }}
    >
      {/* Number badge */}
      <div
        style={{
          position: "absolute",
          top: "1.1rem",
          left: "1.1rem",
          fontSize: "11px",
          fontWeight: "700",
          color: "#bfab7a",
          letterSpacing: "0.05em",
        }}
      >
        {member.number}
      </div>

      {/* Circular photo */}
      <div
        style={{
          position: "relative",
          width: "110px",
          height: "110px",
          marginBottom: "1.1rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0px",
            borderRadius: "50%",
            border: "3px solid #fff",
            overflow: "hidden",
            background: "#f5f5f3",
          }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Role pill at bottom of circle */}
        <div
          className="bg-accent text-white"
          style={{
            position: "absolute",
            bottom: "-2px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "9px",
            fontWeight: "900",
            letterSpacing: "0.12em",
            padding: "3px 10px",
            borderRadius: "20px",
            whiteSpace: "nowrap",
            zIndex: 10,
          }}
        >
          {member.abbr}
        </div>
      </div>

      {/* Name */}
      <h3
        style={{
          fontSize: "14px",
          fontWeight: "800",
          color: "#1a2340",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "4px",
          lineHeight: 1.3,
        }}
      >
        {member.name}
      </h3>

      {/* Divider line */}
      <div
        className="bg-accent"
        style={{
          width: "36px",
          height: "2px",
          borderRadius: "2px",
          margin: "8px auto",
        }}
      />

      {/* Role */}
      <p
        style={{
          fontSize: "13px",
          color: "#4a5568",
          marginBottom: "1.5rem",
        }}
      >
        {member.role}
      </p>

      {/* Action row */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {/* Phone button */}
        <div style={{ position: "relative" }}>
          <button
            onMouseEnter={() => setHovered("phone")}
            onMouseLeave={() => setHovered(null)}
            className={
              hovered === "phone"
                ? "text-accent border-accent"
                : "text-gray-400 border-gray-300"
            }
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: "1.5px solid",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            <PhoneIcon />
          </button>
          <AnimatePresence>
            {hovered === "phone" && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                style={{
                  position: "absolute",
                  bottom: "calc(100% + 8px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#1a2340",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: "600",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                  zIndex: 50,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
                }}
              >
                {member.phone}
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderTop: "5px solid #1a2340",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Email button */}
        <div style={{ position: "relative" }}>
          <button
            onMouseEnter={() => setHovered("email")}
            onMouseLeave={() => setHovered(null)}
            className={
              hovered === "email"
                ? "text-accent border-accent"
                : "text-gray-400 border-gray-300"
            }
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: "1.5px solid",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            <MailIcon />
          </button>
          <AnimatePresence>
            {hovered === "email" && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                style={{
                  position: "absolute",
                  bottom: "calc(100% + 8px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#1a2340",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: "600",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                  zIndex: 50,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
                }}
              >
                {member.email}
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderTop: "5px solid #1a2340",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const teamImages = [
  { image: "/team1.jpg", alt: "ZAHABU Team 1" },
  { image: "/team2.jpg", alt: "ZAHABU Team 2" },
];

export default function OurTeam() {
  return (
    <>
      {/* ── Hero Header ── */}
      <div className="relative pt-32 pb-24 section-padding overflow-hidden min-h-[280px]">
        <Image
          src="/ourteam.jpg"
          alt="Our Team background"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,36,99,0.45) 0%, rgba(10,36,99,0.72) 55%, rgba(10,36,99,0.95) 100%)",
          }}
        />
        <div className="relative z-10">
          <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
            The People Behind ZAHABU
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Our Team
          </h1>
          <div className="w-12 h-0.5 bg-accent rounded-full" />
        </div>
      </div>

      {/* ── Main Content ── */}
      <SectionTransition
        className="bg-[#f7f7f5] section-padding py-24"
        id="our-team"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
            Our People
          </p>
          <h2 className="text-primary text-4xl font-bold mb-3">Our Team</h2>
          <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-5" />
          <p className="text-muted text-sm max-w-lg mx-auto leading-relaxed">
            Our team is dedicated to providing tailored insurance solutions with
            focus on trust and exceptional service.
          </p>
        </div>

        {/* Leadership label */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <span className="w-1 h-6 bg-accent rounded-full inline-block" />
          <p className="text-primary text-xs font-black tracking-[0.35em] uppercase">
            Leadership
          </p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* ── Leadership Cards — centered with max-width caps per card ── */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {staff.map((member, i) => (
            <div
              key={i}
              style={{ width: "100%", maxWidth: "260px", minWidth: "220px" }}
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* Team Photos */}
        <div className="flex items-center gap-4 mb-10">
          <span className="w-1 h-6 bg-accent rounded-full inline-block" />
          <p className="text-primary text-xs font-black tracking-[0.35em] uppercase">
            Our Team
          </p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="text-center mb-10">
          <h3 className="text-primary text-3xl font-bold mb-3">
            Together We Serve
          </h3>
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
              <div className="absolute top-0 left-0 w-12 h-1 bg-accent z-20 rounded-br-sm" />
              <div className="absolute top-0 left-0 w-1 h-12 bg-accent z-20 rounded-br-sm" />

              <motion.div
                className="absolute inset-0"
                variants={{
                  rest: { scale: 1 },
                  hover: {
                    scale: 1.04,
                    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
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

              <motion.div
                className="pointer-events-none absolute inset-0 bg-primary"
                variants={{
                  rest: { opacity: 0.15 },
                  hover: { opacity: 0, transition: { duration: 0.3 } },
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent z-10" />
            </motion.div>
          ))}
        </div>
      </SectionTransition>
    </>
  );
}
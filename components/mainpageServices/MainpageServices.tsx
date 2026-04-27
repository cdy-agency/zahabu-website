"use client";

import Image from "next/image";
import { motion, useInView, Variants, cubicBezier } from "framer-motion";
import { useRef } from "react";

const ease = cubicBezier(0.22, 1, 0.36, 1);

const services = [
  {
    title: "General Insurance",
    description:
      "We offer protection for motor vehicles, properties, liabilities, and travel-related risks.",
    image: "/vehilcesAssurance.png",
    tag: "Coverage",
    number: "01",
  },
  {
    title: "Life & Health Insurance",
    description:
      "We provide life coverage and health insurance to safeguard individuals and families.",
    image: "/girl.png",
    tag: "Protection",
    number: "02",
  },
  {
    title: "Business & Corporate Insurance",
    description:
      "ZAHABU delivers customized insurance packages tailored to your business needs.",
    image: "/business.png",
    tag: "Enterprise",
    number: "03",
  },
  {
    title: "Risk Advisory & Consulting",
    description:
      "Expert advice on risk identification, coverage structuring, and risk management strategies.",
    image: "/risk.png",
    tag: "Advisory",
    number: "04",
  },
  {
    title: "Claims Management Support",
    description:
      "We assist clients in processing and following up on insurance claims smoothly and quickly.",
    image: "/burning1.png",
    tag: "Support",
    number: "05",
  },
  {
    title: "Policy Reviews & Renewals",
    description:
      "Ensuring your policies remain relevant, comprehensive, and cost-effective at all times.",
    image: "/policy.png",
    tag: "Renewal",
    number: "06",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function InView({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const isImageLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={`flex flex-col md:flex-row items-stretch border-b border-gray-100 last:border-b-0 ${
        !isImageLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        variants={isImageLeft ? fadeLeft : fadeRight}
        className="w-full md:w-[42%] relative overflow-hidden"
        style={{ minHeight: "260px", maxHeight: "320px" }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 42vw"
        />
        <div className="absolute inset-0 bg-primary/15" />
        <div
          className="absolute bottom-4 right-5 text-white/20 font-black leading-none select-none"
          style={{ fontSize: "4rem" }}
          aria-hidden
        >
          {service.number}
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        variants={isImageLeft ? fadeRight : fadeLeft}
        className="flex-1 bg-white flex items-center px-8 md:px-14 py-12"
      >
        <div className="max-w-sm w-full">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-accent text-[10px] font-black tracking-[0.35em] uppercase">
              {service.number}
            </span>
            <span className="w-px h-3 bg-gray-200" />
            <span className="bg-accent/10 text-accent text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full">
              {service.tag}
            </span>
          </div>

          <h2 className="text-primary text-xl md:text-2xl font-bold leading-snug mb-3">
            {service.title}
          </h2>
          <div className="w-8 h-0.5 bg-accent mb-5" />
          <p className="text-muted text-sm leading-relaxed mb-7">
            {service.description}
          </p>

          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.18 }}
            className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-widest uppercase cursor-pointer group"
          >
            <span>Learn more</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#F7F7F7]">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden min-h-[440px] flex items-end">
        <Image
          src="/original.png"
          alt="Our Services background"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,36,99,0.2) 0%, rgba(10,36,99,0.62) 55%, rgba(10,36,99,0.97) 100%)",
          }}
        />
        <div className="relative z-10 section-padding pb-14 pt-40 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3"
            >
              What We Offer
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-4"
            >
              Our Services
            </motion.h1>
            <motion.div variants={fadeUp} className="w-12 h-0.5 bg-accent" />
          </motion.div>
        </div>
      </div>

      {/* ── Section intro ─────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100">
        <div className="section-padding py-20">
          <InView className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3"
              >
                What We Offer
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-primary text-4xl font-bold mb-3"
              >
                Our Services
              </motion.h2>
              <motion.div variants={fadeUp} className="w-10 h-1 bg-accent" />
            </div>
            <motion.p
              variants={fadeUp}
              className="text-muted text-sm max-w-md leading-relaxed lg:text-right"
            >
              We provide professional insurance solutions designed to protect,
              support, and grow your life and business in Rwanda.
            </motion.p>
          </InView>

          <InView className="flex items-center gap-4 mt-14">
            <span className="w-1 h-6 bg-accent inline-block" />
            <p className="text-primary text-xs font-black tracking-[0.35em] uppercase whitespace-nowrap">
              Our Coverage
            </p>
            <div className="flex-1 h-px bg-gray-100" />
          </InView>
        </div>
      </div>

      {/* ── Services list ─────────────────────────────────────────────── */}
      <div className="section-padding py-6">
        <div className="flex flex-col border border-gray-100 bg-white overflow-hidden">
          {services.map((service, index) => (
            <ServiceRow key={index} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <div className="section-padding pb-20">
        <InView className="bg-primary px-10 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <motion.p
              variants={fadeUp}
              className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3"
            >
              Get Started
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="text-white text-2xl md:text-3xl font-bold leading-snug"
            >
              Not sure which coverage
              <br />
              is right for you?
            </motion.h3>
          </div>
          <motion.div variants={fadeUp}>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-accent rounded-full text-primary text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-accent/90 transition-colors duration-200"
            >
              Talk to an expert
              <span>→</span>
            </motion.a>
          </motion.div>
        </InView>
      </div>
    </div>
  );
}

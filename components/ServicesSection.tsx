"use client";

import Image from "next/image";
import { MotionCard, SectionTransition, SectorPill } from "@/components/motion";

type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  accent: boolean;
};

type InsuranceItem = {
  label: string;
};

type InsuranceClass = {
  category: string;
  icon: React.ReactNode;
  items: InsuranceItem[];
};

type Props = {};

const services: Service[] = [
  {
    number: "01",
    title: "General Insurance",
    description:
      "We offer protection for motor vehicles, properties, liabilities, and travel-related risks.",
    image: "/vehicle.png",
    accent: false,
  },
  {
    number: "02",
    title: "Life & Health Insurance",
    description:
      "We provide life coverage and health insurance to safeguard individuals and families.",
    image: "/life.png",
    accent: true,
  },
  {
    number: "03",
    title: "Business & Corporate Insurance",
    description:
      "ZAHABU delivers customized insurance packages tailored to your business needs.",
    image: "/business.png",
    accent: false,
  },
  {
    number: "04",
    title: "Risk Advisory & Consulting",
    description:
      "Expert advice on risk identification, coverage structuring, and risk management strategies.",
    image: "/risk.png",
    accent: false,
  },
  {
    number: "05",
    title: "Claims Management Support",
    description:
      "We assist clients in processing and following up on insurance claims smoothly and quickly.",
    image: "/claims.png",
    accent: true,
  },
  {
    number: "06",
    title: "Policy Reviews & Renewals",
    description:
      "Ensuring your policies remain relevant, comprehensive, and cost-effective at all times.",
    image: "/policy.png",
    accent: false,
  },
];

const classes: InsuranceClass[] = [
  {
    category: "General (Non-Life) Insurance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M19 17H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3l2-2h4l2 2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
    items: [
      { label: "Motor Insurance (Private & Commercial)" },
      { label: "Fire & Property Insurance" },
      { label: "Burglary & Theft Insurance" },
      { label: "Goods in Transit Insurance" },
      { label: "Marine & Cargo Insurance" },
      { label: "Engineering & Construction (CAR/EAR)" },
      { label: "Liability Insurance" },
      { label: "Professional Indemnity Insurance" },
    ],
  },
  {
    category: "Life & Health Insurance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    items: [
      { label: "Individual Life Insurance" },
      { label: "Group Life Insurance" },
      { label: "Medical / Health Insurance" },
      { label: "Personal Accident Cover" },
    ],
  },
  {
    category: "Specialized Solutions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    items: [
      { label: "Agriculture Insurance" },
      { label: "Aviation Insurance" },
      { label: "Oil & Energy Insurance" },
      { label: "Microinsurance Solutions" },
    ],
  },
];

const sectors: string[] = [
  "Corporate & SMEs",
  "Transport & Logistics",
  "Healthcare Institutions",
  "Retail & Trading Businesses",
  "Financial Services",
  "Construction & Engineering",
  "Hospitality & Real Estate",
  "Agriculture & Cooperatives",
  "Individuals & High-Net-Worth Clients",
];

export default function ServicesSection() {
  return (
    <SectionTransition id="services" className="bg-[#F7F7F7] section-padding py-24">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
          What We Do
        </p>
        <h2 className="text-primary text-4xl font-bold mb-3">Our Services</h2>
      </div>

      {/* SERVICES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {services.map((service, i) => (
          <MotionCard
            key={i}
            className={`relative rounded-2xl overflow-hidden flex flex-col group ${
              service.accent ? "bg-accent" : "bg-white border border-gray-100 shadow-sm"
            }`}
          >
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-4 text-5xl font-black opacity-20">
                {service.number}
              </span>
            </div>

            <div className="px-6 py-4">
              <h3 className="font-bold text-sm uppercase">
                {service.title}
              </h3>
              <p className="text-sm mt-2">
                {service.description}
              </p>
            </div>
          </MotionCard>
        ))}
      </div>

      {/* CLASSES */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold">
            Classes of Insurance We Handle
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <MotionCard key={i} className="bg-white rounded-xl border p-6">
              
              <div className="mb-4 flex items-center gap-3 text-accent">
                {cls.icon}
                <h4 className="font-bold text-sm uppercase">
                  {cls.category}
                </h4>
              </div>

              <ul className="flex flex-col gap-2">
                {cls.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted">
                    • {item.label}
                  </li>
                ))}
              </ul>

            </MotionCard>
          ))}
        </div>
      </div>

      {/* SECTORS */}
      <div>
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold">Sectors We Serve</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {sectors.map((sector, i) => (
            <SectorPill key={i}>
              {sector}
            </SectorPill>
          ))}
        </div>
      </div>

    </SectionTransition>
  );
}
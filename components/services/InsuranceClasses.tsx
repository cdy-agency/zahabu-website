"use client";

import { MotionCard, SectionTransition } from "@/components/motion";

type Item = {
  label: string;
};

type InsuranceClass = {
  category: string;
  icon: React.ReactNode;
  items: Item[];
};

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

export default function InsuranceClasses() {
  return (
    <SectionTransition className="bg-white section-padding py-24">
      
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
          Coverage
        </p>
        <h3 className="text-primary text-3xl font-bold mb-3">
          Classes of Insurance We Handle
        </h3>
        <div className="w-10 h-1 bg-accent rounded-full mx-auto" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {classes.map((cls, i) => (
          <MotionCard
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            {/* Top */}
            <div className="bg-primary px-7 pt-7 pb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-4">
                {cls.icon}
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest leading-snug">
                {cls.category}
              </h4>
            </div>

            {/* Divider */}
            <div className="h-[3px] w-full bg-accent" />

            {/* List */}
            <div className="px-7 py-6">
              <ul className="flex flex-col gap-3">
                {cls.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <span className="text-muted text-sm leading-snug">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionCard>
        ))}
      </div>

    </SectionTransition>
  );
}
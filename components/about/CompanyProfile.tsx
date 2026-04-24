import { MotionCard, SectionTransition } from "@/components/motion";

const facts = [
  { label: "Established", value: "EST. 2025" },
  { label: "Headquarters", value: "Kigali, Rwanda" },
  { label: "Business Type", value: "Insurance Brokerage Firm" },
  { label: "Industry", value: "Financial Services – Insurance" },
  { label: "Regulator", value: "Currently seeking licensing with the National Bank of Rwanda (BNR)" },
  { label: "Coverage", value: "General, Life & Health, and Corporate Insurance Solutions" },
];

export default function CompanyProfile() {
  return (
    <SectionTransition id="about" className="bg-[#F7F7F7] section-padding py-24">
      {/* Top header */}
      <div className="mb-12">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
          Company Profile
        </p>
        <h2 className="text-primary text-4xl font-bold mb-3">
          ZAHABU Solutions Ltd.
        </h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-5" />
        <p className="text-muted text-sm max-w-xl leading-relaxed">
          An Insurance Brokerage Firm in Rwanda, established in 2025. We
          collaborate with organizations and individuals by making insurance
          simple, reliable, and effective.
        </p>
      </div>

      {/* Logo banner — no circle */}
      <div className="flex items-center gap-5 bg-white border border-gray-100 rounded-xl px-7 py-5 mb-8 shadow-sm w-full max-w-lg">
        <div>
          <p className="text-primary font-bold text-base leading-snug">
            ZAHABU Solutions Ltd.
          </p>
          <p className="text-muted text-xs tracking-wide mt-0.5">
            Insurance Brokerage Services in Rwanda
          </p>
        </div>
      </div>

      {/* Facts grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {facts.map((fact, i) => (
          <MotionCard
            key={i}
            className={`rounded-xl px-5 py-4 flex flex-col gap-1 ${
              i === 0
                ? "bg-accent"
                : "bg-white border border-gray-100 shadow-sm"
            }`}
          >
            <p
              className={`text-[10px] font-black tracking-[0.3em] uppercase ${
                i === 0 ? "text-primary/60" : "text-muted"
              }`}
            >
              {fact.label}
            </p>
            <p
              className={`text-sm font-bold leading-snug ${
                i === 0 ? "text-primary" : "text-primary"
              }`}
            >
              {fact.value}
            </p>
          </MotionCard>
        ))}
      </div>
    </SectionTransition>
  );
}
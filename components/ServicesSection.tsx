import { MotionCard, SectionTransition, SectorPill } from "@/components/motion";

const services = [
  {
    number: "01",
    title: "General Insurance",
    description:
      "We offer protection for motor vehicles, properties, liabilities, and travel-related risks.",
    accent: false,
  },
  {
    number: "02",
    title: "Life & Health Insurance",
    description:
      "We provide life coverage and health insurance to safeguard individuals and families.",
    accent: true,
  },
  {
    number: "03",
    title: "Business & Corporate Insurance",
    description:
      "ZAHABU delivers customized insurance packages tailored to your business needs.",
    accent: false,
  },
  {
    number: "04",
    title: "Risk Advisory & Consulting",
    description:
      "Expert advice on risk identification, coverage structuring, and risk management strategies.",
    accent: false,
  },
  {
    number: "05",
    title: "Claims Management Support",
    description:
      "We assist clients in processing and following up on insurance claims smoothly and quickly.",
    accent: true,
  },
  {
    number: "06",
    title: "Policy Reviews & Renewals",
    description:
      "Ensuring your policies remain relevant, comprehensive, and cost-effective at all times.",
    accent: false,
  },
];

const classes = [
  {
    category: "General (Non-Life) Insurance",
    items: [
      "Motor Insurance (Private & Commercial)",
      "Fire & Property Insurance",
      "Burglary & Theft Insurance",
      "Goods in Transit Insurance",
      "Marine & Cargo Insurance",
      "Engineering & Construction (CAR/EAR)",
      "Liability Insurance",
      "Professional Indemnity Insurance",
    ],
  },
  {
    category: "Life & Health Insurance",
    items: [
      "Individual Life Insurance",
      "Group Life Insurance",
      "Medical / Health Insurance",
      "Personal Accident Cover",
    ],
  },
  {
    category: "Specialized Solutions",
    items: [
      "Agriculture Insurance",
      "Aviation Insurance",
      "Oil & Energy Insurance",
      "Microinsurance Solutions",
    ],
  },
];

const sectors = [
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
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
          What We Do
        </p>
        <h2 className="text-primary text-4xl font-bold mb-3">Our Services</h2>
        <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-5" />
        <p className="text-muted text-sm max-w-lg mx-auto leading-relaxed">
          We are committed to providing innovative, reliable, and personalized
          insurance solutions to individuals and organizations across Rwanda.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {services.map((service, i) => (
          <MotionCard
            key={i}
            className={`relative rounded-xl p-7 overflow-hidden flex flex-col gap-4 ${
              service.accent
                ? "bg-accent"
                : "bg-white border border-gray-100 shadow-sm"
            }`}
          >
            <span
              className={`text-4xl font-black opacity-20 leading-none ${
                service.accent ? "text-primary" : "text-accent"
              }`}
            >
              {service.number}
            </span>
            <h3
              className={`font-bold text-base uppercase tracking-wide leading-snug ${
                service.accent ? "text-primary" : "text-primary"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                service.accent ? "text-primary/75" : "text-muted"
              }`}
            >
              {service.description}
            </p>
            {/* Decorative circle */}
            <div
              className={`absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-20 ${
                service.accent ? "bg-primary" : "bg-accent"
              }`}
            />
          </MotionCard>
        ))}
      </div>

      {/* Classes of Insurance */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
            Coverage
          </p>
          <h3 className="text-primary text-3xl font-bold mb-3">
            Classes of Insurance We Handle
          </h3>
          <div className="w-10 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <MotionCard
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-7"
            >
              <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full inline-block" />
                {cls.category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {cls.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span className="text-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </MotionCard>
          ))}
        </div>
      </div>

      {/* Sectors We Serve */}
      <div>
        <div className="text-center mb-10">
          <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
            Industries
          </p>
          <h3 className="text-primary text-3xl font-bold mb-3">
            Sectors We Serve
          </h3>
          <div className="w-10 h-1 bg-accent rounded-full mx-auto" />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {sectors.map((sector, i) => (
            <SectorPill
              key={i}
              className="bg-white border border-gray-200 text-primary text-xs font-bold px-5 py-2.5 rounded-sm tracking-widest uppercase shadow-sm inline-block"
            >
              {sector}
            </SectorPill>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
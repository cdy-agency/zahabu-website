import Image from "next/image";
import { MotionCard, SectionTransition } from "@/components/motion";

const services = [
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

export default function OurServices() {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <MotionCard
            key={i}
            className={`relative rounded-2xl overflow-hidden flex flex-col group ${
              service.accent
                ? "bg-accent"
                : "bg-white border border-gray-100 shadow-sm"
            }`}
          >
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  service.accent
                    ? "from-accent via-accent/40 to-transparent"
                    : "from-white via-white/20 to-transparent"
                }`}
              />
              <span
                className={`absolute top-3 left-4 text-5xl font-black ${
                  service.accent
                    ? "text-primary opacity-20"
                    : "text-accent opacity-20"
                }`}
              >
                {service.number}
              </span>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2 px-6 pb-7 pt-4">
              <div
                className={`w-8 h-[3px] rounded-full ${
                  service.accent ? "bg-primary" : "bg-accent"
                }`}
              />
              <h3 className="font-bold text-sm uppercase tracking-wide">
                {service.title}
              </h3>
              <p
                className={`text-sm ${
                  service.accent ? "text-primary/75" : "text-muted"
                }`}
              >
                {service.description}
              </p>
            </div>

            <div
              className={`absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-10 ${
                service.accent ? "bg-primary" : "bg-accent"
              }`}
            />
          </MotionCard>
        ))}
      </div>
    </SectionTransition>
  );
}

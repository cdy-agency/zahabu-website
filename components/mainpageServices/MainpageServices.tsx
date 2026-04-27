import Image from "next/image";

const services = [
  {
    title: "General Insurance",
    description:
      "We offer protection for motor vehicles, properties, liabilities, and travel-related risks.",
    image: "/vehilcesAssurance.png",
    tag: "COVERAGE",
  },
  {
    title: "Life & Health Insurance",
    description:
      "We provide life coverage and health insurance to safeguard individuals and families.",
    image: "/healthIssuarance.png",
    tag: "PROTECTION",
  },
  {
    title: "Business & Corporate Insurance",
    description:
      "ZAHABU delivers customized insurance packages tailored to your business needs.",
    image: "/busii.png",
    tag: "ENTERPRISE",
  },
  {
    title: "Risk Advisory & Consulting",
    description:
      "Expert advice on risk identification, coverage structuring, and risk management strategies.",
    image: "/riski.png",
    tag: "ADVISORY",
  },
  {
    title: "Claims Management Support",
    description:
      "We assist clients in processing and following up on insurance claims smoothly and quickly.",
    image: "/accident.jpg",
    tag: "SUPPORT",
  },
  {
    title: "Policy Reviews & Renewals",
    description:
      "Ensuring your policies remain relevant, comprehensive, and cost-effective at all times.",
    image: "/amategeko.jpg",
    tag: "RENEWAL",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#F7F7F7]">

      {/* ── Hero Header — image + blue gradient + text on top ── */}
      <div className="relative pt-32 pb-24 px-6 md:px-20 overflow-hidden min-h-[280px]">
        <Image
          src="/ourserviceImage.jpg"
          alt="Our Services background"
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
            What We Offer
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Our Services
          </h1>
          <div className="w-12 h-0.5 bg-accent rounded-full" />
        </div>
      </div>

      {/* ── White Section Header (mirrors OurTeam: "Our People / Our Team / description / Leadership") ── */}
      <div className="bg-[#f7f7f5] px-6 md:px-20 pt-24 pb-16">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-primary text-4xl font-bold mb-3">Our Services</h2>
          <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-5" />
          <p className="text-muted text-sm max-w-lg mx-auto leading-relaxed">
            We provide professional insurance solutions designed to protect,
            support, and grow your life and business in Rwanda.
          </p>
        </div>

        {/* "Our Coverage" label — mirrors the "Leadership" label in OurTeam */}
        <div className="flex justify-center items-center gap-4">
          <span className="w-1 h-6 bg-accent rounded-full inline-block" />
          <p className="text-primary text-xs font-black tracking-[0.35em] uppercase">
            Our Coverage
          </p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

      </div>

      {/* ── Alternating Services List ── */}
      <div className="px-6 md:px-20 space-y-0">
        {services.map((service, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                !isImageLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2 relative h-[320px] md:h-[460px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* TEXT */}
              <div className="w-full md:w-1/2 flex items-center bg-white px-8 md:px-14 py-14">
                <div className="max-w-md">
                  <p className="text-accent text-xs font-bold tracking-[0.35em] uppercase mb-4">
                    {service.tag}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <div className="w-10 h-1 bg-accent rounded-full mb-5" />
                  <p className="text-muted text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
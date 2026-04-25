import Image from "next/image";

const services = [
  {
    title: "General Insurance",
    description:
      "We offer protection for motor vehicles, properties, liabilities, and travel-related risks.",
    image: "/vehicle.png",
    tag: "COVERAGE",
  },
  {
    title: "Life & Health Insurance",
    description:
      "We provide life coverage and health insurance to safeguard individuals and families.",
    image: "/life.png",
    tag: "PROTECTION",
  },
  {
    title: "Business & Corporate Insurance",
    description:
      "ZAHABU delivers customized insurance packages tailored to your business needs.",
    image: "/business.png",
    tag: "ENTERPRISE",
  },
  {
    title: "Risk Advisory & Consulting",
    description:
      "Expert advice on risk identification, coverage structuring, and risk management strategies.",
    image: "/risk.png",
    tag: "ADVISORY",
  },
  {
    title: "Claims Management Support",
    description:
      "We assist clients in processing and following up on insurance claims smoothly and quickly.",
    image: "/claims.png",
    tag: "SUPPORT",
  },
  {
    title: "Policy Reviews & Renewals",
    description:
      "Ensuring your policies remain relevant, comprehensive, and cost-effective at all times.",
    image: "/policy.png",
    tag: "RENEWAL",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full mt-20 bg-[#F7F7F7] pt-28 pb-28">
      
      {/* HEADER */}
      <div className="text-center px-6 md:px-20 mb-16">
        <p className="text-accent text-xs font-bold tracking-[0.35em] uppercase mb-4">
          What We Offer
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Our Services
        </h1>

        <div className="w-12 h-1 bg-accent rounded-full mx-auto my-6" />

        <p className="text-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          We provide professional insurance solutions designed to protect,
          support, and grow your life and business in Rwanda.
        </p>
      </div>

      {/* SERVICES LIST */}
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

                {/* overlay */}
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* TEXT */}
              <div className="w-full md:w-1/2 flex items-center bg-white px-8 md:px-14 py-14">
                <div className="max-w-md">
                  
                  {/* TAG */}
                  <p className="text-accent text-xs font-bold tracking-[0.35em] uppercase mb-4">
                    {service.tag}
                  </p>

                  {/* TITLE */}
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>

                  {/* LINE */}
                  <div className="w-10 h-1 bg-accent rounded-full mb-5" />

                  {/* DESCRIPTION */}
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
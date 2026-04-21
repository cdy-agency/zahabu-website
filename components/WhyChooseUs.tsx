const reasons = [
  {
    number: "01",
    title: "Dedicated to Client-first solutions",
    description:
      "We focus on understanding and prioritizing each client's unique needs. Our solutions are tailored to deliver the best outcomes for them.",
    accent: false,
  },
  {
    number: "02",
    title: "Efficient claims assistance with fast resolution.",
    description:
      "We provide fast and hussle-free support throughout the claims process. Our team ensures quick resolution so clients can recover without delays.",
    accent: false,
  },
  {
    number: "03",
    title: "Access to leading insurers in Rwanda.",
    description:
      "We work closely with the top insurance provider in Rwanda. This ensures our clients get comprehensive coverage at competitive rates.",
    accent: true,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white section-padding py-24">
      <div className="text-center mb-16">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
          Why ZAHABU
        </p>
        <h2 className="text-primary text-4xl font-bold mb-3">Why Choose Us</h2>
        <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-5" />
        <p className="text-muted text-sm max-w-lg mx-auto leading-relaxed">
          Dedicated to delivering professional, structured, and client-centered
          insurance solutions across Rwanda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className={`relative rounded-xl p-7 overflow-hidden flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300 ${
              reason.accent
                ? "bg-accent"
                : "bg-[#F7F7F7] border border-gray-100"
            }`}
          >
            <span
              className={`text-5xl font-black leading-none opacity-15 ${
                reason.accent ? "text-primary" : "text-accent"
              }`}
            >
              {reason.number}
            </span>
            <h3
              className={`font-bold text-base uppercase tracking-wide leading-snug ${
                reason.accent ? "text-primary" : "text-primary"
              }`}
            >
              {reason.title}
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                reason.accent ? "text-primary/75" : "text-muted"
              }`}
            >
              {reason.description}
            </p>
            <div
              className={`absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-20 ${
                reason.accent ? "bg-primary" : "bg-accent"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Service Commitment Banner */}
      <div className="mt-16 bg-primary rounded-xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
            Our Commitment
          </p>
          <h3 className="text-white text-2xl font-bold mb-2">
            Committed to Your Protection
          </h3>
          <p className="text-white/60 text-sm leading-relaxed max-w-md">
            Professional and structured insurance solutions, clear communication,
            direct engagement with insurers, and continuous support throughout
            the insurance lifecycle.
          </p>
        </div>
        <a
          href="#contact"
          className="flex-shrink-0 bg-accent text-primary font-bold px-8 py-3 rounded-sm uppercase tracking-widest text-sm hover:opacity-90 transition-opacity duration-200"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
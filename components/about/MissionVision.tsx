import Image from "next/image";

const coreValues = [
  { label: "Integrity", accent: false },
  { label: "Professionalism", accent: false },
  { label: "Customer-Centricity", accent: true },
  { label: "Innovation", accent: true },
  { label: "Transparency", accent: false },
];

const beliefs = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and ethical conduct in every interaction with clients and insurers.",
  },
  {
    title: "Innovation",
    description:
      "We continuously seek smarter, more effective ways to structure and deliver insurance solutions.",
  },
  {
    title: "Transparency",
    description:
      "We ensure our clients always understand their coverage, terms, and options — no hidden conditions.",
  },
  {
    title: "Professionalism",
    description:
      "Our team brings deep industry expertise to every engagement, delivering structured and reliable service.",
  },
  {
    title: "Customer-Centered",
    description:
      "Every solution we design is built around the unique needs and goals of our clients.",
  },
];

export default function MissionVision() {
  return (
    <>
      {/* Mission, Vision & Values */}
      <section className="bg-[#F7F7F7] w-full min-h-150 flex flex-col lg:flex-row overflow-hidden">
        {/* Left — Image */}
        <div className="relative lg:w-[48%] min-h-100 lg:min-h-full bg-[#F7F7F7] p-8 lg:p-12">
          <div
            className="relative w-full h-full min-h-87.5 overflow-hidden"
            style={{
              clipPath: "polygon(0% 0%, 94% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <Image
              src="/mission.jpg"
              alt="Our Mission and Vision"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-primary opacity-20" />
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex-1 bg-[#F7F7F7] section-padding py-20 flex flex-col justify-center">
          <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
            Our Foundation
          </p>
          <h2 className="text-primary text-4xl font-bold leading-tight mb-2">
            Our Mission, Vision
            <br />& Values
          </h2>
          <div className="w-10 h-1 bg-accent rounded-full mb-10" />

          <div className="flex flex-col gap-8">
            {/* Mission */}
            <div>
              <h3 className="text-primary font-bold text-base mb-2 flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full inline-block" />
                Mission
              </h3>
              <p className="text-muted text-sm leading-relaxed pl-4">
                To simplify insurance access by delivering expert guidance,
                tailored coverage, and customer-first service.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-primary font-bold text-base mb-2 flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full inline-block" />
                Vision
              </h3>
              <p className="text-muted text-sm leading-relaxed pl-4">
                To be Rwanda&apos;s most trusted and innovative insurance brokerage
                firm.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-primary font-bold text-base mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full inline-block" />
                Core Values
              </h3>
              <div className="flex flex-wrap gap-2 pl-4">
                {coreValues.map((v, i) => (
                  <span
                    key={i}
                    className={`relative px-5 py-2.5 text-xs font-bold tracking-widest uppercase rounded-sm ${
                      v.accent
                        ? "bg-accent text-primary"
                        : "bg-white border border-gray-200 text-primary"
                    }`}
                  >
                    <span className="absolute -top-px left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary/20 rounded-full" />
                    {v.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-white section-padding py-24">
        <div className="text-center mb-14">
          <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
            What We Believe
          </p>
          <h2 className="text-primary text-4xl font-bold mb-3">Our Beliefs</h2>
          <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-5" />
          <p className="text-muted text-sm max-w-lg mx-auto leading-relaxed">
            We are committed to providing innovative, reliable, and personalized
            insurance solutions to individuals and organizations across Rwanda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((belief, i) => (
            <div
              key={i}
              className="bg-[#F7F7F7] rounded-xl border border-gray-100 p-7 flex flex-col gap-3 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full inline-block" />
                {belief.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed pl-4">
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
import { MotionCard, SectionTransition } from "@/components/motion";

const coreValues = [
  { label: "Integrity" },
  { label: "Professionalism" },
  { label: "Customer-Centricity", accent: true },
  { label: "Innovation", accent: true },
  { label: "Transparency" },
];

const beliefs = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and ethical conduct in every interaction with clients and insurers.",
    number: "01",
  },
  {
    title: "Innovation",
    description:
      "We continuously seek smarter, more effective ways to structure and deliver insurance solutions.",
    number: "02",
  },
  {
    title: "Transparency",
    description:
      "We ensure our clients always understand their coverage, terms, and options — no hidden conditions.",
    number: "03",
  },
  {
    title: "Professionalism",
    description:
      "Our team brings deep industry expertise to every engagement, delivering structured and reliable service.",
    number: "04",
  },
  {
    title: "Customer-Centered",
    description:
      "Every solution we design is built around the unique needs and goals of our clients.",
    number: "05",
  },
];

export default function MissionVision() {
  return (
    <>
      {/* ── Our Foundation ─────────────────────────────────────────── */}
      <SectionTransition
        id="mission"
        className="bg-[#F7F7F7] section-padding py-24"
      >
        {/* Header — same pattern as CompanyProfile */}
        <div className="mb-16">
          <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
            Our Foundation
          </p>
          <h2 className="text-primary text-4xl font-bold mb-3">
            Mission, Vision & Values
          </h2>
          <div className="w-10 h-1 bg-accent rounded-full mb-5" />
          <p className="text-muted text-sm max-w-xl leading-relaxed">
            Everything we do is guided by a clear purpose — to make insurance
            accessible, transparent, and built around the people we serve.
          </p>
        </div>

        {/* Mission + Vision side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 border border-gray-100 group hover:border-accent/30 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    className="text-accent"
                  />
                </svg>
              </span>
              <span className="text-accent text-xs font-black tracking-[0.3em] uppercase">
                01
              </span>
            </div>
            <div>
              <h3 className="text-primary font-bold text-xl mb-3">Mission</h3>
              <p className="text-muted text-sm leading-relaxed">
                To simplify insurance access by delivering expert guidance,
                tailored coverage, and customer-first service to individuals and
                organizations across Rwanda.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-primary rounded-2xl p-8 flex flex-col gap-6 group">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="10"
                    cy="10"
                    r="3"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 2C10 2 4 6 4 10C4 14 10 18 10 18C10 18 16 14 16 10C16 6 10 2 10 2Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-accent text-xs font-black tracking-[0.3em] uppercase">
                02
              </span>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-3">Vision</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                To be Rwanda&apos;s most trusted and innovative insurance
                brokerage firm — setting the standard for excellence, integrity,
                and customer care in the industry.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values — full-width row */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-start gap-8">
            <div className="sm:min-w-[200px]">
              <span className="text-accent text-xs font-black tracking-[0.3em] uppercase block mb-2">
                03
              </span>
              <h3 className="text-primary font-bold text-xl mb-2">
                Core Values
              </h3>
              <p className="text-muted text-xs leading-relaxed">
                The principles that shape how we work and who we are.
              </p>
            </div>

            <div className="hidden sm:block w-px self-stretch bg-gray-100" />

            <div className="flex flex-wrap gap-2 flex-1 items-center">
              {coreValues.map((v, i) => (
                <span
                  key={i}
                  className={`px-5 py-2.5 text-xs font-bold tracking-[0.12em] uppercase rounded-full border transition-all duration-200 ${
                    v.accent
                      ? "bg-accent text-white border-accent"
                      : "bg-transparent text-primary border-gray-200 hover:border-accent hover:text-accent"
                  }`}
                >
                  {v.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* ── What We Believe ───────────────────────────────────────────── */}
      <SectionTransition className="bg-primary overflow-hidden relative">
        {/* Ghost watermark */}
        <div
          className="absolute top-0 right-0 text-white opacity-[0.03] font-black select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
          aria-hidden
        >
          TRUST
        </div>

        <div className="section-padding py-24 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
                What We Believe
              </p>
              <h2 className="text-white text-4xl font-bold mb-3">
                Our Beliefs
              </h2>
              <div className="w-10 h-1 bg-accent rounded-full" />
            </div>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed lg:text-right">
              Committed to innovative, reliable, and personalized insurance
              solutions across Rwanda.
            </p>
          </div>

          {/* Belief rows */}
          <div className="flex flex-col">
            {beliefs.map((belief, i) => (
              <MotionCard
                key={i}
                className="group border-t border-white/10 py-7 flex flex-col sm:flex-row sm:items-center gap-6 cursor-default hover:border-accent/40 transition-colors duration-300"
              >
                <span className="text-accent text-xs font-black tracking-[0.3em] uppercase min-w-[3.5rem]">
                  {belief.number}
                </span>
                <h3 className="text-white font-bold text-base tracking-tight min-w-[160px] group-hover:text-accent transition-colors duration-200">
                  {belief.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1 max-w-lg group-hover:text-white/70 transition-colors duration-200">
                  {belief.description}
                </p>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-base self-center">
                  →
                </span>
              </MotionCard>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </SectionTransition>
    </>
  );
}

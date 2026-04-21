import Image from "next/image";

const staff = [
  {
    name: "Mr. Gahima Pierre",
    role: "C.E.O",
    initial: "G",
    image: "/Zahabu1.jpeg",
    // bio: "A business development and insurance professional with extensive experience in client acquisition, broker management, and sales strategy across major Rwandan insurers including Old Mutual, Zamara, and Prime Insurance. Currently serves as a Business Development Officer at Old Mutual Insurance Rwanda.",
  },
  {
    name: "Mr. Ntezimana Jerome",
    role: "C.F.O",
    initial: "N",
    image: "/Zahabu4.jpeg",
    // bio: "Chief Finance Officer at UB Connect Ltd since 2024 and Head Financial Manager at Akagera Management Company since 2019. Previously served as Director of Finance and Administration at Nuru East Africa Ltd and Finance Officer at Tigo Rwanda. Holds an MSc in Taxation and a BBA from the National University of Rwanda, is a Certified Public Accountant (CPAK), and an RRA-authorized Tax Advisor.",
  },
  {
    name: "Ms. Umuhoza God's Answer",
    role: "C.O.O",
    initial: "U",
    image: "/Zahabu3.jpeg",
    // bio: "Holds a Bachelor's Degree in Business Management and has over four years of experience in the insurance industry, having worked with BK Insurance and Britam Insurance. She has developed strong expertise in insurance operations, client relationship management, and business development.",
  },
  {
    name: "Mr. Bizaba Loic",
    role: "BDM",
    initial: "B",
    image: "/Zahabu2.jpeg",
    // bio: "A dynamic Head of Business Development known for driving growth through strong client relationships and strategic partnerships. With a sharp understanding of market opportunities, he specializes in identifying high-value prospects, nurturing long-term collaborations, and turning ideas into scalable business results.",
  },
];

const teamImages = [
  { image: "/Team1.jpeg", alt: "ZAHABU Team 1" },
  { image: "/Team2.jpeg", alt: "ZAHABU Team 2" },
];

export default function OurTeam() {
  return (
    <section className="bg-white section-padding py-24">

      {/* ── STAFF HEADER ─────────────────────────────── */}
      <div className="text-center mb-16">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
          The People Behind ZAHABU
        </p>
        <h2 className="text-primary text-4xl font-bold mb-3">Our Team</h2>
        <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-5" />
        <p className="text-muted text-sm max-w-lg mx-auto leading-relaxed">
          Our team is dedicated to providing tailored insurance solutions with
          focus on trust and exceptional service.
        </p>
      </div>

      {/* Staff label */}
      <div className="flex items-center gap-4 mb-12">
        <span className="w-1 h-8 bg-accent rounded-full inline-block" />
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase">
          Staff
        </p>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* Top row — 3 staff */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
        {staff.slice(0, 3).map((member, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            {/* Circular photo with accent ring */}
            <div className="relative w-44 h-44 mb-5">
              <div className="absolute inset-0 rounded-full border-4 border-accent" />
              <div className="absolute inset-1 rounded-full border-4 border-white z-10" />
              <div className="absolute inset-2 rounded-full overflow-hidden z-20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-1 -left-1 w-12 h-12 rounded-full border-4 border-accent z-0" />
            </div>

            <h3 className="text-primary font-bold text-sm uppercase tracking-wide leading-snug mb-1">
              {member.name}
            </h3>
            <p className="text-accent text-sm font-black tracking-[0.2em] uppercase mb-4">
              {member.role}
            </p>
            <div className="w-8 h-0.5 bg-accent rounded-full mb-4" />
          </div>
        ))}
      </div>

      {/* Bottom row — 1 staff centered */}
      <div className="flex justify-center mb-24">
        {staff.slice(3).map((member, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center max-w-sm"
          >
            <div className="relative w-44 h-44 mb-5">
              <div className="absolute inset-0 rounded-full border-4 border-accent" />
              <div className="absolute inset-1 rounded-full border-4 border-white z-10" />
              <div className="absolute inset-2 rounded-full overflow-hidden z-20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-1 -left-1 w-12 h-12 rounded-full border-4 border-accent z-0" />
            </div>

            <h3 className="text-primary font-bold text-sm uppercase tracking-wide leading-snug mb-1">
              {member.name}
            </h3>
            <p className="text-accent text-sm font-black tracking-[0.2em] uppercase mb-4">
              {member.role}
            </p>
            <div className="w-8 h-0.5 bg-accent rounded-full mb-4" />
          </div>
        ))}
      </div>

      {/* ── TEAM SECTION ─────────────────────────────── */}
      {/* Team label */}
      <div className="flex items-center gap-4 mb-12">
        <span className="w-1 h-8 bg-accent rounded-full inline-block" />
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase">
          Team
        </p>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      <div className="text-center mb-12">
        <h3 className="text-primary text-3xl font-bold mb-3">Our Team</h3>
        <div className="w-10 h-1 bg-accent rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamImages.map((item, i) => (
          <div
            key={i}
            className="relative w-full h-80 rounded-xl overflow-hidden group"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-primary opacity-10 group-hover:opacity-0 transition-opacity duration-300" />
            {/* Accent corner bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
          </div>
        ))}
      </div>

    </section>
  );
}
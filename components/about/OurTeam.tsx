const team = [
  {
    name: "Gahima Pierre",
    role: "C.E.O",
    initial: "G",
    bio: "A business development and insurance professional with extensive experience in client acquisition, broker management, and sales strategy across major Rwandan insurers including Old Mutual, Zamara, and Prime Insurance. Currently serves as a Business Development Officer at Old Mutual Insurance Rwanda.",
  },
  {
    name: "Ntezimana Jerome",
    role: "C.F.O",
    initial: "N",
    bio: "Chief Finance Officer at UB Connect Ltd since 2024 and Head Financial Manager at Akagera Management Company since 2019. Previously served as Director of Finance and Administration at Nuru East Africa Ltd and Finance Officer at Tigo Rwanda. Holds an MSc in Taxation and a BBA from the National University of Rwanda, is a Certified Public Accountant (CPAK), and an RRA-authorized Tax Advisor.",
  },
  {
    name: "Umuhoza God's Answer",
    role: "C.O.O",
    initial: "U",
    bio: "Holds a Bachelor's Degree in Business Management and has over four years of experience in the insurance industry, having worked with BK Insurance and Britam Insurance. She has developed strong expertise in insurance operations, client relationship management, and business development.",
  },
  {
    name: "Bizaba Loic",
    role: "BDM",
    initial: "B",
    bio: "A dynamic Head of Business Development known for driving growth through strong client relationships and strategic partnerships. With a sharp understanding of market opportunities, he specializes in identifying high-value prospects, nurturing long-term collaborations, and turning ideas into scalable business results.",
  },
];

export default function OurTeam() {
  return (
    <section className="bg-background section-padding py-24">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {team.map((member, i) => (
          <div
            key={i}
            className="group bg-[#F7F7F7] rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-7">
              {/* Avatar + name row */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-accent font-black text-xl shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                  {member.initial}
                </div>
                <div>
                  <h3 className="text-primary font-bold text-sm uppercase tracking-wide leading-snug">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-4 h-0.5 bg-accent rounded-full" />
                    <p className="text-accent text-xs font-black tracking-[0.25em] uppercase">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="border-l-2 border-accent pl-4">
                <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
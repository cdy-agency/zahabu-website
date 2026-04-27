import Image from "next/image";
import { MotionCard, SectionTransition } from "@/components/motion";

const clients = [
  {
    logo: "/ubconnect.jpeg",
    name: "UB CONNECT LTD",
    tagline: "Investment | Construction",
    description:
      "UB CONNECT Ltd, a flourishing real estate company that has established itself as a leading firm in investment and construction of commercial buildings.",
    accent: false,
  },
  {
    logo: "/cornerstone.jpeg",
    name: "CORNERSTONE STATION Ltd",
    tagline: "Transport & Fuel",
    description:
      "CORNERSTONE STATION Ltd is positioned to be a leading player in the country and regional transport market, proudly supplying customers with the best transportation network.",
    accent: true,
  },
  {
    logo: "/lusainvestiment.jpeg",
    name: "LUSA INVESTMENT LTD",
    tagline: "Commercial Markets",
    description:
      "LUSA INVESTMENT Ltd deals in the management of commercial markets. Our operational market, KABUGA Market, is located in Masaka Sector in Kicukiro District.",
    accent: false,
  },
];

export default function OurClients() {
  return (
    <SectionTransition id="clients" className="bg-white section-padding py-24">
      <div className="text-center mb-16">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
          Who We Serve
        </p>
        <h2 className="text-primary text-4xl font-bold mb-3">Our Clients</h2>
        <div className="w-10 h-1 bg-accent rounded-full mx-auto mb-3" />
        <p className="text-muted text-sm">Trusted by leading companies across Rwanda</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clients.map((client, i) => (
          <MotionCard
            key={i}
            className={`relative rounded-xl overflow-hidden flex flex-col ${
              client.accent
                ? "bg-accent"
                : "bg-[#F7F7F7] border border-gray-100 shadow-sm"
            }`}
          >
            {/* Logo area */}
            <div
              className={`px-8 pt-8 pb-6 flex items-center gap-4 border-b ${
                client.accent ? "border-primary/10" : "border-gray-100"
              }`}
            >
              {/* Logo image in white rounded square */}
              <div className="w-16 h-16 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 overflow-hidden p-1">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>

              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide leading-tight text-primary">
                  {client.name}
                </h3>
                <p
                  className={`text-xs font-bold tracking-widest uppercase mt-1 ${
                    client.accent ? "text-primary/70" : "text-accent"
                  }`}
                >
                  {client.tagline}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="px-8 py-6 flex-1">
              <p
                className={`text-sm leading-relaxed ${
                  client.accent ? "text-primary/80" : "text-muted"
                }`}
              >
                {client.description}
              </p>
            </div>

            {/* Decorative circle */}
            <div
              className={`absolute bottom-0 right-0 w-20 h-20 rounded-tl-full opacity-20 ${
                client.accent ? "bg-primary" : "bg-accent"
              }`}
            />
          </MotionCard>
        ))}
      </div>
    </SectionTransition>
  );
}
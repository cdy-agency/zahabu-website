import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden flex items-end">
      <Image
        src="/nurse.webp"
        alt="About ZAHABU Solutions"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary opacity-80" />

      {/* Decorative diagonal shape */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-tl-full" />

      <div className="relative z-10 section-padding pb-20 pt-44">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-4">
          Who We Are
        </p>
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-4">
          About <span className="text-accent">ZAHABU</span>
          <br />Solutions Ltd.
        </h1>
        <div className="w-14 h-1 bg-accent rounded-full mb-6" />
        <p className="text-white/65 text-base max-w-lg leading-relaxed">
          Rwanda&apos;s emerging insurance brokerage firm — built on trust,
          expertise, and a commitment to putting clients first. Established in
          2025, headquartered in Kigali.
        </p>
      </div>
    </section>
  );
}
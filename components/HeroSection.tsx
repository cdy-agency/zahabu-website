"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/insurance.jpg"
        alt="Auto Appraisal Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary opacity-85" />

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-6">
        <div>
          {/* Static Title */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            WELCOME TO ZAHABU <br />
            SOLUTIONS LTD
          </h1>

          {/* Typing Text */}
          <h2 className="text-accent text-xl md:text-2xl font-semibold mb-8">
            <Typewriter
              words={[
                "Your Trusted Insurance Partner",
                "Reliable Coverage Solutions",
                "Protecting What Matters Most",
                "Simplifying Insurance Access in Rwanda",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>

          {/* Short intro */}
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            An Insurance Brokerage Firm in Rwanda — collaborating with
            organizations and individuals to make insurance simple, accessible,
            and effective.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-accent text-primary font-bold px-8 py-3 rounded-sm uppercase tracking-widest text-sm hover:opacity-90 transition-opacity duration-200"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-sm uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white animate-pulse" />
      </div>
    </section>
  );
}
import Image from "next/image";
import { SectionTransition, ValuePillMotion } from "@/components/motion";

export default function WhatWeBelieve() {
  return (
    <SectionTransition className="w-full min-h-150 flex flex-col lg:flex-row overflow-hidden">
      <div className="flex-1 bg-white section-padding py-20 flex flex-col justify-center">
        <div className="w-4 h-4 rounded-full border-2 border-gray-300 mb-8" />

        <h2 className="text-primary text-5xl font-bold leading-tight">What We Believe</h2>
        <span className="block w-48 h-0.5 bg-accent mt-3 rounded-full mb-10" />

        <div className="flex flex-col gap-3 mb-10">
          <div className="flex flex-wrap gap-3">
            <ValuePillMotion label="Integrity" accent={false} />
            <ValuePillMotion label="Professionalism" accent={false} />
            <ValuePillMotion label="Innovation" accent />
          </div>
          <div className="flex flex-wrap gap-3 ml-0">
            <ValuePillMotion label="Customer-Centered" accent />
            <ValuePillMotion label="Transparency" accent={false} />
          </div>
        </div>

        <div className="w-6 h-6 rounded-full border-2 border-gray-200 mb-6" />

        <p className="text-primary text-lg font-bold leading-relaxed max-w-md">
          We are committed to providing innovative, reliable, and personalized insurance
          solutions to individuals and organizations across Rwanda.
        </p>
      </div>

      <div
        className="relative lg:w-[55%] min-h-[400px] lg:min-h-full"
        style={{
          clipPath: "polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <Image
          src="/nurse.webp"
          alt="ZAHABU Insurance professional care"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </SectionTransition>
  );
}

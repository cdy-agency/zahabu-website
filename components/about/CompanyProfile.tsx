import Link from "next/link";
import { SectionTransition } from "@/components/motion";

export default function CompanyProfile() {
  return (
    <SectionTransition
      id="about"
      className="bg-[#F7F7F7] section-padding py-24"
    >
      {/* Top header */}
      <div className="mb-12">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
          Company Profile
        </p>
        <h2 className="text-primary text-4xl font-bold mb-3">
          ZAHABU Solutions Ltd.
        </h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-5" />
        <p className="text-muted text-sm max-w-xl leading-relaxed">
          An Insurance Brokerage Firm in Rwanda, established in 2025 <br />  With <span className="font-bold underline">License Code: B01/2026</span> . We
          collaborate with organizations and individuals by making insurance
          simple, reliable, and effective.
        </p>

        {/* BNR Licensed Broker Banner */}
        <Link
          href="https://www.bnr.rw/documents/LIST_OF_LICENSED_INSURANCE_AND_REINSURANCE_BROKERS-April_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-[#D1D5DB] bg-white p-4 no-underline transition-all duration-200 hover:border-[#1D9E75] hover:shadow-sm mt-6 max-w-xl"
        >
          {/* Shield icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E1F5EE]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M11 2L3 6v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6L11 2z"
                fill="#1D9E75"
                fillOpacity="0.2"
              />
              <path
                d="M11 2L3 6v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6L11 2z"
                stroke="#0F6E56"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 11l2.5 2.5L15 9"
                stroke="#0F6E56"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-primary m-0 leading-tight">
              BNR Licensed Insurance Broker
            </p>
            <p className="text-xs text-muted m-0 mt-0.5 leading-relaxed">
              Shortlisted on the National Bank of Rwanda official broker
              registry · April 2026
            </p>
          </div>

          {/* Arrow */}
          <span className="text-muted text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </Link>
      </div>
    </SectionTransition>
  );
}

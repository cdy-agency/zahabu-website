"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BTN_HOVER, BTN_TAP, SPRING_HOVER } from "@/components/motion";

const MAPS_URL =
  "https://www.google.com/maps/place/1%C2%B057'23.1%22S+30%C2%B005'01.0%22E/@-1.9564195,30.0810299,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-1.9564195!4d30.0836048?hl=en&entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D";

const OFFICE_ADDRESS =
  "KIGALI - GASABO - KIMIHURURA - MAJYAMBERE - KG 2 AVE - GATE NUMBER 33.";

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="w-full min-w-0 max-w-full overflow-x-clip bg-primary">
      <div className="section-padding py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-white/10">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <h2 className="text-white text-3xl font-bold mb-3">Contact ZAHABU</h2>
            <div className="w-48 h-0.5 bg-accent rounded-full mb-5" />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              If you&apos;re inquiring about a claim, service question, or general concern, please use
              the form below and we&apos;ll get back to you within 1–2 business days.
            </p>
          </div>

          <div className="flex items-start gap-3 text-white/50 text-sm max-w-md">
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              className="mt-1 flex-shrink-0"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <div className="space-y-1.5">
              <p className="text-white/50 text-xs font-black tracking-widest uppercase">Our address</p>
              {reduce ? (
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/70 leading-relaxed hover:text-accent underline-offset-2 hover:underline transition-colors"
                >
                  {OFFICE_ADDRESS}
                </a>
              ) : (
                <motion.a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-left text-white/70 leading-relaxed hover:text-accent underline-offset-2 hover:underline"
                  whileHover={{ x: 2, scale: 1.01 }}
                  transition={SPRING_HOVER}
                >
                  {OFFICE_ADDRESS}
                </motion.a>
              )}
              <p className="text-white/40 text-xs pt-1">ZAHABU Solutions — Available Mon–Fri, 8am–6pm</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <FooterInput label="name" type="text" placeholder="Full name" />
          <FooterInput label="email" type="email" placeholder="Email" />
          <FooterInput label="phone" type="tel" placeholder="Phone number" />
          <FooterInput label="message" type="text" placeholder="Type your message" />

          <div className="mt-2">
            {reduce ? (
              <button
                type="button"
                className="bg-accent text-white text-sm font-bold px-8 py-3 rounded-full hover:bg-accent/80 transition-colors duration-200"
              >
                Submit
              </button>
            ) : (
              <motion.button
                type="button"
                className="bg-accent text-white text-sm font-bold px-8 py-3 rounded-full"
                whileHover={BTN_HOVER}
                whileTap={BTN_TAP}
                transition={SPRING_HOVER}
              >
                Submit
              </motion.button>
            )}
          </div>
        </div>
      </div>

      <div className="section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/40 text-xs">© {new Date().getFullYear()} ZAHABU Solutions. All rights reserved.</p>
        <div className="flex items-center gap-5 text-white/40 text-xs">
          {reduce ? (
            <>
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </>
          ) : (
            <>
              <motion.span
                className="inline-block"
                whileHover={{ y: -2, scale: 1.04 }}
                transition={SPRING_HOVER}
              >
                <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </motion.span>
              <motion.span
                className="inline-block"
                whileHover={{ y: -2, scale: 1.04 }}
                transition={SPRING_HOVER}
              >
                <Link href="/terms" className="text-white/40 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </motion.span>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}

function FooterInput({
  type,
  placeholder,
  label,
}: {
  type: string;
  placeholder: string;
  label: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <input
        type={type}
        name={label}
        placeholder={placeholder}
        className="bg-transparent border-b border-white/25 text-white placeholder:text-white/40 text-sm py-3 outline-none focus:border-accent transition-colors duration-200"
      />
    );
  }
  return (
    <motion.input
      type={type}
      name={label}
      placeholder={placeholder}
      className="bg-transparent border-b border-white/25 text-white placeholder:text-white/40 text-sm py-3 outline-none focus:border-accent"
      whileFocus={{ y: -2, scale: 1.01 }}
      transition={SPRING_HOVER}
    />
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Document = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  pages?: number;
  file: string;
};

const documents: Document[] = [
  {
    id: "bnr-licensed-brokers",
    title: "BNR Licensed Insurance & Reinsurance Brokers",
    description:
      "Official list of licensed insurance and reinsurance brokers published by the National Bank of Rwanda.",
    category: "Regulatory",
    date: "April 2026",
    pages: 3,
    file: "/zahabu-profile.pdf",
  },
];

const categoryColors: Record<string, string> = {
  Regulatory: "bg-accent/10 text-accent",
  Company: "bg-primary/10 text-primary",
  Policy: "bg-emerald-50 text-emerald-700",
};

export default function CompanyProfileDocuments() {
  const [activeDoc, setActiveDoc] = useState<Document | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#F7F7F7]">
      <section className="relative overflow-hidden flex items-end min-h-80 sm:min-h-110">
        <Image
          src="/company-profile.png"
          alt="ZAHABU company profile cover image"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "brightness(0.38)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(25,20,75,0.95) 0%, rgba(25,20,75,0.5) 50%, rgba(25,20,75,0.2) 100%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 section-padding pb-14 pt-32 w-full"
        >
          <p className="text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-3">
            Resources
          </p>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-4">
            Documents
          </h1>
          <div className="w-10 h-0.75 bg-accent" />
        </motion.div>
      </section>

      <div className="section-padding py-16">
        <div className="flex items-center gap-4 mb-10">
          <span className="w-1 h-6 bg-accent inline-block" />
          <p className="text-primary text-xs font-black tracking-[0.35em] uppercase">
            All Documents
          </p>
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-muted text-xs font-medium">
            {documents.length} file{documents.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="flex flex-col border border-gray-200 bg-white divide-y divide-gray-100">
          {documents.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 hover:bg-[#F7F7F7] transition-colors duration-200 group"
            >
              <div className="shrink-0 w-10 h-10 bg-accent/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 2h8l4 4v12a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1z"
                    stroke="#1D9E75"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2v4h4"
                    stroke="#1D9E75"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 11h6M7 14h4"
                    stroke="#1D9E75"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className={`text-[10px] font-black tracking-[0.2em] uppercase px-2.5 py-0.5 ${
                      categoryColors[doc.category] ?? "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {doc.category}
                  </span>
                  <span className="text-muted text-xs">{doc.date}</span>
                  {doc.pages && (
                    <span className="text-muted text-xs">{doc.pages} pages</span>
                  )}
                </div>
                <h3 className="text-primary font-semibold text-sm leading-snug truncate">
                  {doc.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed mt-0.5 line-clamp-1">
                  {doc.description}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setActiveDoc(doc)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white text-xs font-bold tracking-widest uppercase hover:bg-accent/90 transition-colors duration-200"
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M6.5 1v7M3.5 5l3 3 3-3"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 10h11"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  View
                </button>
                <a
                  href={doc.file}
                  download
                  className="inline-flex items-center justify-center w-9 h-9 border border-gray-200 text-muted hover:border-accent hover:text-accent transition-colors duration-200"
                  title="Download"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1v8M4 6l3 3 3-3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 11h12"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeDoc && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setActiveDoc(null)}
            />

            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-4 md:inset-8 z-50 flex flex-col bg-white shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-gray-100 bg-white shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 bg-accent/10 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 2h8l4 4v12a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1z"
                        stroke="#1D9E75"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 2v4h4"
                        stroke="#1D9E75"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-primary font-semibold text-sm truncate leading-tight">
                      {activeDoc.title}
                    </p>
                    <p className="text-muted text-xs">{activeDoc.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeDoc.file}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-primary text-xs font-bold tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-200"
                  >
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 1v8M4 6l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 11h12"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                    Download
                  </a>
                  <button
                    onClick={() => setActiveDoc(null)}
                    className="w-9 h-9 flex items-center justify-center border border-gray-200 text-muted hover:border-primary hover:text-primary transition-colors duration-200"
                    aria-label="Close document viewer"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 2l10 10M12 2L2 12"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-gray-100 overflow-hidden">
                <iframe
                  src={`${activeDoc.file}#toolbar=1&navpanes=0&scrollbar=1`}
                  className="w-full h-full border-0"
                  title={activeDoc.title}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

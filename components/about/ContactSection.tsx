export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-white section-padding py-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/8 rounded-br-full" />
      <div className="absolute top-0 right-48 w-48 h-48 bg-primary/5 rounded-bl-full" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-primary/8 rounded-tl-full" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-4">
          Get In Touch
        </p>
        <h2 className="text-primary text-5xl font-bold leading-tight mb-4">
          Don&apos;t Hesitate
          <br />
          <span className="text-primary">To Contact Us</span>
        </h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />

        <p className="text-muted text-sm max-w-md leading-relaxed mb-12">
          Whether you&apos;re an individual, SME, or corporate organization — we
          are ready to help you find the right insurance coverage. Reach out
          today.
        </p>

        <div className="flex flex-col gap-5">
          {/* Email */}
          <a
            href="mailto:zahabusolutions@gmail.com"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-200">
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                className="text-primary group-hover:text-white transition-colors duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <span className="text-primary font-bold text-lg tracking-wide uppercase group-hover:text-accent transition-colors duration-200">
              zahabusolutions@gmail.com
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+250788381630"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-200">
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                className="text-primary group-hover:text-white transition-colors duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <span className="text-primary font-bold text-lg tracking-wide group-hover:text-accent transition-colors duration-200">
              +250 788 381 630
            </span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                className="text-primary"
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
            </div>
            <span className="text-primary font-bold text-lg tracking-wide">
              Kigali, Rwanda
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
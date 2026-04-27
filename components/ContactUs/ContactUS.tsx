"use client";

import Image from "next/image";
import { useState } from "react";

const RECIPIENT_EMAIL = "zahabusolutions@gmail.com";

const MAPS_URL =
  "https://www.google.com/maps/place/1%C2%B057'23.1%22S+30%C2%B005'01.0%22E/@-1.9564195,30.0810299,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-1.9564195!4d30.0836048?hl=en&entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D";

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3987.516!2d30.0810299!3d-1.9564195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwNTcnMjMuMSJTIDMwwrAwNScwMS4wIkU!5e0!3m2!1sen!2srw!4v1700000000000!5m2!1sen!2srw";

const OFFICE_ADDRESS =
  "KIGALI - KG 2 AVE - GATE NUMBER 33.";

const BUSINESS_HOURS = [
  { day: "Monday – Friday", hours: "8:00 am – 6:00 pm" },
  { day: "Saturday", hours: "9:00 am – 4:00 pm" },
  { day: "Sunday", hours: "Closed" },
];

const inputBase =
  "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-primary placeholder:text-muted/50 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors duration-200";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSend = () => {
    // Validate required fields
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setError("Please fill in your name, email, and message before sending.");
      return;
    }

    // Build the mailto link — everything pre-filled for the user
    const subject = encodeURIComponent(`Website Enquiry from ${fields.name}`);
    const body = encodeURIComponent(
      `Hello ZAHABU Solutions,\n\nName: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone || "Not provided"}\n\nMessage:\n${fields.message}\n\n---\nSent via zahabusolutions.com contact form`
    );

    // Opens Gmail app / Outlook / Apple Mail with everything ready to send
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;

    // Show success screen shortly after
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <main className="min-h-screen bg-[#F7F7F7]">

      {/* ── Hero Header: contact.png background + blue gradient overlay ── */}
      <div className="relative pt-32 pb-24 section-padding overflow-hidden min-h-[280px]">

        {/* Background image */}
        <Image
          src="/contact.png"
          alt="Contact background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Blue gradient overlay: transparent at top → brand blue at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10, 36, 99, 0.45) 0%, rgba(10, 36, 99, 0.72) 55%, rgba(10, 36, 99, 0.95) 100%)",
          }}
        />

        {/* Text content */}
        <div className="relative z-10">
          <p className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-3">
            Reach Out
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Contact Us
          </h1>
          <div className="w-12 h-0.5 bg-accent rounded-full" />
        </div>
      </div>

      {/* ── Two-column grid ── */}
      <div className="section-padding py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 border-b border-gray-200">

        {/* LEFT: form */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-primary text-xl font-bold mb-1">Get In Touch</h2>
            {/* <p className="text-muted text-sm leading-relaxed">
              Fill in the form below and our team will get back to you within 1–2 business days.
            </p> */}
          </div>

          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-primary font-bold text-lg">Message sent!</p>
              <p className="text-muted text-sm">We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            /* ── Form ── */
            <div className="flex flex-col gap-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Full name *"
                  value={fields.name}
                  onChange={handleChange}
                  className={inputBase}
                />
                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email address *"
                  value={fields.email}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone number (optional)"
                value={fields.phone}
                onChange={handleChange}
                className={inputBase}
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your message *"
                rows={5}
                value={fields.message}
                onChange={handleChange}
                className={inputBase + " resize-none"}
              />

              {/* Validation error */}
              {error && (
                <p className="text-red-500 text-xs font-medium -mt-1">{error}</p>
              )}

              {/* Send button */}
              <button
                type="button"
                onClick={handleSend}
                className="group self-start inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold bg-accent text-white hover:bg-accent/85 transition-all duration-200"
              >
                Send Message
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>


            </div>
          )}
        </div>

        {/* RIGHT: contact info + hours */}
        <div className="flex flex-col gap-6">

          {/* Contact information card */}
          <div className="rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-primary text-sm font-black tracking-widest uppercase mb-5">
              Contact Information
            </h2>
            <div className="flex flex-col gap-4">

              {/* Phone */}
              <a href="tel:+250788381630" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-200">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider font-semibold mb-0.5">Phone</p>
                  <p className="text-primary text-sm font-semibold group-hover:text-accent transition-colors">
                    +250 788 381 630
                  </p>
                </div>
              </a>

              <div className="h-px bg-gray-100" />

              {/* Email */}
              <a href={`mailto:${RECIPIENT_EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-200">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider font-semibold mb-0.5">Email</p>
                  <p className="text-primary text-sm font-semibold group-hover:text-accent transition-colors">
                    {RECIPIENT_EMAIL}
                  </p>
                </div>
              </a>

              <div className="h-px bg-gray-100" />

              {/* Address */}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-200">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider font-semibold mb-0.5">Address</p>
                  <p className="text-primary text-sm font-semibold leading-relaxed group-hover:text-accent transition-colors">
                    {OFFICE_ADDRESS}
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Business hours card */}
          {/* <div className="rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-primary text-sm font-black tracking-widest uppercase mb-5">
              Business Hours
            </h2>
            <div className="flex flex-col gap-3">
              {BUSINESS_HOURS.map(({ day, hours }, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-muted text-sm">{day}</span>
                  <span className={`text-sm font-semibold ${hours === "Closed" ? "text-muted/40" : "text-primary"}`}>
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* ── Full-width map ── */}
      <div className="relative w-full">
        <iframe
          title="ZAHABU Solutions Office Location"
          src={MAPS_EMBED_URL}
          width="100%"
          height="340"
          style={{ border: 0, display: "block", filter: "grayscale(10%) contrast(1.02) brightness(0.97)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 px-3 py-1.5 text-xs font-semibold text-primary hover:text-accent hover:border-accent/40 transition-colors shadow-md"
        >
          <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          Open in Maps
        </a>
      </div>
    </main>
  );
}
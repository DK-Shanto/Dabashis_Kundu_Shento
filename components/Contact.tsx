"use client";

import { useState } from "react";

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function UpworkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.56c-2.515 0-4.233 1.527-5.017 4.021-.919-1.339-1.62-2.945-2.033-4.308H9.337v5.207c-.001 1.485-1.213 2.698-2.699 2.698-1.486 0-2.699-1.213-2.699-2.698V4.311H2.24v5.207c0 2.762 2.269 5.063 5.037 5.063 2.762 0 5.038-2.301 5.038-5.063V8.03c.379 1.167 1.136 2.597 2.062 3.754l-1.769 8.18h2.216l1.177-5.514c.91.509 1.965.852 3.193.852 3.021 0 5.488-2.467 5.488-5.514-.001-3.048-2.468-5.19-5.121-5.19z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* Static form — wire to Formspree, Netlify Forms, or similar on deploy */
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 rounded-full bg-accent/4 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-100 mb-5">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Reach out and
            I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact links */}
          <div className="lg:col-span-2 space-y-5">
            <a
              href="mailto:dabashis1709@gmail.com"
              className="card-hover flex items-center gap-4 p-5 rounded-2xl border border-line/50 bg-card/50 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <MailIcon />
              </div>
              <div>
                <p className="font-heading font-semibold text-slate-200 text-sm">
                  Email Me
                </p>
                <p className="text-slate-500 text-xs mt-0.5">dabashis1709@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-center gap-4 p-5 rounded-2xl border border-line/50 bg-card/50 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <UpworkIcon />
              </div>
              <div>
                <p className="font-heading font-semibold text-slate-200 text-sm">
                  Upwork Profile
                </p>
                <p className="text-slate-500 text-xs mt-0.5">Top Rated · $20K+ Earned</p>
              </div>
            </a>

            <div className="p-5 rounded-2xl border border-accent/20 bg-accent/5">
              <p className="text-accent font-heading font-semibold text-sm mb-1">
                Response Time
              </p>
              <p className="text-slate-400 text-sm">
                Typically within <span className="text-slate-200">24 hours</span>.
                Urgent projects? Mention it in your message.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-3xl mb-5 animate-glow">
                  ✓
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-100 mb-3">
                  Message Sent!
                </h3>
                <p className="text-slate-400 max-w-sm">
                  Thanks for reaching out. I&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-accent text-sm font-heading font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl border border-line/60 bg-card/60 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-200 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-line/60 bg-card/60 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-200 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3.5 rounded-xl border border-line/60 bg-card/60 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-200 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-glow w-full py-4 rounded-xl bg-accent text-navy font-heading font-bold text-base hover:bg-accent-dark transition-all duration-300"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

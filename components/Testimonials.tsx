const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Boutique",
    country: "🇺🇸 United States",
    rating: 5,
    quote:
      "Dabashis completely transformed our Shopify store. Sales went up 40% within the first month after launch. His attention to detail and understanding of e-commerce UX is genuinely impressive. Would hire again in a heartbeat.",
    platform: "Shopify",
    platformColor: "text-green-400",
  },
  {
    name: "James Harrington",
    role: "Creative Director, H Studio",
    country: "🇬🇧 United Kingdom",
    rating: 5,
    quote:
      "Hired Dabashis for a complete Wix rebuild and it exceeded every expectation. The scroll animations, the layout, the mobile experience — all flawless. He communicates clearly and delivers on time. Highly recommend.",
    platform: "Wix",
    platformColor: "text-yellow-400",
  },
  {
    name: "María Fernández",
    role: "Owner, Verde Health Blog",
    country: "🇪🇸 Spain",
    rating: 5,
    quote:
      "Our WordPress site was slow and outdated. Dabashis rebuilt it from scratch, added WooCommerce, and our page speed went from 45 to 96 on Lighthouse. Professional, fast, and a real expert in his craft.",
    platform: "WordPress",
    platformColor: "text-blue-400",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-36 bg-navy relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Client Stories
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-100 mb-5">
            What Clients Say
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Real feedback from real clients — straight from Upwork reviews.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover flex flex-col p-7 rounded-2xl border border-line/50 bg-card/50 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-300 leading-relaxed text-sm flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="border-t border-line/40 pt-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-heading font-semibold text-slate-100 text-sm">
                      {t.name}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">{t.role}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{t.country}</p>
                  </div>
                  <span className={`text-xs font-heading font-semibold ${t.platformColor} shrink-0 mt-0.5`}>
                    {t.platform}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

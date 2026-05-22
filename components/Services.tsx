function ShoppingBagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function WandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
    >
      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
      <path d="m14 7 3 3" />
      <path d="M5 6v4" />
      <path d="M19 14v4" />
      <path d="M10 2v2" />
      <path d="M7 8H3" />
      <path d="M21 16h-4" />
      <path d="M11 3H9" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const services = [
  {
    Icon: ShoppingBagIcon,
    title: "Shopify Store Development",
    platform: "Shopify",
    accentColor: "text-green-400",
    borderColor: "hover:border-green-500/50",
    bgColor: "bg-green-500/5",
    iconBg: "bg-green-500/10 text-green-400",
    dotColor: "bg-green-400",
    points: [
      "Custom Liquid theme development & modification",
      "Product page & collection layout design",
      "Cart optimization & conversion rate improvements",
      "App integrations (reviews, loyalty, email)",
      "Speed optimization & Core Web Vitals tuning",
    ],
  },
  {
    Icon: WandIcon,
    title: "Wix Website Design",
    platform: "Wix",
    accentColor: "text-accent",
    borderColor: "hover:border-accent/50",
    bgColor: "bg-accent/5",
    iconBg: "bg-accent/10 text-accent",
    dotColor: "bg-accent",
    points: [
      "Pixel-perfect Wix Editor & Studio builds",
      "Custom animations and scroll effects",
      "Wix Blog, Bookings & Events setup",
      "SEO configuration and meta optimization",
      "Mobile-responsive design and testing",
    ],
  },
  {
    Icon: CodeIcon,
    title: "WordPress Development",
    platform: "WordPress",
    accentColor: "text-violet",
    borderColor: "hover:border-violet/50",
    bgColor: "bg-violet/5",
    iconBg: "bg-violet/10 text-violet",
    dotColor: "bg-violet",
    points: [
      "Custom theme and child theme development",
      "Elementor / Divi / Gutenberg block builds",
      "WooCommerce store setup & customization",
      "Plugin installation, config & custom code",
      "Performance optimization & security hardening",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-navy relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/4 blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-violet/4 blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            What I Do
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-100 mb-5">
            Services & Expertise
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            End-to-end web development across three platforms — each delivered with
            the same obsessive attention to quality.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {services.map(({ Icon, title, platform, accentColor, borderColor, bgColor, iconBg, dotColor, points }) => (
            <div
              key={platform}
              className={`card-hover group p-7 rounded-2xl border border-line/50 ${bgColor} flex flex-col ${borderColor} transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <Icon />
              </div>

              {/* Platform badge */}
              <span className={`text-xs font-heading font-semibold tracking-widest uppercase ${accentColor} mb-2`}>
                {platform}
              </span>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-slate-100 mb-5 leading-snug">
                {title}
              </h3>

              {/* Points */}
              <ul className="space-y-3 mt-auto">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${dotColor}`} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Platform icon components using simple SVG shapes */
function ShopifyIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="8" fill="#96BF48" />
      <path
        d="M21.5 8.5c0 0-0.3-0.2-0.8-0.2s-2.8 0.6-2.8 0.6S17 7.5 16 7.5c-2.5 0-3.7 3.1-4.1 4.7l-2.8 0.9 0.5 1.3 2.3-0.7c-0.1 0.8-0.2 1.7-0.2 2.7 0 4.4 2.7 6.1 6.3 6.1 0.9 0 1.8-0.2 1.8-0.2l0.5-2.1s-0.7 0.2-1.5 0.2c-2 0-3.5-1-3.5-4 0-0.5 0.1-1 0.2-1.4l4.5-1.4V8.5z"
        fill="white"
      />
    </svg>
  );
}

function WixIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="8" fill="#FADD00" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#000"
        fontFamily="sans-serif"
      >
        Wix
      </text>
    </svg>
  );
}

function WordPressIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="8" fill="#21759B" />
      <circle cx="16" cy="16" r="7" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M9 16c0-3.9 3.1-7 7-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 9.2L16 16l2-6.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const stats = [
  {
    value: "$20,000+",
    label: "Total Earned",
    accent: "text-accent",
    icon: "💰",
  },
  {
    value: "5 Years",
    label: "Experience",
    accent: "text-violet",
    icon: "⚡",
  },
  {
    value: "Top Rated",
    label: "Upwork Status",
    accent: "text-emerald-400",
    icon: "⭐",
  },
];

const platforms = [
  { name: "Shopify", Icon: ShopifyIcon, desc: "Custom themes & apps" },
  { name: "Wix", Icon: WixIcon, desc: "Designer-grade sites" },
  { name: "WordPress", Icon: WordPressIcon, desc: "Powerful CMS builds" },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-surface relative overflow-hidden">
      {/* Subtle background orb */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="font-heading text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          About Me
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-100 leading-tight mb-6">
              Turning ideas into{" "}
              <span className="gradient-text">digital experiences</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Hi, I&apos;m Dabashis — a freelance web developer with{" "}
                <span className="text-slate-200 font-medium">5 years of hands-on experience</span>{" "}
                crafting high-performing websites on Shopify, Wix, and WordPress. I
                specialize in turning brand visions into polished, conversion-ready
                digital storefronts and portfolio sites.
              </p>
              <p>
                As a{" "}
                <span className="text-accent font-medium">Top Rated freelancer on Upwork</span>{" "}
                with over{" "}
                <span className="text-slate-200 font-medium">$20,000 earned</span>, I&apos;ve
                collaborated with entrepreneurs, small businesses, and global brands
                across 15+ countries to deliver results that matter — faster load
                times, higher conversions, and happier customers.
              </p>
              <p>
                Every pixel I write is intentional. Every site I ship is built to last.
              </p>
            </div>

            {/* Platform pills */}
            <div className="mt-10 flex flex-wrap gap-4">
              {platforms.map(({ name, Icon, desc }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-line/60 bg-card/60 hover:border-accent/40 transition-all duration-300 group"
                >
                  <Icon />
                  <div>
                    <p className="text-sm font-heading font-semibold text-slate-200 group-hover:text-accent transition-colors">
                      {name}
                    </p>
                    <p className="text-xs text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-hover flex items-center gap-6 p-6 rounded-2xl border border-line/60 bg-card/40 backdrop-blur-sm"
              >
                <div className="text-3xl shrink-0">{stat.icon}</div>
                <div>
                  <p
                    className={`font-heading font-extrabold text-3xl ${stat.accent} leading-none`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
                </div>
              </div>
            ))}

            {/* Upwork badge */}
            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <span className="text-sm text-slate-400">100% Job Success</span>
              </div>
              <p className="text-emerald-400 font-heading font-bold text-lg">
                Upwork Top Rated Freelancer
              </p>
              <p className="text-slate-500 text-sm mt-1">
                Consistently ranked in the top 10% of freelancers on the platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

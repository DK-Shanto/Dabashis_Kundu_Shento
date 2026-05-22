import Image from "next/image";

const platforms = ["Shopify", "Wix", "WordPress"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy pt-16"
    >
      {/* Background */}
      <Image
        src="/images/hero.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay — subtle center darkening so text reads over the image */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_65%_at_50%_40%,rgba(7,13,26,0.72),rgba(7,13,26,0.15))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-transparent to-navy/80" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-black/30 backdrop-blur-md text-accent text-sm font-medium mb-10 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Available for new projects
        </div>

        {/* Name */}
        <h1
          className="font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-slate-100 mb-6 [animation:fade-up_0.7s_ease_0.1s_both]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Dabashis Kundu{" "}
          <span className="gradient-text block mt-2">Shento</span>
        </h1>

        {/* Platform tags */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-8 [animation:fade-up_0.7s_ease_0.2s_both]">
          {platforms.map((p, i) => (
            <span key={p} className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 text-sm font-medium font-heading tracking-wide">
                {p}
              </span>
              {i < 2 && <span className="w-1 h-1 rounded-full bg-slate-600" />}
            </span>
          ))}
          <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-slate-400 text-sm font-medium font-heading tracking-wide">
            Developer
          </span>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed mb-10 [animation:fade-up_0.7s_ease_0.3s_both]">
          Trusted by global clients to build fast, beautiful stores that turn
          browsers into buyers —{" "}
          <span className="text-slate-200 font-medium">5+ years, zero compromises.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 [animation:fade-up_0.7s_ease_0.4s_both]">
          <a
            href="#portfolio"
            className="btn-glow px-8 py-3.5 rounded-full bg-accent text-navy font-heading font-bold text-sm hover:bg-accent-dark transition-all duration-300 w-full sm:w-auto text-center"
          >
            View My Work →
          </a>
          <a
            href="https://www.upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-slate-300 font-heading font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto text-center"
          >
            Hire Me on Upwork ↗
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs z-10 [animation:fade-up_0.7s_ease_0.7s_both]">
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}

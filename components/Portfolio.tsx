import Image from "next/image";
import projects from "@/data/projects.json";

const platformColors: Record<string, { bg: string; text: string; dot: string }> = {
  Shopify: { bg: "bg-green-500/15", text: "text-green-400", dot: "bg-green-400" },
  Wix: { bg: "bg-yellow-500/15", text: "text-yellow-400", dot: "bg-yellow-400" },
  WordPress: { bg: "bg-blue-500/15", text: "text-blue-400", dot: "bg-blue-400" },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 md:py-36 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            My Work
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-100 mb-5">
            Demo Projects
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            A curated selection of websites built across all three platforms. Each
            project is a real build — no mockups.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => {
            const colors = platformColors[project.platform] ?? {
              bg: "bg-slate-500/15",
              text: "text-slate-400",
              dot: "bg-slate-400",
            };

            return (
              <article
                key={project.id}
                className="card-hover group flex flex-col rounded-2xl border border-line/50 bg-card/60 overflow-hidden"
              >
                {/* Browser mockup */}
                <div className="relative bg-[#1a1f2e] border-b border-line/50 overflow-hidden">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#13161f] border-b border-white/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <div className="flex-1 mx-2 px-3 py-0.5 rounded-md bg-white/5 border border-white/8 text-[10px] text-slate-500 truncate font-mono">
                      {project.demoUrl}
                    </div>
                  </div>

                  {/* Screenshot area */}
                  <div className="relative h-44 overflow-hidden">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 group-hover:object-center transition-all duration-700 ease-in-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Bottom fade for depth */}
                        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#1a1f2e] to-transparent" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 grid-bg opacity-40" />
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                          <div
                            className={`w-14 h-14 mx-auto rounded-2xl ${colors.bg} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <span className={`font-heading font-extrabold text-2xl ${colors.text}`}>
                              {project.platform[0]}
                            </span>
                          </div>
                          <span className="text-xs text-slate-600 font-medium">Preview coming soon</span>
                        </div>
                      </>
                    )}
                    {/* Shine sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 z-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Platform badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold ${colors.bg} ${colors.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {project.platform}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-100 mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-navy/80 text-slate-500 border border-line/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-heading font-semibold ${colors.text} hover:gap-3 transition-all duration-200`}
                  >
                    View Demo <span>→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-slate-500 text-sm mt-12 italic">
          ✦ New projects added regularly — check back soon!
        </p>
      </div>
    </section>
  );
}

import { projects } from "../data/projects"

export default function Projects({ lang }) {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 md:px-12 py-12 md:py-24">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-6 h-[1.5px] bg-[#8b6bbf]"></span>
        <span className="text-[11px] font-semibold tracking-[.2em] uppercase text-[#8b6bbf]">
          {lang === "tr" ? "Projeler" : "Projects"}
        </span>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-3">
        {lang === "tr"
          ? <>Seçili <em>çalışmalarım.</em></>
          : <>Selected <em>work.</em></>}
      </h2>
      <p className="text-[#5a4e6a] text-sm font-light mb-12">
        {lang === "tr" ? "Gerçek projeler, gerçek çözümler." : "Real projects, real solutions."}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl border border-[#e8dff0] bg-white overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#ddd0f5] transition-all"
          >
            <div className={`h-36 flex items-center justify-center text-5xl bg-gradient-to-br ${p.color}`}>
              {p.emoji}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#ddd0f5]/40 text-[#8b6bbf] border border-[#ddd0f5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="font-serif text-xl font-bold mb-2">{p.name}</div>

              <p className="text-sm text-[#5a4e6a] font-light leading-relaxed flex-1">
                {p.description[lang]}
              </p>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#e8dff0]">
                <div>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#8b6bbf] hover:underline"
                    >
                      {lang === "tr" ? "GitHub'da Gör →" : "View on GitHub →"}
                    </a>
                  )}
                </div>
                <div>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#4a8c68] hover:underline"
                    >
                      {lang === "tr" ? "Canlı Site ↗" : "Live Site ↗"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { useState } from "react"
import { projects } from "../data/projects"

export default function Projects({ lang }) {
  const [selected, setSelected] = useState(null)

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

              {p.links && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white text-[#4a8c68] border border-[#e8dff0] hover:border-[#4a8c68] hover:bg-[#4a8c68]/5 transition-all"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#e8dff0]">
                <div className="flex items-center gap-4">
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
                  {p.details && (
                    <button
                      onClick={() => setSelected(p)}
                      className="text-xs font-semibold text-[#8b6bbf] hover:underline cursor-pointer"
                    >
                      {lang === "tr" ? "Detayları Gör →" : "View Details →"}
                    </button>
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

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1c1424]/50 backdrop-blur-sm px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl border border-[#e8dff0] max-w-lg w-full max-h-[85vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${selected.color}`}>
                  {selected.emoji}
                </div>
                <div className="font-serif text-xl font-bold">{selected.name}</div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-[#5a4e6a] hover:text-[#8b6bbf] text-2xl leading-none cursor-pointer"
                aria-label={lang === "tr" ? "Kapat" : "Close"}
              >
                ×
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#ddd0f5]/40 text-[#8b6bbf] border border-[#ddd0f5]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-[#5a4e6a] font-light leading-relaxed whitespace-pre-line mb-4">
              {selected.details[lang]}
            </p>

            {selected.links && (
              <div className="flex flex-wrap gap-1.5">
                {selected.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white text-[#4a8c68] border border-[#e8dff0] hover:border-[#4a8c68] hover:bg-[#4a8c68]/5 transition-all"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

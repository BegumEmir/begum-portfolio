import { content } from "../data/content"

export default function Hero({ lang }) {
  const h = content.hero

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 px-4 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
        
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1.5px] bg-[#c4788e]"></span>
            <span className="text-[11px] font-semibold tracking-[.18em] uppercase text-[#c4788e]">
              {h.eyebrow[lang]}
            </span>
          </div>
          <h1
            className="font-serif text-6xl font-bold leading-tight tracking-tight mb-5"
            dangerouslySetInnerHTML={{ __html: h.title[lang] }}
          />
          <p className="text-[#5a4e6a] text-base font-light leading-relaxed max-w-md mb-8">
            {h.desc[lang]}
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="px-6 py-3 bg-[#1c1424] text-white rounded-xl text-sm font-medium hover:bg-[#8b6bbf] transition-all">
              {h.cta1[lang]}
            </a>
            <a href="#contact" className="px-6 py-3 border border-[#e8dff0] text-[#1c1424] rounded-xl text-sm font-medium hover:border-[#8b6bbf] hover:text-[#8b6bbf] transition-all">
              {h.cta2[lang]}
            </a>
          </div>
        </div>

        <div className="bg-white border border-[#e8dff0] rounded-3xl p-8 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ddd0f5] to-[#f0c4d0] flex items-center justify-center text-3xl mb-4">
            👩‍💻
          </div>
          <div className="font-serif text-xl font-bold mb-1">Begüm Emir</div>
          <div className="text-sm text-[#5a4e6a] mb-4">Web Developer & QA Engineer — İstanbul</div>
          <div className="h-px bg-[#e8dff0] mb-4"></div>
          {[
            { label: lang === "tr" ? "Durum" : "Status", value: lang === "tr" ? "🟢 Projeye açık" : "🟢 Available" },
            { label: lang === "tr" ? "Deneyim" : "Experience", value: lang === "tr" ? "2+ yıl" : "2+ years" },
            { label: lang === "tr" ? "Uzmanlık" : "Expertise", value: "Web & Mobil · QA" },
            { label: lang === "tr" ? "Konum" : "Location", value: lang === "tr" ? "Uzak / Hibrit" : "Remote / Hybrid" },
          ].map((row) => (
            <div key={row.label} className="flex justify-between items-center py-2 border-b border-[#e8dff0] last:border-0 text-sm">
              <span className="text-[#5a4e6a]">{row.label}</span>
              <span className="font-semibold">{row.value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
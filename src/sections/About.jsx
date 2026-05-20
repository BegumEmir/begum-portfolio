import { content } from "../data/content"

export default function About({ lang }) {
  const a = content.about

  return (
    <section id="about" className="bg-white border-t border-b border-[#e8dff0]">
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1.5px] bg-[#c4788e]"></span>
              <span className="text-[11px] font-semibold tracking-[.2em] uppercase text-[#c4788e]">{a.eyebrow[lang]}</span>
            </div>
            <h2
              className="font-serif text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-3"
              dangerouslySetInnerHTML={{ __html: a.title[lang] }}
            />
            <p className="text-[#5a4e6a] text-sm font-light mb-8">{a.sub[lang]}</p>
            <div className="space-y-3">
              <p className="text-[#5a4e6a] text-sm font-light leading-relaxed">{a.p1[lang]}</p>
              <p className="text-[#5a4e6a] text-sm font-light leading-relaxed">{a.p2[lang]}</p>
              <p className="text-[#5a4e6a] text-sm font-light leading-relaxed">{a.p3[lang]}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "🎓", label: lang === "tr" ? "Eğitim" : "Education", value: lang === "tr" ? "Maltepe Üni. · 2025" : "Maltepe Uni. · 2025" },
              { icon: "💼", label: lang === "tr" ? "Deneyim" : "Experience", value: "Junior QA @ Cross4Cloud" },
              { icon: "📍", label: lang === "tr" ? "Konum" : "Location", value: "İstanbul" },
              { icon: "🌍", label: lang === "tr" ? "Diller" : "Languages", value: lang === "tr" ? "Türkçe · İngilizce" : "Turkish · English" },
            ].map((fact) => (
              <div key={fact.label} className="p-4 rounded-2xl border border-[#e8dff0] bg-[#faf7f4] hover:border-[#ddd0f5] hover:-translate-y-0.5 transition-all">
                <span className="text-lg mb-1 block">{fact.icon}</span>
                <div className="text-[11px] text-[#5a4e6a] uppercase tracking-wide font-medium mb-1">{fact.label}</div>
                <div className="text-sm font-medium">{fact.value}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
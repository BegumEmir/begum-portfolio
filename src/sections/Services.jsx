import { content } from "../data/content"

export default function Services({ lang }) {
  const s = content.services

  return (
    <section id="services" className="max-w-6xl mx-auto px-4 md:px-12 py-12 md:py-24">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-6 h-[1.5px] bg-[#c4788e]"></span>
        <span className="text-[11px] font-semibold tracking-[.2em] uppercase text-[#c4788e]">
          {s.eyebrow[lang]}
        </span>
      </div>
      <h2
        className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-12"
        dangerouslySetInnerHTML={{ __html: s.title[lang] }}
      />

      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {s.packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`rounded-2xl border p-6 flex flex-col transition-all ${
              pkg.highlight
                ? "border-[#8b6bbf] bg-[#ddd0f5]/20 shadow-lg scale-105"
                : "border-[#e8dff0] bg-white hover:border-[#ddd0f5]"
            }`}
          >
            {pkg.highlight && (
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#8b6bbf] mb-3">
                ⭐ {lang === "tr" ? "Önerilen" : "Recommended"}
              </span>
            )}
            <div className="text-3xl mb-2">{pkg.icon}</div>
            <div className="font-serif text-xl font-bold mb-1">{pkg.name}</div>
            <div className="text-[#5a4e6a] text-xs font-light mb-4">{pkg.tagline[lang]}</div>
            <div className="text-3xl font-bold text-[#1c1424] mb-6">{pkg.price}</div>
            <ul className="space-y-2 flex-1 mb-6">
              {pkg.features[lang].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#5a4e6a]">
                  <span className="text-[#4a8c68] mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>
            {pkg.extra && (
              <div className="text-xs text-[#8b6bbf] font-medium mb-4">{pkg.extra[lang]}</div>
            )}
            <a
            href="#contact"
            onClick={() => {
              setTimeout(() => {
                const el = document.getElementById('subject-input')
                if (el) el.value = lang === "tr"
                  ? `${pkg.name} paketi hakkında bilgi almak istiyorum`
                  : `I'd like to know more about the ${pkg.name} package`
              }, 500)
            }}
              className={`text-center py-2.5 rounded-xl text-sm font-medium transition-all ${
                pkg.highlight
                  ? "bg-[#8b6bbf] text-white hover:bg-[#7a5aaf]"
                  : "border border-[#e8dff0] text-[#1c1424] hover:border-[#8b6bbf] hover:text-[#8b6bbf]"
              }`}
            >
              {lang === "tr" ? "İletişime Geç →" : "Get in Touch →"}
            </a>
          </div>
        ))}
      </div>

      {/* Bakım Paketi */}
      <div className="border border-[#e8dff0] rounded-2xl p-6 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-3xl">🔧</div>
          <div>
            <div className="font-serif text-xl font-bold mb-1">{s.maintenance.title[lang]}</div>
            <div className="flex gap-3">
              {s.maintenance.features[lang].map((f) => (
                <span key={f} className="text-xs text-[#5a4e6a] flex items-center gap-1">
                  <span className="text-[#4a8c68]">✓</span> {f}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-[#1c1424] mb-2">{s.maintenance.price}</div>
          <a href="#contact" className="text-sm font-medium text-[#8b6bbf] hover:underline">
            {lang === "tr" ? "İletişime Geç →" : "Get in Touch →"}
          </a>
        </div>
      </div>

      {/* Karşılaştırma Tablosu */}
      <div className="mt-12">
        <h3 className="font-serif text-2xl font-bold mb-6 text-center">
          {lang === "tr" ? "Detaylı Karşılaştırma" : "Detailed Comparison"}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-[#e8dff0]">
                <th className="text-left py-3 px-4 font-semibold text-[#5a4e6a]">{lang === "tr" ? "Özellik" : "Feature"}</th>
                <th className="text-center py-3 px-4 font-semibold text-[#5a4e6a]">🌱 Starter</th>
                <th className="text-center py-3 px-4 font-semibold text-[#8b6bbf]">🌿 Professional</th>
                <th className="text-center py-3 px-4 font-semibold text-[#5a4e6a]">🌳 Business</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: { tr: "Mobil uyumlu tasarım", en: "Mobile friendly design" }, s: true, p: true, b: true },
                { feature: { tr: "Çok sayfalı site", en: "Multi-page site" }, s: false, p: true, b: true },
                { feature: { tr: "TR/EN dil desteği", en: "TR/EN language" }, s: false, p: true, b: true },
                { feature: { tr: "SEO optimizasyonu", en: "SEO optimization" }, s: false, p: true, b: true },
                { feature: { tr: "Google Analytics", en: "Google Analytics" }, s: false, p: true, b: true },
                { feature: { tr: "Domain kurulumu", en: "Domain setup" }, s: false, p: true, b: true },
                { feature: { tr: "Sanity CMS", en: "Sanity CMS" }, s: false, p: false, b: true },
                { feature: { tr: "Revizyon hakkı", en: "Revision" }, s: false, p: false, b: true },
                { feature: { tr: "Hosting takibi", en: "Hosting monitoring" }, s: false, p: false, b: true },
                { feature: { tr: "Destek süresi", en: "Support" }, s: { tr: "1 ay", en: "1 month" }, p: { tr: "3 ay", en: "3 months" }, b: { tr: "6 ay", en: "6 months" } },
              ].map((row, i) => (
                <tr key={i} className={`border-b border-[#e8dff0] ${i % 2 === 0 ? "bg-[#faf7f4]" : "bg-white"}`}>
                  <td className="py-3 px-4 text-[#5a4e6a]">{row.feature[lang]}</td>
                  {[row.s, row.p, row.b].map((val, j) => (
                    <td key={j} className="py-3 px-4 text-center">
                      {val === true ? <span className="text-[#4a8c68] font-bold">✓</span>
                        : val === false ? <span className="text-[#c4788e]">✗</span>
                        : <span className="text-[#5a4e6a] text-xs">{val[lang]}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
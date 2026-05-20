import { useState } from "react"
import { skills } from "../data/skills"

export default function Skills({ lang }) {
  const [active, setActive] = useState("frontend")
  const panel = skills[active]

  return (
    <section id="skills" className="bg-white border-t border-b border-[#e8dff0]">
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-12 md:py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-[1.5px] bg-[#4a8c68]"></span>
          <span className="text-[11px] font-semibold tracking-[.2em] uppercase text-[#4a8c68]">
            {lang === "tr" ? "Beceriler" : "Skills"}
          </span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-12">
          {lang === "tr" ? <><em>Araç</em> kutum.</> : <>My <em>toolkit.</em></>}
        </h2>

        <div className="flex flex-col gap-10 md:grid md:grid-cols-[200px_1fr]">
          <div className="flex flex-col gap-1">
            {Object.entries(skills).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                  active === key
                    ? "bg-[#ddd0f5] text-[#8b6bbf] border border-[#8b6bbf]/25 font-semibold"
                    : "text-[#5a4e6a] hover:bg-[#faf7f4]"
                }`}
              >
                {val.icon} {val.label[lang]}
              </button>
            ))}
          </div>

          <div>
            <div className="font-serif text-2xl font-bold mb-2">{panel.title[lang]}</div>
            <p className="text-sm text-[#5a4e6a] font-light mb-6">{panel.desc[lang]}</p>
            <div className="flex flex-wrap gap-2.5">
              {panel.items.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#faf7f4] border border-[#e8dff0] text-sm font-medium hover:border-[#8b6bbf] hover:bg-[#ddd0f5] hover:text-[#8b6bbf] transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
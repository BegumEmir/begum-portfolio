import { content } from "../data/content"
import { useState } from "react"
 
export default function Navbar({ lang, setLang }) {
  const { links } = content.nav
  const [menuOpen, setMenuOpen] = useState(false)
 
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f4]/95 backdrop-blur-md border-b border-[#e8dff0]">
      <div className="flex items-center justify-between px-6 md:px-12 h-16">
        <div className="flex items-center gap-7">
          <a href="#hero" className="font-serif text-[17px] font-bold text-[#1c1424]">Begüm Emir</a>
          <nav className="hidden md:flex gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} target={link.download ? "_blank" : undefined} rel={link.download ? "noopener noreferrer" : undefined} className="text-[#5a4e6a] text-[13px] px-3 py-1.5 rounded-lg hover:bg-[#ddd0f5] hover:text-[#8b6bbf] transition-all">{link[lang]}</a>
            ))}
          </nav>
        </div>
 
        <div className="flex items-center gap-3">
          <div className="flex border border-[#e8dff0] rounded-lg overflow-hidden">
            <button onClick={() => setLang("tr")} className={`px-3 py-1.5 text-xs font-semibold transition-all ${lang === "tr" ? "bg-[#8b6bbf] text-white" : "text-[#5a4e6a] hover:bg-[#ddd0f5]"}`}>TR</button>
            <button onClick={() => setLang("en")} className={`px-3 py-1.5 text-xs font-semibold transition-all ${lang === "en" ? "bg-[#8b6bbf] text-white" : "text-[#5a4e6a] hover:bg-[#ddd0f5]"}`}>EN</button>
          </div>
 
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menü"
          >
            <span className={`block w-5 h-px bg-[#1c1424] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-[#1c1424] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#1c1424] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>
 
      {/* Mobil menü */}
      {menuOpen && (
        <div className="md:hidden bg-[#faf7f4] border-t border-[#e8dff0] px-6 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.download ? "_blank" : undefined}
              rel={link.download ? "noopener noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}
              className="text-[#5a4e6a] text-sm px-3 py-2 rounded-lg hover:bg-[#ddd0f5] hover:text-[#8b6bbf] transition-all"
            >
              {link[lang]}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
import { content } from "../data/content"

export default function Navbar({ lang, setLang }) {
  const { links } = content.nav
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-16 bg-[#faf7f4]/95 backdrop-blur-md border-b border-[#e8dff0]">
      <div className="flex items-center gap-7">
        <a href="#hero" className="font-serif text-[17px] font-bold text-[#1c1424]">Begüm Emir</a>
        <nav className="hidden md:flex gap-1">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[#5a4e6a] text-[13px] px-3 py-1.5 rounded-lg hover:bg-[#ddd0f5] hover:text-[#8b6bbf] transition-all">{link[lang]}</a>
          ))}
        </nav>
      </div>
      <div className="flex border border-[#e8dff0] rounded-lg overflow-hidden">
        <button onClick={() => setLang("tr")} className={`px-3 py-1.5 text-xs font-semibold transition-all ${lang === "tr" ? "bg-[#8b6bbf] text-white" : "text-[#5a4e6a] hover:bg-[#ddd0f5]"}`}>TR</button>
        <button onClick={() => setLang("en")} className={`px-3 py-1.5 text-xs font-semibold transition-all ${lang === "en" ? "bg-[#8b6bbf] text-white" : "text-[#5a4e6a] hover:bg-[#ddd0f5]"}`}>EN</button>
      </div>
    </header>
  )
}

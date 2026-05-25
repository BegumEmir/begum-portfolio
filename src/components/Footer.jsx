export default function Footer({ lang }) {
  return (
    <footer className="border-t border-[#e8dff0] bg-[#faf7f4]">
      <div className="max-w-6xl mx-auto px-12 py-6 flex items-center justify-between">
        <div className="text-sm text-[#5a4e6a]">
          © 2026 <span className="font-serif font-bold text-[#1c1424]">Begüm Emir</span>{" "}
          — {lang === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
        </div>
        <div className="text-xs text-[#5a4e6a]">
          {lang === "tr" ? "İstanbul, Türkiye 🌸" : "Istanbul, Turkey 🌸"}
        </div>
      </div>
    </footer>
  )
}
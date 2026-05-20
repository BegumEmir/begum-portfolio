import { content } from "../data/content"
import { useState } from "react"

export default function Contact({ lang }) {
  const c = content.contact
  const [status, setStatus] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("https://formspree.io/f/xbdbrenz", {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("success")
        e.target.reset()
        setTimeout(() => setStatus(""), 4000)
      } else throw new Error()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="bg-white border-t border-[#e8dff0]">
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1.5px] bg-[#8b6bbf]"></span>
              <span className="text-[11px] font-semibold tracking-[.2em] uppercase text-[#8b6bbf]">{c.eyebrow[lang]}</span>
            </div>
            <h2
              className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-6"
              dangerouslySetInnerHTML={{ __html: c.title[lang] }}
            />
            <p className="text-[#5a4e6a] text-sm font-light leading-relaxed mb-8">{c.desc[lang]}</p>

            <div className="flex flex-col gap-3">
              {[
                { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/begüm-e", href: "https://www.linkedin.com/in/beg%C3%BCm-e-4513a3232/", bg: "bg-blue-50" },
                { icon: "✉️", label: lang === "tr" ? "E-posta" : "Email", value: "begumemir17@gmail.com", href: "mailto:begumemir17@gmail.com", bg: "bg-[#f0c4d0]/40" },
                { icon: "📄", label: lang === "tr" ? "CV İndir" : "Download CV", value: "Begum_Emir_CV.pdf", href: "/Begum_Emir_CV.pdf", bg: "bg-[#cde8d8]/50" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                   download={link.href === "/Begum_Emir_CV.pdf" ? "Begum_Emir_CV.pdf" : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#e8dff0] bg-[#faf7f4] hover:border-[#8b6bbf] hover:bg-[#ddd0f5] hover:translate-x-1 transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl ${link.bg} flex items-center justify-center text-lg flex-shrink-0`}>
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[11px] text-[#5a4e6a] uppercase tracking-wide font-medium">{link.label}</div>
                    <div className="text-sm font-medium">{link.value}</div>
                  </div>
                  <span className="ml-auto text-[#5a4e6a]">↗</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-[#5a4e6a] uppercase tracking-wide">
                  {lang === "tr" ? "Adınız" : "Your Name"}
                </label>
                <input name="name" required placeholder=""
                  className="bg-[#faf7f4] border border-[#e8dff0] rounded-xl px-3.5 py-3 text-sm outline-none focus:border-[#8b6bbf] focus:ring-2 focus:ring-[#8b6bbf]/10 transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-[#5a4e6a] uppercase tracking-wide">
                  {lang === "tr" ? "E-posta" : "Email"}
                </label>
                <input name="email" type="email" required placeholder=""
                  className="bg-[#faf7f4] border border-[#e8dff0] rounded-xl px-3.5 py-3 text-sm outline-none focus:border-[#8b6bbf] focus:ring-2 focus:ring-[#8b6bbf]/10 transition-all" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[#5a4e6a] uppercase tracking-wide">
                {lang === "tr" ? "Konu" : "Subject"}
              </label>
              <input id="subject-input" name="subject" placeholder={lang === "tr" ? "Web sitesi yaptırmak istiyorum" : "I'd like a website"}
                className="bg-[#faf7f4] border border-[#e8dff0] rounded-xl px-3.5 py-3 text-sm outline-none focus:border-[#8b6bbf] focus:ring-2 focus:ring-[#8b6bbf]/10 transition-all" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[#5a4e6a] uppercase tracking-wide">
                {lang === "tr" ? "Mesajınız" : "Message"}
              </label>
              <textarea name="message" required rows={5} placeholder={lang === "tr" ? "Projenizden bahsedin..." : "Tell me about your project..."}
                className="bg-[#faf7f4] border border-[#e8dff0] rounded-xl px-3.5 py-3 text-sm outline-none focus:border-[#8b6bbf] focus:ring-2 focus:ring-[#8b6bbf]/10 transition-all resize-none" />
            </div>
            <button type="submit" disabled={status === "sending"}
              className="w-full py-3.5 bg-[#1c1424] text-white rounded-xl text-sm font-medium hover:bg-[#8b6bbf] transition-all disabled:opacity-60">
              {status === "sending"
                ? (lang === "tr" ? "Gönderiliyor..." : "Sending...")
                : status === "success"
                ? (lang === "tr" ? "✓ Gönderildi!" : "✓ Sent!")
                : (lang === "tr" ? "Mesaj Gönder →" : "Send Message →")}
            </button>
            {status === "error" && (
              <p className="text-center text-sm text-[#c4788e]">
                {lang === "tr" ? "Hata oluştu, tekrar dene." : "Something went wrong, try again."}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}
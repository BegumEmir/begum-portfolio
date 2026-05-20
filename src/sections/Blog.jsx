const posts = [
  {
    id: 1,
    cat: { tr: "QA · Mayıs 2025", en: "QA · May 2025" },
    title: { tr: "Page Object Model nedir?", en: "What is Page Object Model?" },
    excerpt: { tr: "Test kodunu sürdürülebilir yapmak için POM mimarisini nasıl uyguladım.", en: "How I applied POM to make test code maintainable." },
    time: { tr: "5 dk", en: "5 min" },
  },
  {
    id: 2,
    cat: { tr: "React Native · Nisan 2025", en: "React Native · April 2025" },
    title: { tr: "AsyncStorage ile kalıcı veri", en: "Persistent data with AsyncStorage" },
    excerpt: { tr: "Pea Game'de ruh hali verisini nasıl sakladım ve tuzaklardan nasıl kaçındım.", en: "How I stored mood data in Pea Game and the pitfalls I avoided." },
    time: { tr: "7 dk", en: "7 min" },
  },
  {
    id: 3,
    cat: { tr: "Kariyer · Mart 2025", en: "Career · March 2025" },
    title: { tr: "Yeni mezun olarak QA'e girmek", en: "Breaking into QA as a graduate" },
    excerpt: { tr: "Stajdan Junior'lığa geçiş sürecimde öğrendiklerim.", en: "What I learned moving from intern to Junior QA." },
    time: { tr: "6 dk", en: "6 min" },
  },
]

export default function Blog({ lang }) {
  return (
    <section id="blog" className="bg-white border-t border-b border-[#e8dff0]">
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-12 md:py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-[1.5px] bg-[#c4788e]"></span>
          <span className="text-[11px] font-semibold tracking-[.2em] uppercase text-[#c4788e]">
            Blog
          </span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-3">
          {lang === "tr" ? <><em>Yazılarım.</em></> : <>My <em>writing.</em></>}
        </h2>
        <p className="text-[#5a4e6a] text-sm font-light mb-12">
          {lang === "tr" ? "Öğrendiklerimi paylaşıyorum." : "Sharing what I learn."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post) => (
            <a
              key={post.id}
              href="#"
              className="rounded-2xl border border-[#e8dff0] bg-white p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-[#f0c4d0] transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold tracking-[.12em] uppercase text-[#c4788e]">
                  {post.cat[lang]}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#f5f0ff] text-[#8b6bbf] border border-[#ddd0f5]">
                  {lang === "tr" ? "Yakında" : "Soon"}
                </span>
              </div>
              <div className="font-serif text-lg font-bold leading-snug mb-2">
                {post.title[lang]}
              </div>
              <p className="text-sm text-[#5a4e6a] font-light leading-relaxed flex-1">
                {post.excerpt[lang]}
              </p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#e8dff0]">
                <span className="text-xs text-[#5a4e6a]">{post.time[lang]}</span>
                <span className="text-xs font-semibold text-[#8b6bbf]">
                  {lang === "tr" ? "Oku →" : "Read →"}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

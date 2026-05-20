export const content = {
  nav: {
    links: [
      { href: "#about", tr: "Hakkımda", en: "About" },
      { href: "#projects", tr: "Projeler", en: "Projects" },
      { href: "#skills", tr: "Beceriler", en: "Skills" },
      { href: "#services", tr: "Hizmetler", en: "Services" },
      { href: "#contact", tr: "İletişim", en: "Contact" },
    ]
  },
  hero: {
    eyebrow: { tr: "Web Geliştirici & QA Engineer", en: "Web Developer & QA Engineer" },
    title: { tr: "Güzel siteler.<br><em>Hatasız</em> kod.", en: "Beautiful sites.<br><em>Flawless</em> code." },
    desc: { tr: "İşletmeniz için modern, hızlı ve güvenilir web siteleri yapıyorum. Geliştirici ve QA bakış açısını bir arada sunuyorum.", en: "I build modern, fast and reliable websites for businesses. Developer and QA perspective combined." },
    cta1: { tr: "Projelerimi Gör →", en: "See My Work →" },
    cta2: { tr: "İletişime Geç", en: "Get in Touch" },
  },
  about: {
    eyebrow: { tr: "Hakkımda", en: "About Me" },
    title: { tr: "Kod yazan,<br><em>hata yakalayan.</em>", en: "I build it.<br><em>Then I break it.</em>" },
    sub: { tr: "Geliştirici ve test mühendisi olarak çift bakış açısı.", en: "Dual perspective as a developer and QA engineer." },
    p1: { tr: "Maltepe Üniversitesi Bilgisayar Mühendisliği mezunuyum. Web ve mobil uygulamalar geliştiriyorum; işletmeler için sıfırdan tasarlayıp canlıya alıyorum.", en: "Maltepe University Computer Engineering graduate. I build web and mobile applications, taking projects from design to deployment." },
    p2: { 
        tr: "QA mühendisi olarak Agile ortamında test senaryoları hazırladım, Jira ile bug takibi yaptım ve regresyon testleri yürüttüm.",
        en: "As a QA engineer I wrote test scenarios in Agile, managed bugs in Jira, and conducted regression testing."
        },
  },
  contact: {
    eyebrow: { tr: "İletişim", en: "Contact" },
    title: { tr: "Birlikte<br><em>çalışalım.</em>", en: "Let's work<br><em>together.</em>" },
    desc: { tr: "Web sitesi veya test otomasyonu için ulaşın. 24 saat içinde dönüyorum.", en: "Reach out for web dev or QA work. I respond within 24 hours." },
  },
  services: {
    eyebrow: { tr: "Hizmetler", en: "Services" },
    title: { tr: "Paketler &<br><em>fiyatlar.</em>", en: "Packages &<br><em>pricing.</em>" },
    packages: [
      {
        icon: "🌱",
        name: "Starter",
        price: "5.500₺",
        tagline: { tr: "Dijitale ilk adım", en: "Your first step online" },
        features: {
        tr: ["1 sayfalık modern site", "Hakkımda, Projeler, İletişim bölümleri", "İletişim formu", "Mobil uyumlu tasarım", "Hızlı yükleme & deploy", "1 ay destek"],
        en: ["1-page modern site", "About, Projects, Contact sections", "Contact form", "Mobile friendly design", "Fast loading & deploy", "1 month support"]
        },
        highlight: false,
        extra: { tr: "+ Domain kurulumu 1000₺", en: "+ Domain setup 1000₺" }
      },
      {
        icon: "🌿",
        name: "Professional",
        price: "12.000₺",
        tagline: { tr: "Fark yaratan portföy", en: "A portfolio that stands out" },
        features: {
          tr: ["Çok sayfalı site", "TR/EN dil desteği", "SEO optimizasyonu", "Google Analytics", "Domain kurulumu dahil", "3 ay destek"],
          en: ["Multi-page site", "TR/EN language support", "SEO optimization", "Google Analytics", "Domain setup included", "3 months support"]
        },
        highlight: true,
        extra: { tr: "+ Sanity CMS 2.500₺", en: "+ Sanity CMS 2.500₺" }
      },
      {
        icon: "🌳",
        name: "Business",
        price: "18.000₺",
        tagline: { tr: "Tam donanımlı", en: "Fully equipped" },
        features: {
          tr: ["Her şey dahil", "Sanity CMS paneli", "Gelişmiş SEO", "Google Analytics", "1 revizyon hakkı", "6 ay destek", "Hosting takibi"],
          en: ["Everything included", "Sanity CMS panel", "Advanced SEO", "Google Analytics", "1 revision", "6 months support", "Hosting monitoring"]
        },
        highlight: false,
        extra: null
      }
    ],
    maintenance: {
      price: "1000₺/ay",
      title: { tr: "Bakım Paketi", en: "Maintenance Package" },
      features: {
        tr: ["İçerik güncellemeleri", "Teknik destek", "Domain/hosting takibi"],
        en: ["Content updates", "Technical support", "Domain/hosting monitoring"]
      }
    }
  }
}

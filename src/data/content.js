export const content = {
  nav: {
    links: [
      { href: "#about", tr: "Hakkımda", en: "About" },
      { href: "#projects", tr: "Projeler", en: "Projects" },
      { href: "#skills", tr: "Beceriler", en: "Skills" },
      { href: "#services", tr: "Hizmetler", en: "Services" },
      { href: "#contact", tr: "İletişim", en: "Contact" },
      { href: "/Begum_Emir_CV.pdf", tr: "CV", en: "CV", download: true },
    ]
  },
  hero: {
      eyebrow: { tr: "Web Geliştirici & QA Engineer", en: "Web Developer & QA Engineer" },
      title: { tr: "Modern siteler.<br><em>İşinizi büyütür.</em>", en: "Modern websites.<br><em>That grow your business.</em>" },
      desc: { tr: "İşletmeniz için hızlı, şık ve güvenilir web siteleri yapıyorum. Tasarımdan yayına tüm süreci yönetiyorum.", en: "I build fast, beautiful and reliable websites for businesses — managing the entire process from design to deployment." },
      cta1: { tr: "Projelerimi Gör →", en: "See My Work →" },
      cta2: { tr: "İletişime Geç", en: "Get in Touch" },
    },
    about: {
      eyebrow: { tr: "Hakkımda", en: "About Me" },
      title: { tr: "Tasarımdan yayına,<br><em>ben yönetiyorum.</em>", en: "From design to launch,<br><em>I handle it all.</em>" },
      sub: { tr: "Web geliştirici & QA mühendisi.", en: "Web developer & QA engineer." },
      p1: { tr: "İşletmeniz için sıfırdan web sitesi tasarlayıp yayına alıyorum. Domain kurulumu, SEO, analytics entegrasyonu — tasarımdan deploy'a her adımı ben yönetiyorum.", en: "I design and launch websites for businesses from scratch. Domain setup, SEO, analytics integration — I manage every step from design to deployment." },
      p2: { tr: "Bilgisayar Mühendisliği mezunuyum. QA mühendisi olarak profesyonel deneyimim var — geliştirdiğim projeleri hem geliştirici hem test uzmanı gözüyle değerlendiriyorum. Bu bakış açısı, daha az hata ve daha kaliteli ürün anlamına geliyor.", en: "Computer Engineering graduate with professional QA experience — I evaluate everything I build through both a developer and tester lens. This means fewer bugs and better quality." },
      p3: { tr: "QA veya frontend geliştirici pozisyonlarında iş fırsatlarına açığım.", en: "Open to opportunities as a QA engineer or frontend developer." },
    },
  contact: {
    eyebrow: { tr: "İletişim", en: "Contact" },
    title: { tr: "Birlikte<br><em>çalışalım.</em>", en: "Let's work<br><em>together.</em>" },
    desc: {
      tr: "Benimle çalışmak istiyorsanız ulaşın.",
      en: "Feel free to reach out if you'd like to work together."
    },
  },
  services: {
    eyebrow: { tr: "Hizmetler", en: "Services" },
    title: {
      tr: "Paketler & <em>hizmetler.</em>",
      en: "Packages & <em>services.</em>"
    },
packages: [
  {
    icon: "🌱",
    name: "Starter",
    price: "8.000₺",
    tagline: { tr: "Dijitale ilk adım", en: "Your first step online" },
    features: {
      tr: ["1 sayfalık modern site", "İşletmenize özel bölümler", "İletişim formu", "Mobil uyumlu tasarım", "Domain kurulumu dahil", "SEO, Google Analytics & Search Console", "Hızlı yükleme & deploy"],
      en: ["1-page modern site", "Custom sections for your business", "Contact form", "Mobile friendly design", "Domain setup included", "SEO, Google Analytics & Search Console", "Fast loading & deploy"]
    },
    highlight: false,
    extra: null
  },
  {
    icon: "🌿",
    name: "Professional",
    price: "13.000₺",
    tagline: { tr: "Yönetilebilir site", en: "Manageable website" },
    features: {
      tr: ["Starter paketteki her şey", "Çok sayfalı site", "İçerik yönetim paneli (Sanity CMS)", "Blog / Haber yönetimi", "Gelişmiş SEO optimizasyonu", "Özel animasyonlar & tasarım"],
      en: ["Everything in Starter", "Multi-page site", "Content management panel (Sanity CMS)", "Blog / News management", "Advanced SEO optimization", "Custom animations & design"]
    },
    highlight: false,
    extra: null
  },
  {
    icon: "🌳",
    name: "Business",
    price: "18.000₺",
    tagline: { tr: "Tam donanımlı", en: "Fully equipped" },
    features: {
      tr: ["Professional paketteki her şey", "Özel e-posta kurulumu (info@isletme.com)", "Google İşletme Profili kurulumu", "1 yıl ücretsiz bakım paketi dahil", "Aylık performans raporu", "7/24 WhatsApp desteği"],
      en: ["Everything in Professional", "Custom email setup (info@business.com)", "Google Business Profile setup", "1 year free maintenance included", "Monthly performance report", "7/24 WhatsApp support"]
    },
    highlight: true,
    extra: null
  }
],
    maintenance: {
      price: "2.400₺/yıl",
      title: { tr: "Bakım Paketi", en: "Maintenance Package" },
      features: {
        tr: [
          "İçerik güncelleme & düzenleme",
          "Domain yenileme takibi",
          "Site hız & performans kontrolü",
          "Teknik destek (e-posta)",
        ],
        en: [
          "Content updates & edits",
          "Domain renewal tracking",
          "Site speed & performance check",
          "Technical support (email)",
        ]
      },
      note: {
        tr: "Bakım paketi almak zorunda değilsiniz. İsteğe bağlı olarak içerik yönetim paneli kullanımı eğitimi verilir.",
        en: "Maintenance package is optional. Training on how to use the content management panel is available upon request."
      },
    },
    promoNote: {
      tr: "📩 Projeniz için ücretsiz teklif alın — şu an yeni müşterilere özel fiyatlandırma sunuyoruz.",
      en: "📩 Get a free quote for your project — we currently offer special pricing for new clients."
    },
    generalNote: {
      tr: "Domain yıllık yenileme ücreti müşteriye aittir. Ödeme, müşterinin kendi kartı ile yapılır; teknik kurulum ve yönlendirme tarafımdan gerçekleştirilir.",
      en: "Annual domain renewal fee belongs to the client. Payment is made with the client's own card; technical setup and configuration is handled by me."
    }
  }
}
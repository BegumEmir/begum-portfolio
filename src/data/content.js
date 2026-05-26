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
    title: { tr: "Güzel siteler.<br><em>Hatasız</em> kod.", en: "Beautiful sites.<br><em>Flawless</em> code." },
    desc: { tr: "İşletmeniz için modern, hızlı ve güvenilir web siteleri yapıyorum. Geliştirici ve QA bakış açısını bir arada sunuyorum.", en: "I build modern, fast and reliable websites for businesses. Developer and QA perspective combined." },
    cta1: { tr: "Projelerimi Gör →", en: "See My Work →" },
    cta2: { tr: "İletişime Geç", en: "Get in Touch" },
  },
  about: {
    eyebrow: { tr: "Hakkımda", en: "About Me" },
    title: { tr: "Kod yazan,<br><em>hata yakalayan.</em>", en: "I build it.<br><em>Then I break it.</em>" },
    sub: { tr: "Geliştirici ve test mühendisi olarak çift bakış açısı.", en: "Dual perspective as a developer and QA engineer." },
    p1: { tr: "İşletmeler için sıfırdan web ve mobil uygulamalar geliştirip canlıya alıyorum. Tasarımdan deploy'a tüm süreci yönetiyorum.", en: "I build web and mobile applications for businesses — from design to deployment, I manage the entire process. Computer Engineering graduate. I build web and mobile applications, taking projects from design to deployment." },
    p2: {
      tr: "Aynı zamanda QA mühendisiyim — yaptığım işi hem geliştirici hem test uzmanı gözüyle değerlendiriyorum. Bu çift bakış açısı, daha az hata ve daha kaliteli ürün anlamına geliyor.",
      en: "I'm also a QA engineer — I evaluate what I build through both a developer and tester lens. This dual perspective means fewer bugs and better quality products."
    },
    p3: {
      tr: "QA mühendisi veya web geliştirici pozisyonlarında iş fırsatlarına açığım.",
      en: "Open to opportunities as a QA engineer or web developer."
    },
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
    title: { tr: "Paketler &<br><em>fiyatlar.</em>", en: "Packages &<br><em>pricing.</em>" },
    packages: [
      {
        icon: "🌱",
        name: "Starter",
        price: "6.500₺",
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
        price: "10.000₺",
        tagline: { tr: "Yönetilebilir site", en: "Manageable website" },
        features: {
          tr: ["Çok sayfalı site", "İçerik yönetim paneli", "SEO, Google Analytics & Search Console", "Domain kurulumu dahil"],
          en: ["Multi-page site", "Content management panel", "SEO, Google Analytics & Search Console", "Domain setup included"]
        },
        highlight: false,
        extra: null
      },
      {
        icon: "🌳",
        name: "Business",
        price: "12.000₺",
        tagline: { tr: "Tam donanımlı", en: "Fully equipped" },
        features: {
          tr: ["Professional paketteki her şey", "Google Maps entegrasyonu", "Google İşletme Profili kurulumu"],
          en: ["Everything in Professional", "Google Maps integration", "Google Business Profile setup"]
        },
        highlight: true,
        extra: null
      }
    ],
    maintenance: {
      price: "1.200₺/yıl",
      title: { tr: "Bakım Paketi", en: "Maintenance Package" },
      features: {
        tr: ["Haber, duyuru ve galeri ekleme/düzenleme", "Domain yenileme hatırlatması"],
        en: ["News, announcement and gallery updates", "Domain renewal reminders"]
      },
      note: {
        tr: "Bakım paketi almak zorunda değilsiniz. İsteğe bağlı olarak içerik yönetim paneli kullanımı eğitimi verilir.",
        en: "Maintenance package is optional. Training on how to use the content management panel is available upon request."
      },
    },
    generalNote: {
      tr: "Domain yıllık yenileme ücreti müşteriye aittir. Ödeme, müşterinin kendi kartı ile yapılır; teknik kurulum ve yönlendirme tarafımdan gerçekleştirilir.",
      en: "Annual domain renewal fee belongs to the client. Payment is made with the client's own card; technical setup and configuration is handled by me."
    }
  }
}
export const projects = [
  {
    id: 1,
    emoji: "🌾",
    name: "Tarımsal Kooperatif Web Siteleri",
    tags: ["Next.js", "Vite", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel", "Cloudflare", "Netlify"],
    description: {
      tr: "Çanakkale bölgesindeki tarımsal kooperatifler için uçtan uca web sitesi çözümü: içerik yönetimi, alan adı kurulumu, marka kimliği ve teslim sürecinin tamamını yönettim.",
      en: "End-to-end website solution for agricultural cooperatives in the Çanakkale region: I managed content management, domain setup, brand identity and the entire delivery process."
    },
    details: {
      tr: "Tarımsal kooperatifler için uçtan uca web sitesi çözümü geliştirdim. Kocayayla ve Yaykın kooperatiflerini Vite ile, diğer siteleri (Taban, Araovacık, Evciler, Yeşilköy, Türkmenli) Next.js ile geliştirdim; hepsinde Sanity CMS kullandım. Tüm sitelerde Google Search Console ve SEO ayarlarını yaptım, isteyen kooperatiflere Google İşletme Profili ve Analytics de kurdum. Bazı kooperatiflerin logo tasarımını ben üstlendim. Broşür isteyenlere tek sayfalık ve üç parça katlanan broşür tasarımı hazırladım.\n\nİçerik tarafında da aktif rol aldım: kurum bilgilerini ben derledim, haber/galeri/duyuru gibi güncellenebilir alanlar için başlangıç içeriklerini ben ürettim ve isteyen kooperatiflere hâlâ içerik güncellemesinde destek oluyorum — ama bu bana bağlı değil, isteyenler Sanity Studio üzerinden kendi içeriklerini de yönetebiliyor. Bunu kolaylaştırmak için Türkçe bir Sanity CMS kullanım kılavuzu hazırladım.\n\nTeknik yönetim tarafında DNS ayarlarını kurdum ve siteler kendi Vercel hesabım altında yayında; deploy, environment variable ve build ayarları gibi teknik müdahaleleri ben yönetiyorum. Yıllık alan adı ödemelerini takip edip kooperatiflere faturaları iletiyorum. İsteyen kooperatiflerle birlikte alan adını kendi adlarına da alabiliyoruz; bu durumda faturalandırma onların adına, kendi kartlarıyla, kendi takipleriyle yapılıyor.",
      en: "I developed an end-to-end website solution for agricultural cooperatives. I built Kocayayla and Yaykın with Vite, and the other sites (Taban, Araovacık, Evciler, Yeşilköy, Türkmenli) with Next.js; all of them use Sanity CMS. I set up Google Search Console and SEO for every site, and added Google Business Profile and Analytics for cooperatives that requested it. I also designed the logo for some of the cooperatives, and prepared single-page and tri-fold brochure designs on request.\n\nI took an active role on the content side too: I compiled the institutional information myself, wrote the initial content for updatable sections like news, gallery and announcements, and I still support cooperatives that want help updating their content — though it's not dependent on me, since anyone who wants to can manage their own content through Sanity Studio. To make that easier, I prepared a Turkish-language Sanity CMS user guide.\n\nOn the technical side, I set up the DNS records and the sites are hosted under my own Vercel account; I handle deploys, environment variables and build configuration. I track the annual domain renewal payments and forward the invoices to each cooperative. For cooperatives that prefer it, we can register the domain in their own name instead, in which case billing goes directly to them, on their own card and their own schedule."
    },
    links: [
      { label: "Taban Kooperatifi", url: "https://sstabankoop.org" },
      { label: "Araovacık Kooperatifi", url: "https://araovacikkoop.org" },
      { label: "Evciler Kooperatifi", url: "https://evcilerkoop.org" },
      { label: "Yeşilköy Kooperatifi", url: "https://yesilkoykoop.org" },
      { label: "Kocayayla Kooperatifi", url: "https://kocayaylakooperatifi.org" },
      { label: "Yaykın Kooperatifi", url: "https://yaykinkooperatifi.org" },
      { label: "Türkmenli Kooperatifi", url: "https://turkmenlikooperatifi.org" }
    ],
    github: null,
    live: null,
    color: "from-amber-50 to-orange-100"
  },
  {
    id: 2,
    emoji: "🥗",
    name: "Diyetisyen Selen Dal",
    tags: ["Next.js", "Sanity CMS", "Vercel", "TypeScript", "Tailwind CSS"],
    description: {
      tr: "Blog, danışan yorumları ve randevu akışını tek çatı altında toplayan çok sayfalı bir diyetisyen web sitesi.",
      en: "A multi-page dietitian website bringing together a blog, client testimonials and the appointment flow under one roof."
    },
    details: {
      tr: "Next.js ve Sanity CMS ile çok sayfalı, tam özellikli bir diyetisyen web sitesi geliştirdim: blog sistemi, danışan testimonial'ları, hero slider ve SSS bölümü. Proje, müşterinin kendi başına içerik yönetebilmesi için detaylı bir teslim dokümanıyla tamamlandı.",
      en: "I built a full-featured, multi-page dietitian website with Next.js and Sanity CMS: a blog system, client testimonials, a hero slider and an FAQ section. The project was delivered with a detailed handover document so the client can manage content on their own."
    },
    github: null,
    live: "https://diyetisyenselendal.com",
    color: "from-teal-50 to-cyan-100"
  },
  {
    id: 3,
    emoji: "🧭",
    name: "Artisan Voyager",
    tags: ["Next.js", "Sanity CMS", "next-intl", "TypeScript", "Tailwind CSS"],
    description: {
      tr: "Seyahat, DIY, kitap ve alışveriş bölümlerini bir araya getiren, iki dilli kişisel blog platformu.",
      en: "A bilingual personal blog platform bringing together travel, DIY, books and shop sections."
    },
    details: {
      tr: "Next.js ve Sanity CMS üzerine kurulu, next-intl ile Türkçe/İngilizce yönlendirme desteği sunan kişisel bir blog sitesi geliştirdim. Site; seyahat, DIY, kitaplar, mağaza ve guestbook gibi farklı içerik bölümlerinin yanı sıra entegre bir Spotify müzik oynatıcı ve özel cursor animasyonu içeriyor.",
      en: "I built a personal blog site on Next.js and Sanity CMS, with Turkish/English routing support via next-intl. The site includes distinct content sections — travel, DIY, books, shop and a guestbook — along with an integrated Spotify music player and a custom cursor animation."
    },
    github: null,
    live: "https://artisanvoyager.com",
    color: "from-sky-50 to-indigo-100"
  },
  {
    id: 4,
    emoji: "🫛",
    name: "Pea Game",
    tags: ["React Native", "Expo", "TypeScript"],
    description: {
      tr: "Tamagotchi ilhamlı sanal yoldaş mobil uygulaması. Bezelyeni sula, besle, uyut ve 5 farklı mini oyun oyna. Dükkan, günlük görevler ve rozet sistemi içeriyor.",
      en: "Tamagotchi-style virtual pet app. Water, feed and put your pea to sleep, play 5 mini-games. Includes a shop, daily quests and achievement badges."
    },
    github: null,
    live: null,
    color: "from-purple-50 to-violet-100"
  },
  {
    id: 5,
    emoji: "🧠",
    name: "Smart Learning Platform",
    tags: ["React", "Firebase", "Gemini AI"],
    description: {
      tr: "Mezuniyet projesi. Matematik, Fen ve İngilizce derslerinde konu bazlı quizler, aktiviteler ve egzersiz oyunları sunan eğitim platformu. Gemini AI quiz sonuçlarını analiz ederek öneriler sunar. Boyama, puzzle ve balon patlatma gibi eğlenceli oyunlar da içeriyor.",
      en: "Graduation project. Education platform with topic-based quizzes, activities and exercises for Math, Science and English. Gemini AI analyzes quiz results and gives recommendations. Also includes fun games like coloring, puzzle and balloon pop."
    },
    github: null,
    live: null,
    color: "from-emerald-50 to-green-100"
  },
  {
    id: 6,
    emoji: "🧪",
    name: "QA Automation Suite",
    tags: ["Python", "Selenium", "Pytest", "POM"],
    description: {
      tr: "Python, Selenium ve Pytest ile geliştirdiğim test otomasyon framework'ü. POM mimarisi ve conftest.py ile temiz, yeniden kullanılabilir test yapısı.",
      en: "Test automation framework built with Python, Selenium and Pytest. Clean and reusable test structure using POM architecture and conftest.py fixtures."
    },
    github: null,
    live: null,
    color: "from-pink-50 to-rose-100"
  }
]

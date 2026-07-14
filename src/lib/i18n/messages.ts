import { LOCALE_CODES, DEFAULT_LOCALE } from '../i18n-config.mjs';

export type LocaleCode = (typeof LOCALE_CODES)[number];

export interface LocaleMessages {
  nav: {
    cheats: string;
    products: string;
    blog: string;
    faq: string;
    about: string;
    getAccess: string;
    language: string;
  };
  footer: {
    tagline: string;
    content: string;
    site: string;
    legal: string;
    cheats: string;
    products: string;
    blog: string;
    about: string;
    contact: string;
    faq: string;
    privacy: string;
    terms: string;
    copyright: string;
    disclaimer: string;
  };
  common: {
    skipToContent: string;
  };
  home: {
    browseCheats: string;
    viewProducts: string;
  };
}

export const messages: Record<LocaleCode, LocaleMessages> = {
  en: {
    nav: {
      cheats: 'Cheats',
      products: 'Products',
      blog: 'Blog',
      faq: 'FAQ',
      about: 'About',
      getAccess: 'Get Access',
      language: 'Language',
    },
    footer: {
      tagline:
        'Arc Raiders cheats, premium tools, and raid guides — buy ESP and aimbot tiers, grab Cloud DMA or a spoofer, and get set up for Season 1.',
      content: 'Content',
      site: 'Site',
      legal: 'Legal',
      cheats: 'Cheats',
      products: 'Products',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
      faq: 'FAQ',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      copyright: 'Not affiliated with Embark Studios.',
      disclaimer:
        'Arc Raiders is a trademark of Embark Studios. This site is an independent fan resource and is not endorsed by or affiliated with the developer or publisher.',
    },
    common: { skipToContent: 'Skip to main content' },
    home: { browseCheats: 'Browse Cheats', viewProducts: 'View Products' },
  },
  es: {
    nav: {
      cheats: 'Trucos',
      products: 'Productos',
      blog: 'Blog',
      faq: 'FAQ',
      about: 'Acerca de',
      getAccess: 'Obtener acceso',
      language: 'Idioma',
    },
    footer: {
      tagline:
        'Trucos de Arc Raiders, herramientas premium y guías de incursión — compra ESP y aimbot, Cloud DMA o spoofer y prepárate para la Temporada 1.',
      content: 'Contenido',
      site: 'Sitio',
      legal: 'Legal',
      cheats: 'Trucos',
      products: 'Productos',
      blog: 'Blog',
      about: 'Acerca de',
      contact: 'Contacto',
      faq: 'FAQ',
      privacy: 'Política de privacidad',
      terms: 'Términos de uso',
      copyright: 'No afiliado a Embark Studios.',
      disclaimer:
        'Arc Raiders es una marca de Embark Studios. Este sitio es un recurso independiente y no está respaldado por el desarrollador ni el editor.',
    },
    common: { skipToContent: 'Saltar al contenido principal' },
    home: { browseCheats: 'Ver trucos', viewProducts: 'Ver productos' },
  },
  de: {
    nav: {
      cheats: 'Cheats',
      products: 'Produkte',
      blog: 'Blog',
      faq: 'FAQ',
      about: 'Über uns',
      getAccess: 'Zugang erhalten',
      language: 'Sprache',
    },
    footer: {
      tagline:
        'Arc Raiders Cheats, Premium-Tools und Raid-Guides — ESP- und Aimbot-Stufen, Cloud DMA oder Spoofer für Season 1.',
      content: 'Inhalt',
      site: 'Seite',
      legal: 'Rechtliches',
      cheats: 'Cheats',
      products: 'Produkte',
      blog: 'Blog',
      about: 'Über uns',
      contact: 'Kontakt',
      faq: 'FAQ',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      copyright: 'Nicht mit Embark Studios verbunden.',
      disclaimer:
        'Arc Raiders ist eine Marke von Embark Studios. Diese Seite ist eine unabhängige Fan-Ressource ohne offizielle Verbindung zum Entwickler oder Publisher.',
    },
    common: { skipToContent: 'Zum Hauptinhalt springen' },
    home: { browseCheats: 'Cheats ansehen', viewProducts: 'Produkte ansehen' },
  },
  fr: {
    nav: {
      cheats: 'Triches',
      products: 'Produits',
      blog: 'Blog',
      faq: 'FAQ',
      about: 'À propos',
      getAccess: 'Obtenir l\'accès',
      language: 'Langue',
    },
    footer: {
      tagline:
        'Triches Arc Raiders, outils premium et guides de raid — ESP, aimbot, Cloud DMA ou spoofer pour la Saison 1.',
      content: 'Contenu',
      site: 'Site',
      legal: 'Mentions légales',
      cheats: 'Triches',
      products: 'Produits',
      blog: 'Blog',
      about: 'À propos',
      contact: 'Contact',
      faq: 'FAQ',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      copyright: 'Non affilié à Embark Studios.',
      disclaimer:
        'Arc Raiders est une marque d\'Embark Studios. Ce site est une ressource indépendante non approuvée par le développeur ou l\'éditeur.',
    },
    common: { skipToContent: 'Aller au contenu principal' },
    home: { browseCheats: 'Voir les triches', viewProducts: 'Voir les produits' },
  },
  pt: {
    nav: {
      cheats: 'Cheats',
      products: 'Produtos',
      blog: 'Blog',
      faq: 'FAQ',
      about: 'Sobre',
      getAccess: 'Obter acesso',
      language: 'Idioma',
    },
    footer: {
      tagline:
        'Cheats de Arc Raiders, ferramentas premium e guias de raid — ESP, aimbot, Cloud DMA ou spoofer para a Temporada 1.',
      content: 'Conteúdo',
      site: 'Site',
      legal: 'Legal',
      cheats: 'Cheats',
      products: 'Produtos',
      blog: 'Blog',
      about: 'Sobre',
      contact: 'Contato',
      faq: 'FAQ',
      privacy: 'Política de privacidade',
      terms: 'Termos de uso',
      copyright: 'Não afiliado à Embark Studios.',
      disclaimer:
        'Arc Raiders é uma marca da Embark Studios. Este site é um recurso independente e não é endossado pelo desenvolvedor ou publicador.',
    },
    common: { skipToContent: 'Ir para o conteúdo principal' },
    home: { browseCheats: 'Ver cheats', viewProducts: 'Ver produtos' },
  },
  ru: {
    nav: {
      cheats: 'Читы',
      products: 'Продукты',
      blog: 'Блог',
      faq: 'FAQ',
      about: 'О нас',
      getAccess: 'Получить доступ',
      language: 'Язык',
    },
    footer: {
      tagline:
        'Читы Arc Raiders, премиум-инструменты и гайды по рейдам — ESP, аимбот, Cloud DMA или спуфер для Сезона 1.',
      content: 'Контент',
      site: 'Сайт',
      legal: 'Правовая информация',
      cheats: 'Читы',
      products: 'Продукты',
      blog: 'Блог',
      about: 'О нас',
      contact: 'Контакты',
      faq: 'FAQ',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      copyright: 'Не связан с Embark Studios.',
      disclaimer:
        'Arc Raiders — товарный знак Embark Studios. Этот сайт — независимый фан-ресурс, не одобренный разработчиком или издателем.',
    },
    common: { skipToContent: 'Перейти к основному содержимому' },
    home: { browseCheats: 'Смотреть читы', viewProducts: 'Смотреть продукты' },
  },
  ja: {
    nav: {
      cheats: 'チート',
      products: '製品',
      blog: 'ブログ',
      faq: 'FAQ',
      about: '概要',
      getAccess: 'アクセスを取得',
      language: '言語',
    },
    footer: {
      tagline:
        'Arc Raidersチート、プレミアムツール、レイドガイド — ESP・エイムボット、Cloud DMA、スプーファーでシーズン1に備えよう。',
      content: 'コンテンツ',
      site: 'サイト',
      legal: '法的情報',
      cheats: 'チート',
      products: '製品',
      blog: 'ブログ',
      about: '概要',
      contact: 'お問い合わせ',
      faq: 'FAQ',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      copyright: 'Embark Studiosとは無関係です。',
      disclaimer:
        'Arc RaidersはEmbark Studiosの商標です。本サイトは独立したファンリソースであり、開発者・出版社の公式サイトではありません。',
    },
    common: { skipToContent: 'メインコンテンツへスキップ' },
    home: { browseCheats: 'チートを見る', viewProducts: '製品を見る' },
  },
  ko: {
    nav: {
      cheats: '치트',
      products: '제품',
      blog: '블로그',
      faq: 'FAQ',
      about: '소개',
      getAccess: '액세스 받기',
      language: '언어',
    },
    footer: {
      tagline:
        'Arc Raiders 치트, 프리미엄 도구, 레이드 가이드 — ESP, 에임봇, Cloud DMA 또는 스푸퍼로 시즌 1을 준비하세요.',
      content: '콘텐츠',
      site: '사이트',
      legal: '법적 고지',
      cheats: '치트',
      products: '제품',
      blog: '블로그',
      about: '소개',
      contact: '문의',
      faq: 'FAQ',
      privacy: '개인정보 처리방침',
      terms: '이용 약관',
      copyright: 'Embark Studios와 제휴하지 않습니다.',
      disclaimer:
        'Arc Raiders는 Embark Studios의 상표입니다. 이 사이트는 독립 팬 리소스이며 개발사 또는 퍼블리셔와 공식 관련이 없습니다.',
    },
    common: { skipToContent: '본문으로 건너뛰기' },
    home: { browseCheats: '치트 보기', viewProducts: '제품 보기' },
  },
  zh: {
    nav: {
      cheats: '外挂',
      products: '产品',
      blog: '博客',
      faq: '常见问题',
      about: '关于',
      getAccess: '获取访问',
      language: '语言',
    },
    footer: {
      tagline:
        'Arc Raiders 外挂、高级工具与攻略 — 购买 ESP 与自瞄、Cloud DMA 或硬件欺骗器，备战第一赛季。',
      content: '内容',
      site: '网站',
      legal: '法律',
      cheats: '外挂',
      products: '产品',
      blog: '博客',
      about: '关于',
      contact: '联系',
      faq: '常见问题',
      privacy: '隐私政策',
      terms: '使用条款',
      copyright: '与 Embark Studios 无关联。',
      disclaimer:
        'Arc Raiders 是 Embark Studios 的商标。本站为独立粉丝资源，未获开发商或发行商认可。',
    },
    common: { skipToContent: '跳转到主要内容' },
    home: { browseCheats: '浏览外挂', viewProducts: '查看产品' },
  },
  tr: {
    nav: {
      cheats: 'Hileler',
      products: 'Ürünler',
      blog: 'Blog',
      faq: 'SSS',
      about: 'Hakkında',
      getAccess: 'Erişim al',
      language: 'Dil',
    },
    footer: {
      tagline:
        'Arc Raiders hileleri, premium araçlar ve baskın rehberleri — ESP, aimbot, Cloud DMA veya spoofer ile Sezon 1\'e hazırlan.',
      content: 'İçerik',
      site: 'Site',
      legal: 'Yasal',
      cheats: 'Hileler',
      products: 'Ürünler',
      blog: 'Blog',
      about: 'Hakkında',
      contact: 'İletişim',
      faq: 'SSS',
      privacy: 'Gizlilik politikası',
      terms: 'Kullanım şartları',
      copyright: 'Embark Studios ile bağlantılı değildir.',
      disclaimer:
        'Arc Raiders, Embark Studios\'un ticari markasıdır. Bu site bağımsız bir hayran kaynağıdır ve geliştirici veya yayıncı tarafından onaylanmamıştır.',
    },
    common: { skipToContent: 'Ana içeriğe geç' },
    home: { browseCheats: 'Hilelere göz at', viewProducts: 'Ürünleri gör' },
  },
  pl: {
    nav: {
      cheats: 'Cheaty',
      products: 'Produkty',
      blog: 'Blog',
      faq: 'FAQ',
      about: 'O nas',
      getAccess: 'Uzyskaj dostęp',
      language: 'Język',
    },
    footer: {
      tagline:
        'Cheaty Arc Raiders, narzędzia premium i poradniki rajdów — ESP, aimbot, Cloud DMA lub spoofer na Sezon 1.',
      content: 'Treści',
      site: 'Strona',
      legal: 'Prawne',
      cheats: 'Cheaty',
      products: 'Produkty',
      blog: 'Blog',
      about: 'O nas',
      contact: 'Kontakt',
      faq: 'FAQ',
      privacy: 'Polityka prywatności',
      terms: 'Warunki użytkowania',
      copyright: 'Brak powiązania z Embark Studios.',
      disclaimer:
        'Arc Raiders jest znakiem towarowym Embark Studios. Ta strona jest niezależnym zasobem fanów i nie jest zatwierdzona przez dewelopera ani wydawcę.',
    },
    common: { skipToContent: 'Przejdź do głównej treści' },
    home: { browseCheats: 'Zobacz cheaty', viewProducts: 'Zobacz produkty' },
  },
  it: {
    nav: {
      cheats: 'Trucchi',
      products: 'Prodotti',
      blog: 'Blog',
      faq: 'FAQ',
      about: 'Chi siamo',
      getAccess: 'Ottieni accesso',
      language: 'Lingua',
    },
    footer: {
      tagline:
        'Trucchi Arc Raiders, strumenti premium e guide ai raid — ESP, aimbot, Cloud DMA o spoofer per la Stagione 1.',
      content: 'Contenuti',
      site: 'Sito',
      legal: 'Legale',
      cheats: 'Trucchi',
      products: 'Prodotti',
      blog: 'Blog',
      about: 'Chi siamo',
      contact: 'Contatti',
      faq: 'FAQ',
      privacy: 'Informativa sulla privacy',
      terms: 'Termini di utilizzo',
      copyright: 'Non affiliato a Embark Studios.',
      disclaimer:
        'Arc Raiders è un marchio di Embark Studios. Questo sito è una risorsa indipendente non approvata dallo sviluppatore o dall\'editore.',
    },
    common: { skipToContent: 'Vai al contenuto principale' },
    home: { browseCheats: 'Sfoglia trucchi', viewProducts: 'Vedi prodotti' },
  },
};

export function getMessages(locale: string | undefined): LocaleMessages {
  const code = (locale ?? 'en') as LocaleCode;
  return messages[code] ?? messages.en;
}

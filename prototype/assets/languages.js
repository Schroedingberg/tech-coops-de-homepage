function setLang(object_selected) {
  localStorage.setItem("currentLanguage", object_selected.value);
  Object.keys(data.languages).forEach((key) => {
    const elem = document.getElementById(key);
    if (elem) {
      elem.innerHTML = data.languages[key][object_selected.value];
    }
  });
}

function getTranslation(key) {
  const currentLang = localStorage.getItem("currentLanguage") || "en";
  return data.languages[key][currentLang];
}

function t(key) {
  this.document.currentScript.parentElement.innerHTML =
    "<span id='" + key + "'>" + getTranslation(key) + "</span>";
}

function initLanguageSelector() {
  document.getElementById("language-selector").value =
    localStorage.getItem("currentLanguage") || "en";
}

data.languages = {
  // Site - Main page translations
  "navbar-who-we-are-button": {
    en: "Who we are",
    es: "Quiénes somos",
    hr: "Tko smo",
    pt: "Quem somos",
    jp: "私どもについて",
  },
  "navbar-what-we-do-button": {
    en: "What we do",
    es: "Qué hacemos",
    hr: "Što radimo",
    pt: "O que fazemos",
    jp: "なにをやっているか",
  },
  "navbar-how-we-work": {
    en: "How we work",
    es: "Cómo trabajamos",
    hr: "Kako radimo",
    pt: "Como trabalhamos",
    jp: "どうやるか",
  },
  "navbar-our-philosophy": {
    en: "Our philosophy",
    es: "Filosofía",
    hr: "Filozofija",
    pt: "Nossa filosofia",
    jp: "考え方",
  },
  "navbar-get-in-touch": {
    en: "Get in touch",
    es: "Contacto",
    hr: "Kontakt",
    pt: "Entre em contato",
    jp: "連絡",
  },
  "modal-visit-website-btn": {
    en: "Visit Website",
    es: "Visitar Sitio",
    hr: "Posjetite web stranicu",
    pt: "Visite o site",
    jp: "ウェブサイトを訪問",
  },
  "section1-title-top1": {
    en: "We are",
    es: "Somos",
    hr: "Mi smo",
    pt: "Nós somos a",
    jp: "ーです",
  },
  "section1-title-top2": {
    en: "PATIO Community",
    es: "Comunidad PATIO",
    hr: "PATIO zajednica",
    pt: "comunidade PATIO",
    jp: "PATIOコミュニティ",
  },
  "section1-title-middle": {
    en: "and we",
    es: "y somos",
    hr: "te mi",
    pt: "e nós",
    jp: "私達は",
  },
  "section1-title-title": {
    en: "are tech cooperatives from all over the world",
    es: "cooperativas de tecnología de todo el mundo",
    hr: "okupljamo tehnološke zadruge iz cijelog svijeta",
    pt: "somos cooperativas de tecnologia do mundo todo",
    jp: "世界のIT労働者協同組合の集まり",
  },
  "section1-btn1": {
    en: "Let's work together",
    es: "Trabajemos juntas",
    hr: "Surađujmo",
    pt: "Vamos trabalhar juntos",
    jp: "一緒に仕事しましょう",
  },
  "section1-btn2": {
    en: "Join the community",
    es: "Únete a la comunidad",
    hr: "Pridruži nam se",
    pt: "Junte-se à comunidade",
    jp: "コミュニティーに入りましょう",
  },
  "section2-patio": {
    en: "We collaborate by sharing knowledge, job opportunities and human resources. Patio provides the best experience for both co-op members and our partners.",
    es: "Colaboramos compartiendo conocimiento, oportunidades de trabajo y recursos humanos. Patio provee la mejor experiencia tanto para miembros como socios.",
    hr: "Članovi zajednice surađuju dijeleći znanje, poslovne prilike i ljudske resurse. Patio doprinosi kvaliteti rada svojih članica i njihovih partnera.",
    pt: "Nós colaboramos compartilhando conhecimento, oportunidades de trabalho e recursos humanos. A Patio proporciona a melhor experiência para  cooperados e parceiros.",
    jp: "知識、仕事、人材などを共有するなどの協同をしています。PATIOを通じて、組合員とパートナーとの良い関係をめざしています。",
  },
  "section2-coops": {
    en: "Patio is a network comprised of tech cooperatives, from all corners of the globe, working together in solidarity to democratize the tech sector.",
    es: "Patio es una red de cooperativas de tecnología de todos los rincones del mundo, trabajando juntas en solidaridad para democratizar al sector tecnológico.",
    hr: "Patio je mreža tehnološki orjentiranih zadruga iz cijelog svijeta koje solidarno surađuju u smjeru demokratizacije tehnološkog sektora.",
    pt: "A Patio é uma rede formada por cooperativas de tecnologia, de todos os cantos do globo, trabalhando juntas, em solidariedade, para democratizar o setor de tecnologia.",
    jp: "ITセクターの民主化をめざし、世界中のIT労協が連帯しています。",
  },
  "section3-title": {
    en: "Who we are",
    es: "Quiénes somos",
    hr: "Tko smo",
    pt: "Quem somos",
    jp: "私どもについて",
  },
  "section3-pmain": {
    en: "We are a global community of worker owned cooperatives from all over the world, specializing in the development of digital technology, communication and design.",
    es: "Somos una comunidad de cooperativas de trabajadoras y trabajadores de todo el mundo, especializadas en el desarrollo de tecnología, comunicación y diseño.",
    hr: "Mi smo globalna zajednica radničkih zadruga specijaliziranih za rad s digitalnim tehnologijama, dizajn i komunikacije.",
    pt: "Somos uma comunidade global de cooperativas de trabalho de todo o mundo, especializadas em desenvolvimento de tecnologias digitais, comunicação e design.",
    jp: "デザイン、コミュニケーション、デジタル技術の応用に特化した世界中のITの労協が集まっています。",
  },
  "section3-p": {
    en: "Working together allows us to have multidisciplinary teams that collaborate on international projects.",
    es: "Trabajar juntas nos permite formar equipos multidisciplinarios para colaborar en proyectos internacionales.",
    hr: "Suradnja kroz zajednicu omogućuje nam stvaranje multidisciplinarnih timova koji rade na projektima internacionalnog karaktera.",
    pt: "Trabalhar em conjunto nos permite ter equipes multidisciplinares que colaboram em projetos internacionais.",
    jp: "世界にまたがったプロジェクトで、異なる領域を担当する組織が共同しています。",
  },
  "section4-coops": {
    en: "cooperatives",
    es: "cooperativas",
    hr: "zadruga",
    pt: "cooperativas",
    jp: "組合",
  },
  "section4-coopers": {
    en: "cooperators",
    es: "cooperativistas",
    hr: "zadrugara",
    pt: "cooperados",
    jp: "組合員",
  },
  "section4-countries": {
    en: "countries",
    es: "países",
    hr: "zemalja",
    pt: "países",
    jp: "国",
  },
  "section4-servicios": {
    en: "digital services",
    es: "servicios digitales",
    hr: "digitalne usluge",
    pt: "serviços digitais",
    jp: "デジタル技術サービス",
  },
  "section4-list-title": {
    en: "Members of Patio:",
    es: "Miembros de Patio:",
    hr: "Članovi Patio zajednice:",
    pt: "Integrantes do Pátio:",
    jp: "PATIOの組合員",
  },
  "section4-list-slugline": {
    en: "Click for more info of each coop",
    es: "Clic para más información",
    hr: "Saznaj više o svakom članu",
    pt: "Clique para mais informações",
    jp: "クリックすると、それぞれの組合についての詳細がでます。",
  },
  "section5-title": {
    en: "What we do",
    es: "Qué hacemos",
    hr: "Što radimo",
    pt: "O que fazemos",
    jp: "なにをやっているか",
  },
  "section5-subtitle": {
    en: "We innovate and implement the latest technologies to produce digital products and services.",
    es: "Innovamos e implementamos las tecnologías más recientes para producir productos y servicios digitales.",
    hr: "Primjenjujemo suvremenu tehnologiju na inovativan način kako bi stvorili kvalitetne digitalne proizvode i usluge.",
    pt: "Inovamos e implementamos as mais recentes tecnologias para produzir produtos e serviços digitais.",
    jp: "技術革新、応用を通じたデジタル製品やサービスの開発をしています。",
  },
  "section5-content": {
    en: "Our diverse global community stands behind us to help in each phase of the project as needed, so we can deliver the finest results and maintain the highest standards.",
    es: "Nuestra comunidad global respalda nuestro trabajo y nos ayudamos mutuamente en cada etapa del proyecto para proveer los mejores resultados y mantener los más altos estándares.",
    hr: "Patio je raznolika međunarodna zajednica organizacija koje si međusobno pomažu u raznim fazama projekata na kojima radimo, kako bi postigli što bolje rezultate i kvalitetu.",
    pt: "Nossa comunidade diversa e global nos apoia em cada fase do projeto, para que possamos oferecer os melhores resultados e manter os mais altos padrões.",
    jp: "背後に世界にまたがった組合が、最良の結果、品質をもたらします。",
  },
  "section5-services-title": {
    en: "Some of",
    es: "Algunos de",
    hr: "Neke od",
    pt: "Alguns de",
    jp: "サー",
  },
  "section5-services-title-bolder": {
    en: "our services",
    es: "nuestros servicios",
    hr: "naših usluga",
    pt: "nossos serviços",
    jp: "ビスの一部",
  },
  "services-full-stack": {
    en: "Full-stack Development",
    es: "Desarrollo Full-stack",
    hr: "Full-stack Programiranje",
    pt: "Desenvolvimento Full-stack",
    jp: "フルスタック開発",
  },
  "services-design": {
    en: "UX/UI Design & Animation",
    es: "UX/UI Diseño y Animación",
    hr: "UX/UI dizajn i Animacija",
    pt: "Design UX/UI & Animação",
    jp: "UX/UIデザインとアニメーション",
  },
  "services-branding": {
    en: "Branding & Creative",
    es: "Branding y Servicios Creativos",
    hr: "Brendiranje i Creativa",
    pt: "Marca & Criação",
    jp: "ブランディングとクリエイティブ",
  },
  "services-mobile": {
    en: "Mobile Development",
    es: "Desarrollo Móvil",
    hr: "Razvoj Mobilnih Aplikacija",
    pt: "Desenvolvimento para Móveis",
    jp: "モバイル開発",
  },
  "services-iot": {
    en: "Software & Hardware for IoT",
    es: "Software y Hardware para IoT",
    hr: "Softver i hardver za IoT",
    pt: "Software e hardware para IoT",
    jp: "IOT向けソフトウェアとハードウェア",
  },
  "services-pm": {
    en: "Project & Product Management",
    es: "Gestión de Proyectos y Productos",
    hr: "Upravljanje Projektima i Razvoj Proizvoda",
    pt: "Gestão de Projetos e Produtos",
    jp: "プロジェクトとプロダクト管理",
  },
  "section6-title": {
    en: "How we work",
    es: "Cómo trabajamos",
    hr: "Kako radimo",
    pt: "Como trabalhamos",
    jp: "どうやるか",
  },
  "section6-pmain": {
    en: "When we receive a request, we share it transparently within the entire community. From this base, we can scale teams to provide whatever is required for a specific project. Also, we can put interdisciplinary, remote teams together to accommodate any required specialized technical capacities.",
    es: "Cuando recibimos una solicitud, la compartimos de manera transparente con toda la comunidad. A partir de esto, escalamos el equipo para cumplir con los requerimientos del proyecto. También podemos conformar equipos multidisciplinarios que trabajen de manera remota de acuerdo a la especialización que se requiera.",
    hr: "Nakon što stigne upit transparentno ga podijelimo sa svim članovima zajednice te zatim stvaramo tim koji će odgovoriti na potrebe projekta. Interdisciplinarni timovi koje čine osobe iz cijelog svijeta s lakoćom mogu priskrbiti sva potrebna tehnička znanja i kapacitet.",
    pt: "Quando recebemos uma solicitação, compartilhamos ela de forma transparente, com toda a comunidade. A partir daí, podemos escalar equipes para fornecer o que for necessário para um projeto específico. Além disso, podemos reunir equipes interdisciplinares para prover quaisquer capacidades técnicas especializadas necessárias.",
    jp: "案件の連絡を受けたあと、透明性をもってPATIOコミュニティー全体に共有します。プロジェクトに合った大きさ、幅広い専門性を持つ遠隔チームを組成します。",
  },
  "section6-list-title": {
    en: "Some of the benefits of working with us:",
    es: "Algunos de los beneficios de trabajar con nosotras:",
    hr: "Neke prednosti suradnje s nama:",
    pt: "Vantagens de trabalhar conosco:",
    jp: "私達と一緒に仕事をする利点は、例えば",
  },
  "section6-list-1": {
    en: "Our large portfolio",
    es: "Gran portafolio",
    hr: "Naš portfolio",
    pt: "Nosso amplo portfólio",
    jp: "私達の持つ大きなポートフォリオ",
  },
  "section6-list-2": {
    en: "International teams and cultural diversity",
    es: "Equipos internacionales y diversidad cultural",
    hr: "Internacionalni timovi i kulturna raznolikost",
    pt: "Equipes internacionais e diversidade cultural",
    jp: "国際的、異文化にまたがったチーム",
  },
  "section6-list-3": {
    en: "Wide range of technologies",
    es: "Amplio rango de tecnologías",
    hr: "Širok raspon tehnologija",
    pt: "Ampla gama de tecnologias",
    jp: "幅広いIT技術に対応",
  },
  "section6-list-4": {
    en: "Pool of knowledge and experience",
    es: "Repositorio de conocimientos y experiencia",
    hr: "Bazen znanja i iskustva",
    pt: "Repositório de conhecimento e experiência",
    jp: "経験と知識の集積",
  },
  "section6-list-5": {
    en: "Socially responsible and linked to local communities",
    es: "Responsabilidad social y vínculos con comunidades locales",
    hr: "Društvena odgovornost i povezanost s lokalnom zajednicom",
    pt: "Socialmente responsável e ligado às suas comunidades locais",
    jp: "社会、コミュニティーなどとの接点の多さ",
  },
  "section6-island-text-1": {
    en: "Make us your organization's",
    es: "Seamos los socios",
    hr: "Želimo biti tehnološki partner",
    pt: "Nos torne o parceiro tecnológico",
    jp: "みなさまの組織のITパートナーにしてください",
  },
  "section6-island-text-2": {
    en: "technology partner",
    es: "tecnológicos de tu organización.",
    hr: "tvoje organizacije.",
    pt: "da sua organização.",
    jp: "",
  },
  "section6-island-btn": {
    en: "Get in touch and ask for a quote",
    es: "Contáctanos y pide una cotización",
    hr: "Javi se i zatraži ponudu",
    pt: "Solicite um orçamento",
    jp: "連絡、見積もりなど",
  },
  "section7-title": {
    en: "Our philosophy",
    es: "Nuestra filosofía",
    hr: "Filozofija",
    pt: "Nossa filosofia",
    jp: "考え方",
  },
  "section7-pmain": {
    en: "Patio is a community that aims to scale worker-ownership towards a more democratic society. Whether you are a small or large cooperative, or a person interested in exploring the cooperative world, let's share some experience together in our cooperative virtual networking sessions. We want to inspire more people to create technical cooperatives. If you need help, let us know! We can share our experience.",
    es: "Patio es una comunidad que busca escalar la propiedad de los trabajadores en la empresa para tener una sociedad más democrática. Seas una cooperativa pequeña o grande, o una persona interesada en el mundo cooperativo, compartamos experiencias juntos en nuestras sesiones virtuales. Si necesitas ayuda, ¡háznoslo saber! Podemos compartirte lo que sabemos.",
    hr: "Patio zajednica želi kroz radničko zadrugarstvo postići višu razinu demokracije u društvu. Bez obzira jeste li malena ili velika zadruga ili pak osoba koju zanima zadrugarstvo, kroz sudjelovanje i umrežavanje u zajednici podijeliti ćemo iskustva. Želimo potaknuti druge da i oni pokrenu tehničke zadruge. Ako trebaš pomoć, javi se! Naše iskustvo ti može pomoći.",
    pt: "Pátio é uma comunidade que visa escalar iniciativas de propriedade dos trabalhadores em direção a uma sociedade mais democrática. Seja você uma cooperativa pequena ou grande, ou uma pessoa interessada em explorar o mundo cooperativo, vamos compartilhar alguma experiência juntos em nossas sessões de networking virtual cooperativo. Queremos inspirar mais pessoas a criar cooperativas tecnológicas. Se precisar de ajuda, conte conosco! Podemos compartilhar nossa experiência.",
    jp: "PATIOは労働者所有を拡大し、より民主的な社会を目指しています。大小の協同組合や、協同組合に興味をお持ちの個人の方を含め、ビデオ会議などで経験を共有しましょう。もっと多くの方々をIT労協へご招待したいです。どんな相談でも対応いたします。",
  },
  "section7-list-title": {
    en: "Key benefits:",
    es: "Beneficios clave:",
    hr: "Ključne prednosti:",
    pt: "Principais benefícios:",
    jp: "主な利点",
  },
  "section7-list-1": {
    en: "Having a supportive and healthy community environment that helps cooperatives thrive",
    es: "Tener una comunidad de apoyo y un entorno sano que ayude a las cooperativas prosperar",
    hr: "Zdravo okruženje u kojem možeš naći podršku za razvoj svoje zadruge",
    pt: "Ter um ambiente comunitário, solidário e saudável, que ajude as cooperativas a prosperar",
    jp: "建設的、協力的なコミュニティー環境が、協同組合の繁栄を支えます。",
  },
  "section7-list-2": {
    en: "Learning from each other and innovating together by having a hub for knowledge sharing",
    es: "Aprender e innovar juntas, teniendo un lugar en donde compartir conocimiento",
    hr: "Prostor u kojem možeš puno naučiti od drugih, sebi ravnih, jer dijelimo znanje",
    pt: "Aprender uns com os outros e inovar juntos tendo um polo para compartilhamento de conhecimento",
    jp: "お互いから学び、変革を重ねることにより共有知識を作ります。",
  },
  "section7-list-3": {
    en: "Allowing diverse approaches based on unique points of view",
    es: "Permitir diversas aproximaciones basadas en puntos de vista únicos",
    hr: "Raznolik pristup i metode rješavanja problema",
    pt: "Permitir diversas abordagens baseadas em pontos de vista diferentes",
    jp: "いろいろな視点からアプローチできます。",
  },
  "section7-list-4": {
    en: "Accessing different experts and specializations in a variety of fields",
    es: "Tener acceso a diferentes especialistas en una variedad de campos",
    hr: "Pristup cijelom nizu eksperata i specijalista u raznim poljima",
    pt: "Acesso a diferentes especialistas e especialidades em diversas áreas",
    jp: "さまざまな領域を得意とする方々に会えます。",
  },
  "section7-list-5": {
    en: "Providing opportunities to join multidisciplinary set of teams",
    es: "Compartir oportunidades y formar parte de equipos multidisciplinarios",
    hr: "Prilika za rad u multidisciplinarnim timovima",
    pt: "Oferecer oportunidades de integrar um conjunto de equipes multidisciplinares",
    jp: "幅広い専門性を持つチームの一員になれます。",
  },
  "section7-island-text-1": {
    en: "If you are part of a",
    es: "Si eres parte de una",
    hr: "Ako si član ili članica",
    pt: "Se você faz parte de uma",
    jp: "IT協同組合員の方々、",
  },
  "section7-island-text-2": {
    en: "tech cooperative",
    es: "cooperativa de tecnología",
    hr: "tehnološke zadruge",
    pt: "cooperativa de tecnologia",
    jp: "",
  },
  "section7-island-btn": {
    en: "Join our community",
    es: "Únete a la comunidad",
    hr: "Pridruži se Patio zajednici",
    pt: "Junte-se à nossa comunidade",
    jp: "ぜひコミュニティーに入ってみてはどうでしょうか？",
  },
  "section8-title": {
    en: "Get in touch",
    es: "Contáctanos",
    hr: "Kontakt",
    pt: "Entre em contato",
    jp: "連絡",
  },
  "section8-pmain": {
    en: "with a brief description of how you want to collaborate. After we hear from you, a representative from our community will get back to you to work together on the details.",
    es: "Con una breve descripción acerca de cómo quieres colaborar. Al recibir tu mensaje, un representante de la comunidad te responderá para acordar juntos los detalles.",
    hr: "Javi nam se s kratkim opisom kako vidiš našu buduću suradnju. Netko od članova Patio zajednice javit će ti se povratno kako bi razradili detalje.",
    pt: "com uma breve descrição de como você deseja colaborar. Após ouvirmos você, um representante da nossa comunidade entrará em contato com você para trabalharmos juntos nos detalhes.",
    jp: "どのように協業をお考えか、簡潔にお書きください。ご連絡のあと、私どもからご詳細についてご連絡させていただきます。",
  },
  "section8-why": {
    en: "Why do you want to contact us?",
    es: "¿Por qué deseas contactarnos?",
    hr: "Napiši zašto nam se želiš javiti?",
    pt: "Por que você quer entrar em contato conosco?",
    jp: "ご連絡の理由",
  },
  "section8-select-option": {
    en: "Select an option",
    es: "Seleccione una opción",
    hr: "Odaberite opciju",
    pt: "Selecione uma opção",
    jp: "選択肢一つを選択してください",
  },
  "section8-work": {
    en: "Work with us",
    es: "Trabajar con nosotras",
    hr: "Želim raditi s vama",
    pt: "Trabalhe conosco",
    jp: "協業ししたい,
  },
  "section8-join": {
    en: "Join the community",
    es: "Unirse a la comunidad",
    hr: "Želim se priključiti u Patio zajednicu",
    pt: "Junte-se à comunidade Pátio",
    jp: "PATIOコミュニティーに入りたい,
  },
  "section8-consulting": {
    en: "Consulting",
    es: "Consulta",
    hr: "Trebam savjet ili imam upit",
    pt: "Fale conosco",
    jp: "コンサルティング",
  },

  "section8-name": {
    en: "Name",
    es: "Nombre",
    hr: "Ime",
    pt: "Nome",
    jp: "お名前",
  },
  "section8-surname": {
    en: "Surname",
    es: "Apellido",
    hr: "Prezime",
    pt: "Sobrenome",
    jp: "名字",
  },
  "section8-email": {
    en: "Email",
    es: "Correo",
    hr: "E-mail",
    pt: "E-mail",
    jp: "Email",
  },
  "section8-phone": {
    en: "Phone",
    es: "Teléfono",
    hr: "Telefon",
    pt: "Telefone",
    jp: "電話",
  },
  "section8-subject": {
    en: "Subject",
    es: "Asunto",
    hr: "Naslov",
    pt: "Assunto",
    jp: "件名",
  },
  "section8-message": {
    en: "Message",
    es: "Mensaje",
    hr: "Poruka",
    pt: "Mensagem",
    jp: "メッセージ",
  },
  "section8-btn-send": {
    en: "Send",
    es: "Enviar",
    hr: "Pošalji",
    pt: "Enviar",
    jp: "送る",
  },

  "footer-text": {
    en: "We are a global community of worker cooperatives, specialized in the development of digital technology, communication and design, localted in different countries and working on projects with an international scope.",
    es: "Somos una comunidad global de cooperativas de trabajadoras y trabajadores, especializada en el desarrollo de tecnología digital, comunicación y diseño, ubicadas en países diferentes, y trabajando en proyectos con alcance internacional.",
    hr: "Mi smo globalna zajednica radničkih zadruga specijaliziranih za rad s digitalnim tehnologijama,dizajn i komunikacije. Imamo članove iz 20 zemalja (taj broj raste) te radimo na projektima koji su internacionalnog karaktera.",
    pt: "Somos uma comunidade global de cooperativas de trabalhadores especializados em desenvolvimento de tecnologias digitais, comunicação e design, de 20 países diferentes (e em crescimento), e trabalhando em projetos de âmbito global.",
    jp: "私どもは、世界中のITの労働者協同組合の集まりで、デジタル技術、コミュニケーション、デザインなどに専門性を持ち、１７カ国（増加中）に存在、国際的なスコープをもつプロジェクトで仕事をしています。",
  },
  "footer-intercoop": {
    en: "This website was made inter-cooperatively by",
    es: "Este sitio fue realizado de manera intercooperativa por",
    hr: "Ovu web stranicu izradila je ova zadruga",
    pt: "Este site foi feito inter-cooperativamente por",
    jp: "このウェブサイトは相互協力により作成されました",
  },

  // Cooperatives taglines & descriptions translations
  "animus-tagline": {
    en: "We create technological solutions",
  },
  "animus-description": {
    en: "We are a cooperative company that designs and develops software. We bet on professional quality and solidarity ties.",
  },
  "fiqus-tagline": {
    en: "We are a software cooperative. We are collective construction, culture and minds in constant movement.",
    es: "Somos una cooperativa de software. Somos construcción colectiva, cultura y mentes en constante movimiento.",
    hr: "We are a software cooperative. We are collective construction, culture and minds in constant movement.",
    pt: "Somos uma cooperativa de software. Somos construção coletiva, cultura e mentes em constante movimento.",
  },
  "fiqus-description": {
    en: "Fiqus is not just another job, it is a life project, in which we have built a consolidated team of professionals who are in continuous training to provide high quality technical solutions.",
    es: "Fiqus no es un trabajo más, es un proyecto de vida ,en el que construimos un equipo consolidado de profesionales que se encuentra en continua capacitación para poder brindar soluciones técnicas de alta calidad. ",
    hr: "Fiqus is not just another job, it is a life project, in which we have built a consolidated team of professionals who are in continuous training to provide high quality technical solutions.",
    pt: "A Fiqus não é apenas mais um trabalho, é um projeto de vida, no qual construímos uma equipe consolidada de profissionais que estão em contínuo treinamento para poder fornecer soluções técnicas de alta qualidade.",
  },
  "redjar-tagline": {
    en: "Software development professionals",
    es: "Profesionales en desarrollo de software",
    hr: "",
    pt: "",
  },
  "redjar-description": {
    en: "En Redjar nos gusta lo que hacemos. Desde que iniciamos tu desarrollo entendemos que tu crecimiento es el nuestro. ¡Probá nuestros equipos remotos!",
    es: "En Redjar nos gusta lo que hacemos. Desde que iniciamos tu desarrollo entendemos que tu crecimiento es el nuestro. ¡Probá nuestros equipos remotos!",
    hr: "",
    pt: "",
  },
  "albatros-tagline": {
    en: "Solidarity for Software & Technology",
    es: "",
    hr: "",
    pt: "",
  },
  "albatros-description": {
    en: "As Albatros Tech Cooperative, we are taking the first steps of a tech cooperative towards having a sustainable, democratic and fair working life.",
    es: "",
    hr: "",
    pt: "",
  },
  "camplight-tagline": {
    en: "Evolving human collaboration through software ",
    es: "",
    hr: "",
    pt: "",
  },
  "camplight-description": {
    en: "Camplight is a global network of digital artisans, united in the pursuit of the spark of progress. We approach every project with the ambition to ignite its flame, and help it grow into a digital entity that will bring light to humanity.",
    es: "",
    hr: "",
    pt: "",
  },
  "tng-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "tng-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "librecode-tagline": {
    en: "Technology with transparency and freedom",
    es: "",
    hr: "",
    pt: "",
  },
  "librecode-description": {
    en: "We are a digital cooperative of free software development specialists.",
    es: "",
    hr: "",
    pt: "",
  },
  "sofi-tagline": {
    en: "We are a social & environmental software cooperative specializing in creating apps, websites, and everything tech.",
    es: "",
    hr: "",
    pt: "",
  },
  "sofi-description": {
    en: "SOFI is a social & environmental software cooperative. We supply tailor-made software solutions for projects that positively impact our society and environment. We work with entrepreneurs, NGOs, start-ups and public entities. Our purpose is to create precise technological products that matter.",
    es: "",
    hr: "",
    pt: "",
  },
  "animorph-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "animorph-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "sociality-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "sociality-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "slobodnadomena-tagline": {
    en: "We brings together designers, developers, artists, engineers and the like to offer a full professional service and work on projects we care about.",
    es: "",
    hr: "",
    pt: "",
  },
  "slobodnadomena-description": {
    en: "Slobodna domena is a transparent, democratic and socially responsible organization, founded to set up and support various initiatives with the common goal of defending and expanding the definition of common goods, the just distribution of surplus values, promoting equality, fighting discrimination and nurturing democratic decision-making.",
    es: "",
    hr: "",
    pt: "",
  },
  "tierracomun-tagline": {
    en: "We provide consulting, web services and support with free and open-source software.",
    es: "Brindamos consultoría, servicios web y soporte técnico con software libre y de código abierto.",
    hr: "",
    pt: "",
  },
  "tierracomun-description": {
    en: "We are a work cooperative made up of a group of professionals and experts in free technologies, information protection and training. We facilitate training processes for technological re-appropriation and the use of free software.",
    es: "Somos una cooperativa de trabajo conformada por un grupo de profesionales y expertes en tecnologías libres, protección informática y formación. Facilitamos procesos de capacitación para la re-apropiacion tecnológica y el uso del software libre.",
    hr: "",
    pt: "",
  },
  "agaric-tagline": {
    en: "Building the open web",
    es: "",
    hr: "",
    pt: "",
  },
  "agaric-description": {
    en: "Agaric makes websites and applications that matter. We provide development services, training, and consulting to help define and meet your needs.",
    es: "",
    hr: "",
    pt: "",
  },
  "colab-tagline": {
    en: "Co-creates simple, purpose-driven web technology for a better world",
    es: "",
    hr: "",
    pt: "",
  },
  "colab-description": {
    en: "We are a self-governing, diverse, and international cooperative workplace. We create technical solutions using participatory approaches with partners who nurture a more just and sustainable world.",
    es: "",
    hr: "",
    pt: "",
  },

  // Success Form Page Translations
  "success-thankyou": {
    en: "Thank you!",
    es: "Gracias!",
    hr: "Hvala!",
    pt: "Gracias!",
  },
  "success-message": {
    en: "We received your message and we'll get back to you shortly.",
    es: "Recibimos tu mensaje y te responderemos pronto.",
    hr: "Primili smo vašu poruku i ubrzo ćemo vam se javiti.",
    pt: "Recebemos sua mensagem e retornaremos em breve.",
  },
  "success-btn": {
    en: "Back to our site",
    es: "Volver a nuestro sitio",
    hr: "Povratak na našu stranicu",
    pt: "Voltar ao nosso site",
  },
};

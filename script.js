"use strict";


const SITE_CONFIG = {
  projectCount: 20,            // shown in the hero stats strip
  featuredMax: 8,              // how many featured projects the homepage shows (6–8 recommended)
  contact: {
    email: "g.pachedjiev2006@gmail.com",   // TODO: replace with your real business email
    phone: "+359886749861",                        // e.g. "+359 88 000 0000"
    linkedin: "https://linkedin.com/in/george-pachedjiev-3b3b64242",                     // e.g. "https://www.linkedin.com/in/your-profile"
    github: "https://github.com/GeorgePachedjiev",                       // e.g. "https://github.com/your-username"
    other: [
      // { label: "Behance", url: "https://www.behance.net/your-profile" },
    ],
  },
  /* Put your photo in assets/ and set src, e.g. "assets/georgi.jpg". Leave empty to show the placeholder. */
  portrait: {
    src: "1.JPG",
    alt: { bg: "Георги Пачеджиев", en: "Georgi Pachedzhiev" },
  },
};


const FORM_CONFIG = {
  endpoint: "https://formspree.io/f/xeaanabq",
  method: "POST",
};

/* ---- A3. Prices -------------------------------------------------------------
   Leave "" to keep a price hidden. Use a string, or { bg: "...", en: "..." } for two languages.
   Example: business: { bg: "от 900 лв.", en: "from €450" } */
const PRICES = {
  business: "",
  landing: "",
  ecommerce: "",
  redesign: "",
  maintenance: "",
  seo: "",
};

/* ---- A4. Project categories -------------------------------------------------
   Only categories that are used by at least one project appear as filters.
   Rename/remove them so they describe your REAL projects accurately. */
const CATEGORIES = {
  business: { bg: "Бизнес сайтове", en: "Business websites" },
  landing: { bg: "Лендинг страници", en: "Landing pages" },
  ecommerce: { bg: "Онлайн магазини", en: "E-commerce" },
  experiments: { bg: "Експерименти", en: "Experiments" },
};

/* ---- A5. Projects -----------------------------------------------------------
   ┌────────────────────────────────────────────────────────────────────────┐
   │  ALL 20 ENTRIES BELOW ARE PLACEHOLDERS — replace them with real data.  │
   └────────────────────────────────────────────────────────────────────────┘
   Fields:
     title        string or { bg, en }
     category     a key from CATEGORIES above
     description  string or { bg, en }
     thumbnail    path to an image, e.g. "assets/projects/cafe.jpg" ("" → neutral placeholder)
     video        path to a short screen recording, e.g. "assets/projects/cafe.mp4" ("" → no demo button)
     liveUrl      the real website address ("" → no "View project" button)
     technologies array of strings, e.g. ["HTML", "CSS", "JavaScript"] ([] → no tags)
     featured     true → shown on the homepage (max SITE_CONFIG.featuredMax)
     placeholder  true → shows a "Placeholder" badge. DELETE this line for real projects.
   To add a project: copy a line. To remove: delete a line. The count and filters update by themselves. */
const PH_DESC = {
  //bg: "Заместител — замени с кратко описание на реален проект.",
  //en: "Placeholder — replace with a short description of a real project.",
};
const sampleTitle = (n) => ({
  bg: "Примерен проект " + String(n).padStart(2, "0"),
  en: "Sample project " + String(n).padStart(2, "0"),
});

const PROJECTS = [
  { title: sampleTitle(1),  category: "business",    description: PH_DESC, thumbnail: "assets/projects/thebrothers.png", video: "assets/projects/thebrothersbarber.mp4", liveUrl: "", technologies: [], featured: true,  placeholder: true },
  { title: sampleTitle(2),  category: "landing",     description: PH_DESC, thumbnail: "assets/projects/elite.png", video: "assets/projects/elite.mp4", liveUrl: "", technologies: [], featured: true,  placeholder: true },
  { title: sampleTitle(3),  category: "ecommerce",   description: PH_DESC, thumbnail: "assets/projects/plakamoto.png", video: "assets/projects/plakamoto.mp4", liveUrl: "", technologies: [], featured: true,  placeholder: true },
  { title: sampleTitle(4),  category: "business",    description: PH_DESC, thumbnail: "assets/projects/pods.png", video: "assets/projects/pods.mp4", liveUrl: "", technologies: [], featured: true,  placeholder: true },
  { title: sampleTitle(5),  category: "experiments", description: PH_DESC, thumbnail: "assets/projects/site.png", video: "assets/projects/site.mp4", liveUrl: "", technologies: [], featured: true,  placeholder: true },
  { title: sampleTitle(6),  category: "landing",     description: PH_DESC, thumbnail: "assets/projects/vigo.png", video: "assets/projects/vigoo.mp4", liveUrl: "", technologies: [], featured: true,  placeholder: true },
  { title: sampleTitle(7),  category: "business",    description: PH_DESC, thumbnail: "assets/projects/puddin.png", video: "assets/projects/puddin.mp4", liveUrl: "", technologies: [], featured: true,  placeholder: true },
  { title: sampleTitle(8),  category: "ecommerce",   description: PH_DESC, thumbnail: "assets/projects/calabria.png", video: "assets/projects/calabria.mp4", liveUrl: "", technologies: [], featured: true,  placeholder: true },
  { title: sampleTitle(9),  category: "business",    description: PH_DESC, thumbnail: "assets/projects/castello.png", video: "assets/projects/castello.mp4", liveUrl: "", technologies: [], featured: false, placeholder: true },
  { title: sampleTitle(10), category: "landing",     description: PH_DESC, thumbnail: "assets/projects/clothparadise.png", video: "assets/projects/ClothparadiseVideo.mp4", liveUrl: "", technologies: [], featured: false, placeholder: true },
  { title: sampleTitle(11), category: "experiments", description: PH_DESC, thumbnail: "assets/projects/flames.png", video: "assets/projects/flames..mp4", liveUrl: "", technologies: [], featured: false, placeholder: true },
  { title: sampleTitle(12), category: "business",    description: PH_DESC, thumbnail: "assets/projects/greenbrothers.png", video: "assets/projects/greenbrothers.mp4", liveUrl: "", technologies: [], featured: false, placeholder: true },
  { title: sampleTitle(13), category: "ecommerce",   description: PH_DESC, thumbnail: "assets/projects/moio.png", video: "assets/projects/moio.mp4", liveUrl: "", technologies: [], featured: false, placeholder: true },
  { title: sampleTitle(14), category: "landing",     description: PH_DESC, thumbnail: "assets/projects/pavaj.png", video: "assets/projects/pavaj.mp4", liveUrl: "", technologies: [], featured: false, placeholder: true },
  { title: sampleTitle(15), category: "business",    description: PH_DESC, thumbnail: "assets/projects/prirumen.png", video: "assets/projects/При_Румен_УебСайт.mp4", liveUrl: "", technologies: [], featured: false, placeholder: true },
  { title: sampleTitle(16), category: "experiments", description: PH_DESC, thumbnail: "assets/projects/salon.png", video: "assets/projects/salon.mp4", liveUrl: "", technologies: [], featured: false, placeholder: true },
  { title: sampleTitle(17), category: "landing",     description: PH_DESC, thumbnail: "assets/projects/susinito.png", video: "assets/projects/susinito.mp4", liveUrl: "", technologies: [], featured: false, placeholder: true },
  { title: sampleTitle(18), category: "business",    description: PH_DESC, thumbnail: "assets/projects/kibea.png", video: "assets/projects/kibea.mp4", liveUrl: "", technologies: [], featured: false, placeholder: true },
  { title: sampleTitle(19), category: "ecommerce",   description: PH_DESC, thumbnail: "assets/projects/outcast.png", video: "assets/projects/outcast.mp4", liveUrl: "", technologies: [], featured: false, placeholder: true },
  { title: sampleTitle(20), category: "experiments", description: PH_DESC, thumbnail: "assets/projects/ostrieBarber.png", video: "assets/projects/ostrieBarber.mp4", liveUrl: "", technologies: [], featured: false, placeholder: true },
];

/* ---- A6. Certificates (shown in the collapsible list under Skills) ----------
   y = year, m = month (1–12, omit if unknown), issuer is optional. Names are intentionally not translated. */
const CERTIFICATES = [
  { name: "Programming Basics with C#",          issuer: "SoftUni", y: 2021, m: 9 },
  { name: "Programming Fundamentals with C#",    issuer: "SoftUni", y: 2022, m: 1 },
  { name: "C# Advanced",                          issuer: "SoftUni", y: 2022, m: 5 },
  { name: "C# OOP",                               issuer: "SoftUni", y: 2022, m: 6 },
  { name: "JS Advanced",                          issuer: "SoftUni", y: 2022, m: 9 },
  { name: "JS Applications",                      issuer: "SoftUni", y: 2022, m: 10 },
  { name: "MS SQL",                               issuer: "SoftUni", y: 2023, m: 1 },
  { name: "Entity Framework Core",                issuer: "SoftUni", y: 2023, m: 2 },
  { name: "Software Engineering and DevOps",      issuer: "SoftUni", y: 2023, m: 10 },
  { name: "Game Development",                     issuer: "Telerik School Academy", y: 2021 },
  { name: "Introduction to Cybersecurity",        issuer: "Cisco Networking Academy", y: 2026, m: 7 },
  { name: "Programming Basics with Python",       issuer: "", y: 2026, m: 7 },
];



const I18N = {
  bg: {
    "meta.title": "NextPage Studio — Независимо уеб студио | Георги Пачеджиев",
    "meta.description": "NextPage Studio е независимо уеб студио от България. Модерни, бързи и добре проектирани уебсайтове за бизнеси и предприемачи — от фирмени сайтове и лендинг страници до онлайн магазини.",
    "meta.ogLocale": "bg_BG",
    "skip": "Към съдържанието",

    "nav.aria": "Основна навигация",
    "nav.home": "Начало",
    "nav.work": "Проекти",
    "nav.services": "Услуги",
    "nav.about": "За мен",
    "nav.contact": "Контакти",
    "nav.cta": "Обсъди проекта си",
    "nav.menu": "Меню",
    "lang.aria": "Език",

    "hero.eyebrow": "НЕЗАВИСИМО УЕБ СТУДИО · БЪЛГАРИЯ",
    "hero.title": "Изграждам сайтове, които превръщат <em>посетители в клиенти.</em>",
    "hero.text": "Създавам модерни, бързи и добре проектирани уебсайтове за бизнеси, които искат да се откроят онлайн.",
    "hero.cta1": "Разгледай проектите",
    "hero.cta2": "Нека поговорим",
    "hero.mockAlt": "Илюстрация на уебсайт в прозорец на браузър",
    "stats.projects": "създадени уебсайт проекта",
    "stats.craft": "Уеб дизайн и разработка",
    "stats.region": "България / По света",

    "work.eyebrow": "Портфолио",
    "work.title": "Избрани проекти",
    "work.lead": "Част от уебсайтовете, които съм създал. Разгледай ги, пусни кратка демонстрация или отвори живия сайт.",
    "work.filters": "Филтри по категория",
    "work.empty": "Няма проекти в тази категория.",
    "work.close": "Затвори",
    "work.all": "Всички",
    "work.showAll": "Покажи всички {n} проекта",
    "work.showFeatured": "Покажи само избраните",
    "work.count": "Показани {shown} от {total}",
    "work.view": "Виж проекта",
    "work.viewLabel": "Виж проекта „{title}“ (отваря се в нов раздел)",
    "work.details": "Детайли",
    "work.detailsLabel": "Детайли за проекта „{title}“",
    "work.play": "Демонстрация",
    "work.playLabel": "Пусни демонстрация на „{title}“",
    "work.placeholder": "Заместител",
    "work.thumbAlt": "Преглед на проект „{title}“",
    "work.videoError": "Видеото не може да бъде заредено. Провери пътя до файла в script.js.",
    "work.videoLabel": "Демонстрация на „{title}“",

    "services.eyebrow": "Услуги",
    "services.title": "Какво мога да направя за теб",
    "services.lead": "Всеки проект започва с разговор. Ето основните неща, с които мога да помогна.",
    "svc.business.title": "Уебсайт за бизнес",
    "svc.business.text": "Професионално онлайн присъствие, което представя фирмата ти ясно и вдъхва доверие на потенциалните клиенти.",
    "svc.landing.title": "Лендинг страници",
    "svc.landing.text": "Фокусирана страница за една оферта или кампания — с ясно послание и ясна следваща стъпка за посетителя.",
    "svc.ecommerce.title": "Онлайн магазини",
    "svc.ecommerce.text": "Магазин, в който клиентите лесно намират продуктите и стигат до поръчка, а ти можеш удобно да управляваш каталога си.",
    "svc.redesign.title": "Редизайн на сайт",
    "svc.redesign.text": "Освежаване на остарял сайт — по-ясна структура, по-съвременен вид и по-добро изживяване на телефон.",
    "svc.maintenance.title": "Поддръжка на сайт",
    "svc.maintenance.text": "Редовни актуализации, корекции и промени, за да остане сайтът ти актуален и да работи без изненади.",
    "svc.seo.title": "SEO и бързодействие",
    "svc.seo.text": "По-бързо зареждане и по-добра техническа основа, за да може сайтът ти да бъде открит и да се използва комфортно.",
    "services.cta.title": "Не си сигурен какво ти трябва?",
    "services.cta.text": "Опиши ми накратко бизнеса и целите си — ще намерим най-подходящото решение заедно.",

    "process.eyebrow": "Процес",
    "process.title": "Как работя",
    "process.note": "Срокове и цени се уговарят индивидуално за всеки проект.",
    "process.1.title": "Откриване",
    "process.1.text": "Разбирам бизнеса, аудиторията и целите ти.",
    "process.2.title": "Планиране и дизайн",
    "process.2.text": "Определяме структурата, визуалната посока и съдържанието.",
    "process.3.title": "Разработка",
    "process.3.text": "Изграждам адаптивния уебсайт и реализирам уговорената функционалност.",
    "process.4.title": "Пускане и поддръжка",
    "process.4.text": "Тествам сайта, подготвям го за публикуване и обсъждаме поддръжката.",

    "about.portrait": "Място за портретна снимка",
    "about.portraitHint": "Тук ще бъде твоята снимка",
    "about.eyebrow": "За мен",
    "about.role": "Уеб разработчик · Основател на NextPage Studio",
    "about.p1": "Аз съм Георги Пачеджиев — уеб разработчик с интерес към създаването на модерни дигитални продукти. Комбинирам технически знания, усет към дизайна и внимание към детайла, за да изграждам уебсайтове, които изглеждат професионално и работят добре на различни устройства.",
    "about.p2": "Работя върху реални проекти и постоянно развивам уменията си в уеб разработката, програмирането и софтуерните технологии.",
    "about.fact.edu.label": "Образование",
    "about.fact.edu.value": "Софтуерни технологии и дизайн · Пловдивски университет „Паисий Хилендарски“",
    "about.fact.projects.label": "Проекти",
    "about.fact.projects.value": "40+ създадени уебсайта",
    "about.fact.focus.label": "Фокус",
    "about.fact.focus.value": "Уеб дизайн и разработка",

    "skills.title": "Технически умения",
    "skills.lead": "Технологии, с които работя и които продължавам да развивам.",
    "skills.g1": "Уеб и фронтенд",
    "skills.g2": "Програмиране и данни",
    "skills.g3": "Практики",
    "skills.web": "Уеб разработка",
    "skills.responsive": "Адаптивен дизайн",
    "certs.summary": "Сертификати и обучение ({certs})",

    "contact.eyebrow": "Контакти",
    "contact.title": "Имаш идея за сайт? Нека я превърнем в реалност.",
    "contact.lead": "Разкажи ми накратко за проекта си. Ще се свържа с теб, за да обсъдим следващите стъпки.",
    "contact.emailBtn": "Изпрати имейл",
    "contact.email": "Имейл",
    "contact.phone": "Телефон",

    "form.name": "Име",
    "form.name.ph": "Георги",
    "form.email": "Имейл",
    "form.type": "Бизнес или тип проект",
    "form.type.default": "Избери…",
    "form.type.business": "Уебсайт за бизнес",
    "form.type.landing": "Лендинг страница",
    "form.type.shop": "Онлайн магазин",
    "form.type.redesign": "Редизайн на сайт",
    "form.type.maintenance": "Поддръжка",
    "form.type.seo": "SEO и бързодействие",
    "form.type.other": "Друго",
    "form.budget": "Ориентировъчен бюджет",
    "form.optional": "(по желание)",
    "form.budget.hint": "Свободен текст, напр. сума или диапазон.",
    "form.message": "Описание на проекта",
    "form.message.ph": "Каква е целта на сайта? Какво вече имаш и какво искаш да постигнеш?",
    "form.consent": "Съгласен/а съм данните ми да бъдат използвани, за да се свържете с мен във връзка със запитването. Вижте <a href=\"privacy.html\">Политиката за поверителност</a>.",
    "form.submit": "Изпрати запитването",
    "form.sending": "Изпращане…",
    "form.fixErrors": "Моля, поправи отбелязаните полета.",
    "form.success": "Благодаря! Запитването е изпратено — ще се свържа с теб скоро.",
    "form.error": "Нещо се обърка при изпращането. Опитай отново или пиши директно на {email}.",
    "form.noBackend": "Формата още не е свързана със сървър, затова нищо не е изпратено автоматично. Отворих имейл програмата ти с попълнено съобщение — натисни „Изпрати“ там.",
    "err.name": "Моля, въведи името си (поне 2 символа).",
    "err.emailRequired": "Моля, въведи имейл адрес.",
    "err.emailInvalid": "Имейл адресът изглежда невалиден — напр. name@company.bg.",
    "err.type": "Избери бизнес или тип проект.",
    "err.message": "Опиши проекта поне с няколко думи (минимум 10 символа).",
    "err.consent": "Нужно е съгласие, за да изпратим запитването.",
    "mail.subject": "Запитване от сайта — {name}",
    "mail.name": "Име",
    "mail.email": "Имейл",
    "mail.type": "Тип проект",
    "mail.budget": "Бюджет",
    "mail.message": "Описание",
    "mail.generic": "Запитване за уебсайт",

    "footer.desc": "Независимо уеб студио от България. Модерни уебсайтове за бизнеси и предприемачи.",
    "footer.nav": "Навигация",
    "footer.contact": "Контакти",
    "footer.rights": "© {year} NextPage Studio. Всички права запазени.",
    "footer.privacy": "Политика за поверителност",
    "footer.top": "Към началото",
  },

  en: {
    "meta.title": "NextPage Studio — Independent web studio | Georgi Pachedzhiev",
    "meta.description": "NextPage Studio is an independent web studio from Bulgaria. Modern, fast, thoughtfully designed websites for businesses and entrepreneurs — from company sites and landing pages to online stores.",
    "meta.ogLocale": "en_US",
    "skip": "Skip to content",

    "nav.aria": "Main navigation",
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Start a project",
    "nav.menu": "Menu",
    "lang.aria": "Language",

    "hero.eyebrow": "INDEPENDENT WEB STUDIO · BULGARIA",
    "hero.title": "I build websites that turn <em>visitors into customers.</em>",
    "hero.text": "I create modern, fast, thoughtfully designed websites for businesses that want to stand out online.",
    "hero.cta1": "View the work",
    "hero.cta2": "Let's talk",
    "hero.mockAlt": "Illustration of a website inside a browser window",
    "stats.projects": "website projects created",
    "stats.craft": "Web design & development",
    "stats.region": "Bulgaria / Worldwide",

    "work.eyebrow": "Portfolio",
    "work.title": "Selected work",
    "work.lead": "A selection of the websites I've built. Browse them, play a short demo or open the live site.",
    "work.filters": "Filter by category",
    "work.empty": "No projects in this category.",
    "work.close": "Close",
    "work.all": "All",
    "work.showAll": "Show all {n} projects",
    "work.showFeatured": "Show featured only",
    "work.count": "Showing {shown} of {total}",
    "work.view": "View project",
    "work.viewLabel": "View project “{title}” (opens in a new tab)",
    "work.details": "Details",
    "work.detailsLabel": "Details for project “{title}”",
    "work.play": "Play demo",
    "work.playLabel": "Play demo of “{title}”",
    "work.placeholder": "Placeholder",
    "work.thumbAlt": "Preview of project “{title}”",
    "work.videoError": "The video could not be loaded. Check the file path in script.js.",
    "work.videoLabel": "Demo of “{title}”",

    "services.eyebrow": "Services",
    "services.title": "What I can do for you",
    "services.lead": "Every project starts with a conversation. Here's where I can help.",
    "svc.business.title": "Business websites",
    "svc.business.text": "A professional online presence that presents your company clearly and builds trust with potential customers.",
    "svc.landing.title": "Landing pages",
    "svc.landing.text": "A focused page for a single offer or campaign — with a clear message and a clear next step for the visitor.",
    "svc.ecommerce.title": "E-commerce websites",
    "svc.ecommerce.text": "A store where customers easily find products and reach checkout, and where you can comfortably manage your catalogue.",
    "svc.redesign.title": "Website redesign",
    "svc.redesign.text": "A fresh start for an outdated site — clearer structure, a more modern look and a better experience on mobile.",
    "svc.maintenance.title": "Website maintenance",
    "svc.maintenance.text": "Regular updates, fixes and changes so your site stays current and runs without surprises.",
    "svc.seo.title": "SEO & performance",
    "svc.seo.text": "Faster loading and a stronger technical foundation, so your site can be found and is pleasant to use.",
    "services.cta.title": "Not sure what you need?",
    "services.cta.text": "Tell me briefly about your business and goals — we'll find the right solution together.",

    "process.eyebrow": "Process",
    "process.title": "How I work",
    "process.note": "Timelines and pricing are agreed individually for each project.",
    "process.1.title": "Discovery",
    "process.1.text": "I learn about your business, audience and goals.",
    "process.2.title": "Planning & design",
    "process.2.text": "We define the structure, visual direction and content.",
    "process.3.title": "Development",
    "process.3.text": "I build the responsive website and implement the agreed functionality.",
    "process.4.title": "Launch & support",
    "process.4.text": "I test the site, prepare it for publication and we discuss ongoing maintenance.",

    "about.portrait": "Placeholder for a portrait photo",
    "about.portraitHint": "Your photo goes here",
    "about.eyebrow": "About",
    "about.role": "Web developer · Founder of NextPage Studio",
    "about.p1": "I'm Georgi Pachedzhiev — a web developer with an interest in building modern digital products. I combine technical knowledge, a feel for design and attention to detail to build websites that look professional and work well on every device.",
    "about.p2": "I work on real projects and keep developing my skills in web development, programming and software technologies.",
    "about.fact.edu.label": "Education",
    "about.fact.edu.value": "Software Technologies and Design · Paisii Hilendarski University of Plovdiv",
    "about.fact.projects.label": "Projects",
    "about.fact.projects.value": "40+ websites built",
    "about.fact.focus.label": "Focus",
    "about.fact.focus.value": "Web design & development",

    "skills.title": "Technical skills",
    "skills.lead": "Technologies I work with and keep learning.",
    "skills.g1": "Web & front end",
    "skills.g2": "Programming & data",
    "skills.g3": "Practices",
    "skills.web": "Web development",
    "skills.responsive": "Responsive design",
    "certs.summary": "Certificates & training ({certs})",

    "contact.eyebrow": "Contact",
    "contact.title": "Have a website idea? Let's bring it to life.",
    "contact.lead": "Tell me a little about your project. I'll get back to you to discuss next steps.",
    "contact.emailBtn": "Send an email",
    "contact.email": "Email",
    "contact.phone": "Phone",

    "form.name": "Name",
    "form.name.ph": "Georgi",
    "form.email": "Email",
    "form.type": "Business or project type",
    "form.type.default": "Choose…",
    "form.type.business": "Business website",
    "form.type.landing": "Landing page",
    "form.type.shop": "Online store",
    "form.type.redesign": "Website redesign",
    "form.type.maintenance": "Maintenance",
    "form.type.seo": "SEO & performance",
    "form.type.other": "Other",
    "form.budget": "Estimated budget",
    "form.optional": "(optional)",
    "form.budget.hint": "Free text, e.g. an amount or a range.",
    "form.message": "Project description",
    "form.message.ph": "What is the website for? What do you already have and what do you want to achieve?",
    "form.consent": "I agree that my data may be used to contact me about this enquiry. See the <a href=\"privacy.html\">Privacy policy</a>.",
    "form.submit": "Send enquiry",
    "form.sending": "Sending…",
    "form.fixErrors": "Please fix the highlighted fields.",
    "form.success": "Thank you! Your enquiry has been sent — I'll be in touch soon.",
    "form.error": "Something went wrong while sending. Please try again or write directly to {email}.",
    "form.noBackend": "The form isn't connected to a server yet, so nothing was sent automatically. I opened your email app with a prefilled message — press “Send” there.",
    "err.name": "Please enter your name (at least 2 characters).",
    "err.emailRequired": "Please enter your email address.",
    "err.emailInvalid": "That email address looks invalid — e.g. name@company.com.",
    "err.type": "Please choose a business or project type.",
    "err.message": "Please describe your project in a few words (at least 10 characters).",
    "err.consent": "Consent is required to send the enquiry.",
    "mail.subject": "Website enquiry — {name}",
    "mail.name": "Name",
    "mail.email": "Email",
    "mail.type": "Project type",
    "mail.budget": "Budget",
    "mail.message": "Description",
    "mail.generic": "Website enquiry",

    "footer.desc": "An independent web studio from Bulgaria. Modern websites for businesses and entrepreneurs.",
    "footer.nav": "Navigation",
    "footer.contact": "Contact",
    "footer.rights": "© {year} NextPage Studio. All rights reserved.",
    "footer.privacy": "Privacy policy",
    "footer.top": "Back to top",
  },
};



(() => {
  const DEFAULT_LANG = "bg";
  const STORAGE_KEY = "nps-lang";
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const state = {
    lang: DEFAULT_LANG,
    filter: "all",
    expanded: true,
    status: null,        // { type, key, vars } for the form status message
    lastTrigger: null,   // element that opened the modal (focus is returned to it)
  };

  /* ---------- helpers ---------- */
  const safeGet = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const safeSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable — fine */ } };

  function t(key, vars = {}) {
    const dict = I18N[state.lang] || I18N[DEFAULT_LANG];
    let str = dict[key] ?? I18N[DEFAULT_LANG][key] ?? key;
    const all = { year: new Date().getFullYear(), certs: CERTIFICATES.length, ...vars };
    return str.replace(/\{(\w+)\}/g, (m, k) => (k in all ? all[k] : m));
  }
  /** Resolve a value that may be a plain string or { bg, en }. */
  const loc = (v) => (v && typeof v === "object" ? (v[state.lang] ?? v[DEFAULT_LANG] ?? "") : (v ?? ""));
  const catLabel = (key) => (CATEGORIES[key] ? loc(CATEGORIES[key]) : key);
  const prettyUrl = (u) => u.replace(/^https?:\/\//i, "").replace(/\/$/, "");

  function el(tag, props = {}, children = []) {
    const node = document.createElement(tag);
    Object.entries(props).forEach(([k, v]) => {
      if (v === undefined || v === null || v === false) return;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v === true ? "" : v);
    });
    [].concat(children).forEach((c) => c && node.append(c));
    return node;
  }

  /* ---------- 1. Language ---------- */
  function applyTranslations() {
    $$("[data-i18n]").forEach((n) => { n.textContent = t(n.dataset.i18n); });
    $$("[data-i18n-html]").forEach((n) => { n.innerHTML = t(n.dataset.i18nHtml); });
    $$("[data-i18n-attr]").forEach((n) => {
      n.dataset.i18nAttr.split(";").forEach((pair) => {
        const idx = pair.indexOf(":");
        if (idx > 0) n.setAttribute(pair.slice(0, idx).trim(), t(pair.slice(idx + 1).trim()));
      });
    });
  }

  function setLang(lang, { persist = true } = {}) {
    if (!I18N[lang]) lang = DEFAULT_LANG;
    state.lang = lang;
    root.lang = lang;
    if (persist) safeSet(STORAGE_KEY, lang);
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    applyTranslations();
    renderAll();
  }

  function initLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    const saved = safeGet(STORAGE_KEY);
    const initial = [fromUrl, saved].find((l) => l && I18N[l]) || DEFAULT_LANG;
    $$("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    setLang(initial, { persist: false });
  }

  /* ---------- 2. Navigation ---------- */
  function initNav() {
    const header = $(".site-header");
    const nav = $("#site-nav");
    const btn = $("#menu-btn");
    if (!header || !nav || !btn) return;
    const mq = window.matchMedia("(max-width: 1099px)");

    const setMenu = (open) => {
      nav.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    };
    btn.addEventListener("click", () => setMenu(btn.getAttribute("aria-expanded") !== "true"));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); btn.focus(); }
    });
    document.addEventListener("click", (e) => {
      if (nav.classList.contains("is-open") && !header.contains(e.target)) setMenu(false);
    });
    (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(() => setMenu(false));

    // Active link highlight (scroll-spy)
    const spyMap = { home: "home", work: "work", services: "services", process: "services", about: "about", contact: "contact" };
    const setActive = (key) => {
      $$("[data-nav]").forEach((a) => {
        if (a.dataset.nav === key) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting && spyMap[en.target.id]) setActive(spyMap[en.target.id]); });
      }, { rootMargin: "-40% 0px -55% 0px" });
      $$("main section[id]").forEach((s) => io.observe(s));
    }

    // Header border + back-to-top
    const toTop = $("#to-top");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        header.classList.toggle("is-scrolled", y > 8);
        if (toTop) toTop.classList.toggle("is-visible", y > 700);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 3. Reveal on scroll ---------- */
  function initReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window) || reduceMotion.matches) {
      items.forEach((i) => i.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    items.forEach((i) => io.observe(i));
  }

  /* ---------- 4. Portfolio ---------- */
  function featuredList() {
    const f = PROJECTS.map((p, i) => ({ p, i })).filter((x) => x.p.featured).slice(0, SITE_CONFIG.featuredMax);
    return f.length ? f : PROJECTS.map((p, i) => ({ p, i })).slice(0, SITE_CONFIG.featuredMax);
  }

  function visibleProjects() {
    const all = PROJECTS.map((p, i) => ({ p, i }));
    if (state.filter !== "all") return all.filter((x) => x.p.category === state.filter);
    return state.expanded ? all : featuredList();
  }

  function renderFilters() {
    const box = $("#filters");
    if (!box) return;
    const cats = [...new Set(PROJECTS.map((p) => p.category))];
    const entries = [["all", t("work.all"), PROJECTS.length], ...cats.map((c) => [c, catLabel(c), PROJECTS.filter((p) => p.category === c).length])];
    box.replaceChildren(...entries.map(([key, label, n]) =>
      el("button", { type: "button", class: "filter", "data-filter": key, "aria-pressed": String(state.filter === key) }, [
        document.createTextNode(label),
        el("span", { class: "filter__n", text: String(n), "aria-hidden": "true" }),
      ])
    ));
  }

  function mediaPlaceholder(index) {
    return el("div", { class: "ph", "aria-hidden": "true" }, [
      el("div", { class: "ph__lines" }, [el("i"), el("i"), el("i")]),
      el("div", { class: "ph__box" }),
      el("span", { class: "ph__num", text: String(index + 1).padStart(2, "0") }),
    ]);
  }

  const PLAY_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

  function buildCard({ p, i }) {
    const title = loc(p.title);
    const media = el("div", { class: "card__media", "data-open": String(i) });
    if (p.placeholder) media.append(el("span", { class: "card__badge", text: t("work.placeholder") }));
    if (p.thumbnail) {
      media.append(el("img", {
        src: p.thumbnail, alt: p.alt ? loc(p.alt) : t("work.thumbAlt", { title }),
        width: "800", height: "500", loading: "lazy", decoding: "async",
      }));
    } else {
      media.append(mediaPlaceholder(i));
    }
    if (p.video) {
      const badge = el("span", { class: "card__video", "aria-hidden": "true" });
      badge.innerHTML = PLAY_ICON;
      media.append(badge);
    }

    const actions = el("div", { class: "card__actions" });
    if (p.liveUrl) {
      actions.append(el("a", {
        class: "btn btn--primary btn--sm", href: p.liveUrl, target: "_blank", rel: "noopener noreferrer",
        "aria-label": t("work.viewLabel", { title }),
      }, [document.createTextNode(t("work.view") + " "), el("span", { "aria-hidden": "true", text: "↗" })]));
    }
    actions.append(el("button", {
      type: "button", class: "btn btn--ghost btn--sm", "data-open": String(i),
      "aria-label": t("work.detailsLabel", { title }), text: t("work.details"),
    }));
    if (p.video) {
      actions.append(el("button", {
        type: "button", class: "btn btn--ghost btn--sm", "data-open": String(i), "data-play": "1",
        "aria-label": t("work.playLabel", { title }), text: t("work.play"),
      }));
    }

    const tags = (p.technologies && p.technologies.length)
      ? el("ul", { class: "tags", "aria-label": "Technologies" }, p.technologies.map((x) => el("li", { text: x })))
      : null;

    return el("li", { class: "card" }, [
      media,
      el("div", { class: "card__body" }, [
        el("p", { class: "card__cat", text: catLabel(p.category) }),
        el("h3", { class: "card__title", text: title }),
        el("p", { class: "card__desc", text: loc(p.description) }),
        tags,
        actions,
      ]),
    ]);
  }

  function renderGrid() {
    const grid = $("#project-grid");
    if (!grid) return;
    const list = visibleProjects();
    grid.replaceChildren(...list.map(buildCard));
    const empty = $("#work-empty");
    if (empty) empty.hidden = list.length > 0;
    const count = $("#work-count");
    if (count) count.textContent = t("work.count", { shown: list.length, total: PROJECTS.length });

    const toggle = $("#work-toggle");
    if (toggle) {
      const canToggle = state.filter === "all" && PROJECTS.length > featuredList().length;
      toggle.hidden = !canToggle;
      toggle.textContent = state.expanded ? t("work.showFeatured") : t("work.showAll", { n: PROJECTS.length });
      toggle.setAttribute("aria-expanded", String(state.expanded));
      toggle.setAttribute("aria-controls", "project-grid");
    }
  }

  function renderWork() { renderFilters(); renderGrid(); }

  function initWork() {
    $$("[data-project-count]").forEach((n) => { n.textContent = String(SITE_CONFIG.projectCount); });

    const filters = $("#filters");
    if (filters) filters.addEventListener("click", (e) => {
      const b = e.target.closest("[data-filter]");
      if (!b) return;
      state.filter = b.dataset.filter;
      renderWork();
      const again = $(`#filters [data-filter="${state.filter}"]`);
      if (again) again.focus();
    });

    const toggle = $("#work-toggle");
    if (toggle) toggle.addEventListener("click", () => {
      state.expanded = !state.expanded;
      renderGrid();
      if (!state.expanded) { const w = $("#work"); if (w) w.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" }); }
    });

    const grid = $("#project-grid");
    if (grid) grid.addEventListener("click", (e) => {
      const opener = e.target.closest("[data-open]");
      if (!opener) return;
      const idx = Number(opener.dataset.open);
      const focusTarget = opener.matches("button") ? opener : opener.closest(".card").querySelector("button[data-open]");
      openModal(PROJECTS[idx], idx, { play: opener.dataset.play === "1", trigger: focusTarget });
    });
  }

  /* ---------- 5. Project modal ---------- */
  function openModal(p, index, { play = false, trigger = null } = {}) {
    const dlg = $("#project-modal");
    if (!dlg || typeof dlg.showModal !== "function") {
      if (p.liveUrl) window.open(p.liveUrl, "_blank", "noopener");
      return;
    }
    state.lastTrigger = trigger;
    const title = loc(p.title);
    const media = $("#modal-media");
    media.replaceChildren();

    let video = null;
    if (p.video) {
      video = el("video", {
        controls: true, playsinline: true, preload: "metadata",
        poster: p.thumbnail || null, "aria-label": t("work.videoLabel", { title }),
      });
      video.src = p.video;
      video.addEventListener("error", () => media.append(el("p", { class: "modal__note", role: "alert", text: t("work.videoError") })), { once: true });
      media.append(video);
    } else if (p.thumbnail) {
      media.append(el("img", { src: p.thumbnail, alt: p.alt ? loc(p.alt) : t("work.thumbAlt", { title }), width: "1280", height: "720" }));
    } else {
      media.append(mediaPlaceholder(index));
    }

    $("#modal-meta").textContent = catLabel(p.category) + (p.placeholder ? " · " + t("work.placeholder") : "");
    $("#modal-title").textContent = title;
    $("#modal-desc").textContent = loc(p.description);
    $("#modal-tech").replaceChildren(...(p.technologies || []).map((x) => el("li", { text: x })));

    const actions = $("#modal-actions");
    actions.replaceChildren();
    if (p.liveUrl) {
      actions.append(el("a", { class: "btn btn--primary", href: p.liveUrl, target: "_blank", rel: "noopener noreferrer", "aria-label": t("work.viewLabel", { title }) },
        [document.createTextNode(t("work.view") + " "), el("span", { "aria-hidden": "true", text: "↗" })]));
    }
    actions.append(el("button", { type: "button", class: "btn btn--ghost", "data-close": "1", text: t("work.close") }));

    dlg.showModal();
    root.classList.add("modal-open");
    if (video && play) video.play().catch(() => { /* user can press play */ });
  }

  function initModal() {
    const dlg = $("#project-modal");
    if (!dlg) return;
    const closeBtn = $("#modal-close");
    if (closeBtn) closeBtn.addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg || e.target.closest("[data-close]")) dlg.close();   // backdrop or inner close button
    });
    dlg.addEventListener("close", () => {
      const v = $("video", dlg);
      if (v) { v.pause(); v.removeAttribute("src"); v.load(); }
      $("#modal-media").replaceChildren();
      root.classList.remove("modal-open");
      if (state.lastTrigger && document.contains(state.lastTrigger)) state.lastTrigger.focus();
    });
  }

  /* ---------- 6. Prices, portrait, certificates, contact links ---------- */
  function renderPrices() {
    $$("[data-price-key]").forEach((n) => {
      const v = loc(PRICES[n.dataset.priceKey]);
      n.textContent = v;
      n.hidden = !v;
    });
  }

  function renderPortrait() {
    const fig = $("#portrait");
    const cfg = SITE_CONFIG.portrait;
    if (!fig || !cfg || !cfg.src) return;
    let img = $("img", fig);
    if (!img) {
      img = el("img", { src: cfg.src, width: "800", height: "1000", loading: "lazy", decoding: "async" });
      fig.replaceChildren(img);
    }
    img.alt = loc(cfg.alt);
  }

  function formatDate(c) {
    if (!c.m) return String(c.y);
    try {
      return new Intl.DateTimeFormat(state.lang === "bg" ? "bg-BG" : "en-GB", { month: "long", year: "numeric", timeZone: "UTC" })
        .format(new Date(Date.UTC(c.y, c.m - 1, 1)));
    } catch (e) {
      return String(c.m).padStart(2, "0") + "/" + c.y;
    }
  }

  function renderCerts() {
    const list = $("#certs-list");
    if (!list) return;
    list.replaceChildren(...CERTIFICATES.map((c) => {
      const meta = [c.issuer, formatDate(c)].filter(Boolean).join(" · ");
      return el("li", {}, [el("strong", { text: c.name }), el("span", { text: meta })]);
    }));
  }

  function contactItems() {
    const c = SITE_CONFIG.contact;
    const items = [];
    if (c.email) items.push({ label: t("contact.email"), text: c.email, href: "mailto:" + c.email });
    if (c.phone) items.push({ label: t("contact.phone"), text: c.phone, href: "tel:" + c.phone.replace(/[^\d+]/g, "") });
    if (c.linkedin) items.push({ label: "LinkedIn", text: prettyUrl(c.linkedin), href: c.linkedin, ext: true });
    if (c.github) items.push({ label: "GitHub", text: prettyUrl(c.github), href: c.github, ext: true });
    (c.other || []).forEach((o) => { if (o && o.url) items.push({ label: o.label || prettyUrl(o.url), text: prettyUrl(o.url), href: o.url, ext: true }); });
    return items;
  }

  function renderContact() {
    const items = contactItems();
    const ext = (it) => (it.ext ? { target: "_blank", rel: "noopener noreferrer" } : {});

    const main = $("#contact-links");
    if (main) main.replaceChildren(...items.map((it) =>
      el("li", {}, [el("a", { href: it.href, ...ext(it) }, [el("span", { class: "lbl", text: it.label }), el("span", { class: "val", text: it.text })])])
    ));

    const foot = $("#footer-contact-links");
    if (foot) foot.replaceChildren(...items.map((it) =>
      el("li", {}, [el("a", { href: it.href, ...ext(it), text: it.ext ? it.label : it.text })])
    ));

    const fallback = $("#email-fallback");
    if (fallback && SITE_CONFIG.contact.email) {
      fallback.href = "mailto:" + SITE_CONFIG.contact.email + "?subject=" + encodeURIComponent(t("mail.generic"));
    }
  }

  /* ---------- 7. Contact form ---------- */
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const RULES = {
    name: (f) => (f.name.value.trim().length < 2 ? "err.name" : ""),
    email: (f) => {
      const v = f.email.value.trim();
      if (!v) return "err.emailRequired";
      return EMAIL_RE.test(v) ? "" : "err.emailInvalid";
    },
    type: (f) => (f.type.value ? "" : "err.type"),
    message: (f) => (f.message.value.trim().length < 10 ? "err.message" : ""),
    consent: (f) => (f.consent.checked ? "" : "err.consent"),
  };

  function setFieldError(form, name, key) {
    const input = form.elements[name];
    const msg = $("#f-" + name + "-error");
    if (!input || !msg) return;
    if (key) {
      msg.textContent = t(key);
      msg.dataset.key = key;
      msg.hidden = false;
      input.setAttribute("aria-invalid", "true");
    } else {
      msg.textContent = "";
      delete msg.dataset.key;
      msg.hidden = true;
      input.removeAttribute("aria-invalid");
    }
  }

  function validateField(form, name) {
    const key = RULES[name](form.elements);
    setFieldError(form, name, key);
    return !key;
  }

  function showStatus(type, key, vars) {
    const box = $("#form-status");
    if (!box) return;
    state.status = { type, key, vars };
    box.className = "form__status is-" + type;
    box.textContent = t(key, vars);
    box.hidden = false;
  }
  function clearStatus() {
    const box = $("#form-status");
    state.status = null;
    if (box) { box.hidden = true; box.textContent = ""; }
  }

  function initForm() {
    const form = $("#contact-form");
    if (!form) return;
    const names = Object.keys(RULES);
    const touched = new Set();

    names.forEach((name) => {
      const input = form.elements[name];
      if (!input) return;
      const evt = input.type === "checkbox" || input.tagName === "SELECT" ? "change" : "input";
      input.addEventListener("blur", () => { touched.add(name); validateField(form, name); });
      input.addEventListener(evt, () => { if (touched.has(name)) validateField(form, name); });
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearStatus();
      const invalid = names.filter((n) => !validateField(form, n));
      names.forEach((n) => touched.add(n));
      if (invalid.length) {
        form.elements[invalid[0]].focus();
        showStatus("error", "form.fixErrors");
        return;
      }
      if (form.elements._gotcha && form.elements._gotcha.value) return;   // honeypot: silently drop bots

      const typeLabel = form.elements.type.selectedOptions[0] ? form.elements.type.selectedOptions[0].textContent : form.elements.type.value;
      const data = {
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        type: form.elements.type.value,
        typeLabel,
        budget: form.elements.budget.value.trim(),
        message: form.elements.message.value.trim(),
        language: state.lang,
      };

      if (FORM_CONFIG.endpoint) {
        const submit = $("#form-submit");
        const label = submit.firstElementChild;
        submit.disabled = true;
        const prev = label.textContent;
        label.removeAttribute("data-i18n");
        label.textContent = t("form.sending");
        try {
          const res = await fetch(FORM_CONFIG.endpoint, {
            method: FORM_CONFIG.method || "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(data),
          });
          if (!res.ok) throw new Error("HTTP " + res.status);
          form.reset();
          touched.clear();
          names.forEach((n) => setFieldError(form, n, ""));
          showStatus("ok", "form.success");
        } catch (err) {
          showStatus("error", "form.error", { email: SITE_CONFIG.contact.email });
        } finally {
          submit.disabled = false;
          label.setAttribute("data-i18n", "form.submit");
          label.textContent = prev && prev !== t("form.sending") ? t("form.submit") : t("form.submit");
        }
        return;
      }

      // No backend configured: be honest, fall back to the visitor's email app.
      const lines = [
        t("mail.name") + ": " + data.name,
        t("mail.email") + ": " + data.email,
        t("mail.type") + ": " + typeLabel,
        data.budget ? t("mail.budget") + ": " + data.budget : "",
        "",
        t("mail.message") + ":",
        data.message,
      ].filter((l, i, a) => l !== "" || a[i - 1] !== "");
      const href = "mailto:" + SITE_CONFIG.contact.email +
        "?subject=" + encodeURIComponent(t("mail.subject", { name: data.name })) +
        "&body=" + encodeURIComponent(lines.join("\n"));
      showStatus("info", "form.noBackend");
      window.location.href = href;
    });
  }

  function rerenderFormTexts() {
    const form = $("#contact-form");
    if (!form) return;
    $$(".field__error[data-key]", form).forEach((n) => { n.textContent = t(n.dataset.key); });
    if (state.status) showStatus(state.status.type, state.status.key, state.status.vars);
  }

  /* ---------- render everything language-dependent ---------- */
  function renderAll() {
    renderWork();
    renderPrices();
    renderPortrait();
    renderCerts();
    renderContact();
    rerenderFormTexts();
    // The modal is closed while the toggle is used, so no need to refresh it here.
  }

  /* ---------- boot ---------- */
  initWork();
  initModal();
  initForm();
  initNav();
  initReveal();
  initLang();   // last: applies translations and triggers renderAll()
})();

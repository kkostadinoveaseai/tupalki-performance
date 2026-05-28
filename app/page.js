import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Sourced cinematic dark automotive images from Unsplash
  const heroBg = "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1920&auto=format&fit=crop";
  
  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
      title: "Pops & Bangs Tuning за S58",
      category: "АУДИО ТУНИНГ",
    },
    {
      src: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=800&q=80",
      title: "Оптимален Stage 1 — Porsche 911 Turbo",
      category: "Увеличение на мощност",
    },
    {
      src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      title: "Индивидуално ремапване на дино стенд",
      category: "Диагностика и софтуер",
    },
    {
      src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      title: "Цялостна титаниева генерация за вашия спортен автомобил",
      category: "ИЗПУСКАТЕЛНА СИСТЕМА",
    },
    {
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      title: "Премахване на DPF / EGR софтуерно",
      category: "Екологични системи",
    },
    {
      src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      title: "Remap на вашето BMW M5",
      category: "STAGE 2 ТУНИНГ",
    },
  ];

  const offers = [
    {
      title: "Чип тунинг (Stage 1 & Stage 2)",
      description: "Индивидуално разработен софтуер за вашия компютър (ECU), извличащ оптималния потенциал на двигателя по безопасен начин.",
      icon: (
        <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Намален разход на гориво",
      description: "Специализиран ECO тунинг, осигуряващ до 15% намаление на горивния разход чрез повишаване на въртящия момент при по-ниски обороти.",
      icon: (
        <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 12V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Повишена мощност и въртящ момент",
      description: "Динамично ускорение и линейна тяга в целия диапазон на оборотите. Безопасно повишение на конските сили до 40%.",
      icon: (
        <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      ),
    },
    {
      title: "Компютърна диагностика",
      description: "Пълно сканиране на автомобила преди и след ремапа с последно поколение дилърска апаратура, за да гарантираме перфектно здраве.",
      icon: (
        <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-brand-dark overflow-hidden flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-black">
        {/* Full-width cinematic dark car background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Premium Tuned Sports Car Background"
            fill
            className="object-cover opacity-35 object-center"
            priority
          />
          {/* Glowing dark gradients for premium cinematic contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center sm:text-left w-full flex flex-col justify-center h-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Warranty Badge in Hero */}
            <div className="inline-flex items-center space-x-2 bg-brand-accent border border-brand-accent rounded-full px-4 py-1.5 self-center sm:self-start shadow-[0_0_15px_rgba(225,6,0,0.3)]">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span className="text-xs font-heading font-black text-white tracking-widest uppercase">
                Единствената чип тунинг гаранция в България
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white leading-none tracking-tight">
              Отключете истинската <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-tupalki-red-light">
                мощност
              </span> на вашия автомобил
            </h1>

            <p className="font-body text-neutral-300 text-base sm:text-xl leading-relaxed max-w-2xl">
              Професионален софтуерен ремап и индивидуален чип тунинг без компромиси. Повишаваме мощността, подобряваме динамиката и редуцираме разхода с официална писмена гаранция.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
              <Link
                href="/contacts"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full font-heading font-extrabold text-sm tracking-widest uppercase bg-brand-accent text-white border border-brand-accent shadow-[0_0_20px_rgba(225,6,0,0.3)] transition-all hover:bg-brand-accent-hover hover:shadow-[0_0_30px_rgba(225,6,0,0.6)] hover:scale-105"
              >
                Свържете се с нас
              </Link>
              <Link
                href="/products"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full font-heading font-bold text-sm tracking-wider uppercase bg-brand-gray/80 text-white border border-brand-border backdrop-blur-sm transition-all hover:bg-brand-gray hover:border-neutral-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              >
                Вижте услугите
              </Link>
            </div>

          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Превърти надолу</span>
          <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Thin premium white divider line between sections */}
      <div className="w-full h-[1px] bg-white/10" />


      {/* 2. WHAT WE OFFER */}
      <section className="py-24 bg-brand-gray border-t border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-heading font-bold text-brand-accent tracking-widest uppercase">
              Нашите Услуги
            </h2>
            <p className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Какво предлагаме за вашия <span className="text-brand-accent">автомобил</span>
            </p>
            {/* White accent line under section heading */}
            <div className="w-[60px] h-[3px] bg-white mx-auto mt-4" />
            <p className="text-neutral-400 mt-4">
              Всеки автомобил преминава през пълен набор от тестове преди да бъде модифициран софтуерно с прецизни параметри.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-brand-dark border border-brand-border transition-all duration-300 hover:border-brand-accent hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(225,6,0,0.15)]"
              >
                <div className="w-16 h-16 rounded-xl bg-brand-gray border border-brand-border flex items-center justify-center mb-6 group-hover:bg-brand-accent/15 group-hover:border-brand-accent/30 transition-all duration-300">
                  {offer.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-brand-accent transition-colors duration-200">
                  {offer.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thin premium white divider line between sections */}
      <div className="w-full h-[1px] bg-white/10" />

      {/* 3. WHY CHOOSE US (Highlighting Warranty) */}
      <section className="py-24 bg-brand-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Col: Core value prop card */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-heading font-bold text-brand-accent tracking-widest uppercase">
                Защо нас?
              </h2>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Безкомпромисно <span className="text-brand-accent">качество</span> и пълна безопасност
              </h3>
              {/* White accent line left-aligned */}
              <div className="w-[60px] h-[3px] bg-white mt-4" />
              <p className="text-neutral-400 leading-relaxed mt-4">
                Ние не използваме „готови“ и генерични софтуерни файлове, свалени от интернет. Всяка кола се мапва персонално в зависимост от състоянието на агрегата и изискванията на клиента.
              </p>
              
              {/* Massive Warranty Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 border border-brand-accent/40 relative shadow-[0_0_20px_rgba(225,6,0,0.15)] hover:border-brand-accent transition-all duration-300">
                <span className="absolute -top-3 -left-3 px-3 py-1 rounded bg-brand-accent font-heading font-extrabold text-[10px] text-white tracking-widest uppercase shadow">
                  ЛИДЕР В БЪЛГАРИЯ
                </span>
                <p className="font-heading font-extrabold text-white text-base mb-2">
                  Единствените с Писмена Гаранция!
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Ние сме единственото чип тунинг студио в цяла България, което предлага <strong className="text-white">100% официална гаранция</strong> на разработения софтуер и безпроблемна работа на ECU модула!
                </p>
              </div>
            </div>


            {/* Right Col: 4 bullet points */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gray border border-brand-border flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base mb-1">Писмена гаранция</h4>
                  <p className="text-xs text-neutral-400">Гаранция за качеството на разработения софтуер.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gray border border-brand-border flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base mb-1">Спестяване на гориво</h4>
                  <p className="text-xs text-neutral-400">Намален разход на гориво при спокойно шофиране.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gray border border-brand-border flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base mb-1">Професионален екип</h4>
                  <p className="text-xs text-neutral-400">Дългогодишен опит в ремапването на всякакви двигатели.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gray border border-brand-border flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base mb-1">Модерна апаратура</h4>
                  <p className="text-xs text-neutral-400">Лицензиран хардуер за безопасна комуникация с ECU.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Thin premium white divider line between sections */}
      <div className="w-full h-[1px] bg-white/10" />

      {/* 4. HOW WE WORK (Step-by-step process) */}
      <section className="py-24 bg-brand-gray border-t border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-heading font-bold text-brand-accent tracking-widest uppercase">
              Процесът
            </h2>
            <p className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Как работим <span className="text-brand-accent">стъпка по стъпка</span>
            </p>
            {/* White accent line under section heading */}
            <div className="w-[60px] h-[3px] bg-white mx-auto mt-4" />
            <p className="text-neutral-400 mt-4">
              Следваме строги професионални стъпки, за да осигурим безпроблемни резултати.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Flow Connecting Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-brand-border -translate-y-8 z-0" />

            {/* Step 1 */}
            <div className="relative z-10 text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-brand-accent text-white border-2 border-brand-accent font-heading font-black text-xl flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(225,6,0,0.3)] group-hover:bg-brand-accent-hover group-hover:border-brand-accent-hover group-hover:shadow-[0_0_20px_rgba(225,6,0,0.5)] transition-all duration-300">
                01
              </div>
              <h3 className="font-heading font-bold text-white text-lg">Компютърна диагностика</h3>
              <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed">
                Пълно сканиране на автомобила за евентуални грешки и измерване на параметрите в реално време преди каквато и да е намеса.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-brand-accent text-white border-2 border-brand-accent font-heading font-black text-xl flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(225,6,0,0.3)] group-hover:bg-brand-accent-hover group-hover:border-brand-accent-hover group-hover:shadow-[0_0_20px_rgba(225,6,0,0.5)] transition-all duration-300">
                02
              </div>
              <h3 className="font-heading font-bold text-white text-lg">Индивидуален софтуер</h3>
              <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed">
                Сваляне на фабричната софтуерна карта на ECU и нейното прецизно модифициране според спецификациите на вашия автомобил.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-brand-accent text-white border-2 border-brand-accent font-heading font-black text-xl flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(225,6,0,0.3)] group-hover:bg-brand-accent-hover group-hover:border-brand-accent-hover group-hover:shadow-[0_0_20px_rgba(225,6,0,0.5)] transition-all duration-300">
                03
              </div>
              <h3 className="font-heading font-bold text-white text-lg">Програмиране (Ремап)</h3>
              <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed">
                Безопасно качване на новия софтуерен файл в компютъра на автомобила с най-висок клас сертифицирана флаш апаратура.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-brand-accent text-white border-2 border-brand-accent font-heading font-black text-xl flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(225,6,0,0.3)] group-hover:bg-brand-accent-hover group-hover:border-brand-accent-hover group-hover:shadow-[0_0_20px_rgba(225,6,0,0.5)] transition-all duration-300">
                04
              </div>
              <h3 className="font-heading font-bold text-white text-lg">Тест и писмена гаранция</h3>
              <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed">
                Финални тестове в реално време на пътя или на дино стенд. Предаване на автомобила с официална писмена гаранция за софтуера.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Thin premium white divider line between sections */}
      <div className="w-full h-[1px] bg-white/10" />

      {/* 5. OUR WORK (Gallery) */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-heading font-bold text-brand-accent tracking-widest uppercase">
              Галерия
            </h2>
            <p className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Нашата работа и <span className="text-brand-accent">проекти</span>
            </p>
            {/* White accent line under section heading */}
            <div className="w-[60px] h-[3px] bg-white mx-auto mt-4" />
            <p className="text-neutral-400 mt-4">
              Част от успешно оптимизираните от нас автомобили, които вече се радват на перфектно поведение на пътя.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-brand-gray border border-brand-border aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300">
                  <span className="text-[10px] font-heading font-extrabold text-brand-accent tracking-widest uppercase mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-bold text-white text-base md:text-lg tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-brand-accent mt-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-300 delay-150" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thin premium white divider line between sections */}
      <div className="w-full h-[1px] bg-white/10" />

      {/* 6. TESTIMONIALS (Reviews excerpt) */}
      <section className="py-24 bg-brand-gray border-t border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-xs font-heading font-bold text-brand-accent tracking-widest uppercase">
                Отзиви
              </h2>
              <p className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Какво казват <span className="text-brand-accent">доволните клиенти</span>
              </p>
              {/* White accent line left-aligned */}
              <div className="w-[60px] h-[3px] bg-white mt-4" />
            </div>
            <Link
              href="/reviews"
              className="font-heading font-bold text-xs tracking-widest text-brand-accent uppercase hover:text-white transition-colors flex items-center gap-1 group shrink-0"
            >
              Вижте всички отзиви
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Review 1 */}
            <div className="p-8 rounded-2xl bg-brand-dark border border-brand-border hover:border-brand-accent hover:shadow-[0_10px_25px_rgba(225,6,0,0.15)] transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex text-brand-accent space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm text-neutral-300 italic leading-relaxed">
                  "Много съм доволен от ремапа на моето Audi A6 3.0 TDI. Колата стана невероятно еластична, а разходът на извънградско падна с почти 1 литър. Писмената гаранция ми даде пълно спокойствие!"
                </p>
              </div>
              <div className="pt-4 border-t border-brand-border/40">
                <p className="font-heading font-bold text-white text-sm">Георги Димитров</p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Audi A6 3.0 TDI (Stage 1)</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-8 rounded-2xl bg-brand-dark border border-brand-border hover:border-brand-accent hover:shadow-[0_10px_25px_rgba(225,6,0,0.15)] transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex text-brand-accent space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm text-neutral-300 italic leading-relaxed">
                  "Екипът на Tupalki Performance са абсолютни професионалисти. Направиха Stage 2 на моето BMW M4. Колата буквално лети и се държи изключително стабилно. Силно препоръчвам!"
                </p>
              </div>
              <div className="pt-4 border-t border-brand-border/40">
                <p className="font-heading font-bold text-white text-sm">Мартин Колев</p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">BMW M4 Competition (Stage 2)</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-8 rounded-2xl bg-brand-dark border border-brand-border hover:border-brand-accent hover:shadow-[0_10px_25px_rgba(225,6,0,0.15)] transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex text-brand-accent space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm text-neutral-300 italic leading-relaxed">
                  "Премахнаха софтуерно проблемите с DPF и EGR на служебния бус, както и лек ремап за мощност. Работи по-тихо, върви страхотно и не е влизал в авариен режим вече пологун година. Страхотни!"
                </p>
              </div>
              <div className="pt-4 border-t border-brand-border/40">
                <p className="font-heading font-bold text-white text-sm">Иван Петров</p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">VW Crafter 2.0 TDI (Eco-Tuning)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Thin premium white divider line between sections */}
      <div className="w-full h-[1px] bg-white/10" />

      {/* 7. CALL TO ACTION SECTION */}
      <section className="py-24 bg-brand-dark relative">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent opacity-70" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-heading font-extrabold text-brand-accent tracking-widest uppercase">
              Време е за ъпгрейд
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
              Готови ли сте да разгърнете пълния потенциал на вашия <span className="text-brand-accent">автомобил</span>?
            </h2>
            {/* White accent line under section heading */}
            <div className="w-[60px] h-[3px] bg-white mx-auto mt-4" />
            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed mt-4">
              Свържете се с нас още днес за безплатна консултация. Ние ще ви дадем точна информация за очакваното увеличение на конските сили и въртящия момент специално за вашия модел.
            </p>
          </div>

          {/* Exclusive warranty emphasis near call to action */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl bg-brand-gray border border-brand-border hover:border-brand-accent transition-all duration-300 max-w-2xl mx-auto shadow-[0_0_20px_rgba(225,6,0,0.05)]">
            <div className="flex text-brand-accent font-heading font-black text-4xl shrink-0">
              100%
            </div>
            <div className="text-left">
              <span className="text-xs font-heading font-extrabold text-white tracking-wider uppercase block mb-1">
                ГАРAНЦИЯ БЕЗ АНАЛОГ В БЪЛГАРИЯ
              </span>
              <p className="text-xs text-neutral-400 leading-normal">
                Гаранция за софтуера на двигателя. Ако не сте доволни от резултатите, ние ще върнем оригиналния софтуер безплатно в рамките на 14 дни!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contacts"
              className="w-full sm:w-auto text-center px-10 py-5 rounded-full font-heading font-extrabold text-sm tracking-widest uppercase bg-brand-accent text-white border border-brand-accent shadow-[0_0_25px_rgba(225,6,0,0.3)] transition-all hover:bg-brand-accent-hover hover:shadow-[0_0_35px_rgba(225,6,0,0.7)] hover:scale-105"
            >
              Изпратете запитване сега
            </Link>
            <a
              href="tel:+359888888888"
              className="w-full sm:w-auto text-center px-10 py-5 rounded-full font-heading font-extrabold text-sm tracking-wider uppercase bg-brand-gray text-white border border-brand-border transition-all hover:bg-brand-dark hover:border-neutral-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              Обадете се на +359 888 888 888
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}

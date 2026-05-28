import Link from "next/link";

export default function Products() {
  const services = [
    {
      title: "Stage 1 Чип Тунинг",
      subtitle: "Оптимален софтуерен ремап",
      description:
        "Индивидуална настройка на софтуера на двигателя за постигане на максимална еластичност, повишена мощност и по-нисък разход, без да се натоварват детайлите на автомобила. Не изисква никакви хардуерни промени.",
      specs: [
        { label: "Мощност (к.с.)", value: "+20% до +30%" },
        { label: "Въртящ момент", value: "+25% до +35%" },
        { label: "Разход на гориво", value: "Намаление до -1.0л/100км" },
      ],
      price: "Цена от 350 лв.",
      badge: "Най-популярен",
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Stage 2 Чип Тунинг",
      subtitle: "Екстремна мощност за ентусиасти",
      description:
        "Агресивен ремап, съобразен със специфични хардуерни промени по изпускателната и всмукателната система (downpipe, спортен филтър, по-голям интеркулер). Проектиран за максимален адреналин при шофиране.",
      specs: [
        { label: "Мощност (к.с.)", value: "+35% до +50%" },
        { label: "Въртящ момент", value: "+40% до +60%" },
        { label: "Изисква хардуер", value: "Да (Спортна генерация/Филтър)" },
      ],
      price: "Цена при запитване",
      badge: "Спортен клас",
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9" />
        </svg>
      ),
    },
    {
      title: "ЕКО Тунинг (ECO Ремап)",
      subtitle: "Максимално спестяване на гориво",
      description:
        "Специализирана калибрация на картите, насочена изцяло към икономия на гориво и по-висока производителност при ниски обороти. Изключително подходящ за ежедневни коли, бусове, камиони и таксиметрови автопаркове.",
      specs: [
        { label: "Икономия на гориво", value: "до 15% спестяване" },
        { label: "Въртящ момент", value: "+15% до +20%" },
        { label: "Редуциран CO2", value: "Да" },
      ],
      price: "Цена от 300 лв.",
      badge: "Икономичен",
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "DSG & ZF Скоростни Кутии",
      subtitle: "Софтуер за автоматични трансмисии",
      description:
        "Калибриране на софтуера на автоматичната кутия (TCU) за по-бърза смяна на предавките, оптимизиране на точките на превключване, премахване на нежеланото принудително превключване и увеличаване на лимитите на въртящия момент.",
      specs: [
        { label: "Време за превключване", value: "Намалено с до 40%" },
        { label: "Launch Control", value: "Оптимизиран" },
        { label: "Лимит въртящ момент", value: "Повишен спрямо ремапа" },
      ],
      price: "Цена от 250 лв.",
      badge: "Трансмисия",
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: "EGR / DPF / AdBlue решения",
      subtitle: "Софтуерно отстраняване на проблеми",
      description:
        "Безопасно софтуерно премахване и изолиране на филтри за твърди частици (DPF/FAP), системи за рециркулация на изгорелите газове (EGR) и пикаещи карбамидни системи (AdBlue/SCR). Край на аварийните режими и скъпите ремонти.",
      specs: [
        { label: "Авариен режим", value: "Окончателно решен" },
        { label: "Въглеродни наслоявания", value: "Спрени" },
        { label: "Хардуерно съвместимо", value: "Да" },
      ],
      price: "Цена от 150 лв.",
      badge: "Решения",
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
    },
    {
      title: "Дилърска Диагностика",
      subtitle: "Пълен здравен одит на автомобила",
      description:
        "Детайлна компютърна диагностика в реално време на абсолютно всички модули в колата. Проверка на състоянието на турбокомпресор, дюзи, дебитомер, DPF запълване и горивна помпа с най-модерните оригинални дилърски скенери.",
      specs: [
        { label: "Време за диагностика", value: "Около 30-45 минути" },
        { label: "Проверени системи", value: "Всички електронни модули" },
        { label: "Живи данни в движение", value: "Включени" },
      ],
      price: "Цена: 60 лв.",
      badge: "Контрол",
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Pop & Bang / Попкорн ефект",
      subtitle: "Спортен звук от изпускателната система",
      description:
        "Софтуерна промяна на ъгъла на запалването при отпускане педала на газта, което създава агресивни детонации в генерацията тип 'пуканки' или 'брейн-бенг'. Настройва се така, че да работи само при активиран спортен режим.",
      specs: [
        { label: "Звуков ефект", value: "Агресивен / Регулируем" },
        { label: "Активация", value: "Възможна само в Sport/Manual" },
        { label: "Изисква декот / даунпайп", value: "Силно препоръчително" },
      ],
      price: "Цена от 200 лв.",
      badge: "Звук",
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
    },
    {
      title: "ECU Възстановяване / Клониране",
      subtitle: "Софтуерен ремонт на компютри",
      description:
        "Възстановяване на софтуерно блокирани или заключени моторни компютри вследствие на неуспешен опит за флаш с нелицензирани уреди. Професионално клониране на данни от повреден компютър към здрав втора употреба.",
      specs: [
        { label: "Метод на работа", value: "Bench / Boot mode" },
        { label: "Клониране на имобилайзер", value: "Да (100% копие)" },
        { label: "ECU поддръжка", value: "Bosch, Continental, Marelli" },
      ],
      price: "Цена при запитване",
      badge: "Възстановяване",
      icon: (
        <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-brand-dark min-h-screen py-20 flex flex-col w-full">
      {/* Header section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <span className="text-xs font-heading font-extrabold text-brand-accent tracking-widest uppercase">
          Професионални решения
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight mt-3 mb-6">
          Услуги и Софтуерен Ремап
        </h1>
        <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Всяка наша софтуерна модификация е резултат от безброй часове анализи и фини корекции на горивните и авансови карти. Ние предлагаме безкомпромисна работа на мотора и единствената писмена гаранция в цяла България.
        </p>

        {/* Global Warranty Highlight Banner */}
        <div className="mt-8 max-w-3xl mx-auto bg-brand-gray border border-brand-border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between text-left gap-6 hover:border-brand-accent/30 transition-all duration-300">
          <div className="space-y-1">
            <span className="text-[10px] font-heading font-extrabold text-brand-accent tracking-wider uppercase block">
              УНИКАЛНО ПРЕДИМСТВО ЗА СТРАНАТА
            </span>
            <h3 className="font-heading font-extrabold text-white text-base">
              Официална Писмена Гаранция
            </h3>
            <p className="text-xs text-neutral-400 max-w-xl">
              Ние сме единствените в цяла България, които предлагат официална писмена гаранция за софтуера на чип тунинга. Вашият мотор е в напълно сигурни ръце.
            </p>
          </div>
          <div className="shrink-0 bg-brand-accent/10 border border-brand-accent/20 rounded-full px-5 py-2.5 text-brand-accent font-heading font-black text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(255,62,0,0.05)]">
            100% Сигурност
          </div>
        </div>
      </div>

      {/* Grid of detailed services cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-brand-gray border border-brand-border p-8 hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Corner badge overlay */}
              <span className="absolute top-4 right-4 bg-brand-dark border border-brand-border text-[9px] font-heading font-bold text-neutral-400 px-2.5 py-1 rounded-full uppercase tracking-wider group-hover:text-brand-accent group-hover:border-brand-accent/30 transition-colors">
                {service.badge}
              </span>

              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-center group-hover:bg-brand-accent/10 group-hover:border-brand-accent/30 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-brand-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <span className="text-[11px] text-neutral-500 uppercase tracking-widest font-semibold">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Specs block layout */}
                <div className="grid grid-cols-3 gap-2 bg-brand-dark border border-brand-border/60 rounded-xl p-4 mb-6">
                  {service.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="text-center">
                      <span className="text-[10px] text-neutral-500 block mb-1 uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-xs font-heading font-bold text-white tracking-wide">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and CTA Row */}
              <div className="pt-6 border-t border-brand-border/40 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-[10px] text-neutral-500 block uppercase tracking-widest">
                    Ориентировъчно
                  </span>
                  <span className="font-heading font-extrabold text-lg text-white group-hover:text-brand-accent transition-colors">
                    {service.price}
                  </span>
                </div>
                <Link
                  href="/contacts"
                  className="px-6 py-3 rounded-full font-heading font-bold text-xs tracking-wider uppercase bg-brand-dark hover:bg-brand-accent hover:text-white border border-brand-border hover:border-brand-accent transition-all duration-300"
                >
                  Запитване
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

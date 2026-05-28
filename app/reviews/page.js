import Link from "next/link";

export default function Reviews() {
  const reviews = [
    {
      name: "Калоян Иванов",
      car: "BMW 530d G30 (Stage 1)",
      rating: 5,
      date: "25 Май, 2026",
      text: "Изключително коректно отношение! Направиха Stage 1 ремап и софтуер на скоростната кутия ZF8. Колата от 265 к.с. отиде на малко над 320 к.с. Ускорението е коренно различно, сменя скоростите моментално. Единствените, които ми дадоха официална писмена гаранция в София!",
    },
    {
      name: "Васил Тодоров",
      car: "Audi A5 2.0 TFSI (Stage 1)",
      rating: 5,
      date: "14 Май, 2026",
      text: "Бях леко скептичен към чип тунинга на бензинов мотор, но момчетата ми обясниха всичко много подробно. Направиха пълна компютърна диагностика преди да започнат. Резултатът е страхотен - колата реагира много по-бързо на газта и разходът падна с около 0.8л на извънградско.",
    },
    {
      name: "Емил Маринов",
      car: "Mercedes GLE 350d (Stage 1 + EGR/DPF Off)",
      rating: 5,
      date: "28 Април, 2026",
      text: "Имах постоянни проблеми с DPF филтъра и влизане в авариен режим. В Tupalki Performance решиха софтуерно проблема окончателно и направиха Stage 1. Вече 10,000 км нямам никакви проблеми, бусът и джипът ми вървят перфектно. Професионалисти със сертифицирана техника!",
    },
    {
      name: "Силвия Петрова",
      car: "VW Golf 7 GTI (Stage 2 + Pop & Bang)",
      rating: 5,
      date: "19 Април, 2026",
      text: "Колата стана истински звяр! Звукът на попкорн ефекта в спортен режим е уникален, а ускорението е брутално. Препоръчвам ги на всеки, който иска качествена настройка на софтуера без риск за мотора. Много чист и спретнат сервиз!",
    },
    {
      name: "Радослав Димитров",
      car: "Skoda Octavia 2.0 TDI (Eco-Tuning)",
      rating: 5,
      date: "05 Април, 2026",
      text: "Закарах таксито ми за ЕКО тунинг с цел икономия на гориво. Резултатът надмина очакванията ми. Разходът в градски условия в София падна от 7.2л на 6.1л на 100км. В същото време колата дърпа много по-добре от ниските обороти. Заслужава си всяка стотинка!",
    },
    {
      name: "Димитър Костадинов",
      car: "Ford Focus 1.5 EcoBoost (Stage 1)",
      rating: 4,
      date: "22 Март, 2026",
      text: "Много съм доволен от крайния резултат. Колата получи допълнителни 35 к.с. и ускорява осезаемо по-бързо. Диагностиката показа перфектни параметри. Единствената причина да дам 4 звезди е, че имаше малко забавяне в часа, но компенсираха с професионално обслужване.",
    },
    {
      name: "Петър Василев",
      car: "Porsche Macan S (Stage 1 + TCU Tune)",
      rating: 5,
      date: "10 Март, 2026",
      text: "Изключително ниво! Работят с лицензиран софтуер, нямат нищо общо с гаражните 'майстори'. Получих писмена гаранция за ECU модула и кутията PDK. Macan-ът стана неузнаваем при междинно ускорение. Заслужават доверие на 100%.",
    },
    {
      name: "Станислав Николов",
      car: "Seat Leon Cupra (Stage 2)",
      rating: 5,
      date: "27 Февруари, 2026",
      text: "Брутален софтуер! Свършиха страхотна работа, съобразиха настройките с моя спортен даунпайп и филтър. Колата извади сериозни коне на дино стенда. Отношението е супер приятелско и професионално. Препоръчвам с две ръце!",
    },
    {
      name: "Ангел Стоянов",
      car: "BMW 320d F30 (Stage 1 + DPF Off)",
      rating: 5,
      date: "12 Февруари, 2026",
      text: "Единствените в България, които дават истинска гаранция за чип тунинг софтуер! Момчетата изолираха DPF и ремапнаха мотора на 225 конски сили. Колата върви леко, няма никакъв пушек или грешки по таблото. Страхотна работа!",
    },
  ];

  return (
    <div className="bg-brand-dark min-h-screen py-20 flex flex-col w-full">
      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <span className="text-xs font-heading font-extrabold text-brand-accent tracking-widest uppercase">
          Обратна връзка
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight mt-3 mb-6">
          Отзиви от Клиенти
        </h1>
        <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Вашето мнение е нашата най-добра визитка. Прочетете какво споделят шофьорите, поверили своите автомобили на нашия екип.
        </p>
      </div>

      {/* Review Metrics Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 w-full">
        <div className="bg-brand-gray border border-brand-border rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Average scorecard */}
          <div className="text-center space-y-2 border-b md:border-b-0 md:border-r border-brand-border/60 pb-8 md:pb-0 md:pr-8">
            <span className="text-5xl font-heading font-black text-white">4.9</span>
            <div className="flex justify-center text-brand-accent text-xl">
              {"★"}{"★"}{"★"}{"★"}{"★"}
            </div>
            <p className="text-xs text-neutral-400 font-medium">Базирано на над 150+ реални оценки</p>
          </div>

          {/* Rating visual breakdown */}
          <div className="space-y-3">
            <div className="flex items-center text-xs text-neutral-400">
              <span className="w-12 shrink-0">5 звезди</span>
              <div className="flex-1 bg-brand-dark rounded-full h-2 mx-3 overflow-hidden">
                <div className="bg-brand-accent h-full w-[95%]" />
              </div>
              <span className="w-8 text-right font-bold text-white">95%</span>
            </div>
            <div className="flex items-center text-xs text-neutral-400">
              <span className="w-12 shrink-0">4 звезди</span>
              <div className="flex-1 bg-brand-dark rounded-full h-2 mx-3 overflow-hidden">
                <div className="bg-brand-accent h-full w-[5%]" />
              </div>
              <span className="w-8 text-right font-bold text-white">5%</span>
            </div>
            <div className="flex items-center text-xs text-neutral-400">
              <span className="w-12 shrink-0">3 звезди</span>
              <div className="flex-1 bg-brand-dark rounded-full h-2 mx-3 overflow-hidden">
                <div className="bg-brand-accent h-full w-0" />
              </div>
              <span className="w-8 text-right font-bold text-white">0%</span>
            </div>
            <div className="flex items-center text-xs text-neutral-400">
              <span className="w-12 shrink-0">2 звезди</span>
              <div className="flex-1 bg-brand-dark rounded-full h-2 mx-3 overflow-hidden">
                <div className="bg-brand-accent h-full w-0" />
              </div>
              <span className="w-8 text-right font-bold text-white">0%</span>
            </div>
          </div>

          {/* Core advantage quick badge */}
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-4">
              <svg className="w-6 h-6 text-brand-accent shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <span className="text-xs font-heading font-extrabold text-white uppercase block mb-0.5">
                  100% ПИСМЕНА ГАРАНЦИЯ
                </span>
                <p className="text-[11px] text-neutral-400 leading-normal">
                  Единственият софтуер в страната с официална гаранция за сигурност.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-brand-gray border border-brand-border flex flex-col justify-between hover:border-brand-accent/30 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
            >
              <div className="space-y-4">
                {/* Rating stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-brand-accent text-base space-x-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <span key={i} className="text-neutral-600">★</span>
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-500 font-medium">
                    {review.date}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-6 border-t border-brand-border/40 mt-6">
                <p className="font-heading font-bold text-white text-sm">
                  {review.name}
                </p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                  {review.car}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action for reviews */}
        <div className="mt-16 text-center space-y-4 max-w-xl mx-auto">
          <p className="text-sm text-neutral-400 leading-normal">
            Имате тунингован автомобил при нас? Споделете вашето мнение в социалните мрежи или ни изпратете отзив.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white font-heading font-extrabold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(255,62,0,0.15)] transition-all hover:scale-105"
          >
            Свържете се за обратна връзка
          </Link>
        </div>
      </div>
    </div>
  );
}

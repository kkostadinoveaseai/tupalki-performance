import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-brand-border">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-brand-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="font-heading font-extrabold text-lg tracking-wider text-white uppercase">
                TUPALKI <span className="text-brand-accent">PERFORMANCE</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Премиум студио за чип тунинг, софтуерен ремап и цялостна диагностика на спортни и масови автомобили. Постигаме максимална ефективност без компромис с ресурса на двигателя.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-brand-gray border border-brand-border flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-brand-gray border border-brand-border flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-brand-gray border border-brand-border flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-accent transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-widest text-white uppercase border-l-2 border-brand-accent pl-3">
              Навигация
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Начало
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors duration-200">
                  Услуги и Цени
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors duration-200">
                  Отзиви на Клиенти
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-white transition-colors duration-200">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-widest text-white uppercase border-l-2 border-brand-accent pl-3">
              Информация
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>гр. София, ул. „Околовръстен път“ 140</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-brand-accent shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+359 888 888 888</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-brand-accent shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>info@tupalki-performance.bg</span>
              </li>
            </ul>
          </div>

          {/* Column 4: USP Warranty badge */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-brand-gray border border-brand-border p-5 relative overflow-hidden group">
              {/* Highlight card design element */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl transition-all group-hover:bg-brand-accent/15" />
              
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-brand-accent animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span className="font-heading font-extrabold text-xs tracking-wider text-white uppercase">
                  ГАРАНЦИЯ ЗА КАЧЕСТВО
                </span>
              </div>
              <p className="text-xs text-neutral-300 font-medium leading-relaxed">
                Ние сме <strong className="text-white text-[13px] font-bold">единствените в цяла България</strong>, които предлагат официална писмена гаранция за нашия софтуер за чип тунинг!
              </p>
              <div className="mt-3 text-[10px] text-brand-accent font-extrabold tracking-widest uppercase">
                100% БЕЗОПАСЕН РЕМАП
              </div>
            </div>
          </div>

        </div>

        {/* Lower Footer section */}
        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© {currentYear} Tupalki Performance. Всички права запазени.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Общи условия</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Политика за поверителност</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.carModel || !formData.message) {
      alert("Моля, попълнете всички задължителни полета.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          carInfo: formData.carModel,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          carModel: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    }
  };


  return (
    <div className="bg-brand-dark min-h-screen py-20 flex flex-col w-full">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <span className="text-xs font-heading font-extrabold text-brand-accent tracking-widest uppercase">
          Контакти
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight mt-3 mb-6">
          Свържете се с Нас
        </h1>
        <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Имате въпроси или искате да запазите час за чип тунинг? Изпратете ни съобщение или се обадете директно.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details & Working Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Info panel */}
            <div className="rounded-2xl bg-brand-gray border border-brand-border p-8 space-y-6">
              <h2 className="font-heading font-extrabold text-xl text-white tracking-tight border-b border-brand-border/60 pb-4">
                Студио София
              </h2>
              
              <ul className="space-y-6 text-sm text-neutral-400">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-dark border border-brand-border flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block mb-0.5">Адрес</span>
                    <span className="text-white text-base">гр. София, ул. „Околовръстен път“ 140</span>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-dark border border-brand-border flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block mb-0.5">Телефон</span>
                    <a href="tel:+359888888888" className="text-white text-base hover:text-brand-accent transition-colors">
                      +359 888 888 888
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-dark border border-brand-border flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block mb-0.5">Имейл</span>
                    <a href="mailto:info@tupalki-performance.bg" className="text-white text-base hover:text-brand-accent transition-colors">
                      info@tupalki-performance.bg
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Working Hours */}
            <div className="rounded-2xl bg-brand-gray border border-brand-border p-8 space-y-4">
              <h2 className="font-heading font-extrabold text-xl text-white tracking-tight border-b border-brand-border/60 pb-4">
                Работно Време
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-neutral-300">
                  <span>Понеделник - Петък:</span>
                  <span className="font-heading font-bold text-white">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span>Събота:</span>
                  <span className="font-heading font-bold text-white">10:00 - 15:00</span>
                </div>
                <div className="flex justify-between items-center text-neutral-400">
                  <span>Неделя:</span>
                  <span className="text-brand-accent font-bold uppercase tracking-wide">Почивен ден</span>
                </div>
              </div>
            </div>

            {/* Exclusive guarantee layout callout */}
            <div className="rounded-2xl bg-gradient-to-br from-brand-accent/10 to-brand-dark border border-brand-border/60 p-6 space-y-2">
              <span className="text-[10px] font-heading font-extrabold text-brand-accent tracking-wider uppercase block">
                БЕЗПЛАТЕН ВРЪЩАЩ ТЕСТ
              </span>
              <h3 className="font-heading font-bold text-white text-sm">
                14 Дни Тестов Период
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Ние вярваме в нашия софтуер. В рамките на 14 дни от ремапа, ако не усетите обещаното повишение, ние ще възстановим фабричните настройки на компютъра ви безплатно.
              </p>
            </div>

          </div>

          {/* Right Column: Contact form with submit interactions (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-brand-gray border border-brand-border p-8 md:p-10 relative">
              
              {status === "success" ? (
                /* Success banner state */
                <div className="py-16 text-center space-y-6 animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-2xl text-white">Запитването е изпратено!</h3>
                    <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                      Благодарим ви! Съобщението ви беше получено успешно. Наш софтуерен специалист ще се свърже с вас по телефон или имейл в рамките на следващия 1 час за безплатна консултация.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider bg-brand-dark border border-brand-border text-neutral-300 hover:text-white hover:border-brand-accent transition-colors"
                  >
                    Изпрати ново запитване
                  </button>
                </div>
              ) : (
                /* Main form layout */
                <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                  <div className="space-y-1">
                    <h2 className="font-heading font-extrabold text-2xl text-white tracking-tight">
                      Бърза Консултация
                    </h2>
                    <p className="text-xs text-neutral-500">
                      Попълнете формата и ще изчислим точните данни за вашия модел. Полетата със (*) са задължителни.
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm animate-fade-in">
                      Възникна грешка. Моля опитайте отново или ни се обадете директно.
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                        Име *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        placeholder="Вашите две имена"
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors disabled:opacity-50"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                        Имейл адрес *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        placeholder="name@example.com"
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone input */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                        Телефон за връзка *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        placeholder="напр. 0888 888 888"
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors disabled:opacity-50"
                      />
                    </div>

                    {/* Car Model input (Highly relevant option) */}
                    <div className="space-y-2">
                      <label htmlFor="carModel" className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                        Автомобил (Марка, модел, година) *
                      </label>
                      <input
                        type="text"
                        name="carModel"
                        id="carModel"
                        required
                        value={formData.carModel}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        placeholder="напр. BMW 530d F10 2014г."
                        className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Message input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                      Вашето съобщение *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      placeholder="Опишете какво искате да постигнете (напр. Stage 1 ремап, премахване на DPF/EGR)..."
                      className="w-full bg-brand-dark border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-full font-heading font-extrabold text-xs tracking-widest uppercase bg-brand-accent text-white border border-brand-accent hover:bg-brand-accent-hover transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-75 disabled:cursor-not-allowed hover:scale-[1.01]"
                  >
                    {status === "loading" ? (
                      <>
                        {/* Loading spinner */}
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Изпращане...</span>
                      </>
                    ) : (
                      <span>Изпрати запитване</span>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* 3. PREMIUM MAP PLACEHOLDER */}
        <div className="mt-16 rounded-2xl bg-brand-gray border border-brand-border overflow-hidden h-[400px] relative group shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
          {/* Stylized vector map background representation */}
          <div className="absolute inset-0 bg-brand-dark flex items-center justify-center opacity-85 select-none overflow-hidden">
            {/* Custom carbon grid streets representation using SVGs */}
            <svg className="w-full h-full text-[#141414] stroke-[#262626] stroke-[1.5] fill-none opacity-50" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="streetGrid" width="120" height="120" patternUnits="userSpaceOnUse">
                  <path d="M 0 60 L 120 60 M 60 0 L 60 120 M 20 20 L 100 100 M 100 20 L 20 100" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#streetGrid)" />
              {/* Extra styling vectors */}
              <circle cx="50%" cy="50%" r="220" className="stroke-brand-border stroke-[1]" />
              <circle cx="50%" cy="50%" r="120" className="stroke-brand-border stroke-[1] stroke-dashed" />
            </svg>
            
            {/* Glowing Map pin emblem */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              {/* Radar ring animation */}
              <div className="absolute w-20 h-20 rounded-full bg-brand-accent/20 animate-ping duration-1000 -top-6" />
              <div className="absolute w-10 h-10 rounded-full bg-brand-accent/30 animate-pulse duration-700 -top-1" />
              
              {/* Pin */}
              <div className="z-10 bg-brand-accent text-white rounded-full p-3 shadow-[0_0_20px_#FF3E00] border border-white/20 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>

              {/* Tag tooltip */}
              <div className="mt-3 bg-brand-gray border border-brand-border rounded-xl px-4 py-2 text-center shadow-lg pointer-events-none">
                <p className="text-[10px] text-brand-accent uppercase tracking-widest font-black">TUPALKI PERFORMANCE</p>
                <p className="text-[11px] text-white">Околовръстен път 140, гр. София</p>
              </div>
            </div>
          </div>
          
          {/* Corner labels */}
          <div className="absolute bottom-4 left-4 bg-brand-dark/85 backdrop-blur border border-brand-border rounded-lg px-3 py-1.5 text-[10px] text-neutral-400">
            Ориентир: До бензиностанцията, посока Младост
          </div>
          <div className="absolute top-4 right-4 bg-brand-dark/85 backdrop-blur border border-brand-border rounded-lg px-3 py-1.5 text-[10px] text-neutral-400 flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Отворен в момента</span>
          </div>
        </div>

      </div>

    </div>
  );
}

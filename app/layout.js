import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Tupalki Performance - Професионален Чип Тунинг & Ремап",
  description: "Премиум чип тунинг студио Tupalki Performance. Увеличете мощността, оптимизирайте разхода на гориво с писмена гаранция — единствените в цяла България!",
  keywords: "чип тунинг, ремап, stage 1, stage 2, еко тунинг, дпф софтуер, егр софтуер, софия чип тунинг, тупалки пърформанс",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bg"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark font-body text-neutral-400">
        <Navbar />
        <div className="flex-grow flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}


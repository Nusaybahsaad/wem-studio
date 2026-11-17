import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Wem Studio - نظام تعلم اللغات ومساحة التدوين",
  description: "منصة تعلم اللغة الإنجليزية ومساحة التدوين اليومية المتكاملة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}

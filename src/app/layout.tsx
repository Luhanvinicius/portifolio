import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luhan Vinicius | Dev Studio - Desenvolvimento de Software",
  description: "Transformamos ideias em código. Desenvolvimento de soluções digitais de alta performance para web, mobile e desktop. Especialistas em Laravel, Next.js, Python e mais.",
  keywords: ["desenvolvimento web", "software", "Laravel", "Next.js", "Python", "mobile", "consultoria TI"],
  authors: [{ name: "Luhan Vinicius" }],
  openGraph: {
    title: "Luhan Vinicius | Dev Studio",
    description: "Transformamos ideias em código. Desenvolvimento de soluções digitais de alta performance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="font-syne antialiased">
        {children}
      </body>
    </html>
  );
}


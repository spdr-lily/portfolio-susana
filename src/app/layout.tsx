import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Susana Campelo | Data Scientist",
  description:
    "Portfólio profissional de Ciência de Dados — soluções inteligentes com Machine Learning, Engenharia de Dados e IA para apoio à decisão clínica.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "Data Engineer",
    "Portfolio",
    "Python",
    "FastAPI",
    "Susana Campelo",
  ],
  openGraph: {
    title: "Susana Campelo | Data Scientist",
    description:
      "Portfólio profissional de Ciência de Dados com projetos em ML, NLP e sistemas de apoio à decisão.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body><ClientLayout>{children}</ClientLayout></body>
    </html>
  );
}

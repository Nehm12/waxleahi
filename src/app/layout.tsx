import type { Metadata } from "next";
import "./global.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "WA XLE AHI - Courses à domicile 24h/24, 7j/7",
  description: "Service de courses à domicile disponible 24h/24 pour seniors, PMR et personnes en difficulté au Bénin. Commandez via WhatsApp, on s'occupe du reste.",
  keywords: "courses à domicile, livraison 24h, seniors, PMR, service, Cotonou, Bénin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-screen flex flex-col bg-brand-light text-brand-dark">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

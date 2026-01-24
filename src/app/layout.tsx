'use client';

import "./globals.css";
import { cinzel, montserrat } from "./ui/fonts";
import NavLinks from "./ui/navLinks";
import ClientLayout from "./ui/clientLayout";
import Image from "next/image";
import { companyInfo } from "./companyInfo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        <div className="flex min-h-screen flex-col">

          <div className="flex h-40 md:h-72 items-center bg-opacity-40 bg-blue-500 p-2 md:p-4">
            <div className="flex items-center relative">
              <Image
                src="/assets/logo1.png"
                width={600}
                height={600}
                alt="logo"
                className="h-40 w-40 md:h-80 md:w-80 object-contain mix-blend-multiply"
                priority
              />
              <h1
                className={`${cinzel.className} text-blue-950 font-semibold text-lg md:text-3xl leading-[0.9] -ml-4 md:-ml-14 mt-4 md:mt-12 tracking-wide`}
              >
                {companyInfo?.name
                  ? `${companyInfo.name.slice(3)} de Empresas y PYMES`
                  : "Cargando..."}
              </h1>
            </div>
            <a
              className="text-white text-base md:text-xl ml-auto mt-24"
              href={`tel:${companyInfo.phone}`}
            >
              Contáctanos
            </a>
          </div>
          <header>
            <nav className='flex gap-2 p-2'>
              <NavLinks />
            </nav>
          </header>

          <ClientLayout>
            {children}
          </ClientLayout>
        </div>
        <footer className="text-sm text-center p-4">
          <a href="/terminosYCondiciones">Aviso Legal</a> ·
          <a href="/politicaDePrivacidad">Política de Privacidad</a> ·
          <a href="/cookies">Política de Cookies</a>
        </footer>

      </body>
    </html>
  );
}

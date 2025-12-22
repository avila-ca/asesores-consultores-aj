'use client';

import "./globals.css";
import { montserrat } from "./ui/fonts";
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

          <div className="flex h-28 md:h-36 items-center bg-opacity-40 bg-blue-500 p-4">
            <div className="flex items-center relative">
              <Image
                src="/assets/logo.png"
                width={400}
                height={400}
                alt="logo"
                className="h-32 w-32 md:h-40 md:w-40 object-contain mix-blend-multiply"
                priority
              />
              <h1 className="text-white font-bold text-3xl md:text-5xl leading-[0.9] -ml-3 mt-0">
                {companyInfo?.name ? companyInfo.name.slice(3) : "Cargando..."}
              </h1>
            </div>
            <a
              className="text-white text-lg md:text-xl ml-auto"
              href={`tel:${companyInfo.phone}`}
            >
              TEL: {companyInfo.phone}
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
      </body>
    </html>
  );
}

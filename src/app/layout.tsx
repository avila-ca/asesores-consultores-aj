'use client';

import "./globals.css";
import { montserrat } from "./ui/fonts";
import NavLinks from "./ui/navLinks";
import ClientLayout from "./ui/clientLayout";
import Head from "next/head";
import Image from "next/image";

export const companyInfo = {
  name: "TAI Consultoria",
  phone: "+34672160669",
  email: "",
  address: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <Head>

        <title>{companyInfo.name}</title>
        <meta name="description" content={`${companyInfo.name} - Servicios de consultoría y asesoramiento empresarial.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${montserrat.className} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-white-200">
          <div className="flex h-28 md:h-36 items-center bg-opacity-40 bg-blue-500 p-4">
            <div className="flex items-center relative">
              <Image
                src="/assets/logo.png"
                width={260}
                height={260}
                alt="logo"
                className="
        h-24 w-24
        md:h-26 md:w-26
        object-contain
      "
                priority
              />
              <h1
                className="
        text-white 
        font-bold
        text-3xl 
        md:text-5xl
        leading-[0.9]
        -ml-1 md:-ml-1 mt-12
      "
              >
                {companyInfo.name.slice(3)}
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
            <nav className='flex gap-2'>
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
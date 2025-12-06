'use client';

import "./globals.css";
import { montserrat } from "./ui/fonts";
import NavLinks from "./ui/navLinks";
import ClientLayout from "./ui/clientLayout";
import Head from "next/head";

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

        <div className="flex min-h-screen flex-col  bg-white-200">

          <div className="flex justify-between h-20 shrink-0 items-end bg-opacity-40 bg-blue-500 p-4 md:h-30">
            <p className="text-white text-4xl">{companyInfo.name}</p>
            <a className="text-white text-1xl" href={`tel: +34${companyInfo.phone}`}>TEL: {companyInfo.phone}</a>
          </div>
          <header>
            <nav className='flex gap-2'>
              <NavLinks />
            </nav>
          </header>
          <ClientLayout>

            <h1 className="text-4xl font-bold mb-6 text-blue-600">{companyInfo.name}</h1>
            {children}
          </ClientLayout>
        </div>
      </body>
    </html>
  );
}

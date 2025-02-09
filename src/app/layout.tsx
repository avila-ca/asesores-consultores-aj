import "./globals.css";
import { merriweather, montserrat, roboto } from "./ui/fonts";
import NavLinks from "./ui/navLinks";
import ClientLayout from "./ui/clientLayout";
import { Button } from "./ui/button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body
        className={`${montserrat.className} antialiased`}
      >

        <div className="flex min-h-screen flex-col  bg-white-200">

          <div className="flex justify-between h-20 shrink-0 items-end bg-opacity-40 bg-blue-500 p-4 md:h-30">
            <p className="text-gray-900 text-4xl">Asesores Consultores A.J.</p>
            <a className="text-white text-1xl" href="tel:+34672160669">TEL: 672 160 669</a>
          </div>
          <header>
            <nav className='flex gap-2'>
              <NavLinks />
            </nav>
          </header>
          <ClientLayout>
            <p className="text-4xl  text-blue-800 p-10 text-center mt-60 ">Creamos tu sociedad al instante</p>
           
            {children}
          </ClientLayout>
        </div>
      </body>
    </html>
  );
}

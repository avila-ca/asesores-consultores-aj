import "./globals.css";
import { merriweather, montserrat, roboto } from "./ui/fonts";
import NavLinks from "./ui/navLinks";
import { Button } from "./ui/button";
import { Video } from "./ui/videoHome";
import styles from "@/app/ui/home.module.css";
import clsx from "clsx";
import { PathProvider } from "./utils/PathProvider";
import ClientLayout from "./ui/video";

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

          <div className="flex justify-between h-20 shrink-0 items-end  bg-blue-500 p-4 md:h-30">
            <p className="text-white text-4xl">Asesores Consultores A.J.</p>
            <a className="text-white text-1xl" href="tel:+34672160669">TEL: 672 160 669</a>
          </div>
          <header>
            <nav className='flex gap-2'>
              <NavLinks />
            </nav>
          </header>

          {/* <Button children= "presiona"/> */}
            {/* <div>
              <p>Ruta actual: {pathname}</p>
              {children}
            </div> */}
            
          {/* <button className={`${roboto.className} antialiased ${styles.buttonShape}`}>Presiona</button> */}
          <ClientLayout>{children}</ClientLayout>
        </div>
      </body>
    </html>
  );
}

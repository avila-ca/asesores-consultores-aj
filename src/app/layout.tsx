import "./globals.css";
import { merriweather, roboto } from "./ui/fonts";
import NavLinks from "./ui/navLinks";
import styles from './ui/home.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${merriweather.className} antialiased`}
      >
        <div className="flex min-h-screen flex-col p-6 bg-blue-200">

          <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-30">
            <p className="text-white text-4xl">Asesores Consultores A.J.</p>

          </div>
          <header>
            <nav className='flex gap-2'>
              <NavLinks />
            </nav>
            {/* <button className={`${roboto.className} antialiased ${styles.buttonShape}`}>Presiona</button> */}
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}

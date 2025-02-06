import { roboto } from './ui/fonts';
import styles from './ui/home.module.css';
import clsx from 'clsx';
import NavLinks from './ui/navLinks';

export default function Home() {
  return (
    <>
      <header>
        <main className="flex min-h-screen flex-col p-6 bg-blue-200">

          <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-30">
            <p className="text-white text-4xl">Asesores Consultores A.J.</p>
           
          </div>
          <nav className='flex gap-2'>
              <NavLinks/>
            </nav>
          <button className={`${roboto.className} antialiased ${styles.buttonShape}`}>Presiona</button>

        </main>
      </header>
    </>
  );
}

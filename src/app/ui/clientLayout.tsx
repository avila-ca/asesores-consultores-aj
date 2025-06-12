"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Video } from "./videoHome";
import { ButtonGreen } from "./buttonGreenbck";
import { useState } from "react";
import { sendEmail } from "../utils/sendEmail";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showForm, setShowForm] = useState(false);
  const pathname = usePathname();

  const handleButtonDate = () => {
    setShowForm(!showForm);
  }

  return (
    <>
      <main >
        <div className={clsx({ hidden: pathname !== "/" })}>
          <Video />
          <p className="text-4xl  text-blue-400 p-10 text-center mt-60 ">Creamos tu sociedad al instante</p>
          <div className="flex gap-4 justify-center">
            {!showForm && (
              <>
                <ButtonGreen onClick={handleButtonDate} className="bg-transparent  !text-green-700 rounded-lg border-green-700 border-2 hover:!bg-green-500 hover:!text-white hover:border-white active:!bg-green-900" >
                  Pedir Cita
                </ButtonGreen>
                <ButtonGreen>
                  Crear tu sociedad
                </ButtonGreen>
              </>)}
            {showForm && (
              <>
                <form className="max-w-md mx-auto" onSubmit={sendEmail}>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <input type="tel" pattern="[0-9]{9}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono</label>
                    </div>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Asunto</label>
                  </div>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>

                </form>
              </>
            )}
          </div>
        </div>
        {children}
      </main>

    </>
  );
}

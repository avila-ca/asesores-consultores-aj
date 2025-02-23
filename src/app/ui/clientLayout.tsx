"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Video } from "./videoHome";
import { ButtonGreen } from "./buttonGreen";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <>
      <main >
        <div className={clsx( { "hidden" : pathname !== "/" },)}>
          <Video />
          <p className="text-4xl  text-blue-400 p-10 text-center mt-60 ">Creamos tu sociedad al instante</p>
            <div className="flex gap-4 justify-center">
              <ButtonGreen className="bg-transparent  !text-green-700 rounded-lg border-green-700 border-2 hover:!bg-green-500 hover:!text-white hover:border-white active:!bg-green-900" children="Pedir cita"/>
              <ButtonGreen  children="Crear tu sociedad" />
            </div>
        </div>
        {children}
      </main>

    </>
  );
}

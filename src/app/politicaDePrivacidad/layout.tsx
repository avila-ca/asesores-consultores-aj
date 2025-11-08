import { JSX } from "react";

export default function politicaDePrivacidad({children}:{children:React.ReactNode}) {
    return (
      <div >
        <p className="text-center text-5xl p-10">Política De Privacidad</p>
        {children}
      </div>
    )
  }

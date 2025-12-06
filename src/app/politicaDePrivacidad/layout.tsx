import { JSX } from "react";
import { companyInfo } from "../layout";

export default function politicaDePrivacidad({children}:{children:React.ReactNode}) {
    return (
      <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">{companyInfo.name}</h1>
      <h2 className="text-2xl font-semibold mb-6">Política de Privacidad</h2>
      {children}
    </main>
    )
  }

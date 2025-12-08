import { JSX } from "react";
import { companyInfo } from "../layout";

export default function terminosYCondiciones({children}:{children:React.ReactNode}){
    return (
      <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">{companyInfo.name}</h1>
      {children}
    </main>
    )
  }
  
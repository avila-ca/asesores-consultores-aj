import { JSX } from "react";

export default function terminosYCondiciones({children}:{children:React.ReactNode}){
    return (
      <div >
        <p className="text-center text-5xl p-10">Terminos Y Condiciones</p>
        {children}
      </div>
    )
  }
  
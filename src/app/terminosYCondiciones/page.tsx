
'use client'
import { companyInfo } from "../layout"

export default function Page() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">Términos y Condiciones</h1>
      <p className="text-lg mb-4">
        Bienvenido a {companyInfo.name}. Al utilizar nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones. Por favor, léelos cuidadosamente.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Uso del sitio</h2>
      <p className="text-lg mb-4">
        Este sitio web está destinado únicamente para uso personal y no comercial. No puedes utilizarlo para actividades ilegales o no autorizadas.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Propiedad intelectual</h2>
      <p className="text-lg mb-4">
        Todo el contenido de este sitio, incluyendo textos, imágenes y diseño, es propiedad de {companyInfo.name} y está protegido por las leyes de derechos de autor.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Limitación de responsabilidad</h2>
      <p className="text-lg mb-4">
        No nos hacemos responsables de daños directos o indirectos derivados del uso de este sitio web.
      </p>
      <p className="text-lg">
        Si tienes preguntas sobre estos términos, no dudes en <a href="/contacto" className="text-blue-600 hover:underline">contactarnos</a>.
      </p>
    </main>
  )
}
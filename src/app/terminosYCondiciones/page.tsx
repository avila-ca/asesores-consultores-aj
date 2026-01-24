'use client'
import { companyInfo } from "../companyInfo"

export default function Page() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Aviso Legal</h1>

      <p className="text-lg mb-4">
        En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio,
        de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE),
        se informa de los siguientes datos:
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Titular del sitio web</h2>
      <p className="text-lg mb-4">
        <strong>{companyInfo.name}</strong><br />
        Domicilio: {companyInfo.address || "—"}<br />
        Correo electrónico:{" "}
        <a href={`mailto:${companyInfo.email}`} className="text-blue-600 hover:underline">
          {companyInfo.email}
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Objeto</h2>
      <p className="text-lg mb-4">
        El presente sitio web tiene como finalidad ofrecer información sobre los
        servicios profesionales de {companyInfo.name}.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Condiciones de uso</h2>
      <p className="text-lg mb-4">
        El acceso y uso de este sitio web atribuye la condición de usuario e implica
        la aceptación de las condiciones aquí reflejadas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Propiedad intelectual</h2>
      <p className="text-lg mb-4">
        Todos los contenidos del sitio web son titularidad de {companyInfo.name}
        o de terceros autorizados, quedando prohibida su reproducción sin autorización expresa.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Responsabilidad</h2>
      <p className="text-lg mb-4">
        {companyInfo.name} no se responsabiliza del mal uso que se realice del contenido
        del sitio web ni de posibles daños derivados del acceso al mismo.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Legislación aplicable</h2>
      <p className="text-lg mb-4">
        La relación entre el usuario y {companyInfo.name} se regirá por la normativa
        española vigente.
      </p>

      <p className="text-sm text-gray-500 mt-4">
        Última actualización: {new Date().toLocaleDateString("es-ES")}
      </p>
    </main>
  )
}

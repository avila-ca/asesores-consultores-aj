'use client'
import { companyInfo } from "../companyInfo"

export default function Page() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Política de Cookies</h1>

      <p className="text-lg mb-4">
        Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia
        del usuario y analizar la navegación.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">¿Qué son las cookies?</h2>
      <p className="text-lg mb-4">
        Las cookies son pequeños archivos que se descargan en tu dispositivo
        cuando accedes a determinadas páginas web.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Tipos de cookies utilizadas</h2>
      <ul className="list-disc list-inside text-lg mb-4 space-y-2">
        <li>Cookies técnicas necesarias para el funcionamiento del sitio.</li>
        <li>Cookies de análisis (por ejemplo, Google Analytics).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Gestión de cookies</h2>
      <p className="text-lg mb-4">
        Puedes configurar o rechazar el uso de cookies a través de la configuración
        de tu navegador.
      </p>

      <p className="text-sm text-gray-500 mt-4">
        Última actualización: {new Date().toLocaleDateString("es-ES")}
      </p>
    </main>
  )
}

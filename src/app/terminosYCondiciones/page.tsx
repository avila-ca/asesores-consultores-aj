'use client'
import { companyInfo } from "../layout"

export default function Page() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Términos y Condiciones</h1>

      <p className="text-lg mb-4">
        Bienvenido a <strong>{companyInfo.name}</strong>. Al acceder y utilizar este sitio web, aceptas cumplir con los presentes Términos y Condiciones. Te recomendamos leerlos detenidamente antes de continuar utilizando nuestros servicios.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Aceptación de los términos</h2>
      <p className="text-lg mb-4">
        El acceso y uso del sitio web de {companyInfo.name} implica la aceptación plena y sin reservas de todas las disposiciones incluidas en estos Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, te pedimos que no utilices nuestro sitio.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Uso del sitio web</h2>
      <p className="text-lg mb-4">
        El sitio web de {companyInfo.name} está destinado para uso personal y legítimo. Te comprometes a no utilizar este sitio para actividades ilícitas, difamatorias, fraudulentas o que infrinjan derechos de terceros.
      </p>
      <p className="text-lg mb-4">
        Queda prohibido intentar acceder a áreas restringidas del sitio, interferir en su funcionamiento o introducir virus, troyanos o cualquier otro código dañino.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Propiedad intelectual</h2>
      <p className="text-lg mb-4">
        Todo el contenido disponible en este sitio web, incluyendo textos, gráficos, logotipos, iconos, imágenes, archivos de audio o video, diseño y software, es propiedad exclusiva de {companyInfo.name} o de sus respectivos titulares de derechos, y está protegido por las leyes nacionales e internacionales de propiedad intelectual.
      </p>
      <p className="text-lg mb-4">
        Queda estrictamente prohibida la reproducción, distribución, modificación o uso no autorizado del contenido sin el consentimiento previo y por escrito de {companyInfo.name}.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Enlaces externos</h2>
      <p className="text-lg mb-4">
        Este sitio puede incluir enlaces a otros sitios web de terceros. {companyInfo.name} no se responsabiliza por el contenido, las políticas de privacidad o las prácticas de dichos sitios externos. El acceso a estos sitios se realiza bajo tu propio riesgo.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Limitación de responsabilidad</h2>
      <p className="text-lg mb-4">
        {companyInfo.name} no garantiza la disponibilidad continua del sitio web ni la ausencia de errores en su contenido. En ningún caso será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso de este sitio.
      </p>
      <p className="text-lg mb-4">
        El usuario asume toda la responsabilidad por el uso que haga del contenido y de la información disponible en el sitio web.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Política de precios y servicios (si aplica)</h2>
      <p className="text-lg mb-4">
        En caso de que {companyInfo.name} ofrezca productos o servicios a través del sitio web, los precios, características y disponibilidad pueden ser modificados en cualquier momento sin previo aviso. Cualquier compra o contratación estará sujeta a las condiciones específicas que se indiquen en el momento de la transacción.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Protección de datos personales</h2>
      <p className="text-lg mb-4">
        {companyInfo.name} cumple con la normativa vigente en materia de protección de datos personales. Para más información sobre cómo tratamos tus datos, consulta nuestra{" "}
        <a href="/privacidad" className="text-blue-600 hover:underline">Política de Privacidad</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">8. Modificaciones de los términos</h2>
      <p className="text-lg mb-4">
        {companyInfo.name} se reserva el derecho de modificar, actualizar o eliminar en cualquier momento los presentes Términos y Condiciones. Las modificaciones entrarán en vigor desde el momento de su publicación en esta página.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">9. Legislación aplicable y jurisdicción</h2>
      <p className="text-lg mb-4">
        Estos Términos y Condiciones se rigen por las leyes aplicables del país o región donde {companyInfo.name} tiene su sede. Cualquier disputa será sometida a los tribunales competentes de dicha jurisdicción.
      </p>

      <p className="text-lg mt-6">
        Si tienes preguntas o comentarios sobre estos términos, no dudes en{" "}
        <a href="/contacto" className="text-blue-600 hover:underline">contactarnos</a>.
      </p>

      <p className="text-sm text-gray-500 mt-4">
        Última actualización: {new Date().toLocaleDateString("es-ES")}
      </p>
    </main>
  )
}

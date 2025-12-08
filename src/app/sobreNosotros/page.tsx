import { companyInfo } from "../layout";

export default function Page() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Sobre Nosostros</h1>

      <p className="text-lg mb-4">
        En {companyInfo.name}, valoramos tu privacidad y estamos comprometidos con la protección de tus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos tu información cuando utilizas nuestro sitio web o nuestros servicios.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Responsable del tratamiento</h2>
      <p className="text-lg mb-4">
        El responsable del tratamiento de los datos personales es <strong>{companyInfo.name}</strong>, con domicilio en {companyInfo.address || "nuestra sede principal"} y correo electrónico de contacto{" "}
        <a href={`mailto:${companyInfo.email}`} className="text-blue-600 hover:underline">
          {companyInfo.email}
        </a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Datos que recopilamos</h2>
      <p className="text-lg mb-4">
        Recopilamos los siguientes tipos de información:
      </p>
      <ul className="list-disc list-inside text-lg mb-4 space-y-2">
        <li>Datos de identificación: nombre, apellidos, empresa, cargo, etc.</li>
        <li>Datos de contacto: dirección de correo electrónico, teléfono, etc.</li>
        <li>Datos de navegación: dirección IP, tipo de navegador, tiempo de visita, páginas visitadas, cookies y otros identificadores en línea.</li>
        <li>Cualquier otra información que decidas proporcionarnos voluntariamente mediante formularios o comunicaciones.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Finalidad del tratamiento</h2>
      <p className="text-lg mb-4">
        Utilizamos tus datos personales para las siguientes finalidades:
      </p>
      <ul className="list-disc list-inside text-lg mb-4 space-y-2">
        <li>Responder a tus consultas y solicitudes enviadas a través de formularios o correo electrónico.</li>
        <li>Gestionar nuestra relación comercial y ofrecerte productos o servicios relacionados con tus intereses.</li>
        <li>Mejorar la experiencia de usuario y el funcionamiento de nuestro sitio web.</li>
        <li>Cumplir con nuestras obligaciones legales.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Base legal para el tratamiento</h2>
      <p className="text-lg mb-4">
        El tratamiento de tus datos personales se basa en:
      </p>
      <ul className="list-disc list-inside text-lg mb-4 space-y-2">
        <li>Tu consentimiento, cuando nos proporcionas tus datos voluntariamente.</li>
        <li>La ejecución de un contrato o la aplicación de medidas precontractuales.</li>
        <li>El cumplimiento de obligaciones legales.</li>
        <li>El interés legítimo de {companyInfo.name} en mantener la seguridad y el buen funcionamiento de sus servicios.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Conservación de los datos</h2>
      <p className="text-lg mb-4">
        Conservaremos tus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados y según los plazos legales aplicables. Una vez cumplido dicho plazo, tus datos serán eliminados o anonimizados de forma segura.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Comunicación de datos a terceros</h2>
      <p className="text-lg mb-4">
        No compartimos tus datos personales con terceros, salvo cuando sea necesario para cumplir con una obligación legal, prestar un servicio contratado o contar con tu consentimiento previo y expreso.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Derechos de los usuarios</h2>
      <p className="text-lg mb-4">
        Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad de tus datos personales en cualquier momento enviando una solicitud a{" "}
        <a href={`mailto:${companyInfo.email}`} className="text-blue-600 hover:underline">
          {companyInfo.email}
        </a>.
      </p>
      <p className="text-lg mb-4">
        Si consideras que tus derechos no han sido atendidos correctamente, tienes derecho a presentar una reclamación ante la autoridad de control competente (por ejemplo, la Agencia Española de Protección de Datos – AEPD).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">8. Seguridad de los datos</h2>
      <p className="text-lg mb-4">
        {companyInfo.name} adopta las medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">9. Cookies y tecnologías similares</h2>
      <p className="text-lg mb-4">
        Este sitio web utiliza cookies y tecnologías similares para mejorar tu experiencia de navegación, analizar el tráfico y personalizar el contenido. Puedes obtener más información en nuestra{" "}
        <a href="/cookies" className="text-blue-600 hover:underline">Política de Cookies</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">10. Cambios en esta política</h2>
      <p className="text-lg mb-4">
        {companyInfo.name} se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios se publicarán en esta misma página con la fecha de última actualización.
      </p>

      <p className="text-lg mt-6">
        Si tienes preguntas sobre esta política, no dudes en{" "}
        <a href="/contacto" className="text-blue-600 hover:underline">contactarnos</a>.
      </p>

      <p className="text-sm text-gray-500 mt-4">
        Última actualización: {new Date().toLocaleDateString("es-ES")}
      </p>
    </main>
  );
}

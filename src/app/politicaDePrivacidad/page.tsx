import { companyInfo } from "../layout";

export default function Page() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">Política de Privacidad</h1>
      <p className="text-lg mb-4">
        En {companyInfo.name}, valoramos tu privacidad y estamos comprometidos con la protección de tus datos personales. Esta política describe cómo recopilamos, usamos y protegemos tu información.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Información que recopilamos</h2>
      <p className="text-lg mb-4">
        Recopilamos información personal que nos proporcionas directamente, como tu nombre, correo electrónico y mensaje, cuando utilizas nuestro formulario de contacto.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Cómo usamos tu información</h2>
      <p className="text-lg mb-4">
        Utilizamos tu información únicamente para responder a tus consultas y mejorar nuestros servicios. No compartimos tus datos con terceros sin tu consentimiento.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Tus derechos</h2>
      <p className="text-lg mb-4">
        Tienes derecho a acceder, corregir o eliminar tus datos personales. Para ejercer estos derechos, contáctanos a través de nuestro formulario.
      </p>
      <p className="text-lg">
        Si tienes preguntas sobre esta política, no dudes en <a href="/contacto" className="text-blue-600 hover:underline">contactarnos</a>.
      </p>
    </main>
  );
}

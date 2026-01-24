import { companyInfo } from "../companyInfo";

export default function Page() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Sobre Nosostros</h1>
      <p className="text-lg mb-4">
        En {companyInfo.name} ofrecemos asesoramiento profesional especializado
        a empresas y PYMES, con un enfoque cercano, transparente y orientado a resultados.
      </p>

      <p className="text-lg mb-4">
        Contamos con una amplia experiencia en el acompañamiento empresarial,
        ayudando a nuestros clientes a tomar decisiones seguras y eficientes.
      </p>

      <p className="text-lg mb-4">
        Nuestro compromiso se basa en la confianza, la ética profesional y
        la excelencia en el servicio.
      </p>
    </main>
  );
}

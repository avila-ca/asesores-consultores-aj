'use client';

import { useRouter } from "next/navigation";
import Modal from "../ui/modal";

const fasesConstitucion = [
  "Diagnóstico global. Analizamos toda la situación del proyecto.",
  "Plan de acción integral. Se diseña un plan de acuerdo a las necesidades.",
  "Ejecución técnica. Se realizan todos los trámites con las administraciones públicas y privadas.",
  "Prevención de errores y riesgos. Se evita multas y sanciones para proteger al cliente.",
  "Seguimiento y acompañamiento estratégico.",
];

const pasosConstitucion = [
  "Elección de la forma jurídica adecuada.",
  "Reserva del nombre de la sociedad.",
  "Redacción de los estatutos sociales.",
  "Aportación del capital social.",
  "Obtención del NIF provisional.",
  "Inscripción en el Registro Mercantil.",
  "Obtención del NIF definitivo.",
  "Alta en Hacienda y Seguridad Social.",
];

const pasosAutonomos = [
  "Elección de la actividad económica.",
  "Alta en Hacienda (Modelo 036 o 037).",
  "Alta en la Seguridad Social (RETA).",
  "Obtención de licencias y permisos necesarios.",
  "Registro en el censo de empresarios, profesionales y retenedores.",
  "Cumplimiento de obligaciones fiscales y contables.",
];
export default function Page() {
  const router = useRouter();
  return (
    <Modal onClose={() => router.push("/")}>
      <div className="grid grid-cols-3 gap-6">

        <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">

          <h2 className="text-2xl font-bold mb-4">Fases para Transformar tu Proyecto en Realidad</h2>
          <ol className="list-decimal ml-6 space-y-2">
            {fasesConstitucion.map((fase, idx) => (
              <li key={idx} className="text-gray-700">{fase}</li>
            ))}
          </ol>
          <p className="text-gray-800 p-6 text-justify">"Nuestro objetivo principal es ofrecer soluciones realmente personalizadas. Detectando riesgos y oportunidades para la seguridad y el crecimiento constante de tu sociedad."</p>
        </div>

        <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">

          <h2 className="text-2xl font-bold mb-4 ">Pasos para la Constitución de Sociedades</h2>
          <ol className="list-decimal ml-6 space-y-2">
            {pasosConstitucion.map((fase, idx) => (
              <li key={idx} className="text-gray-700">{fase}</li>
            ))}
          </ol>

        </div>
        <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">

          <h2 className="text-2xl font-bold mb-4">Proceso de Alta de Autónomos</h2>
          <ol className="list-decimal ml-6 space-y-2">
            {pasosAutonomos.map((fase, idx) => (
              <li key={idx} className="text-gray-700">{fase}</li>
            ))}
          </ol>

        </div>
      </div>
    </Modal>
  );
}


// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     children: React.ReactNode;
// }

const services = [
    {
        id: 1,
        img:"/services/takeHands.jpg",
        title: "Asesoramiento Laboral Nacional e Internacional",
        shortDescription: "Gestión laboral adaptada a tus necesidades empresariales.",
        fullDescription:
            "Sabemos que una gestión laboral efectiva es clave para el logro de los objetivos empresariales. Nuestro equipo de profesionales ofrece servicios completos adaptados a las necesidades laborales de las empresas: desde la creación de contratos y la administración de nóminas hasta la resolución de disputas.",
    },
    {
        id: 2,
        img:"/services/calculating.jpg",
        title: "Asesoramiento fiscal y contable",
        shortDescription: "Optimiza tus procesos fiscales y contables.",
        fullDescription:
            "Reconocemos que una gestión eficiente en materia fiscal y contable es fundamental para el éxito de cualquier empresa. Contamos con un equipo de expertos que brinda soluciones completas y adaptadas a las necesidades financieras y fiscales de tu negocio.",
    },
    {
        id: 3,
        img:"/services/signing.jpg",
        title: "Constitución y gestión de Sociedades y Filiales en España y en el Extranjero",
        shortDescription: "Apoyo personalizado para crear y gestionar tu empresa.",
        fullDescription:
            "Si estás buscando apoyo para crear tu sociedad o filial, nuestro equipo de abogados expertos en derecho mercantil está listo para guiarte y respaldarte. Ofrecemos asesoramiento personalizado que abarca aspectos fiscales, contables, mercantiles/jurídicos y laborales, además de un seguimiento continuo y un control integral de la gestión de tu actividad empresarial.",
    },
    {
        id: 4,
        img:"/services/intermediation.jpg",
        title: "Mediación laboral",
        shortDescription: "Resolución profesional y efectiva de conflictos laborales.",
        fullDescription:
            "En nuestro servicio de mediación laboral, ayudamos a resolver conflictos entre empleados y empleadores de manera rápida, profesional y efectiva. Actuamos como facilitadores imparciales para fomentar el diálogo y alcanzar acuerdos que satisfagan a ambas partes. Nuestro objetivo es reducir tensiones, minimizar riesgos legales y restaurar un ambiente de trabajo positivo y productivo.",
    },
    {
        id: 5,
        img:"/services/takeHands.jpg",
        title: "Extranjería y nacionalidad",
        shortDescription: "Asesoramiento en trámites de extranjería y nacionalidad.",
        fullDescription:
            "Nuestro equipo especializado te ofrece apoyo en la obtención de permisos de residencia y nacionalidad. Con experiencia en trámites administrativos y normativas legales, garantizamos un proceso eficiente y adaptado a tus necesidades. Confía en nosotros para facilitar tu integración en España de manera segura y efectiva.",
    },
    {
        id: 6,
        img:"/services/signing.jpg",
        title: "Certificado Digital y Firma Digital",
        shortDescription: "Obtén tu certificado digital de forma rápida y segura.",
        fullDescription:
            "Para la recepción de notificaciones de empresas y autónomos, es imprescindible el certificado digital para trámites con Hacienda o Seguridad Social. Con tu certificado podrás acceder a notificaciones de Hacienda, instituciones autonómicas, tráfico, ayuntamiento y Seguridad Social. Te ofrecemos diferentes formas de obtener el tuyo de manera ágil y confiable.",
    },
    {
        id: 7,
        img:"/services/countBook.jpg",
        title: "Declaración de la renta",
        shortDescription: "Preparación rápida y precisa de tu Declaración de la Renta.",
        fullDescription:
            "Nos especializamos en la preparación de la Declaración de la Renta para particulares. Entendemos la importancia de este impuesto y nos dedicamos a garantizar que declares todos tus ingresos de manera precisa, aprovechando al máximo las bonificaciones y deducciones permitidas por Hacienda. Nuestro compromiso es orientarte para maximizar el ahorro en tu declaración.",
    },
    {
        id: 8,
        img:"/services/graphicsPapers.jpg",
        title: "Asesoría para Autónomos",
        shortDescription: "Apoyo integral para gestionar tu negocio como autónomo.",
        fullDescription:
            "Sabemos lo valioso que es tu tiempo como emprendedor. Por eso, te ofrecemos el apoyo de un equipo especializado que estará contigo en cada paso del camino, brindándote asesoramiento integral en los ámbitos fiscal, laboral y contable. Nuestro objetivo es ayudarte a gestionar tu negocio de manera segura y sin complicaciones.",
    },

]

export default function CardServices() {

    return (
        <>
            {services.map((item) => {
                return (
                    <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={item.img} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.title}</div>
                            <p className="text-gray-700 text-base">
                                {item.shortDescription}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>

                )
            })}
        </>
    )
}
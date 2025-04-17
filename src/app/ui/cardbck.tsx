'use client'

import { useState } from "react"
import { CardData } from "../utils/ICardData";
import clsx from "clsx";
import parse from "html-react-parser";
import Link from "next/link";
import CallMeCard from "./callMeCard";

interface CardServicesProps {
    data: CardData[];
    className?: string;
}

export default function CardServices({ data, className }: CardServicesProps) {
    const [selectedService, setSelectedService] = useState<{
        id: number | null;
        img: string | undefined;
        alt: string | undefined;
        title: string | null;
        shortDescription: string | null;
        fullDescription: string;
    } | null>(null);

    return (
        <>
            {!selectedService && (<>
                {data.map((item) => {
                    return (
                        <div key={item.id} onClick={() => setSelectedService(item)} className={clsx('max-w-sm rounded overflow-hidden shadow-lg', className)}>
                            <img className="w-full" src={item.img} alt={item.alt} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 ">{item.title}</div>
                                <p className="text-gray-700 text-base">
                                    {item.shortDescription}
                                </p>
                            </div>
                        </div>
                    )
                })}

            </>)}

            {selectedService && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="mx-auto items-center max-w-sm mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 " >
                        <img className="w-full" src={selectedService.img} alt={selectedService.alt} />
                        <h2 className="mb-2 text-2xl font-bold tracking-tight ">{selectedService.title}</h2>
                        <div className="font-normal text-gray-700 dark:text-gray-900" >{parse(selectedService.fullDescription)}</div>
                        <div className="grid grid-cols-2">

                            <button className="text-white m-4 bg-green-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                onClick={() => {
                                    const phone = "672160669";
                                    const message = encodeURIComponent(`Hola, me gustaría concertar una cita para el servicio: ${selectedService?.title}`);
                                    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                                }}>Enviar mensaje</button>
                            <Link className="text-white m-4 bg-green-800 focus:ring-4 text-center focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                href='/contacto'>Concertar cita</Link>
                                  <CallMeCard />
                            <button className="text-white m-4 bg-gray-800  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 " onClick={() => setSelectedService(null)}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}                        

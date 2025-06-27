'use client'

import { useState } from "react"
import { CardData } from "../utils/ICardData";
import clsx from "clsx";
import parse from "html-react-parser";
import CallMeCard from "./callMeCard";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

interface CardServicesProps {
    data: CardData[];
    className?: string;
    variant?: string;
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

    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientPhone, setClientPhone] = useState('');

    const [showCallForm, setShowCallForm] = useState(false);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);

    const handleSendAppointment = () => {
        if (appointmentDate && selectedService) {
            const form = document.getElementById('bookingForm') as HTMLFormElement;
            if (form) {

                emailjs.sendForm('service_61tweel', 'template_vcpdd0h', form, {
                    publicKey: 'yQDMSWDoWi3B54e6u'
                }).then(() => {
                    alert(`Tu cita para "${selectedService.title}" ha sido enviada para: ${appointmentDate.toLocaleString()}`);
                    setShowBookingForm(false);
                    setSelectedService(null);
                    setAppointmentDate(null);
                }).catch((err) => {
                    console.error(err);
                    alert('Error al enviar el correo');
                });
            }
        } else {
            alert("Selecciona una fecha y hora");
        }
    };

    return (
        <>
            {!selectedService && (
                <>
                    {data.map((item) => (
                        <div key={item.id} onClick={() => setSelectedService(item)} className={clsx('max-w-sm rounded overflow-hidden shadow-lg cursor-pointer', className)}>
                            <img className="w-full " src={item.img} alt={item.alt} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{item.title}</div>
                                <p className="text-gray-700 text-base">{item.shortDescription}</p>
                            </div>
                        </div>
                    ))}
                </>
            )}

            {selectedService && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="mx-auto items-center max-w-sm mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                        <Image className="w-full" src="selectedService.img" alt="selectedService.alt" />
                        <h2 className="mb-2 text-2xl font-bold tracking-tight">{selectedService.title}</h2>
                        <div className="font-normal text-gray-700 dark:text-gray-900">{parse(selectedService.fullDescription)}</div>

                        {!showCallForm && !showBookingForm && (
                            <div className="grid grid-cols-2">
                                <button
                                    className="text-white m-4 bg-green-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                    onClick={() => {
                                        const phone = "672160669";
                                        const message = encodeURIComponent(`Hola, me gustaría concertar una cita para el servicio: ${selectedService?.title}`);
                                        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                                    }}
                                >
                                    Enviar mensaje
                                </button>

                                <button
                                    className="text-white m-4 bg-green-800 text-center focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                    onClick={() => setShowBookingForm(true)}
                                >
                                    Concertar cita
                                </button>

                                <button
                                    className="col-span-2 text-white m-4 bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                    onClick={() => setShowCallForm(true)}
                                >
                                    Que me llamen
                                </button>

                                <button
                                    className="text-white m-4 bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 col-span-2"
                                    onClick={() => {
                                        setSelectedService(null);
                                        setShowCallForm(false);
                                        setShowBookingForm(false);
                                    }}
                                >
                                    Cerrar
                                </button>
                            </div>
                        )}

                        {showBookingForm && (
                            <div className="col-span-2 m-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded p-2 mb-3"
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                    placeholder="Tu nombre"
                                />

                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded p-2 mb-3"
                                    value={clientEmail}
                                    onChange={(e) => setClientEmail(e.target.value)}
                                    placeholder="tucorreo@ejemplo.com"
                                />

                                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                <input
                                    type="tel"
                                    className="w-full border border-gray-300 rounded p-2 mb-3"
                                    value={clientPhone}
                                    onChange={(e) => setClientPhone(e.target.value)}
                                    placeholder="600123456"
                                />

                                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha y hora de cita</label>
                                <DatePicker
                                    selected={appointmentDate}
                                    onChange={(date) => setAppointmentDate(date)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="dd/MM/yyyy HH:mm"
                                    className="w-full border border-gray-300 rounded p-2 mb-4"
                                />

                                <button
                                    className="w-full bg-green-700 text-white rounded px-4 py-2 text-sm"
                                    onClick={handleSendAppointment}
                                >
                                    Confirmar cita
                                </button>

                                <button
                                    className="w-full mt-2 bg-gray-700 text-white rounded px-4 py-2 text-sm"
                                    onClick={() => setShowBookingForm(false)}
                                >
                                    Volver
                                </button>
                            </div>

                        )}

                        {showCallForm && (
                            <>
                                <CallMeCard />
                                <button
                                    className="w-full mt-4 text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                                    onClick={() => setShowCallForm(false)}
                                >
                                    Volver
                                </button>
                            </>
                        )}

                        {/* Hidden Form for EmailJS */}
                        <form id="bookingForm" style={{ display: 'none' }}>
                            <input type="text" name="name" value={clientName} readOnly />
                            <input type="email" name="email" value={clientEmail} readOnly />
                            <input type="tel" name="phone" value={clientPhone} readOnly />
                            <input type="text" name="service" value={selectedService?.title ?? ''} readOnly />
                            <input
                                type="text"
                                name="appointment"
                                value={
                                    appointmentDate
                                        ? appointmentDate.toLocaleString('es-ES', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })
                                        : ''
                                }
                                readOnly
                            />
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

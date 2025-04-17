'use client'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

export default function CallMeCard() {
    const [sent, setSent] = useState(false)
    const [handleCallButton, setHandleCallButton] = useState(false)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs.sendForm('service_61tweel', 'template_vcpdd0h', e.currentTarget, {
            publicKey: 'yQDMSWDoWi3B54e6u'
        })
            .then(() => {
                setSent(true)
            })
            .catch((error) => {
                console.error('Error al enviar:', error)
            })
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-[300px]">
                <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">¿Quieres que te llamemos?</h2>

                    {!sent ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    pattern="[0-9]{9}"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                            >
                                Que me llamen
                            </button>
                        </form>
                    ) : (
                        <div className="text-green-600 font-medium text-sm mt-4">
                            ¡Gracias! Te llamaremos pronto.
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

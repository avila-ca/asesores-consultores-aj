// components/BlogCard.tsx
'use client'
import { useState } from "react";
import parse from "html-react-parser";
import { X } from "lucide-react";

interface BlogCardProps {
    title: string;
    summary: string;
    content: string;
    image?: string;
    date: Date;
    author: string;
    source: string;
}

export default function BlogCard({ title, summary, content, image, date, author, source }: BlogCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            {!expanded ? (
                <div
                    onClick={() => setExpanded(true)}
                    className="cursor-pointer bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:shadow-lg"
                >
                    {image && <img src={image} alt={title} className="rounded-md mb-4" />}
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-600">{summary}</p>
                </div>
            ) : (
                <div className="fixed inset-0 z-50 flex justify-center items-start overflow-y-auto bg-black/60 p-4">
                    <div className="bg-white max-w-4xl w-full rounded-lg shadow-lg p-6 relative mt-10">
                        <button
                            onClick={() => setExpanded(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
                        >
                            <X size={24} />
                        </button>
                        {image && <img src={image} alt={title} className="rounded-md mb-4 w-full" />}
                        <div className="text-sm text-gray-500 mt-2 mb-4">
                            <span>🗓️ {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            <span className="mx-2">|</span>
                            <span>✍️ {author}</span>
                            <span className="mx-2">|</span>
                            <span>📚 Fuente: {source}</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-center p-3">{title}</h2>
                        <div className="text-gray-700 indent-8 text-lg first-letter:text-2xl space-y-4 leading-relaxed text-base space-y-4 text-justify p-5 m-5 ">{parse(content)}</div>
                    </div>
                </div>
            )}
        </>
    );
}

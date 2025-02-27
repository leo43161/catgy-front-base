import { useState, useEffect } from "react"
import { ChevronRight, ChevronLeft } from 'lucide-react';
export default function Carousel({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
}) {
    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])
    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{
                    transform: `translateX(-${curr * 100}%)`, // Cambiamos 104.2% por 100% para mantener el diseño fluido
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="min-w-full flex-shrink-0" // Asegura que cada slide ocupe todo el ancho
                    >
                        {slide}
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between px-2 py-4">
                <button
                    onClick={prev}
                    className="p-px rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <ChevronLeft color="black" size={18} />
                </button>
                <button
                    onClick={next}
                    className="p-px rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <ChevronRight color="black" size={18} />
                </button>
            </div>

            {/* <div className="absolute bottom-6 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            className={`transition-all px-5 w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}
                        />
                    ))}
                </div>
            </div> */}
        </div>
    )
}
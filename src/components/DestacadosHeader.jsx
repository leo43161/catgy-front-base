import React from 'react'

export default function DestacadosHeader({ img, title, left, top, color }) {
    return (
        <div className='w-full p-1'>
            <div className='w-full h-[18vh] md:h-[9.3em] rounded-lg flex shadow' style={{ backgroundColor: color }}>
                <div className='w-7/12 h-full'>
                    <div className='flex flex-col justify-around h-full ps-5 py-3 gap-3'>
                        <h1 className="text-white text-2xl">
                            {title}
                        </h1>
                        <div>
                            <button
                                className=" bg-white py-1 px-3 font-bold rounded shadow"
                                style={{ color }}
                            >
                                Pídelo ahora
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-5/12">
                    <div className='relative h-32 w-full flex justify-center items-center'>
                        <img
                            src={`images/${img}`}
                            alt="Plato de comida"
                            className={`absolute z-50 object-cover w-[40vw] md:w-[10.8em] max-w-none drop-shadow-lg`}
                            style={{ top: `${top}px`, left: `${left}px` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

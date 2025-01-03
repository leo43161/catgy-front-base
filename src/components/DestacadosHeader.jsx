import React from 'react'

export default function DestacadosHeader() {
    return (
        <div className='w-full'>
            <div className='w-full h-[18vh] md:h-[9.3em] bg-gradient-to-r from-primary to-primary/80 rounded-lg mb-8 flex shadow'>
                <div className='w-7/12 h-full'>
                    <div className='flex flex-col justify-around h-full ps-5 py-3 gap-3'>
                        <h1 className="text-white text-2xl">
                            Tarta del norte
                        </h1>
                        <div>
                            <button
                                className=" text-primary bg-white py-1 px-3 font-bold rounded"
                            >
                                Pídelo ahora
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-5/12">
                    <div className='relative h-32 w-full flex justify-center items-center'>
                        <img
                            src="images/imagen-png-1.png"
                            alt="Plato de comida"
                            className="absolute -top-5 z-50 object-cover w-[40vw] md:w-[10.8em] max-w-none drop-shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

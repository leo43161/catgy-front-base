import { Minus, ClipboardPen } from 'lucide-react'
import React from 'react'

export default function CardCart({ product, handleOpenModal }) {
    const {_id, price, name, imagen, annotation} = product;
    return (
        <>
            <div className="p-4">
                <div className="flex items-center gap-3">
                    <div className="rounded h-28 w-28 border overflow-hidden flex items-center justify-center">
                        <img
                            src={`${process.env.URL_IMG}products/${imagen}`}
                            alt=""
                        />
                    </div>
                    <div className='flex-1'>
                        <div className='flex flex-col gap-1'>
                            <h3 className="font-bold">{name}</h3>
                            <h3 className="text-lg font-bold"><span className='font-bold text-primary'>$</span>{price}</h3>
                            {annotation && <a className="text-sm text-gray-500 font-semibold" href="#">Puede traer poca salsa?</a>}
                            
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='border rounded-full flex justify-center items-center p-1 bg-primary shadow-sm h-8 w-8' onClick={handleOpenModal}>
                            <ClipboardPen className="text-white" size={18} />
                        </div>
                        <div className='border rounded-full flex justify-center items-center p-1 bg-red-500 shadow-sm h-8 w-8'>
                            <Minus className="text-black" size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mx-4' />
        </>
    )
}

import { Minus } from 'lucide-react'
import React from 'react'

export default function CardCart() {
    return (
        <>
            <div className="p-4">
                <div className="flex items-center gap-3">
                    <div className="rounded h-28 w-28 border overflow-hidden flex items-center justify-center">
                        <img
                            src={`${process.env.URL_IMG}products/1733491018548-464309961_850446757074196_539282240995737463_n.jpg`}
                            alt=""
                        />
                    </div>
                    <div className='flex-1'>
                        <div className='flex flex-col gap-1'>
                            <h3 className="font-bold">Sorrentinos Argentinos</h3>
                            {/* <p className="text-sm text-gray-600">Pastas</p> */}
                            <h3 className="text-lg font-bold"><span className='font-bold text-primary'>$</span>500</h3>
                            <textarea className='w-full text-sm py-1 px-2 resize-y' rows={3} defaultValue={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique velit aperiam sit facere ipsam ea cumque in'}></textarea>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='border rounded-full p-1 bg-red-500 shadow-sm'>
                            <Minus className="text-black" size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mx-4' />
        </>
    )
}

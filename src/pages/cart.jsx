import CardCart from '@/components/CardCart'
import React from 'react'

export default function Cart() {
  return (
    <>
      <div className="min-h-svh">
        <CardCart></CardCart>
      </div>
      <div className="sticky bottom-0 left-0 w-full bg-gray-100 py-5">
        <div className='flex items-center h-full px-4 justify-between'>
          <div className='flex flex-col justify-center items-center'>
            <p className="text-2xl font-bold"><span className='font-bold text-primary'>$</span>12000</p>
          </div>
          <div>
            <button className="rounded ml-2 shadow text-white bg-primary py-2 px-4 font-bold">Agregar a la orden</button>
          </div>
        </div>
      </div>
    </>
  )
}

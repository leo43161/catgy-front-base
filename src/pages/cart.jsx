import CardCart from '@/components/cart/CardCart'
import Modal from '@/components/Modal'
import { setNavbarStyle } from '@/redux/slices/uiSlice'
import { UtensilsCrossedIcon, ClipboardPen } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { addAnnotation } from '@/redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux'

export default function Cart() {
  const [seccion, setSeccion] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [annotation, setAnnotation] = useState("");
  const dispatch = useDispatch();
  const { items: products, total } = useSelector((state) => state.cart.value);
  console.log(products);

  const handleOpenModal = (product) => {
    setProduct(product);
    setAnnotation(product.annotation)
    setIsModalOpen(true)
  };
  const handleCloseModal = () => {
    setProduct(null)
    setAnnotation("")
    setIsModalOpen(false)
  };
  const handleAnnotation = () => {
    dispatch(addAnnotation({ cartId: product.cartId, annotation }));
    setAnnotation("")
    setProduct(null)
    setIsModalOpen(false)
  }
  useEffect(() => {
    dispatch(setNavbarStyle({
      absolute: false,
      title: 'Pedidos y Ordenes',
      order: false,
      back: true
    }))
  }, [])



  return (
    <>
      <div className="w-full flex justify-center py-1">
        <div className="flex justify-center w-3/5 bg-gray-100 rounded">
          <div onClick={() => setSeccion(true)} className={`flex-1 text-center rounded-lg py-1 ${seccion && 'text-white bg-primary'}`}>
            <h1 className="font-bold">Pedido</h1>
          </div>
          <div onClick={() => setSeccion(false)} className={`flex-1 text-center rounded-lg py-1 ${!seccion && 'text-white bg-primary'}`}>
            <h1 className="font-bold">Ordenes</h1>
          </div>
        </div>
      </div>
      {/* PEDIDO */}
      {seccion && <>
        <div className="min-h-svh">
          {products.map((product) => (
            <CardCart key={product.cartId} handleOpenModal={handleOpenModal} product={product}></CardCart>
          ))}
          {/* <CardCart handleOpenModal={handleOpenModal}></CardCart> */}
        </div>
        <div className="sticky bottom-0 left-0 w-full bg-gray-100 py-5">
          <div className='flex items-center h-full px-4 justify-between'>
            <div className='flex flex-col justify-center items-center'>
              <p className="text-2xl font-bold"><span className='font-bold text-primary'>$</span>{total}</p>
            </div>
            <div>
              <button className="rounded ml-2 shadow text-white bg-primary py-2 px-4 font-bold w-44">Ordenar</button>
            </div>
          </div>
        </div>
      </>}
      {/* FIN PEDIDO */}
      {/* ORDENES */}
      {!seccion && <>
        <div className="min-h-svh">
          Orden
        </div>
      </>}
      {/* FIN ORDENES */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold mb-4 flex gap-1 items-center">
          <span>
            <UtensilsCrossedIcon className="text-black" size={18} />
          </span>
          <span>
            {product ? product.name : "Sorrentinos Argentinos"}
          </span>
        </h2>

        <p className="text-gray-600 mb-1 font-bold flex gap-1">
          <span>
            <ClipboardPen className="text-black" size={18} />
          </span>
          <span>
            Aclaraciones
          </span>
        </p>
        <div className="relative mb-3">
          <textarea
            className="w-full h-32 px-4 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 resize-none"
            defaultValue={annotation}
            onChange={(e) => setAnnotation(e.target.value)}
            placeholder={"Ingresa la aclaracion para tu pedido..."}
          />
          <span className="absolute bottom-2 right-3 text-sm text-gray-400">
            {annotation?.length || 0}/200
          </span>
        </div>
        <div className="flex justify-between gap-4">
          <button onClick={handleCloseModal} className="rounded shadow text-white bg-red-500 py-2 px-4 font-bold flex-1">Cancelar</button>
          <button onClick={handleAnnotation} className="rounded shadow text-white bg-primary py-2 px-4 font-bold flex-1">Aceptar</button>
        </div>
      </Modal>
    </>
  )
}

import { useRouter } from 'next/router';
import { useGetProductByIdQuery } from '@/redux/services/apiService';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setNavbarStyle } from '@/redux/slices/uiSlice';
import { addCartItem } from '@/redux/slices/cartSlice';

const Product = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();

    // Consulta para obtener los detalles del producto
    const { data: product, isLoading, error } = useGetProductByIdQuery(id);
    console.log(error)

    // Cambia el estilo del navbar al cargar la vista de producto
    useEffect(() => {
        dispatch(setNavbarStyle({
            absolute: true,
            title: '',
            order: true,
            back: true
        }));
    }, []);

    const addCartProduct = () => {
        if (product) {
            dispatch(addCartItem(product))
            router.push("/cart");
        }
    }

    if (isLoading) return <p></p>;
    if (error) return (
        <div className='text-2xl w-full h-screen flex justify-center items-center'>
            <h1>Producto no encontrado</h1>
        </div>
    );

    return (
        <>
            <div className="h-[50vh] overflow-hidden flex justify-center items-center">
                <img
                    src={`${process.env.URL_IMG}products/${product.imagen}`}
                    alt={product.name} className="object-cover"
                />
            </div>
            <div className="container mx-auto px-4 py-4 min-h-[40vh] relative -top-5 bg-neutral-50">
                <h1 className="mb-3 text-3xl">{product.name}</h1>
                <hr className="mb-3" />
                <p className="text-md font-light text-lg">{product.description}</p>
            </div>
            <div className="sticky bottom-0 left-0 w-full bg-gray-100 py-5">
                <div className='flex items-center h-full px-4 justify-between'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className="text-2xl font-bold"><span className='font-bold text-primary'>$</span>{product.price}</p>
                    </div>
                    <div>
                        <button
                            className="rounded ml-2 shadow text-white bg-primary py-2 px-4 font-bold"
                            onClick={addCartProduct}
                        >
                            Agregar a la orden
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;

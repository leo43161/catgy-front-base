import { useRouter } from 'next/router';
import { useGetProductByIdQuery } from '@/redux/services/apiService';

const Product = () => {
    const router = useRouter();
    const { id } = router.query;

    // Consulta para obtener los detalles del producto
    const { data: product, isLoading, error } = useGetProductByIdQuery(id);
    console.log(error)

    if (isLoading) return <p>Loading...</p>;
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
            <div className="container mx-auto px-4 rounded-t-3xl border-t py-4 min-h-[40vh] relative -top-5 bg-neutral-50">
                <h1 className="font-bold mb-3 text-3xl text-center">{product.name}</h1>
                <hr className="mb-4" />
                <p className="text-md text-justify">{product.description}</p>
            </div>
            <div className="sticky bottom-0 left-0 w-full bg-gray-100 py-5">
                <div className='flex items-center h-full px-4 justify-between'>
                    <div>
                        <p className="text-xl">${product.price}</p>
                    </div>
                    <div>
                        <button className="rounded-xl ml-2 shadow text-white bg-primary py-2 px-4 font-bold">Agregar a la orden</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;

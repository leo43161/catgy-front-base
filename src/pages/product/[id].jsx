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
            <div className="container mx-auto min-h-screen px-4">
                <div className="h-[50vh] overflow-hidden flex justify-center items-center rounded-xl mb-4">
                    <img
                        src={`${process.env.URL_IMG}products/${product.imagen}`}
                        alt={product.name} className="object-cover"
                    />
                </div>
                <h1 className="font-bold mb-3 text-3xl text-center">{product.name}</h1>
                <hr className="mb-4" />
                <p className="text-md text-justify">{product.description}</p>
            </div>
            <div className="sticky bottom-0 left-0 w-full bg-primary py-6">
                <div className='flex items-center h-full px-4'>
                    <div>
                        <p className="text-xl text-white">${product.price}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;

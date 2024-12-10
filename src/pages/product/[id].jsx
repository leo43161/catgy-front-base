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
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            {/* <img src={product.imagen} alt={product.name} className="w-full h-auto mb-4" /> */}
            <p className="text-xl mb-2">Price: ${product.price}</p>
            <p className="text-md">{product.description}</p>
        </div>
    );
};

export default Product;

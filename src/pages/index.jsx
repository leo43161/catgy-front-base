/* import Layout from '../components/Layout'; */
import CategoryList from '@/components/CategoryList';
import ProductCard from '@/components/ProductCard';
import { useSelector } from 'react-redux';

export default function Home() {
    // Ejemplos de categorías
const _categories = [
    { id: '1', name: 'Limpieza' },
    { id: '2', name: 'Casa' },
    { id: '3', name: 'Muebles' },
    { id: '4', name: 'Electrónica' },
    { id: '5', name: 'Juguetes' },
    { id: '6', name: 'Ropa' }
  ];
  
  // Ejemplos de productos
  const _products = [
    {
      id: '101',
      name: 'Detergente líquido',
      price: 250,
      imageURL: '/images/detergente.jpg',
      categoryIDs: ['1'] // Limpieza
    },
    {
      id: '102',
      name: 'Esponja multiuso',
      price: 50,
      imageURL: '/images/esponja.jpg',
      categoryIDs: ['1'] // Limpieza
    },
    {
      id: '103',
      name: 'Silla de madera',
      price: 1200,
      imageURL: '/images/silla.jpg',
      categoryIDs: ['3'] // Muebles
    },
    {
      id: '104',
      name: 'Mesa de centro',
      price: 3000,
      imageURL: '/images/mesa.jpg',
      categoryIDs: ['3'] // Muebles
    },
    {
      id: '105',
      name: 'Televisor 32"',
      price: 15000,
      imageURL: '/images/tv.jpg',
      categoryIDs: ['4'] // Electrónica
    },
    {
      id: '106',
      name: 'Laptop Gaming',
      price: 80000,
      imageURL: '/images/laptop.jpg',
      categoryIDs: ['4'] // Electrónica
    }
  ];
    //const { categories } = useSelector((state) => state.categories);
    //const { categories } = useSelector((state) => state.categories);
    const { categories } = { categories: _categories };
    const { products } = { products: _products };

    return (
        <div>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Categorías destacadas</h1>
                <CategoryList categories={categories} />

                <h2 className="text-2xl font-bold mt-8 mb-4">Productos Recientes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.slice(0, 6).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

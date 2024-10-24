/* import Layout from '../components/Layout'; */
import CategoryList from '@/components/CategoryList';
import ProductCard from '@/components/ProductCard';
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';

export default function Home() {
  const MobilePrueba = true;
  // Ejemplos de categorías
  const _categories = [
    { id: '1', name: 'Iluminacion' },
    { id: '2', name: 'Decoracion' },
    { id: '3', name: 'Hogar' },
    { id: '4', name: 'Electrónica' },
    { id: '5', name: 'Juguetes' },
    { id: '6', name: 'Ropa' }
  ];

  // Ejemplos de productos
  const _products = [
    {
      id: '101',
      name: 'Foco RGB incandescente',
      price: 10000,
      imageURL: '/images/foco1.png',
      categoryIDs: ['1'] // Iluminacion
    },
    {
      id: '102',
      name: 'Broches iluminados para fotos',
      price: 8000,
      imageURL: '/images/fotos1.jpg',
      categoryIDs: ['3'] // Hogar
    },
    {
      id: '103',
      name: 'Foco RGB',
      price: 8000,
      imageURL: '/images/foco2.webp',
      categoryIDs: ['1'] // Iluminacion
    },
    {
      id: '104',
      name: 'Broches para fotos',
      price: 7000,
      imageURL: '/images/fotos2.jpg',
      categoryIDs: ['3'] // Hogar
    },
    {
      id: '105',
      name: 'Globos multicolor',
      price: 3000,
      imageURL: '/images/globo1.webp',
      categoryIDs: ['2'] // Decoracion
    },
    {
      id: '106',
      name: 'Globos Gris vivo',
      price: 2000,
      imageURL: '/images/globo2.png',
      categoryIDs: ['2'] // Decoracion
    }
  ];
  //const { categories } = useSelector((state) => state.categories);
  //const { categories } = useSelector((state) => state.categories);
  const { categories } = { categories: _categories };
  const { products } = { products: _products };

  return (
    <div className={MobilePrueba ? 'mx-auto md:w-4/12 md:px-0 w-full px-2' : 'container mx-auto'}>
      <div className="p-4">
        <div className='flex justify-between items-center mb-4'>
          <h1 className="text-2xl font-bold">Catgy</h1>
          <div>
            <ShoppingCart color="black" size={25} />
          </div>
        </div>
        <CategoryList categories={categories} />

        <h2 className="text-2xl font-bold mb-4">Productos Recientes</h2>
        <div className={MobilePrueba ? 'gap-4 grid grid-cols-2' : "flex flex-col gap-4"}>
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

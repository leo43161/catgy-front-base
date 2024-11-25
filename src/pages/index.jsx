/* import Layout from '../components/Layout'; */
import CategoryList from '@/components/CategoryList';
import ProductCard from '@/components/ProductCard';
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { useGetCategoriesQuery, useGetProductsQuery } from '@/redux/services/apiService';
import ModelViewer from '@/components/ModelViewer';

export default function Home() {
  const { data: _categories, isLoading, error, refetch } = useGetCategoriesQuery();
  const { data: _products } = useGetProductsQuery({ limit: 10, offset: 0, search: '' });
  const MobilePrueba = true;

  const { categories } = { categories: _categories ? _categories : [] };
  const { products } = { products: _products ? _products.products : [] };

  return (
    <div className={MobilePrueba ? 'mx-auto md:w-4/12 md:px-0 w-full px-2' : 'container mx-auto'}>
      <div className="p-4">
        <div className='flex justify-between items-center mb-4'>
          <h1 className="text-2xl font-bold">Catgy012313</h1>
          <div>
            <ShoppingCart color="black" size={25} />
          </div>
        </div>
        <CategoryList categories={categories} />

        <h2 className="text-2xl font-bold mb-4">Productos Recientes</h2>
        <div className="border">
          <ModelViewer/>
        </div>
        <div className={MobilePrueba ? 'gap-4 grid grid-cols-2' : "flex flex-col gap-4"}>
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

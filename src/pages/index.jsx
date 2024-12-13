/* import Layout from '../components/Layout'; */
import CategoryList from '@/components/CategoryList';
import ProductCard from '@/components/ProductCard';
import { useSelector } from 'react-redux';
import { ReceiptText } from 'lucide-react';
import { useGetProductsQuery } from '@/redux/services/apiService';
import ModelViewer from '@/components/ModelViewer';
import { useState } from 'react';

export default function Home() {
  const [categorySelected, setCategorySelected] = useState('');
  const { data: _products } = useGetProductsQuery({
    limit: 10,
    offset: 0,
    search: '',
    category: categorySelected,
  }, { refetchOnMountOrArgChange: true });
  const MobilePrueba = true;
  const { products } = { products: _products ? _products.products : [] };


  return (
    <div className='px-4 pb-4'>
      <CategoryList categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
      {/* <div className="">
          <ModelViewer/>
          </div> */}
      <div className={MobilePrueba ? 'gap-4 grid grid-cols-2' : "flex flex-col gap-4"}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

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
    <div className="bg-neutral-50">
      <div className={MobilePrueba ? 'mx-auto md:w-4/12 md:px-0 w-full relative' : 'container mx-auto'}>
        {/* <img className="w-auto absolute h-full z-[-1] object-cover" src="/images/bg-3.jpg" alt="" /> */}
        <div className="p-4">
          <div className='flex justify-between items-center mb-4'>
            <h1 className="text-2xl font-bold">Monnet</h1>
            <div className='relative'>
              <span className="absolute flex h-3 w-3 top-[-4px] right-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span
                  className="relative flex justify-center items-center rounded-full h-3 w-3 bg-primary text-[10px] text-white text-center"
                >
                  5
                </span>
              </span>
              <ReceiptText color="black" size={25} />
            </div>
          </div>
          <CategoryList categorySelected={categorySelected} setCategorySelected={setCategorySelected} />

          <h2 className="text-2xl font-bold mb-4">Productos Recientes</h2>
          {/* <div className="">
          <ModelViewer/>
          </div> */}
          <div className={MobilePrueba ? 'gap-4 grid grid-cols-2' : "flex flex-col gap-4"}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

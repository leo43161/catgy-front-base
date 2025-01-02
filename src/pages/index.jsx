/* import Layout from '../components/Layout'; */
import CategoryList from '@/components/CategoryList';
import ProductCard from '@/components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { ReceiptText } from 'lucide-react';
import { useGetProductsQuery } from '@/redux/services/apiService';
import ModelViewer from '@/components/ModelViewer';
import { useEffect, useState } from 'react';
import { setNavbarStyle } from '@/redux/slices/uiSlice';
import { BackSide } from 'three';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarStyle({
      absolute: false,
      title: 'MONET',
      order: true,
      back: false
    }));
  }, [dispatch]);
  return (
    <div className='px-4 pb-4'>
      <CategoryList categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
      {/* <div className="">
          <ModelViewer/>
          </div> */}
      <div className='px-1'>
        <div className='w-full h-[18vh] bg-gradient-to-r from-primary to-primary/80 rounded-lg mb-8 flex shadow'>
          <div className='w-7/12 h-full'>
            <div className='flex flex-col justify-around h-full ps-5 py-3 gap-3'>
              <h1 className="text-white text-2xl">
                Tarta del norte
              </h1>
              <div>
                <button
                  className=" text-primary bg-white py-1 px-3 font-bold rounded"
                >
                  Pídelo ahora
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-5/12">
            <div className='relative h-32 w-full flex justify-center items-center'>
              <img
                src="images/imagen-png-1.png"
                alt="Plato de comida"
                className="absolute -top-5 z-50 object-cover w-[40vw] md:w-44 max-w-none drop-shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
      <div className={MobilePrueba ? 'gap-4 grid grid-cols-2' : "flex flex-col gap-4"}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

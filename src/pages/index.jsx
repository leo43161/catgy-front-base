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
      <div className={MobilePrueba ? 'gap-4 grid grid-cols-2' : "flex flex-col gap-4"}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

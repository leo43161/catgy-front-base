/* import Layout from '../components/Layout'; */
import CategoryList from '@/components/categories/CategoryList';
import ProductCard from '@/components/product/ProductCard';
import { useDispatch } from 'react-redux';
import { useGetProductsQuery } from '@/redux/services/apiService';
import { useEffect, useState } from 'react';
import { setNavbarStyle } from '@/redux/slices/uiSlice';
import CarouselDestacados from '@/components/CarouselDestacados';

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
      <CarouselDestacados></CarouselDestacados>
      <div className={MobilePrueba ? 'gap-4 grid grid-cols-2' : "flex flex-col gap-4"}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

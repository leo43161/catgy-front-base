import { useGetCategoriesQuery } from '@/redux/services/apiService';
import Link from 'next/link';


const CategoryList = () => {
  const { data: categories, isLoading, error, refetch } = useGetCategoriesQuery();
  return (
    <div className="w-full mb-4">
      <div className="relative w-full flex gap-3 snap-x snap-mandatory overflow-x-auto no-scrollbar pe-1">
        {!isLoading ? (
          categories.map((category, idx) => (
            <div className="snap-start scroll-mx-6 shrink-0" key={category._id}>
              <Link href={`/category/${category._id}`} key={category._id}>
                <div className={"rounded-lg font-bold text-[0.73rem] py-2 px-4 " + (idx === 0 ?
                  "hover:bg-light text-white bg-primary" :
                  "text-primary border")}>
                  {category.name}
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;

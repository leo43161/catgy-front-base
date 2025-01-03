import { useGetCategoriesQuery } from '@/redux/services/apiService';

const CategoryList = ({ setCategorySelected, categorySelected }) => {
  const { data: categories, isLoading, error } = useGetCategoriesQuery();
  return (
    <div className="w-full mb-7">
      <div className="relative w-full flex gap-3 snap-x snap-mandatory overflow-x-auto no-scrollbar pe-1">
        <div className="snap-start scroll-mx-6 shrink-0">
          <div onClick={() => setCategorySelected('')}>
            <div className={"rounded-lg font-bold text-[0.83rem] py-2 px-4 " + (categorySelected === '' ?
              "text-white bg-primary" :
              "text-primary border")}>
              Todos
            </div>
          </div>
        </div>
        {!isLoading ? (
          categories.map((category, idx) => (
            <div className="snap-start scroll-mx-6 shrink-0" key={category._id}>
              <div onClick={() => setCategorySelected(category._id)}>
                <div className={"rounded-lg font-bold text-[0.83rem] py-2 px-4 " + (categorySelected === category._id ?
                  " text-white bg-primary" :
                  "text-primary border")}>
                  {category.name}
                </div>
              </div>
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

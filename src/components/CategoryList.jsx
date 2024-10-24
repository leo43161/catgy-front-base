import Link from 'next/link';

const CategoryList = ({ categories }) => {
  return (
    <div className="w-full mb-4">
      <div className="relative w-full flex gap-3 snap-x snap-mandatory overflow-x-auto no-scrollbar pe-1">
        {categories.length > 0 ? (
          categories.map((category, idx) => (
            <div className="snap-start scroll-mx-6 shrink-0">
              <Link href={`/category/${category.id}`} key={category.id}>
                <div className={"rounded-lg font-bold text-[0.73rem] py-2 px-4 " + (idx === 0 ?
                  "hover:bg-light text-white bg-primary" :
                  "text-primary border")}>
                  {category.name}
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No hay categorías disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;

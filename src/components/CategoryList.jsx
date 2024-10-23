import Link from 'next/link';

const CategoryList = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {categories.length > 0 ? (
        categories.map((category) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <div className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {category.name}
            </div>
          </Link>
        ))
      ) : (
        <p>No hay categorías disponibles.</p>
      )}
    </div>
  );
};

export default CategoryList;

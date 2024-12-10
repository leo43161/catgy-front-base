// components/ProductCard.jsx
import { useState } from 'react';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Link href={`/product/${product._id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white card-glass flex flex-col">
        <div className="relative flex-none">
          <img
            src={`${process.env.URL_IMG}products/${product.imagen}`}
            alt={product.imagen}
            className="w-full h-56 object-cover"
          />
          {/* <button
          className={`absolute top-4 right-4 p-2 rounded-full ${isFavorited ? 'bg-red-500' : 'bg-white'} shadow`}
          onClick={toggleFavorite}
        >
          <HeartIcon
            className={`h-6 w-6 ${isFavorited ? 'text-white' : 'text-gray-500'}`}
          />
        </button> */}
        </div>
        <div className="p-4 flex-1 flex justify-between flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-0">{product.name}</h3>
          <div className="flex space-x-2 my-3">
            {product?.categoryIDs?.map((category) => (
              <span key={category._id} className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">{category.name}</span>
            ))}
          </div>
          <p className="text-gray-600 text-sm line-clamp-3 py-1">
            {product.description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            <button className="bg-primary text-white px-1 py-1 rounded hover:bg-indigo-700">
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

// components/ProductCard.jsx
import { useState } from 'react';
import { HeartIcon } from 'lucide-react';

export default function ProductCard({ product }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
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
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        <div className="flex space-x-2 my-2">
          {product?.categoryIDs?.map((category) => (
            <span key={category._id} className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">{category.name}</span>
          ))}
        </div>
        <p className="text-gray-600 text-sm line-clamp-3">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

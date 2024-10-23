import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        src={product.imageURL}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <button className="mt-4 w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

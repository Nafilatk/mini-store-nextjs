import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>

      <Link
        href={`/products/${product.id}`}
        className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}

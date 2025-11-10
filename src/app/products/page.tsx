import ProductCard from "../components/ProductCard";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", 
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-8">
      <h1 className="text-4xl font-bold text-center mb-10">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
 
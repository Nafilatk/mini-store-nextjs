interface ProductPageProps {
  params: { id: string };
}

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 mx-auto mb-6"
        />
        <h1 className="text-3xl font-semibold mb-3">{product.title}</h1>
        <p className="text-gray-600 mb-3">{product.description}</p>
        <p className="text-xl font-bold mb-6">${product.price}</p>

        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
          Add To Cart
        </button>
      </div>
    </main>
  );
}

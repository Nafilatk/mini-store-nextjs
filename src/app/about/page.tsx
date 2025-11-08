export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10 px-6 text-center">
      <h1 className="text-4xl font-bold mb-6 text-green-800">
        About Mini Product Store 🌿
      </h1>

      <p className="max-w-2xl text-lg text-gray-700 leading-relaxed">
        Mini Product Store is a simple demo project built with <b>Next.js</b> to
        explore how modern web apps work with server-side rendering, static
        generation, and client-side fetching. <br /> <br />
        This project is designed for learning — to help understand how pages,
        components, and data fetching work together in a clean folder structure.
      </p>

      <p className="mt-8 text-gray-500">
        💚 Created with love by <b>Nafila</b>
      </p>
    </main>
  );
}

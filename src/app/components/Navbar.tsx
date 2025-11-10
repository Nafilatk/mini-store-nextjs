import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <h2 className="text-2xl font-semibold">MiniStore</h2>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>  
        <Link href="/other">other</Link>  
        <Link href="/ADD">add</Link>  

      </div>
    </nav>
  );
}

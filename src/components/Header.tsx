import Link from "next/link";

export default function Header() {
  return (
    <header className="h-16 bg-gray-900 text-white flex items-center px-4 justify-between">
      {/* Logo Area */}
      <div className="text-xl font-bold">Megacodist</div>
      
      {/* Navigation Links */}
      <nav className="flex gap-4">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      </nav>
    </header>
  );
}
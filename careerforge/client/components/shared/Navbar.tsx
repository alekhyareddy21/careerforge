export default function Navbar() {
  return (
    <nav className="w-full h-16 border-b border-gray-800 bg-black text-white flex items-center justify-between px-8">

      <h1 className="text-2xl font-bold tracking-wide">
        CareerForge
      </h1>

      <div className="flex gap-4">
        <button className="px-4 py-2 text-sm border border-gray-700 rounded-lg hover:bg-gray-900 transition">
          Login
        </button>

        <button className="px-4 py-2 text-sm bg-white text-black rounded-lg hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}
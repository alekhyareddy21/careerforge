export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="w-full max-w-md bg-[#111] p-8 rounded-2xl border border-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Login
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Welcome back to CareerForge
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="text-sm text-gray-400">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-700 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-700 outline-none"
            />
          </div>

          <button className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition">
            Login
          </button>

        </form>

      </div>

    </main>
  );
}
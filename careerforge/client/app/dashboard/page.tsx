export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-[#111] border-r border-gray-800 p-6">

        <h1 className="text-3xl font-bold">
          CareerForge
        </h1>

        <nav className="mt-10 flex flex-col gap-4">

          <button className="text-left px-4 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 transition">
            Dashboard
          </button>

          <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-900 transition">
            Resume Builder
          </button>

          <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-900 transition">
            ATS Checker
          </button>

          <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-900 transition">
            Interview Prep
          </button>

          <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-900 transition">
            Job Tracker
          </button>

        </nav>

      </aside>

      {/* Main Content */}
      <section className="flex-1">

        {/* Top Navbar */}
        <div className="h-20 border-b border-gray-800 flex items-center justify-between px-10">

          <div>
            <h2 className="text-2xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="text-gray-400 text-sm">
              Track your career growth
            </p>
          </div>

          <div className="flex items-center gap-4">

            <button className="px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Notifications
            </button>

            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold">
              A
            </div>

          </div>

        </div>

        {/* Dashboard Content */}
        <div className="p-10">

          <h1 className="text-5xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-3">
            Welcome back to CareerForge 🚀
          </p>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-6 mt-10">

            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold">
                Resumes
              </h2>

              <p className="text-4xl font-bold mt-4">
                12
              </p>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold">
                Applications
              </h2>

              <p className="text-4xl font-bold mt-4">
                34
              </p>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold">
                Interviews
              </h2>

              <p className="text-4xl font-bold mt-4">
                7
              </p>
            </div>

          </div>

          {/* Resume Upload Section */}
          <div className="mt-12">

            <h2 className="text-3xl font-bold">
              Upload Resume
            </h2>

            <p className="text-gray-400 mt-2">
              Upload your resume for ATS analysis and AI feedback.
            </p>

            <div className="mt-6 border-2 border-dashed border-gray-700 rounded-2xl p-10 flex flex-col items-center justify-center text-center bg-[#111]">

              <p className="text-lg font-semibold">
                Drag & Drop Resume Here
              </p>

              <p className="text-gray-500 mt-2">
                PDF or DOCX files supported
              </p>

              <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
                Upload Resume
              </button>

            </div>

          </div>

          {/* AI Interview Section */}
          <div className="mt-12">

            <h2 className="text-3xl font-bold">
              AI Interview Preparation
            </h2>

            <p className="text-gray-400 mt-2">
              Practice interviews with AI-generated questions.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-6">

              <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

                <h3 className="text-2xl font-semibold">
                  Frontend Interview
                </h3>

                <p className="text-gray-400 mt-3">
                  React, JavaScript, HTML, CSS interview practice.
                </p>

                <button className="mt-6 px-5 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
                  Start Practice
                </button>

              </div>

              <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

                <h3 className="text-2xl font-semibold">
                  Backend Interview
                </h3>

                <p className="text-gray-400 mt-3">
                  Node.js, Express.js, APIs, databases, authentication.
                </p>

                <button className="mt-6 px-5 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
                  Start Practice
                </button>

              </div>

            </div>

          </div>

          {/* Job Tracker Section */}
          <div className="mt-12">

            <h2 className="text-3xl font-bold">
              Job Applications
            </h2>

            <p className="text-gray-400 mt-2">
              Track all your job applications in one place.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-800">

              <table className="w-full text-left">

                <thead className="bg-[#111]">
                  <tr>

                    <th className="p-4">Company</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Date</th>

                  </tr>
                </thead>

                <tbody>

                  <tr className="border-t border-gray-800">
                    <td className="p-4">Google</td>
                    <td className="p-4">Frontend Developer</td>
                    <td className="p-4 text-yellow-400">Pending</td>
                    <td className="p-4">May 20</td>
                  </tr>

                  <tr className="border-t border-gray-800">
                    <td className="p-4">Microsoft</td>
                    <td className="p-4">Full Stack Developer</td>
                    <td className="p-4 text-green-400">Interview</td>
                    <td className="p-4">May 18</td>
                  </tr>

                  <tr className="border-t border-gray-800">
                    <td className="p-4">Amazon</td>
                    <td className="p-4">Backend Developer</td>
                    <td className="p-4 text-red-400">Rejected</td>
                    <td className="p-4">May 15</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
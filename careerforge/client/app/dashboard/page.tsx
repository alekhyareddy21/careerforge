"use client";
import toast from "react-hot-toast";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

  const router = useRouter();

  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  // ================= FETCH JOBS =================

  const fetchJobs = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/jobs"
      );

      setJobs(res.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

    }

  };

  // ================= PROTECTED ROUTE =================

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {

      router.push("/login");

    } else {

      fetchJobs();

    }

  }, []);

  // ================= ADD JOB =================

  const addJob = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/jobs/add",
        {
          company,
          role,
          status,
          date: new Date().toLocaleDateString(),
        }
      );

      toast.success("Job Added Successfully 🚀");

      setCompany("");
      setRole("");
      setStatus("");

      fetchJobs();

    } catch (error) {

      console.log(error);

    }

  };

  // ================= DELETE JOB =================

  const deleteJob = async (id: string) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/jobs/${id}`
      );

      toast.success("Job Deleted 🚀");

      fetchJobs();

    } catch (error) {

      console.log(error);

    }

  };

  // ================= LOGOUT =================

  const handleLogout = () => {

    localStorage.removeItem("token");

    router.push("/login");

  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900/80 backdrop-blur-lg border-r border-blue-900/50 p-6">

        <h1 className="text-3xl font-bold">
          CareerForge
        </h1>

        <nav className="mt-10 flex flex-col gap-4">

          <button className="text-left px-4 py-3 rounded-lg bg-gray-900">
            Dashboard
          </button>

          <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-900">
            Resume Builder
          </button>

          <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-900">
            ATS Checker
          </button>

          <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-900">
            Interview Prep
          </button>

          <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-900">
            Job Tracker
          </button>

        </nav>

      </aside>

      {/* Main */}
      <section className="flex-1">

        {/* Navbar */}
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

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>

          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              A
            </div>

          </div>

        </div>

        {/* Content */}
        <div className="p-10">

          <h1 className="text-5xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-3">
            Welcome back to CareerForge 🚀
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">

            <div className="bg-slate-900/60 backdrop-blur-lg border border-blue-900/50 rounded-2xl p-6">

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
                {jobs.length}
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

          {/* Add Job Form */}
          <div className="mt-12 bg-slate-900/60 backdrop-blur-lg border border-blue-900/50 rounded-2xl p-8">

            <h2 className="text-3xl font-bold">
              Add Job Application
            </h2>

            <div className="grid grid-cols-3 gap-4 mt-6">

              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="p-3 rounded-xl bg-black border border-gray-700 outline-none"
              />

              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="p-3 rounded-xl bg-black border border-gray-700 outline-none"
              />

              <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="p-3 rounded-xl bg-black border border-gray-700 outline-none"
              />

            </div>

            <button
              onClick={addJob}
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
            >
              Add Job
            </button>

          </div>

          {/* Jobs Table */}
          <div className="mt-12">

            <h2 className="text-3xl font-bold">
              Job Applications
            </h2>

            <p className="text-gray-400 mt-2">
              Track all your applications.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-800">

              <table className="w-full text-left">

                <thead className="bg-slate-900/70">

                  <tr>

                    <th className="p-4">Company</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Action</th>

                  </tr>

                </thead>

                <tbody>

                  {loading ? (

                    <tr>

                      <td
                        colSpan={5}
                        className="p-10 text-center text-gray-500"
                      >
                        Loading jobs...
                      </td>

                    </tr>

                  ) : jobs.length === 0 ? (

                    <tr>

                      <td
                        colSpan={5}
                        className="p-10 text-center text-gray-500"
                      >
                        No job applications yet 🚀
                      </td>

                    </tr>

                  ) : (

                    jobs.map((job: any) => (

                      <tr
                        key={job._id}
                        className="border-t border-gray-800"
                      >

                        <td className="p-4">
                          {job.company}
                        </td>

                        <td className="p-4">
                          {job.role}
                        </td>

                       <td
  className={`p-4 font-semibold ${
    job.status === "Applied"
      ? "text-green-400"
      : job.status === "Interview"
      ? "text-yellow-400"
      : "text-red-400"
  }`}
>
  {job.status}
</td>

                        <td className="p-4">
                          {job.date}
                        </td>

                        <td className="p-4">

                          <button
                            onClick={() => deleteJob(job._id)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                          >
                            Delete
                          </button>

                        </td>

                      </tr>

                    ))

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
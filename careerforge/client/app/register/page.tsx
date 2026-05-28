"use client";

import axios from "axios";
import { useState } from "react";

export default function RegisterPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: any) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert(response.data.message);

      console.log(response.data);

    } catch (error: any) {

      console.log(error);

      alert(error.response.data.message);

    }

  };

  return (

    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="w-full max-w-md bg-[#111] p-8 rounded-2xl border border-gray-800">

        <h1 className="text-4xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Start your AI career journey
        </p>

        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-5"
        >

          <div>

            <label className="text-sm text-gray-400">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-700 outline-none"
            />

          </div>

          <div>

            <label className="text-sm text-gray-400">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-700 outline-none"
            />

          </div>

          <div>

            <label className="text-sm text-gray-400">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg bg-black border border-gray-700 outline-none"
            />

          </div>

          <button className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition">

            Create Account

          </button>

        </form>

      </div>

    </main>

  );

}
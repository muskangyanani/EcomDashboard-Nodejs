import React from "react";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = () => {
    console.log(name, email, password);
  }
  return (
    <div className="py-8 flex items-center justify-center bg-neutral-100">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-neutral-800 mb-6">
          Sign Up
        </h2>
        <form className="text-left">
          <div className="mb-4 ">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-zinc-600 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              placeholder="Enter your username"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-600 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-600 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-neutral-800 text-white py-2 px-4 rounded-md hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-zinc-600">
          Already have an account?{" "}
          <a href="#" className="text-neutral-800 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

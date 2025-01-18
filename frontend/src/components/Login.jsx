import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if(auth) navigate('/')
  })

  const handleLogin = async (e) =>{
    e.preventDefault();
    let result = await fetch('http://localhost:5000/login', {
      method: 'post',
      body: JSON.stringify({username, password}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    result = await result.json()
    console.log(result)
    if(result){
      localStorage.setItem('user', JSON.stringify({result}))
      navigate('/')
    }else{
      alert("User Does not exist!")
    }
    console.log(result)
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-neutral-800 text-center mb-6">
          Login
        </h2>
        <form className="text-left" onSubmit={handleLogin}>
          <div className="mb-4">
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
              onChange={(e)=>setUsername(e.target.value)}
              value={username}
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
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-neutral-800 text-white py-2 px-4 rounded-md hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-zinc-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-neutral-800 hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login
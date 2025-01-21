import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.clear();
    navigate('/login');
    window.location.reload();
  }
  return (
    <div>
      { auth ? 
      <ul className='flex justify-around p-4 bg-zinc-100 text-neutral-700 cursor-pointer'>
        <li className='hover:text-black'><Link to="/">Products</Link></li>
        <li className='hover:text-black'><Link to="/add">Add Product</Link></li>
        <li className='hover:text-black'><Link to="/profile">Manage profile</Link></li>
        <li className='hover:text-black font-bold'><Link to="/logout" onClick={logout}>Logout ({JSON.parse(auth).result.username}) </Link></li>
      </ul>
      :
      <ul className='flex justify-end gap-8 py-4 px-8 bg-zinc-100 text-neutral-700 cursor-pointer'>
        <li className='hover:text-black'><Link to="/login">Login</Link></li>
        <li className='hover:text-black'><Link to="/signup">Signup</Link></li>
      </ul>
      }
    </div>
  )
}

export default Navbar
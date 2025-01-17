import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.clear();
    navigate('/signup');
    window.location.reload();
  }
  return (
    <div>
      <ul className='flex justify-around p-4 bg-zinc-100 hover:text-black text-neutral-700 cursor-pointer'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Products</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        { auth ? <li><Link to="/logout" onClick={logout}>Logout</Link></li> : <li><Link to="/signup">Signup</Link></li>}
      </ul>
    </div>
  )
}

export default Navbar
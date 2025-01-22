import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const Profile = () => {
  const user = localStorage.getItem('user');
  const userID = JSON.parse(user).result._id;
  const username = JSON.parse(user).result.username;
  const email = JSON.parse(user).result.email;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getUserProducts();
  }, []);

  const getUserProducts = async () => {
    let result = await fetch(`http://localhost:5000/products/${userID}`,{
      headers:{
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct =async (id) =>{
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
      headers:{
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
    result = await result.json()
    if(result){
      getUserProducts();
    }else{
      alert("Some issue occured");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {username}!</h2>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold text-gray-800">Username:</span> {username}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">Email:</span> {email}
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Products</h3>
        <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white text-center">
              <th className="p-4 text-sm font-semibold">Sno.</th>
              <th className="p-4 text-sm font-semibold">Name</th>
              <th className="p-4 text-sm font-semibold">Price</th>
              <th className="p-4 text-sm font-semibold">Category</th>
              <th className="p-4 text-sm font-semibold">Brand</th>
              <th className="p-4 text-sm font-semibold">Operations</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((item, index) => (
                <tr
                  key={index}
                  className={`text-gray-700 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="p-4 border-t">{index + 1}</td>
                  <td className="p-4 border-t">{item.pname}</td>
                  <td className="p-4 border-t">${item.price}</td>
                  <td className="p-4 border-t">{item.category}</td>
                  <td className="p-4 border-t">{item.brand}</td>
                  <td className="p-4 border-t">
                    <Link
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                      to={`/update/${item._id}`} 
                    >
                      Update
                    </Link>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                      onClick={()=>deleteProduct(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="p-4 text-center text-gray-500 border-t"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;

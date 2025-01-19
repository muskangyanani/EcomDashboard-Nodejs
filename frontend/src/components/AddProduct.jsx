import React, { useState } from 'react';

const AddProduct = () => {
  const [pname, setPname] = useState('');
  const [price, setPrice] = useState();
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [error, setError] = useState(false);

  const addProduct = async (e)=>{

    if(!pname || !price || !category || !brand){
      e.preventDefault();
      setError(true);
      return false;
    }

    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"))
    let result =await fetch('http://localhost:5000/add-product', {
      method: 'post',
      body: JSON.stringify({pname, price, category, brand, user: user._id}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    result = await result.json();
    console.log(result)
    alert("Product added Succesfully")
  }

  return (
    <div className="flex justify-center py-10 bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add a New Product
        </h2>
        <form className="space-y-4" onSubmit={addProduct}>
          <div>
            <input
              type="text"
              placeholder="Enter name of product"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e)=>{setPname(e.target.value)}}
              value={pname}
            />
            { error && !pname && <span className='float-start text-sm text-red-500 px-2 pb-2'>* Enter a name of product</span>}
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter price of product"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e)=>{setPrice(e.target.value)}}
              value={price}
            />
            { error && !price && <span className='float-start text-sm text-red-500 px-2 pb-2'>* Enter price of product </span>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter category of product"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e)=>{setCategory(e.target.value)}}
              value={category}
            />
          </div>
          { error && !pname && <span className='float-start text-sm text-red-500 px-2 pb-2'>* Enter category of product</span>}
          <div>
            <input
              type="text"
              placeholder="Enter brand of product"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e)=>{setBrand(e.target.value)}}
              value={brand}
            />
            { error && !pname && <span className='float-start text-sm text-red-500 px-2 pb-2'>* Enter brand of product</span>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

import React, { useState } from 'react';

const UpdateProduct = () => {
  const [pname, setPname] = useState();
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');

  const updateProduct = () =>{
    console.log()
  }

  return (
    <div className="flex justify-center py-10 bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Update Product
        </h2>
        <form className="space-y-4" onSubmit={updateProduct()}>
          <div>
            <input
              type="text"
              placeholder="Enter name of product"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => setPname(e.target.value)}
              value={pname}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter price of product"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter category of product"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter brand of product"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;

import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products",{
      headers:{
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    setProducts(result);
  };

  const searchProduct = async (e) =>{
    let key = e.target.value;
    if(key){
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if(result){
        setProducts(result)
      }
    }else{
      getProducts()
    }
  }

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Available Products
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a product..."
          className="w-full md:w-2/3 lg:w-1/2 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mb-4 md:mb-0"
          onChange={searchProduct}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white text-center">
              <th className="p-4 text-sm font-semibold">Sno.</th>
              <th className="p-4 text-sm font-semibold">Name</th>
              <th className="p-4 text-sm font-semibold">Price</th>
              <th className="p-4 text-sm font-semibold">Category</th>
              <th className="p-4 text-sm font-semibold">Brand</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((item, index) => (
                <tr
                  key={index}
                  className={`text-gray-700 hover:bg-slate-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="p-4 border-t">{index + 1}</td>
                  <td className="p-4 border-t">{item.pname}</td>
                  <td className="p-4 border-t">${item.price}</td>
                  <td className="p-4 border-t">{item.category}</td>
                  <td className="p-4 border-t">{item.brand}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
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

export default Products;

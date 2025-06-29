import React from 'react';
import { useState,useEffect } from 'react'
const AddProduct = ({ popup, setpopup, productAdded, setProductAdded }) => {

  const [product, setproduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    barcode: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    barcode: ""
  });
  const handleChange = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }
  const handleSubmit = async () => {
    const newErrors = {
      name: product.name.trim() === "" ? "Required" : "",
      price: product.price.trim() === "" ? "Required": isNaN(product.price) ? "Must be a number" : "",
      category: product.category.trim() === "" ? "Required" : "",
      stock: product.stock.trim() === "" ? "Required" : isNaN(product.stock) ? "Must be a number" : "",
      barcode: product.barcode.trim() === "" ? "Required" : ""
    };
    setErrors(newErrors);
    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Product added:", data);
        setProductAdded(1);
        setpopup(0);
      }
    } catch (err) {
      console.error("Error", err);
    }
  };
  const renderError = (e) => {
    return errors[e] ? <div className="text-red-600 text-xs">{errors[e]}</div> : null;
  }
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[30vw] flex flex-col items-center font-medium">
        <div className="w-[26vw] mt-6 text-2xl">Add New Product</div>
        <div className="w-[26vw] mt-6">
          <div>Product Name</div>
          <input type="text" onChange={handleChange} value={product.name} name="name"
            className="border w-full rounded-md border-gray-200 p-2 font-normal"></input>
          {renderError("name")}
        </div>
        <div className="w-[26vw] mt-3">
          <div>Price ( ₹ )</div>
          <input type="number" onChange={handleChange} value={product.price} name="price"
            className="border w-full rounded-md border-gray-200 p-2 font-normal"></input>
          {renderError("price")}
        </div>
        <div className="w-[26vw] mt-3">
          <div>Category</div>
          <input type="text" onChange={handleChange} value={product.category} name="category"
            className="border w-full rounded-md border-gray-200 p-2 font-normal"></input>
          {renderError("category")}
        </div>
        <div className="w-[26vw] mt-3">
          <div>Stock Quantity</div>
          <input type="number" onChange={handleChange} value={product.stock} name="stock"
            className="border w-full rounded-md border-gray-200 p-2 font-normal"></input>
          {renderError("stock")}
        </div>
        <div className="w-[26vw] mt-3">
          <div>Barcode</div>
          <input type="text" onChange={handleChange} value={product.barcode} name="barcode"
            className="border w-full rounded-md border-gray-200 p-2 font-normal"></input>
          {renderError("barcode")}
        </div>
        <div className="w-[26vw] my-5 flex flex-row justify-between">
          <button onClick={handleSubmit}
            className="bg-blue-600 text-white py-2 w-[12.5vw] rounded">Add Product</button>
          <button onClick={() => setpopup(0)}
            className="border-black border py-2 w-[12.5vw] rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

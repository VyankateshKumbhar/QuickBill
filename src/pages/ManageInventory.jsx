import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import AddProduct from '../Components/AddProduct'
import { useEffect, useState } from 'react';
import Product from "../Components/Product"
const ManageInventory = () => {
  const [popup, setpopup] = useState(false);
  const [productAdded, setProductAdded] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      }
      catch (err) {
        console.error("Error", err);
      }
    }
    fetchData();
  }, [productAdded])
  useEffect(() => {
    if (productAdded) {
      const timer = setTimeout(() => {
        setProductAdded(false);
      }, 1000);
      return () => clearTimeout(timer); // clean-up
    }
  }, [productAdded]);

  return (
    <>
      <div className='h-auto overflow-y-auto w-[80vw] ml-[17vw] mt-[9vh]
                    flex flex-col bg-gray-50'>
        <div className='w-full h-[14.5vh]  flex flex-row justify-between
                        items-center px-5'>
          <div>
            <h1 className='text-3xl font-bold'>Inventory Management</h1>
            <p>Mange your products and stock levels</p>
          </div>
          <button onClick={() => setpopup(true)} className='bg-blue-500 text-white font-bold rounded-md 
                                p-3 items-center whitespace-pre'>+   Add Product</button>
        </div>
        <input type="text" placeholder="🔍 Enter Item Name" className='mx-5 h-10 rounded-md
                    text-gray-800 px-5 bg-white' value=""></input>

        <div className="bg-white m-5 rounded-md flex flex-col pb-6">
          <div className="mx-5 py-5 text-3xl ">Products (6)</div>
          {
            products.map((details) => {
              return <Product key={details._id} details={details} />;
            })
          }

        </div>
      </div>

      {popup && <AddProduct popup={popup} setpopup={setpopup}
        productAdded={productAdded} setProductAdded={setProductAdded} isEditMode={false} productToEdit={null}/>}

      {productAdded && (
        <div className='h-auto w-screen text-white flex justify-center  fixed top-5 z-50'>
          <div className="h-auto w-auto bg-green-500 shadow-md py-2 px-4">
            Product Added Successfully!
          </div>
        </div>
      )}
    </>
  )
}

export default ManageInventory

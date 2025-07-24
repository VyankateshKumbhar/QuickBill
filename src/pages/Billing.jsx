import React from 'react'
import { useEffect, useState } from 'react';
import BillingProduct from '../Components/BillingProduct'
const Billing = () => {
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState((""));
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;
        if (searchVal === "") { url = "http://localhost:5000/api/products"; }
        else { url = `http://localhost:5000/api/products/${searchVal}`; }
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setProducts(data);
      }
      catch (err) {
        console.error("Error", err);
      }
    }
    fetchData();
  }, [searchVal])
  return (
    <div className=" w-[83vw] mt-[9vh] grid grid-cols-2 h-[91vh] overflow-y-scroll ">
      <div className='w-full'>
        <div className='m-5'>
          <div className='w-full flex flex-row justify-between items-center'>
            <div>
              <h1 className='text-3xl font-bold mt-2'>Billing System</h1>
              <p>Add products to cart and generate bills</p>
            </div>
            <button className='bg-white font-semibold rounded-md 
                                px-5 items-center h-9 flex'>View History</button>
          </div>
          <div className="h-auto w-full bg-white mt-5 rounded-xl flex flex-col p-5 
           ">
            <h1 className="text-2xl font-semibold">Add Products</h1>
            <input type="text" placeholder="🔍 Enter Item Name"
              className='rounded-md text-gray-800 px-5 py-1 mt-4 bg-white border border-gray-300'
              onChange={(e) => { setSearchVal(e.target.value) }} value={searchVal} ></input>
            <div className=' mt-5'>
              {products.map((details) => {
                return <BillingProduct key={details._id} details={details} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='w-full h-auto'>
          <div className='m-5 '>
            <div className='bg-blue-500 h-[60vh]'>Shopping Cart</div>
            <div className='bg-yellow-500 h-[60vh]'>Shopping Cart</div>
            <div>Bill Summary</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing

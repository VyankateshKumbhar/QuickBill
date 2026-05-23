import React from 'react'
import { useEffect, useState } from 'react';
import BillingProduct from '../Components/BillingProduct'
import CartProduct from '../Components/CartProduct'
import generateBillPDF from '../utils/GenerateBillPDF'
const Billing = () => {
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState((""));
  const [cartItems, setCartItems] = useState([]);
    
    const findSubtotal=()=>{
          const total= cartItems.reduce((sum,item)=>{
            return sum+item.quantity*item.price
          },0);
          return total
    }
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
    <div className=" w-[83vw] mt-[9vh] grid grid-cols-2 h-[91vh]  ">
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
          <div className="h-[74vh] w-full bg-white mt-5 rounded-xl flex flex-col p-5 
           overflow-y-scroll">
            <h1 className="text-2xl font-semibold">Add Products</h1>
            <input type="text" placeholder="🔍 Enter Item Name"
              className='rounded-md text-gray-800 px-5 py-1 mt-4 bg-white border border-gray-300'
              onChange={(e) => { setSearchVal(e.target.value) }} value={searchVal} ></input>
            <div className=' mt-5'>
              {products.map((details) => {
                return <BillingProduct
                key={details._id} 
                details={details} 
                cartItems={cartItems}
                setCartItems={setCartItems}
              />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='w-full h-auto'>
          <div className='m-5 gap-5 flex flex-col'>
            <div className='bg-white rounded-md p-5 h-[50vh] overflow-y-scroll'>
              <div className=" text-2xl font-semibold mb-4">Shopping Cart (0 items)</div>
              {cartItems.map((details)=>{
                return <CartProduct 
                key={details._id}
                details={details}
                cartItems={cartItems}
                setCartItems={setCartItems}/>
              })}
            </div>
            <div className='bg-white h-[33vh] rounded-md flex
             flex-col justify-around p-3'>
              <div className='text-2xl font-semibold'>Bill Summary</div>
              <div className='flex-col'>
                <div className='flex justify-between'>
                  <div>Total Items</div>
                  <div>{cartItems.length}</div>
                </div>
                <div className='flex justify-between'>
                  <div>Subtotal</div>
                  <div>₹{findSubtotal()}</div>
                </div>
                <div className='flex justify-between'>
                  <div>Discount</div>
                  <div>00</div>
                </div>
                <div className='flex justify-between'>
                  <div>GST</div>
                  <div>00</div>
                </div>
              </div>
              <div className='bg-black w-full h-0.25'></div>
              <div className='flex flex-col gap-2 font-semibold'>
                <div className='text-xl flex justify-between'>
                  <div>Grand Total</div>
                  <div className='text-green-800'>₹{findSubtotal()}</div>
                </div>
                <div className='flex justify-evenly'>
                  <div className='border-2 px-20 py-0.5 rounded-md'>Clear Cart</div>
                  <button className='cursor-pointer border-2 px-20 py-0.5 rounded-md text-white bg-green-800'
                  onClick={()=>generateBillPDF(cartItems,findSubtotal())}>Generate Bill</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing

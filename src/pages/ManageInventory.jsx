import React from 'react'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import AddProduct from './AddProduct'
import { useState } from 'react'
const ManageInventory = () => {
    const [popup,setpopup]=useState(0);
  return (
    <>
    <div className='h-auto overflow-x-hidden overflow-y-auto  w-[83vw] ml-[17vw] mt-[12vh]
                    flex flex-col'>
        <div className='w-full h-[14.5vh]  flex flex-row justify-between
                        items-center px-5'>
            <div>
                <h1 className='text-3xl font-bold'>Inventory Management</h1>
                <p>Mange your products and stock levels</p>
            </div>
            <button onClick={()=>setpopup(1)} className='bg-blue-500 text-white font-bold rounded-md 
                                p-3 items-center whitespace-pre'>+   Add Product</button>
        </div>
        <input type="text" placeholder="🔍 Enter Item Name" className='mx-5 h-10 rounded-md
                    text-gray-800 px-5 bg-white' value=""></input>
        
        <div className="bg-white m-5 rounded-md flex flex-col pb-6">
          <div className="mx-5 py-5 text-3xl ">Products (6)</div>
          <div className="flex flex-row  justify-around border-b  mx-5 py-5 border-b-gray-600">
            <div className="flex flex-row justify-start w-[10vw]">Product</div>
            <div className="flex flex-row justify-start w-[10vw]">Category</div>
            <div className="flex flex-row justify-start w-[10vw]">Price</div>
            <div className="flex flex-row justify-start w-[10vw]">Stock</div>
            <div className="flex flex-row justify-start w-[10vw]">Barcode</div>
          </div>
          <div className="flex flex-row py-5 justify-around border-b mx-5 border-b-gray-600">
            <div className="flex flex-row justify-start w-[10vw]">Laptop</div>
            <div className="flex flex-row justify-start w-[10vw]">Electronics</div>
            <div className="flex flex-row justify-start w-[10vw]">700001236</div>
            <div className="flex flex-row justify-start w-[10vw]">30</div>
            <div className="flex flex-row justify-start w-[10vw]">123456789</div>
          </div>
          <div className="flex flex-row py-5 justify-around border-b mx-5 border-b-gray-600">
            <div className="flex flex-row justify-start w-[10vw]">Laptop</div>
            <div className="flex flex-row justify-start w-[10vw]">Electronics</div>
            <div className="flex flex-row justify-start w-[10vw]">700001236</div>
            <div className="flex flex-row justify-start w-[10vw]">30</div>
            <div className="flex flex-row justify-start w-[10vw]">123456789</div>
          </div>
          <div className="flex flex-row py-5 justify-around border-b mx-5 border-b-gray-600">
            <div className="flex flex-row justify-start w-[10vw]">Laptop</div>
            <div className="flex flex-row justify-start w-[10vw]">Electronics</div>
            <div className="flex flex-row justify-start w-[10vw]">700001236</div>
            <div className="flex flex-row justify-start w-[10vw]">30</div>
            <div className="flex flex-row justify-start w-[10vw]">123456789</div>
          </div>
          <div className="flex flex-row py-5 justify-around border-b mx-5 border-b-gray-600">
            <div className="flex flex-row justify-start w-[10vw]">Laptop</div>
            <div className="flex flex-row justify-start w-[10vw]">Electronics</div>
            <div className="flex flex-row justify-start w-[10vw]">700001236</div>
            <div className="flex flex-row justify-start w-[10vw]">30</div>
            <div className="flex flex-row justify-start w-[10vw]">123456789</div>
          </div>
          <div className="flex flex-row py-5 justify-around border-b mx-5 border-b-gray-600">
            <div className="flex flex-row justify-start w-[10vw]">Laptop</div>
            <div className="flex flex-row justify-start w-[10vw]">Electronics</div>
            <div className="flex flex-row justify-start w-[10vw]">700001236</div>
            <div className="flex flex-row justify-start w-[10vw]">30</div>
            <div className="flex flex-row justify-start w-[10vw]">123456789</div>
          </div>

        </div>
    </div>
    
    {popup&&<AddProduct popup={popup} setpopup={setpopup}/>}
    </>
  )
}

export default ManageInventory

import React from 'react';

const AddProduct = ({popup,setpopup}) => {
  return (
    <div className="fixed w-screen h-screen bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[30vw] flex flex-col items-center font-medium">
        <div className="w-[26vw] mt-6 text-2xl">Add New Product</div>
        <div className="w-[26vw] mt-6">
          <div>Product Name</div>
          <input type="text"className="border w-full rounded-md border-gray-200 p-2 font-normal"></input>
        </div>
        <div className="w-[26vw] mt-3">
          <div>Price ( ₹ )</div>
          <input type="text"className="border w-full rounded-md border-gray-200 p-2 font-normal"></input>
        </div>
        <div className="w-[26vw] mt-3">
          <div>Category</div>
          <input type="text"className="border w-full rounded-md border-gray-200 p-2 font-normal"></input>
        </div>
        <div className="w-[26vw] mt-3">
          <div>Stock Quantity</div>
          <input type="text"className="border w-full rounded-md border-gray-200 p-2 font-normal"></input>
        </div>
        <div className="w-[26vw] mt-3">
          <div>Barcode</div>
          <input type="text"className="border w-full rounded-md border-gray-200 p-2 font-normal"></input>
        </div>
        <div className="w-[26vw] my-5 flex flex-row justify-between">
          <button className="bg-blue-600 text-white py-2 w-[12.5vw] rounded">Add Product</button>
          <button onClick={()=>setpopup(0)} className="border-black border py-2 w-[12.5vw] rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import AddProduct from "./AddProduct"
const Product = ({ key, details, setProductAdded,
  setProductEdited, setProductDeleted }) => {
  const [popup, setpopup] = useState(false);
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${details._id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        setProductDeleted(true);
        console.log("Deleted successfully");
      } else {
        const data = await res.json();
        console.error("Delete failed:", data.message);
      }
    } catch (err) { }
  }
  return (
    <>
      <div className="flex flex-row py-5 justify-around border-b mx-5 border-b-gray-600">
        <div className="flex items-center flex-row justify-start w-[10vw] font-semibold">{details.name}</div>
        <div className="flex items-center flex-row justify-start w-[10vw]">{details.category}</div>
        <div className="flex items-center flex-row justify-start w-[10vw] font-semibold">{details.price}</div>
        <div className="flex  flex-row w-[10vw] justify-between items-center font-semibold">{details.stock}
          {details.stock ? <div className="bg-green-100 text-xs ml-2 mr-[3.25vw] flex flex-row font-sans 
          font-semibold items-center w-auto h-4 py-2 px-2 text-green-800 
          rounded-xl">In Stock
          </div>
          : <div className="bg-red-100 text-xs ml-2 flex flex-row font-sans 
          font-semibold items-center w-auto h-4 py-2 px-2 red-green-800 mr-[2vw]
          rounded-xl">Out Of Stock
          </div>
        }
        </div>
        <div className="items-center flex flex-row justify-start w-[10vw]">{details.barcode}</div>
        <div className=" items-center flex flex-row gap-1 w-[4vw]">
          <button onClick={() => { setpopup(true) }}
            className='text-blue-500 hover:text-blue-700'><FontAwesomeIcon icon={faPenToSquare} /></button>
          <button onClick={handleDelete}
            className='text-red-500 hover:text-red-700'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
      {popup ? (
        <AddProduct
          popup={popup}
          setpopup={setpopup}
          setProductAdded={setProductAdded}
          setProductEdited={setProductEdited}
          isEditMode={true}
          productToEdit={details}
        />
      ) : null}
    </>
  )
}

export default Product


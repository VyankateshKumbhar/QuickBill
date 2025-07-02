import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import AddProduct from "./AddProduct"
const Product = ({key, details,setProductAdded,
  setProductEdited ,  setProductDeleted}) => {
  const [popup, setpopup] = useState(false);
  const handleDelete=async()=>{
    try{
      const res=await fetch(`http://localhost:5000/api/products/${details._id}`,{
        method: 'DELETE',
      })
      if (res.ok) {
      setProductDeleted(true);
      console.log("Deleted successfully");
    } else {
      const data = await res.json();
      console.error("Delete failed:", data.message);
    }
    }catch(err){}
  }
  return (
    <>
      <div className="flex flex-row py-5 justify-around border-b mx-5 border-b-gray-600">
        <div className="flex flex-row justify-start w-[10vw]">{details.name}</div>
        <div className="flex flex-row justify-start w-[10vw]">{details.category}</div>
        <div className="flex flex-row justify-start w-[10vw]">{details.price}</div>
        <div className="flex flex-row justify-start w-[10vw]">{details.stock}</div>
        <div className="flex flex-row justify-start w-[10vw]">{details.barcode}</div>
        <div className="flex flex-row gap-1 ">
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


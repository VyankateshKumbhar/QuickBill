import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import AddProduct from "./AddProduct"
const Product = ({ details }) => {
  const [popup, setpopup] = useState(false);
  const [productAdded, setProductAdded] = useState(false);
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
      <div className="flex flex-row py-5 justify-around border-b mx-5 border-b-gray-600">
        <div className="flex flex-row justify-start w-[10vw]">{details.name}</div>
        <div className="flex flex-row justify-start w-[10vw]">{details.category}</div>
        <div className="flex flex-row justify-start w-[10vw]">{details.price}</div>
        <div className="flex flex-row justify-start w-[10vw]">{details.stock}</div>
        <div className="flex flex-row justify-start w-[10vw]">{details.barcode}</div>
        <div className="flex flex-row gap-1 ">
          <button onClick={() => { setpopup(true) }}
            className='text-blue-500 hover:text-blue-700'><FontAwesomeIcon icon={faPenToSquare} /></button>
          <button className='text-red-500 hover:text-red-700'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
      {popup ? (
        <AddProduct
          popup={popup}
          setpopup={setpopup}
          productAdded={productAdded}
          setProductAdded={setProductAdded}
          isEditMode={true}
          productToEdit={details}
        />
      ) : null}

      {productAdded ? (
        <div className='h-auto w-screen text-white flex fixed top-5 z-50'>
          <div className="h-auto w-[16vw] bg-green-500 shadow-md py-2 px-4 ml-[25vw] flex justify-center">
            Product Updated Successfully!
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Product


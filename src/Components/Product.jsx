import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare , faTrash } from '@fortawesome/free-solid-svg-icons'
const Product = ({details}) => {
  return (
    <div className="flex flex-row py-5 justify-around border-b mx-5 border-b-gray-600">
            <div className="flex flex-row justify-start w-[10vw]">{details.name}</div>
            <div className="flex flex-row justify-start w-[10vw]">{details.category}</div>
            <div className="flex flex-row justify-start w-[10vw]">{details.price}</div>
            <div className="flex flex-row justify-start w-[10vw]">{details.stock}</div>
            <div className="flex flex-row justify-start w-[10vw]">{details.barcode}</div>
            <div className="flex flex-row gap-1 ">
              <button className='text-blue-500 hover:text-blue-700'><FontAwesomeIcon icon={faPenToSquare} /></button>
              <button className='text-red-500 hover:text-bred-700'><FontAwesomeIcon icon={faTrash}/></button>
            </div>
          </div>
  )
}

export default Product


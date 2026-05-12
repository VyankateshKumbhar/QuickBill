import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const CartProduct = () => {
    return (
        <div className="flex flex-row just justify-between border border-gray-300
                    rounded-md items-center mt-4 p-2">
            <div className="flex flex-col w-[10vw]">
                <div className="font-semibold">Product Name</div>
                <div className="text-sm text-gray-600">₹255 each</div>
            </div >
            <div className="flex flex-row w-[12vw] items-center justify-between">
                <div className="w-[3vw]">10</div>
                <div className="w-[5vw] flex items-center flex-row justify-start"
                >₹25000000</div>
                <button className='text-red-500 hover:text-red-700 border 
                        border-gray-300 py-1 px-2 rounded-md'>
                    <FontAwesomeIcon icon={faTrash} /></button>
            </div>

        </div>
    )
}

export default CartProduct

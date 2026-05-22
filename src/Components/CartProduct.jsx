import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
const CartProduct = ({ details,cartItems,setCartItems }) => {
    const [Quantity, SetQuantity] = useState(1);
    useEffect(() => {
        if (details.stock < Quantity) {
            console.log("stock exceeded")
            SetQuantity(details.stock);
        }
        else {
            details.quantity = Number(Quantity || 0);
        }
    }, [Quantity])

    const handleChange = (e) => {

        let val = parseInt(e.target.value);

        if (isNaN(val)) {
            val="";
        } 
        SetQuantity(val)
        setCartItems((prevItems)=>prevItems.map((item)=>
            item._id===details._id ? {...item, quantity:val} : item
        ))
    };
    return (
        <div className="flex flex-row just justify-between border border-gray-300
                    rounded-md items-center mt-4 p-2">
            <div className="flex flex-col w-[10vw]">
                <div className="font-semibold">{details.name}</div>
                <div className="text-sm text-gray-600">₹{details.price} each</div>
            </div >
            <div className="flex flex-row w-[12vw] items-center justify-between">
                <input className="w-[3vw]"
                    type='number'
                    value={Quantity}
                    onChange={handleChange}
                />
                <div className="w-[5vw] flex items-center flex-row justify-start"
                >{details.price * Number(Quantity || 0)}</div>
                <div><button className='text-red-500 hover:text-red-700 border 
                        border-gray-300 py-1 px-2 rounded-md'>
                    <FontAwesomeIcon icon={faTrash} /></button></div>
            </div>

        </div>
    )
}

export default CartProduct

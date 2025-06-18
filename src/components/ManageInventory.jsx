import React from 'react'

const ManageInventory = () => {
  return (
    <div className='h-auto overflow-auto bg-gray-100 w-[83vw] ml-[17vw] mt-[12vh]'>
        <div className='w-full h-[14.5vh] bg-amber-400 flex flex-row justify-between
                        items-center px-5'>
            <div>
                <h1 className='text-3xl font-bold'>Inventory Management</h1>
                <p>Mange your products and stock levels</p>
            </div>
            <button className='bg-blue-500 text-white font-bold rounded-md 
                                p-3 items-center whitespace-pre'>+   Add Product</button>
        </div>
    </div>
  )
}

export default ManageInventory

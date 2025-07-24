import React from 'react'
const BillingProduct = ({details}) => {
  if (!details) return null;
  return (
    <div className="flex flex-row justify-between items-center px-3 py-2 border-b border-gray-300">
                <div>
                  <p className='font-semibold -mb-1'>{details.name}</p>
                  <p className='font-extralight'>₹{details.price}</p>
                </div>
                <div className="font-semibold text-xs rounded-3xl border border-gray-300 h-5 w-16 flex justify-center items-center px-2">Stock:{details.stock}</div>
              </div>
  )
}

export default BillingProduct

import React from 'react'
const BillingProduct = ({details}) => {
  if (!details) return null;
  //first add GET request to find product
  //if(productFound)Send Put Request to update the quantity
  //else Post Request to Add Product Cart
  //link thi quantity to actual stock and give popude when quantity exceeds stock
  //add i/p field for quantity in billing Product
  const handleClick = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/cart`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...details,
          barcode: Number(details.barcode),
          quantity: 1,
        })
      })
      if (res.ok) {
        const data = await res.json();
        console.log("Added", data);
        setProductAdded(true);
      }
    } catch (err) {
      console.error("Error", err);
    }
  };
  return (
    <div className="flex flex-row justify-between items-center px-3 py-2 
                      border-b border-gray-300 hover:bg-gray-50
                      cursor-pointer" onClick={handleClick}>
                <div>
                  <p className='font-semibold -mb-1'>{details.name}</p>
                  <p className='font-extralight'>₹{details.price}</p>
                </div>
                <div className="font-semibold text-xs rounded-3xl border border-gray-300 h-5 w-16 flex justify-center items-center px-2">Stock:{details.stock}</div>
              </div>
  )
}

export default BillingProduct

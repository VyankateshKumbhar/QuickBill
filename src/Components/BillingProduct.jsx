import React from 'react'
const BillingProduct = ({cartItems,setCartItems,details}) => {
  if (!details) return null;
  //first add GET request to find product
  //if(productFound)Send Put Request to update the quantity
  //else Post Request to Add Product Cart
  //link thi quantity to actual stock and give popude when quantity exceeds stock
  //add i/p field for quantity in billing Product
  const handleClick = async () => {
    const exist=cartItems.some((item)=>{
      return item._id===details._id
    }
    );
    let updatedCart = [...cartItems];
    if(!exist){
      if(details.stock===0){
        console.log(`${details.name} is out of stock`);
        return;
      }
      updatedCart = [...cartItems, {...details,quantity:1}];
      setCartItems(updatedCart);
    }
    updatedCart.forEach((item)=>{console.log(item.name,item.quantity)})
  };
  return (
    <div className="flex flex-r ow justify-between items-center px-3 py-2 
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

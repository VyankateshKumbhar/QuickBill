import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white h-[9vh] w-full shadow-sm px-6 py-3 flex justify-between items-center fixed z-10">
      <div>
          <h1 className="text-2xl font-bold text-black">QuickBill</h1>
          <p> Smarter Billing. Faster Checkout.</p>
      </div>
      
    </div>
  );
};

export default Navbar;

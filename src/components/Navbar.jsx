import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white h-[12vh] w-screen shadow-sm px-6 py-3 flex justify-between items-center fixed">
      <div flex flex-column>
          <h1 class="text-2xl font-bold text-black">QuickBill</h1>
          <p> Smarter Billing. Faster Checkout.</p>
      </div>
      
    </div>
  );
};

export default Navbar;

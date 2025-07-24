import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = ({openSidebar,setOpenSidebar}) => {
  return (
    <div className="bg-white h-[9vh] w-full shadow-sm px-6 py-3 flex justify-between items-center fixed z-10">
      <div className="flex fkex-row items-center gap-2">
        <div className=' px-1 h-auto w-auto rounded-md hover:bg-gray-300'>
          <button onClick={() => { setOpenSidebar(!openSidebar) }}>
            <FontAwesomeIcon icon={faBars} /></button></div>
        <h1 className="text-2xl font-bold text-black">QuickBill</h1>
      </div>
      <h2 className='font-semibold'>कुंभार किराणा स्टोअर्स </h2>
    </div>
  );
};

export default Navbar;

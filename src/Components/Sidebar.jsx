import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faCartShopping, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;
  const [option, setoption] = useState(1);
  return (
    <div className="bg-white h-[85vh] overflow-hidden w-[17vw] flex
                    flex-col gap-2 items-center fixed top-[13vh] left-0 rounded-2xl">
      <button onClick={() => { navigate("/manage-inventory"); }}
        className={`h-12 w-[14vw] ${isActive("/manage-inventory") ? "bg-gray-200 font-bold" : "bg-white hover:bg-gray-100"} rounded-md flex
                      items-center justify-start pl-5 mt-8 gap-2`}>
        <FontAwesomeIcon icon={faWarehouse} />Inventory
      </button>
      <button onClick={() => { navigate("/billing"); }}
        className={`h-12 w-[14vw] ${isActive("/billing") ? "bg-gray-200 font-bold" : "bg-white hover:bg-gray-100"} mt-5 rounded-md flex
                      items-center justify-start pl-5  gap-2`}>
        <FontAwesomeIcon icon={faCartShopping} />Billing
      </button>
      <button onClick={() => { navigate("/dashboard"); }}
        className={`h-12 w-[14vw] ${isActive("/dashboard") ? "bg-gray-200 font-bold" : "bg-white hover:bg-gray-100"} mt-5 rounded-md flex
                      items-center justify-start pl-5  gap-2`}>
        <FontAwesomeIcon icon={faSquarePollVertical} />Dashboard
      </button>
    </div>
  )
}

export default Sidebar
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faCartShopping, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
const Sidebar = () => {
  const [option, setoption] = useState(1);
  return (
    <div className="bg-white h-full overflow-hidden w-[17vw] flex
                    flex-col gap-2 items-center fixed top-[9vh]">
      <button onClick={() => setoption(1)} className={`h-12 w-[14vw] ${option == 1 ? "bg-blue-300" : "bg-amber-400 hover:bg-amber-100"} mt-5 rounded-md flex
                      items-center justify-start pl-5  gap-2`}>
        <FontAwesomeIcon icon={faWarehouse} />Inventory
      </button>
      <button onClick={() => setoption(2)} className={`h-12 w-[14vw] ${option == 2 ? "bg-blue-300" : "bg-amber-400 hover:bg-amber-100"} mt-5 rounded-md flex
                      items-center justify-start pl-5  gap-2`}>
        <FontAwesomeIcon icon={faCartShopping} />Billing
      </button>
      <button onClick={() => setoption(3)} className={`h-12 w-[14vw] ${option == 3 ? "bg-blue-300" : "bg-amber-400 hover:bg-amber-100"} mt-5 rounded-md flex
                      items-center justify-start pl-5  gap-2`}>
        <FontAwesomeIcon icon={faSquarePollVertical} />Dashboard
      </button>
    </div>
  )
}

export default Sidebar
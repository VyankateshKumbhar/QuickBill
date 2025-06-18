import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse,faCartShopping,faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <div className="bg-red-700 h-[88vh] overflow-hidden w-[17vw] flex
                    flex-col gap-2 items-center fixed top-[12vh]">
      <div className="h-12 w-[14vw] bg-amber-400 mt-5 rounded-md flex
                      items-center justify-start pl-5 hover:bg-amber-100 gap-2">
                        <FontAwesomeIcon icon={faWarehouse} />Inventory
                      </div>
      <div className="h-12 w-[14vw] bg-amber-400 mt-5 rounded-md flex
                      items-center justify-start pl-5 hover:bg-amber-100 gap-2">
                        <FontAwesomeIcon icon={faCartShopping} />Billing
                      </div>
      <div className="h-12 w-[14vw] bg-amber-400 mt-5 rounded-md flex
                      items-center justify-start pl-5 hover:bg-amber-100 gap-2">
                        <FontAwesomeIcon icon={faSquarePollVertical} />Dashboard
                      </div>
    </div>
  )
}

export default Sidebar

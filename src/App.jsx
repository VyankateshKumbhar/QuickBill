import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import Sidebar from './pages/Sidebar'
import ManageInventory from './pages/ManageInventory'
function App() {
  return(
    <>
    <div className=' bg-gray-50 min-h-screen w-full relative'>
    <Navbar/>
    <div className='flex'>
      <Sidebar/>
      <ManageInventory/>
    </div>     
    </div>
    </>
  )
}

export default App

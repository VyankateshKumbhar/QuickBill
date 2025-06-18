import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ManageInventory from './components/ManageInventory'
function App() {
  return(
    <>
    <div>
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

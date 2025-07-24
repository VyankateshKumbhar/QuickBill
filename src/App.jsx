import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import ManageInventory from './pages/ManageInventory';
import Billing from './pages/Billing';
import Dashboard from './pages/Dashboard';
import { useState, useEffect } from 'react'
// import more pages as needed

function App() {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <Router>
      <div className='overflow-hidden'>
        <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        <div className="flex flex-row justify-end">
          {openSidebar ? <Sidebar setOpenSidebar={setOpenSidebar}/> : null}
          <Routes>
            <Route path="/manage-inventory" element={<ManageInventory openSidebar={openSidebar} />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

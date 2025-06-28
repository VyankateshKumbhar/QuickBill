import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import ManageInventory from './pages/ManageInventory';
import Billing from './pages/Billing';
import Dashboard from './pages/Dashboard';
// import more pages as needed

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
          <Routes>
            <Route path="/manage-inventory" element={<ManageInventory />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;

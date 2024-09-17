import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ScanFacePage from './center';
import AadhaarDetailsPage from './details';
import Navbar from './navbar';
function App() {
  return (
    <Router>
      <div className="App">
        
          <Navbar />
          <Routes>
          {/* Route for the Scan Face Page */}
          <Route path="/" element={<ScanFacePage />} />
          {/* Route for the Aadhaar Details Page */}
          <Route path="/aadhaar-details" element={<AadhaarDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

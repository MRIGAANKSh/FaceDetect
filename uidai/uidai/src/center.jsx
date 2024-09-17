import React from 'react';
import { useNavigate } from 'react-router-dom';
import './center.css'; // Import the CSS for styling

function ScanFacePage() {
  const navigate = useNavigate();

  // Simulate face authentication and redirect based on result
  const handleScanFace = () => {
    const isRealFace = true; // Simulated result for face scanning

    if (isRealFace) {
      // Navigate to Aadhaar details page if face is real
      navigate('/aadhaar-details');
    } else {
      alert('Face authentication failed. Please try again.');
    }
  };

  return (
    <div className="ScanFacePage">
      <div className="box-container">
        <h1>Welcome to Face Scanner</h1>
        <button className="scan-button" onClick={handleScanFace}>
          Authenticate
        </button>
      </div>
    </div>
  );
}

export default ScanFacePage;

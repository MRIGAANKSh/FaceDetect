import React from 'react';

function AadhaarDetailsPage() {
  // You can replace this with actual Aadhaar data fetching logic
  const aadhaarDetails = {
    name: 'Ruchi',
    aadhaarNumber: '1234-5678-9012',
    dob: '24/07/2005',
    address: 'ghaziabad ,uttar pradesh ,india',
  };

  return (
    <div className="AadhaarDetailsPage">
      <div className="Details-box bg-white p-6 shadow-lg rounded-lg w-full max-w-md mx-auto mt-10">
        <h2 className="text-center text-2xl font-bold mb-4">Aadhaar Details</h2>
        <p><strong>Name:</strong> {aadhaarDetails.name}</p>
        <p><strong>Aadhaar Number:</strong> {aadhaarDetails.aadhaarNumber}</p>
        <p><strong>Date of Birth:</strong> {aadhaarDetails.dob}</p>
        <p><strong>Address:</strong> {aadhaarDetails.address}</p>
      </div>
    </div>
  );
}

export default AadhaarDetailsPage;

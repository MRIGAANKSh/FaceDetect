import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar1 from '../navbar/Navbar1';

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { result } = location.state || {}; // Get the result from the state

  return (
    <>
      <Navbar1 />
      <div className="flex items-center justify-center h-screen bg-#beeefb">
        <div className="bg-white p-10 rounded-xl shadow-2xl text-center w-80 md:w-96 lg:w-[32rem]">
          <h1 className={`text-4xl font-extrabold ${result === 'Face is real' ? 'text-green-500' : 'text-red-500'} mb-6`}>
            {result}
          </h1>
          <button
            onClick={() => navigate('/face-detect')}
            className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
          >
            Scan Again
          </button>
        </div>
      </div>
    </>
  );
}

export default ResultPage;

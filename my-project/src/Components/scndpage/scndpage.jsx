import React from 'react';

function FaceDetection() {
  return (
    <div className="flex items-center justify-center h-screen bg-#beeefb ">
      <div className="relative bg-white p-6 rounded-lg shadow-lg text-center w-180 h-120 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Face Detection Online</h1>
        <p className="text-gray-600 mb-6">
          "Get ready for an exhilarating experience - activate face liveness detection to boost security and dive into the fun!"
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/17/people-973739__340.jpg"
          alt="Faces"
          className="w-full h-full object-cover rounded-lg mb-4"
        />
        <button className="absolute bottom-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Scan Face
        </button>
      </div>
    </div>
  );
}

export default FaceDetection;

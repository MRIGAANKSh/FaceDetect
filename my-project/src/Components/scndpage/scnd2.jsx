import React, { useState, useRef, useEffect } from 'react';

function FaceDetection() {
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const [isWide, setIsWide] = useState(false);
    const [faces, setFaces] = useState([]);
    const [faceMessage, setFaceMessage] = useState(''); // State to store the face message
    const [messageColor, setMessageColor] = useState(''); // State to store the message color
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    // Access the webcam
  useEffect(() => {
    if (isVideoVisible) {
      const startVideo = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (err) {
          console.error("Error accessing webcam: ", err);
        }
      };

      startVideo();
    }
  }, [isVideoVisible]);
  // Capture the image and send it to the Flask API
  const captureAndDetectFace = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');

    if (canvas && video && context) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append('image', blob, 'webcam_capture.jpg');

        try {
          const response = await fetch('http://127.0.0.1:5000/detect_face', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setFaces(data.faces);

          // Check if any face is real or fake
          if (data.faces.some(face => face.is_real)) {
            setFaceMessage("Face is real");
            setMessageColor("text-green-500");
          } else {
            setFaceMessage("Face is fake");
            setMessageColor("text-red-500");
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }, 'image/jpeg');
    }
  };


  return (
    <div className="flex items-center justify-center h-screen bg-#beeefb transition-all duration-300">
  <div className={`relative bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center ${isVideoVisible ? 'w-[90%] h-[90%]' : 'w-180 h-120'}`}>
    {!isVideoVisible && (
      <>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Face Detection Online</h1>
        <p className="text-gray-600 mb-6">
          "Get ready for an exhilarating experience - activate face liveness detection to boost security and dive into the fun!"
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/17/people-973739__340.jpg"
          alt="Faces"
          className="w-full h-full object-cover rounded-lg mb-4"
        />
      </>
    )}
    {isVideoVisible && (
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          className="w-full h-full object-cover rounded-lg mb-4"
        />
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      </div>
    )}
    <button
      onClick={() => {
        if (!isVideoVisible) {
          setIsVideoVisible(true);
        }
        setIsWide(!isWide);
        captureAndDetectFace();
      }}
      className="absolute bottom-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    >
      {isVideoVisible ? 'Capture Face' : 'Scan Face'}
    </button>
    {faces.length > 0 && (
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800">Detected Faces:</h2>
        <ul>
          {faces.map((face, index) => (
            <li key={index}>
              Face {index + 1}: x={face.x}, y={face.y}, width={face.w}, height={face.h}, Real: {face.is_real ? 'Yes' : 'No'}
            </li>
          ))}
        </ul>
      </div>
    )}
    {faceMessage && (
      <div className={`mt-4 font-bold text-lg ${messageColor}`}>
        {faceMessage}
      </div>
    )}
  </div>
</div>

  );
}

export default FaceDetection;

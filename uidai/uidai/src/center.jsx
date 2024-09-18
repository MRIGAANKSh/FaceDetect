import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import './center.css'; // Import the CSS for styling

const ScanFacePage = () => {
  const webcamRef = useRef(null);
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  // Load the model when the component mounts
  useEffect(() => {
    const loadModel = async () => {
      try {
        console.log("Loading model...");
        const loadedModel = await tf.loadGraphModel("/model/model.json");
        setModel(loadedModel);
        console.log("Model loaded successfully");
        setLoading(false); // Set loading to false once model is loaded
      } catch (error) {
        console.error("Error loading model:", error);
        setLoading(false); // Stop loading if there's an error
      }
    };

    loadModel();
  }, []);

  const captureImage = async () => {
    if (!model) {
      alert("Model is not loaded yet!");
      return;
    }

    const imageSrc = webcamRef.current.getScreenshot();
    const imgElement = document.createElement("img");
    imgElement.src = imageSrc;

    imgElement.onload = async () => {
      const imgTensor = tf.browser
        .fromPixels(imgElement)
        .resizeNearestNeighbor([128, 128]) // Input size specified by the model
        .toFloat()
        .div(255.0) // Normalize the image
        .expandDims(0); // Add batch dimension

      const prediction = await model.predict(imgTensor);
      const result = prediction.dataSync()[0]; // Since the model outputs a probability

      const isRealFace = result > 0.5; // Adjust the threshold as needed
      setResult(isRealFace ? "Real Face" : "Fake Face");

      // Navigate based on the liveness detection result
      if (isRealFace) {
        navigate("/aadhaar-details");
      } else {
        alert("Face authentication failed. Please try again.");
      }
    };
  };

  return (
    <div className="ScanFacePage">
      <div className="box-container">
        <h1>Welcome to Face Scanner</h1>
        {loading ? (
          <p>Loading model, please wait...</p>
        ) : (
          <>
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="rounded-lg shadow-lg"
            />
            <button className="scan-button" onClick={captureImage}>
              Authenticate
            </button>
            {result && <p className="mt-5 text-xl font-semibold">{result}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default ScanFacePage;

import React, { useState } from 'react';
import axios from 'axios';
import './Path.css'; // Add your styling here

const Path = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [startX, setStartX] = useState('');
  const [startY, setStartY] = useState('');
  const [endX, setEndX] = useState('');
  const [endY, setEndY] = useState('');
  const [imagePath, setImagePath] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);  // For shimmer or spinner effect

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);  // Start loading

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('start_x', startX);
    formData.append('start_y', startY);
    formData.append('end_x', endX);
    formData.append('end_y', endY);

    try {
      const response = await axios.post('http://localhost:5000/optimalpath', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImagePath(response.data.image_path);
      setCoordinates(response.data.coords);
    } catch (error) {
      console.error("Error processing the file!", error);
      setError(error.response?.data?.error || "An error occurred.");
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  return (
    <div className="path-container">
      <h1>Optimal Path Calculation</h1>

      {/* Form for uploading the image and inputting coordinates */}
      <form onSubmit={handleSubmit} className="upload-form">
        <input type="file" onChange={handleFileChange} className="file-input" />
        <div className="input-group">
          <label>Start X:</label>
          <input type="number" value={startX} onChange={(e) => setStartX(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Start Y:</label>
          <input type="number" value={startY} onChange={(e) => setStartY(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>End X:</label>
          <input type="number" value={endX} onChange={(e) => setEndX(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>End Y:</label>
          <input type="number" value={endY} onChange={(e) => setEndY(e.target.value)} required />
        </div>
        <button type="submit" className="submit-button">Upload and Calculate Path</button>
      </form>

      {/* Display error message */}
      {error && <div className="error-message">{error}</div>}

      {/* Display shimmer effect or spinner while loading */}
      {loading && <div className="shimmer">Calculating...</div>}
    </div>
  );
};

export default Path;

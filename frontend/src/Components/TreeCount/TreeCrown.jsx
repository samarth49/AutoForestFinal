import React, { useState } from 'react';
import axios from 'axios';
import './TreeCrown.css'; // Import external CSS for styling

const TreeCrown = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePath, setImagePath] = useState(null);
  const [treeCount, setTreeCount] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // For shimmer effect

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);  // Start shimmer effect

    if (!selectedFile) {
      setError("Please select a file first.");
      setLoading(false);  // Stop shimmer effect
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/treecount', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImagePath(response.data.image_path);
      setTreeCount(response.data.count);
    } catch (error) {
      console.error("Error processing the file!", error);
      setError(error.response?.data?.error || "An error occurred.");
    } finally {
      setLoading(false);  // Stop shimmer effect after processing
    }
  };

  return (
    <div className="tree-crown-container">
      <h1 className="title">Tree Crown Detection</h1>

      {/* Shimmer effect loader */}
      {loading && (
        <div className="shimmer-container">
          <div className="shimmer"></div>
          <p>Processing your file...</p>
        </div>
      )}

      {/* Form for file upload */}
      {!loading && (
        <form onSubmit={handleSubmit} className="upload-form">
          <input type="file" onChange={handleFileChange} className="file-input" />
          <button type="submit" className="submit-button">Upload and Process</button>
        </form>
      )}

      {/* Display error message */}
      {error && <div className="error-message">{error}</div>}

      {/* Display result image and tree count */}
      {imagePath && (
        <div className="result-section">
          <h2 className="result-title">Processed Result</h2>
          <img src={`http://localhost:5000/static/${imagePath}`} alt="Processed Trees" className="result-image" />
          <p className="tree-count">Total Trees Counted: <span className="count-number">{treeCount}</span></p>
        </div>
      )}
    </div>
  );
};

export default TreeCrown;

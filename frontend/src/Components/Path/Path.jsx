import React, { useState } from 'react';
import axios from 'axios';
import { Loader } from 'lucide-react';

const Path = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [startX, setStartX] = useState('');
  const [startY, setStartY] = useState('');
  const [endX, setEndX] = useState('');
  const [endY, setEndY] = useState('');
  const [imagePath, setImagePath] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

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
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-100 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 drop-shadow-md text-center">
        Optimal Path Calculation
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-xl flex flex-col items-center space-y-6">
        
        {/* Custom styled file input and button */}
        <div className="relative w-full">
          <label className="block text-gray-700 font-medium mb-2">Upload File:</label>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-green-400">
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <span className="text-gray-600">Choose a file</span>
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
              Browse
            </button>
          </div>
        </div>

        {/* Coordinate input fields */}
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="flex flex-col">
            <label htmlFor="startX" className="text-gray-700 font-medium">Start X:</label>
            <input 
              type="number" 
              value={startX} 
              onChange={(e) => setStartX(e.target.value)} 
              required 
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="startY" className="text-gray-700 font-medium">Start Y:</label>
            <input 
              type="number" 
              value={startY} 
              onChange={(e) => setStartY(e.target.value)} 
              required 
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="endX" className="text-gray-700 font-medium">End X:</label>
            <input 
              type="number" 
              value={endX} 
              onChange={(e) => setEndX(e.target.value)} 
              required 
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="endY" className="text-gray-700 font-medium">End Y:</label>
            <input 
              type="number" 
              value={endY} 
              onChange={(e) => setEndY(e.target.value)} 
              required 
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none shadow-sm"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 shadow-lg"
        >
          <span>Upload and Calculate Path</span>
        </button>
      </form>

      {error && (
        <div className="mt-6 text-red-600 font-semibold bg-red-100 p-4 rounded-lg border-l-4 border-red-500 w-full max-w-xl">
          {error}
        </div>
      )}

      {loading && (
        <div className="mt-6 flex items-center space-x-4 text-lg text-green-600 font-semibold">
          <Loader className="w-8 h-8 animate-spin" />
          <span>Calculating...</span>
        </div>
      )}
    </div>
  );
};

export default Path;

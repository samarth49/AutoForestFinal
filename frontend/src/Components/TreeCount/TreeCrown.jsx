import React, { useState } from 'react';
import axios from 'axios';
import { Upload, AlertCircle, Loader } from 'lucide-react';

const TreeCrown = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePath, setImagePath] = useState(null);
  const [treeCount, setTreeCount] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!selectedFile) {
      setError("Please select a file first.");
      setLoading(false);
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
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-blue-200 to-purple-400 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-md animate-fade-in">
        Tree Crown Detection
      </h1>

      {loading ? (
        <div className="flex flex-col items-center">
          <Loader className="w-16 h-16 text-white animate-spin" />
          <p className="mt-4 text-xl text-gray-100 animate-pulse">Processing your file...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg animate-slide-up">
          <div className="mb-4">
            <label
              className="block mb-2 text-lg font-medium text-gray-700"
              htmlFor="file_input"
            >
              Upload file
            </label>
            <div className="relative w-full">
              <input
                className="hidden"
                id="file_input"
                type="file"
                onChange={handleFileChange}
              />
              <label
                htmlFor="file_input"
                className="w-full px-4 py-2 text-center text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <Upload className="w-5 h-5" />
                <span className="text-lg font-medium">Choose File</span>
              </label>
              {selectedFile && (
                <p className="mt-2 text-gray-600 text-center">
                  {selectedFile.name}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-green-300 flex items-center justify-center transition-transform transform hover:scale-105"
          >
            <Upload className="w-5 h-5 mr-2" />
            Upload and Process
          </button>
        </form>
      )}

      {error && (
        <div className="mt-6 p-4 w-full max-w-lg bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg shadow-md animate-shake">
          <div className="flex items-center">
            <AlertCircle className="w-6 h-6 mr-2 text-red-600" />
            <p>{error}</p>
          </div>
        </div>
      )}

      {imagePath && (
        <div className="mt-12 w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg animate-fade-in">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Processed Result</h2>
          <img
            src={`http://localhost:5000/static/${imagePath}`}
            alt="Processed Trees"
            className="w-full h-auto rounded-lg shadow-lg mb-4 transition-transform transform hover:scale-105"
          />
          <p className="text-2xl text-center text-gray-800">
            Total Trees Counted:{" "}
            <span className="font-extrabold text-green-600">{treeCount}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default TreeCrown;

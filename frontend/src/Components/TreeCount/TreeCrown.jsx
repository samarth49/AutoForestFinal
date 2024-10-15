import React, { useState } from 'react';
import { Upload, AlertCircle, RefreshCcw, CheckCircle, Cog, Image } from 'lucide-react';
import { Button, Paper, Typography, Box, CircularProgress, Alert, Grid } from '@mui/material';
import { UploadFile, FileUpload } from '@mui/icons-material';
import { motion } from 'framer-motion';

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
    formData.append("file", selectedFile);
  
    try {
      const response = await fetch("http://127.0.0.1:5000/treecount", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setImagePath(data.image_path);  // Backend returns processed image path
        setTreeCount(data.count);       // Backend returns tree count
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (error) {
      setError("Failed to upload and process the image.");
    } finally {
      setLoading(false);
    }
  };

  const resetState = () => {
    setSelectedFile(null);
    setImagePath(null);
    setTreeCount(null);
    setError(null);
  };

  return (
    <Box className="min-h-screen bg-gray-100 flex flex-col">
      <Box className="flex-grow flex flex-col items-center justify-center p-6 my-12 space-y-3">
        <Typography variant="h2" component={motion.div} className="mb-10 font-extrabold text-4xl sm:text-5xl md:text-6xl" 
          initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Tree Crown Detection
        </Typography>

        {loading ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex flex-col items-center">
            <CircularProgress size={80} color="primary" />
            <Typography variant="h6" className="mt-4 text-gray-700">Processing your file...</Typography>
          </motion.div>
        ) : (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="w-full max-w-2xl">
            <Paper elevation={4} className="p-8 sm:p-12 md:p-16 rounded-3xl">
              <Typography variant="h4" gutterBottom className="text-center font-bold mb-8">Upload Your Image</Typography>
              <Typography variant="h6" color="textSecondary" className="text-center mb-8">
                Upload an image to detect and count the number of trees automatically.
              </Typography>
              <div className="mb-12">
                <label className="block text-xl font-semibold text-gray-700 mb-4">Upload file</label>
                <input
                  type="file"
                  id="file_input"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor="file_input">
                  <Button
                    variant="contained"
                    startIcon={<FileUpload />}
                    component="span"
                    fullWidth
                    color="primary"
                    size="large"
                    className="py-3 text-lg"
                  >
                    Choose File
                  </Button>
                </label>
                {selectedFile && (
                  <Typography className="mt-4 text-center text-lg">{selectedFile.name}</Typography>
                )}
              </div>
              <Button
                variant="contained"
                fullWidth
                color="success"
                size="large"
                startIcon={<UploadFile />}
                onClick={handleSubmit}
                className="transition-transform hover:scale-105 py-4 text-xl"
              >
                Upload and Process
              </Button>
            </Paper>
          </motion.div>
        )}

        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="mt-6 w-full max-w-2xl">
            <Alert severity="error" className="rounded-lg text-lg py-3">
              <AlertCircle className="mr-2" size={24} /> {error}
            </Alert>
          </motion.div>
        )}

        {imagePath && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="mt-12 w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
            <Typography variant="h4" className="text-green-800 font-bold mb-6">Processed Result</Typography>
            <img
              src={`http://127.0.0.1:5000/static/${imagePath}`}
              alt="Processed Trees"
              className="w-full h-auto rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105"
            />
            <Typography variant="h5" align="center" className="mb-6">
              Total Trees Counted: <strong className="text-green-600">{treeCount}</strong>
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<RefreshCcw />}
              onClick={resetState}
              color="secondary"
              size="large"
              className="transition-transform hover:scale-105 py-3 text-lg"
            >
              Process Another File
            </Button>
          </motion.div>
        )}
      </Box>

      {/* How the Model Works Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="w-full bg-white p-8 sm:p-8 md:p-6 shadow-lg">
        <div className=' flex  justify-center mb-5'>
        <Typography variant="h3" className="text-gray-800 mb-12  font-extrabold"> Working </Typography>
        </div>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} className="p-6 rounded-lg shadow-md">
              <CheckCircle className="text-green-500 mb-4" size={48} />
              <Typography variant="h5" className="font-bold mb-2">Preprocessing</Typography>
              <Typography className="text-gray-600 mb-4">
                The input image is preprocessed to improve detection under various conditions.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} className="p-6 rounded-lg shadow-md">
              <Cog className="text-blue-500 mb-4" size={48} />
              <Typography variant="h5" className="font-bold mb-2">Model Inference</Typography>
              <Typography className="text-gray-600 mb-4">
                The neural network analyzes the image to detect tree crowns.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} className="p-6 rounded-lg shadow-md">
              <Image className="text-orange-500 mb-4" size={48} />
              <Typography variant="h5" className="font-bold mb-2">Post-processing</Typography>
              <Typography className="text-gray-600 mb-4">
                After detection, the trees are counted, and non-tree areas are excluded.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default TreeCrown;

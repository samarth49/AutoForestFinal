import React from "react";
import { motion } from "framer-motion";
import blob from 'D:/VIT22-26/TY/edai/EDAI/EDAIFINAL/frontend/src/assets/blob.svg';
import blob2 from 'D:/VIT22-26/TY/edai/EDAI/EDAIFINAL/frontend/src/assets/blob2.svg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://trellis.net/wp-content/uploads/2024/07/forest_urfin_sstock.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-col items-center justify-center h-full text-white pt-12">
          <motion.h1
            className="text-5xl font-bold leading-tight text-center mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Automating Reforestation
          </motion.h1>
          <motion.p
            className="text-lg max-w-lg text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join us in revolutionizing forestry with cutting-edge technology,
            sustainable practices, and our autonomous planting solutions.
          </motion.p>
          <motion.a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Learn More
          </motion.a>
        </div>
      </div>

      {/* Problem Statement and Objectives Section */}
      <div className="flex justify-center mt-16 space-x-8">
        {/* Problem Statement Card */}
        <div className="relative w-1/2 flex justify-center">
          <img
            src= {blob}
            alt="Problem Statement"
            className="w-10/12 h-auto"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
            <div className="max-w-xs">
              <motion.h2
                className="text-4xl font-bold mb-4 text-gray-800 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Problem Statement
              </motion.h2>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                Our project tackles the challenges of automating tree plantation,
                focusing on optimal growth conditions and forest management
                efficiency. We aim to revolutionize the future of forestry.
              </p>
            </div>
          </div>
        </div>

        {/* Objectives Card */}
        <div className="relative w-1/2 flex justify-center">
          <img
            src={blob2}
            alt="Objectives"
            className="w-10/12 h-auto"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
            <div className="max-w-xs">
              <motion.h2
                className="text-4xl font-bold mb-4 text-gray-800 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Objectives
              </motion.h2>
              <ul className="text-lg text-gray-700 list-disc list-inside text-left">
                <li>Develop an accurate tree-counting algorithm using deep learning.</li>
                <li>Implement optimal pathfinding for planting and maintenance.</li>
                <li>Leverage cutting-edge image processing and AI techniques.</li>
                <li>Promote sustainability and preserve ecological balance in forest areas.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
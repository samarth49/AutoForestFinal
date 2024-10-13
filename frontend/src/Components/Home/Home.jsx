import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://trellis.net/wp-content/uploads/2024/07/forest_urfin_sstock.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center relative h-full text-white pt-12 lg:flex-row lg:justify-between lg:space-x-12 lg:space-y-0 space-y-8">

          {/* Problem Statement Card */}
          <motion.div
            className="relative p-8 rounded-full shadow-lg overflow-hidden bg-white bg-opacity-20 backdrop-blur-sm lg:w-[40%] lg:h-[40%] flex items-center justify-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            
          >
            <div className="absolute inset-0 transform skew-y-3 bg-gradient-to-r from-green-500 to-green-700 opacity-40 rounded-full"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
              <p className="leading-relaxed text-sm">
                Our project tackles the challenges of automating tree plantation, focusing on optimal growth conditions and forest management efficiency. We aim to revolutionize the future of forestry.
              </p>
            </div>
          </motion.div>

          {/* Objectives Card */}
          <motion.div
            className="relative p-8 rounded-full shadow-lg overflow-hidden bg-white bg-opacity-20 backdrop-blur-sm lg:w-[40%] lg:h-[40%] flex items-center justify-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ aspectRatio: '1 / 1' }}  
          >
            <div className="absolute inset-0 transform skew-y-3 bg-gradient-to-r from-red-500 to-red-700 opacity-40 rounded-half"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Objectives</h2>
              <ul className="list-disc list-inside text-sm">
                <li>Develop an accurate tree-counting algorithm using deep learning.</li>
                <li>Implement optimal pathfinding for planting and maintenance.</li>
                <li>Leverage cutting-edge image processing and AI techniques.</li>
                <li>Promote sustainability and preserve ecological balance in forest areas.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

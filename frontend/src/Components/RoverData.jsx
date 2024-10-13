import React from 'react';
import { FaTimes, FaTree, FaSeedling, FaRuler, FaWeightHanging } from 'react-icons/fa';
import { GiDrill } from 'react-icons/gi';

const RoverData = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-lg shadow-2xl max-w-4xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-green-800 flex items-center">
            <FaTree className="mr-2" /> Tree-Planting Rover Specifications
          </h2>
          <button onClick={onClose} className="text-gray-600 hover:text-red-600 transition-colors duration-200">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecSection
            icon={<FaRuler className="text-green-600" size={24} />}
            title="Rover Dimensions"
            specs={[
              { label: "Length", value: "2.5 meters" },
              { label: "Width", value: "1.8 meters" },
              { label: "Height", value: "1.5 meters" },
            ]}
          />
          <SpecSection
            icon={<FaWeightHanging className="text-green-600" size={24} />}
            title="Weight"
            specs={[
              { label: "Total mass", value: "750 kilograms" },
            ]}
          />
          <SpecSection
            icon={<FaSeedling className="text-green-600" size={24} />}
            title="Plant Tray"
            specs={[
              { label: "Dimensions", value: "1.2m x 0.8m x 0.3m" },
              { label: "Capacity", value: "100 seedlings" },
              { label: "Sections", value: "5 removable compartments" },
            ]}
          />
          <SpecSection
            icon={<GiDrill className="text-green-600" size={24} />}
            title="Driller"
            specs={[
              { label: "Diameter", value: "15 centimeters" },
              { label: "Max Depth", value: "50 centimeters" },
            ]}
          />
        </div>
        <div className="mt-6 bg-green-600 text-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside">
            <li>Autonomous navigation with obstacle avoidance</li>
            <li>Solar-powered with backup battery for 12-hour operation</li>
            <li>AI-driven optimal planting location selection</li>
            <li>Real-time monitoring and data logging of planted trees</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const SpecSection = ({ icon, title, specs }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h3>
    <ul className="space-y-2">
      {specs.map((spec, index) => (
        <li key={index} className="flex justify-between">
          <span className="font-medium text-gray-600">{spec.label}:</span>
          <span className="text-gray-800">{spec.value}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default RoverData;
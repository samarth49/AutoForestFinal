import React from "react";
import { MapPin, Leaf, Cpu, Route } from "lucide-react";

const teamMembers = [
  {
    name: "Leslie Alexander",
    role: "Robotics Engineer",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Expert in designing and programming autonomous planting systems."
  },
  {
    name: "Michael Foster",
    role: "AI Specialist",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Develops machine learning models for tree detection and path optimization."
  },
  {
    name: "Dries Vincent",
    role: "Environmental Scientist",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ensures our reforestation efforts align with ecological best practices."
  },
  {
    name: "Lindsay Walton",
    role: "UI/UX Designer",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Creates intuitive interfaces for monitoring and controlling AutoPlant Bot."
  },
];

const features = [
  {
    name: "Automatic Planting",
    description: "Our bot autonomously plants seedlings in optimal locations.",
    icon: Leaf,
  },
  {
    name: "Tree Counting",
    description: "Utilizes satellite imagery to accurately count existing trees.",
    icon: Cpu,
  },
  {
    name: "Path Optimization",
    description: "Finds the most efficient routes through forested areas.",
    icon: Route,
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-blue-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Revolutionizing Reforestation
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            AutoPlant Bot is at the forefront of automated reforestation technology, 
            combining robotics, AI, and environmental science to restore our planet's forests.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Core Team
          </h3>
          <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <li key={member.name} className="text-center bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="space-y-4 p-4">
                  <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={member.imageUrl} alt={member.name} />
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
                    <p className="text-green-600 font-semibold">{member.role}</p>
                    <p className="text-gray-500 text-sm">{member.bio}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-32">
          <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            What Makes AutoPlant Bot Special
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h4>
                <p className="text-gray-500 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
            Join Us in Restoring Our Forests
          </h3>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-8">
            Together, we can make a significant impact on reforestation efforts worldwide. 
            AutoPlant Bot is not just a technology; it's a mission to heal our planet.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Learn More About Our Mission
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
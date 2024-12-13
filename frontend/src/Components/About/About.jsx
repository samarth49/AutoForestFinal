import React, { useRef } from "react";
import { Leaf, Cpu, Route, ChevronLeft, ChevronRight } from "lucide-react";
import SilentValley from 'D:/VIT22-26/TY/edai/EDAI/EDAIFINAL/frontend/src/assets/slient.jpg';
import ashish from 'D:/VIT22-26/TY/edai/EDAI/EDAIFINAL/frontend/src/assets/ashish.jpg';
import greenhighway  from 'D:/VIT22-26/TY/edai/EDAI/EDAIFINAL/frontend/src/assets/greenhighway.jpg';
import Chipko from 'D:/VIT22-26/TY/edai/EDAI/EDAIFINAL/frontend/src/assets/chipko.jpg';
import mldhore from 'D:/VIT22-26/TY/edai/EDAI/EDAIFINAL/frontend/src/assets/mldhoresir.jpg';
import parth from 'D:/VIT22-26/TY/edai/EDAI/EDAIFINAL/frontend/src/assets/parth.jpg';
import pratik from 'D:/VIT22-26/TY/edai/EDAI/EDAIFINAL/frontend/src/assets/pratik.jpg';
import samarth from 'D:/VIT22-26/TY/edai/EDAI/EDAIFINAL/frontend/src/assets/samarth.jpg';
import jungle from 'D:/VIT22-26/TY/edai/EDAI/EDAIFINAL/frontend/src/assets/jungle.jpg';

const teamMembers = [
  {
    name: "Prof.(Dr.)Manikrao Dhore",
    imageUrl: mldhore,
  },
  {
    name: "Samarth Otari",
    imageUrl: samarth,
  },
  {
    name: "Ashish Nikam",
    imageUrl: ashish,
  },
  {
    name: "Pratik Meshram",
    imageUrl: pratik,
  },
  {
    name: "Parth Mahajan",
    imageUrl: parth,
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

const inspirations = [
  {
    name: "Chipko Movement",
    description: "A significant environmental conservation movement in India that emphasized the importance of protecting forests. It inspired us to think about innovative ways to sustain greenery.",
    imageUrl:Chipko ,
  },
  {
    name: "Green Highway Policy 2015",
    description: "This policy focuses on developing eco-friendly highways through tree plantation along roadsides. It motivated us to automate reforestation efforts on a larger scale.",
    imageUrl: greenhighway,
  },
  {
    name: "Silent Valley Movement",
    description: "A remarkable environmental movement in Kerala that successfully prevented the construction of a hydroelectric dam in the pristine Silent Valley rainforest. This movement demonstrates the power of scientific knowledge combined with public action in protecting vital ecosystems.",
    imageUrl: SilentValley,
  },
  {
    name: "Jungle Bachao Andolan",
    description: "A grassroots movement that began in Bihar in the 1980s to protest against government policies of replacing natural sal forests with teak plantations. The movement highlighted the importance of preserving indigenous forest ecosystems and protecting tribal rights. It serves as a powerful reminder that reforestation must respect local biodiversity and community needs.",
    imageUrl: jungle,
  }
];

const TeamSection = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Our Core Team
      </h3>
      <div className="relative max-w-7xl mx-auto px-4">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-green-600 p-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-green-600 p-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 pt-4 px-8 snap-x snap-mandatory scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth'
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex-none w-72 snap-start bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6">
                  <img
                    className="w-full h-full object-cover"
                    src={member.imageUrl}
                    alt={member.name}
                  />
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium hover:bg-green-100 transition-colors duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => (
  <div className="mt-20">
    <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
      What Makes AutoPlant Bot Special
    </h3>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.name}
          className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center transform hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6">
            <feature.icon className="h-8 w-8" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            {feature.name}
          </h4>
          <p className="text-center text-gray-500">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const InspirationsSection = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Our Sources of Inspiration
      </h3>
      <div className="relative max-w-7xl mx-auto px-4">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-green-600 p-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-green-600 p-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-8 pt-4 px-8 snap-x snap-mandatory scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth'
          }}
        >
          {inspirations.map((inspiration) => (
            <div
              key={inspiration.name}
              className="flex-none w-96 snap-start bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={inspiration.imageUrl}
                  alt={inspiration.name}
                  className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {inspiration.name}
                </h4>
                <p className="text-gray-600">{inspiration.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CallToAction = () => (
  <div className="mt-32 text-center">
    <h3 className="text-3xl font-bold text-gray-900 mb-6">
      Join Us in Restoring Our Forests
    </h3>
    <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-8">
      Together, we can make a significant impact on reforestation efforts
      worldwide. AutoPlant Bot is not just a technology; it's a mission to heal
      our planet.
    </p>
    <button className="inline-block px-8 py-3 text-lg font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      Learn More About Our Mission
    </button>
  </div>
);

const About = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 via-blue-50 to-white min-h-screen py-16 sm:py-24">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Revolutionizing Reforestation
          </p>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-600">
            AutoPlant Bot combines robotics, AI, and environmental science to
            restore our planet's forests.
          </p>
        </div>

        <InspirationsSection />
        <FeaturesSection />
        <CallToAction />
        <TeamSection />
      </div>
    </div>
  );
};

export default About;
import React from "react";
import img1 from '../assets/service 1.png';
import img2 from '../assets/service 2.png';

function Services() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-10">
      <div className="flex flex-col gap-10 w-full max-w-5xl">
        {/* Web & Mobile App Development */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-36">
            <img src={img1} alt="Web & Mobile App Icon" className="w-80 h-80" />
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-purple-700">
              Web & Mobile App Development
            </h2>
            <p className="text-gray-600 mt-2">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Digital Strategy */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-left mb-6 lg:mb-0 lg:mr-26">
            <h2 className="text-2xl font-semibold text-purple-700">
              Digital Strategy Consulting
            </h2>
            <p className="text-gray-600 mt-2">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              LEARN MORE
            </button>
          </div>
          <div className="flex-shrink-0">
            <img src={img2} alt="Digital Strategy Icon" className="w-80 h-80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

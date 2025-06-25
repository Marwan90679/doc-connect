import React from 'react';

const Loader = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-3/4 md:w-1/2 lg:w-1/3">
          <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="animate-loader-bar h-full bg-blue-500 w-0 rounded-full"></div>
          </div>
          <p className="text-center text-lg font-semibold mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  };
  
  export default Loader;
  
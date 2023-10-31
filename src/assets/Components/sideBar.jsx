import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen bg-green-900 flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-green-700 flex flex-col justify-center items-center">
        {/* Button */}
        <button className="bg-green-700 text-white py-2 px-4 rounded">
          Click Me
        </button>
      </div>
      {/* Main Content */}
      <div className="w-3/4">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
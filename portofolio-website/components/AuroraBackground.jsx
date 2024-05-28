import React from 'react';

const AuroraBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-20 blur-lg animate-aurora"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-20 blur-lg animate-aurora animation-delay-2000"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 opacity-20 blur-lg animate-aurora animation-delay-4000"></div>
    </div>
  );
};

export default AuroraBackground;

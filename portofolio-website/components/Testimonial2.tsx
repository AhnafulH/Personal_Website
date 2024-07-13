import React from 'react'

const Testimonial2 = () => {
  return (
    <div>
      <div className="max-w-m rounded-lg overflow-hidden shadow-lg bg-white p-6 border-2 border-red-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img className="w-20 h-20 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar" />
          <div>
            <p className="text-xl font-bold text-gray-900">John Doe</p>
            <p className="text-gray-600">Web Dev / Data Science Content Creator | Co-founder at Atheros Learning</p>
            <p className="text-gray-600">Core-OS, BlackBerry QNX</p>
          </div>
        </div>
        <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-blue-500" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.353c0-1.276-.025-2.92-1.778-2.92-1.778 0-2.048 1.388-2.048 2.825v5.448h-3v-10h2.881v1.367h.041c.401-.759 1.378-1.557 2.837-1.557 3.033 0 3.591 1.995 3.591 4.59v5.6z"/>
          </svg> */}
          <img className="w-6 h-6" src='/linkedin-icon-3.svg' alt="Linkdin icon"/>
        </a>
      </div>
      <p className="text-gray-700 text-base mb-4 flex flex-wrap">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      </p>
    </div>
    
  </div>
  
  )
}

export default Testimonial2
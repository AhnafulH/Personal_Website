import React from 'react'

const Testimonial = () => {
  return (
    <section className="border-2 border-red-300 mb-10">
      <div className="text-center mt-10">
        <h2 className="font-bold text-4xl md:text-5xl text-center">Testimonial</h2>
        <p className="text-lg text-gray-600 py-5">A small selection of recent projects</p>
      </div>
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 mb-10">
    <div className="flex items-center mb-4">
      <img className="w-20 h-20 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar" />
      <div>
        <p className="text-xl font-semibold text-gray-900">John Doe</p>
        <p className="text-gray-600">CEO, Company</p>
      </div>
    </div>
    <p className="text-gray-700 text-base mb-4">
      "This is a testimonial text that gives an overview of the experience with the service. It’s concise and compelling."
    </p>
    <div className="flex justify-start">
      {[...Array(5)].map((_, i) => (
        <span className="text-yellow-500" key={i}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568L24 9.747l-6 5.848 1.417 8.255L12 18.897l-7.417 4.953L6 15.595 0 9.747l8.332-1.592z" />
          </svg>
        </span>
      ))}
    </div>
  </div>
  </section>
  )
}

export default Testimonial
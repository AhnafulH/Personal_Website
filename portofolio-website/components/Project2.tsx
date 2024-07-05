import React from 'react'

const Project2 = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
      <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          <img
            src="/images/smart_traffic_control.png" // Replace with your project image path
            alt="Project"
            className="w-full h-full object-cover lg:rounded-3xl"
          />
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          Project Title
        </h1>

        <p
          className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          Project description goes here. It should be brief and informative.
        </p>

        <div className="flex justify-center items-center mt-7 mb-3">
          <p className="flex lg:text-xl md:text-xs text-sm text-purple">
            Check Live Site
          </p>
          <svg
            className="ms-3 w-6 h-6 text-purple"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Project2
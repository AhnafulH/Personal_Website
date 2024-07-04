import React from 'react'

const Project = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-10">
        <h2 className="font-bold text-4xl md:text-5xl text-center">Projects</h2>
        <p className="text-lg text-gray-600 py-5">A small selection of recent projects</p>
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
          <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
            </div>
            <img src='/images/hero-img.jpg' alt='random imag' className="z-10 absolute bottom-0"/>
          </div>
          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
            titel
          </h1>
          <p
            className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
            style={{
              color: "#BEC1DD",
              margin: "1vh 0",
            }}
          >
            des
          </p>
        </div>
      </div>
    </section>
  )
}

export default Project
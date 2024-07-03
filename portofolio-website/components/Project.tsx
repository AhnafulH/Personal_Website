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
          Project title
        </div>
      </div>
    </section>
  )
}

export default Project
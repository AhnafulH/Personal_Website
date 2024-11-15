"use client"

import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context';

const Testimonial3 = () => {
  const {ref, inView}= useInView({
    threshold: 0.6,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Testimonial");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section className="scroll-mt-28"
    id="testimonial"
    ref={ref}>
      <div> 
        <div className="text-center mt-10 mb-10">
          <h2 className="font-medium text-4xl text-center mb-2">Testimonial</h2>
          <p className="text-lg text-gray-600 py-1">Words That Inspire: How My Work Made an Impact</p>
        </div>
        
        <div className="gap-5 flex justify-center">
          <div className="w-1/2 rounded-lg overflow-hidden shadow-lg bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img className="w-20 h-20 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar" />
              <div>
                <p className="text-xl font-bold text-gray-900">David Sarrazin</p>
                <p className="text-gray-600">Principal Systems Software Developer</p>
                <p className="text-gray-600">Core OS, BlackBerry QNX</p>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/ahnaful-hoque/details/recommendations/" target="_blank" rel="noopener noreferrer">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-blue-500" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.353c0-1.276-.025-2.92-1.778-2.92-1.778 0-2.048 1.388-2.048 2.825v5.448h-3v-10h2.881v1.367h.041c.401-.759 1.378-1.557 2.837-1.557 3.033 0 3.591 1.995 3.591 4.59v5.6z"/>
              </svg> */}
              <img className="w-6 h-6" src='/linkedin-icon-3.svg' alt="Linkdin icon"/>
            </a>
          </div>
          <p className="text-gray-700 text-base mb-4 text-pretty mt-7">
          I had the pleasure of working with Ahnaful for several of his work-terms, as a technical mentor/resource. Ahnaful was working on a long-term high-priority test project. Ahnaful has a wonderful attitude, and a good, no-nonsense approach to the task he's asked to do. 
          During the course of the project, he had to learn several technical skills, which he did very well. He worked closely with a group of eleven other co-ops students, plus a few different technical and project managers. 
          He collaborated well with the other team members, discussing solutions to problems, and reviewing code. He was well-liked by his teammates. Ahnaful would ask me for help when necessary, and always asked smart questions to ensure he understood the answer. 
          His questions were always well thought out, and trended towards more complex over the course of the work-term, as I would expect from somebody learning the subject matter. The project was a success, and it would not have been possible without his contribution
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonial3
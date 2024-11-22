"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import avatar from '@/public/images/avatar.svg';

const Testimonial = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Testimonial");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      className="scroll-mt-28 mt-40"
      id="testimonial"
      ref={ref}
    >
      <div>
        <div className="text-center mt-10 mb-10">
          <h2 className="font-medium text-4xl text-center mb-2">Testimonial</h2>
          <p className="text-lg text-gray-600 py-1">
            Words That Inspire: How My Work Made an Impact
          </p>
        </div>

        <div className="gap-5 flex justify-center">
          <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg bg-white p-6 border border-black/10">
            <a
              href="https://www.linkedin.com/in/ahnaful-hoque/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4"
            >
              <img
                className="w-6 h-6"
                src="/linkedin-icon-3.svg"
                alt="LinkedIn icon"
              />
            </a>
            <div className="flex flex-col md:flex-row items-center mb-4">
              <Image
                className="w-20 h-20 rounded-full mb-4 md:mb-0 md:mr-4"
                src={avatar}
                alt="Avatar"
                width={80}
                height={80}
              />
              <div className="text-center md:text-left">
                <p className="text-xl font-bold text-gray-900">David Sarrazin</p>
                <p className="text-gray-600">Principal Systems Software Developer</p>
                <p className="text-gray-600">Core OS, BlackBerry QNX</p>
              </div>
            </div>
            <p className="text-gray-700 text-base mt-4 text-center md:text-left">
              I had the pleasure of working with Ahnaful for several of his work-terms, as a technical mentor/resource. Ahnaful was working on a long-term high-priority test project. Ahnaful has a wonderful attitude, and a good, no-nonsense approach to the task he&apos;s asked to do.
              During the course of the project, he had to learn several technical skills, which he did very well. He worked closely with a group of eleven other co-ops students, plus a few different technical and project managers.
              He collaborated well with the other team members, discussing solutions to problems, and reviewing code. He was well-liked by his teammates. Ahnaful would ask me for help when necessary, and always asked smart questions to ensure he understood the answer.
              His questions were always well thought out, and trended towards more complex over the course of the work-term, as I would expect from somebody learning the subject matter. The project was a success, and it would not have been possible without his contribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

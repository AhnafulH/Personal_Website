"use client"

import { useActiveSectionContext } from '@/context/active-section-context';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

function About() {
  const {ref, inView}= useInView({
    threshold: 0.7,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section className="mb-30 mt-40 max-w-[45rem] text-center leading-8 mx-auto
      sm:mb-40 scroll-mt-28 text-lg"
      ref={ref}
      id="about"
      >
        <h2 className="text-3xl font-medium mb-2">
            About Me
        </h2>

        <p className="text-lg text-gray-600 mb-10">Outside the Lines</p>

        <p className="mb-3">
          As a passionate <span className="font-bold">Computer Engineering</span> student at the <span className="font-bold">University of Alberta</span>, my journey in technology began with a deep curiosity about how things work, which soon blossomed into a love for <span className="font-bold">coding</span> and <span className="font-bold">problem-solving</span>. Over the years, I&apos;ve developed proficiency in various programming languages and have continuously refined my technical skills.
        </p>
        <p className="mb-3">
          In my spare time, I enjoy exploring <span className="font-bold">new technologies</span>, contributing to <span className="font-bold">open-source projects</span>, and delving into the intersections of <span className="font-bold">software</span> and <span className="font-bold">hardware</span>. When I&apos;m not at the computer, I love playing <span className="font-bold">football</span> and am always eager to try out new sports. As I advance in my journey, I&apos;m excited to apply my skills to projects that make a <span className="font-bold">meaningful impact</span> and push the boundaries of technology.
        </p>
    </section>
  )
}

export default About
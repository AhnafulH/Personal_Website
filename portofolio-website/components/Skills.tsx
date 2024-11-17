"use client"

import React, { useEffect } from 'react'
import { skill } from '@/lib/skill'
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import BadgeCard from './BadgeCard';
import Image from 'next/image'

const Skills = () => {
  const {ref, inView}= useInView({
    threshold: 0.6,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Skills");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section id="skills" className="scroll-mt-28 mb-40" ref={ref}>
      <div className="text-center mb-10">
          <h2 className="text-3xl font-medium mb-2">My Skills</h2>
          <p className="text-lg text-gray-600">Technologies I have worked with</p>
        </div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skill.map(({ skill_name, icon: Icon }, index) => (
            <li key={index} className="flex justify-center items-center gap-2 bg-white rounded-full px-5 py-3 border border-black/10">
                <Icon size={25} color="black" />
                <span>{skill_name}</span>
            </li>
        ))}
      </ul>
      <BadgeCard/>
    </section>
  )
}

export default Skills
import React from 'react'
import cpp from '@/public/skills_logo/c.svg'
import { SiC } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { skill } from '@/lib/skill'

import Image from 'next/image'
const Skills3 = () => {
  return (
    <section id="skills" className="scroll-mt-28">
      <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-600">Technologies I have worked with</p>
        </div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skill.map(({ skill_name, icon: Icon }, index) => (
            <li key={index} className="flex justify-center items-center gap-2 bg-white borderBlack rounded-full px-5 py-3 dark:bg-white/10 dark:text-white/80">
                <Icon size={25} color="black" />
                <span>{skill_name}</span>
            </li>
        ))}
      </ul>

    </section>
  )
}

export default Skills3
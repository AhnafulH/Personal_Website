import React from 'react'
import { skill } from '@/lib/skill'
import Image from 'next/image'


const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20">
      <div className="container mx-auto py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-600">Technologies I have worked with</p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {skill.map((item, index) => (
          <div key={index} className="w-16 h-16">
            <Image src={item.icon} alt={item.skill_name} width={64} height={64} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
}

export default Skills
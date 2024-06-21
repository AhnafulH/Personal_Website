import React from 'react'
import { skill } from '@/lib/skill'
import Image from 'next/image'

import blackberryqnx_logo from '@/public/images/blackberryqnx_logo.png'
import C from '@/public/skills_logo/c.svg'

const Skills = () => {
  return (
    <div className="w-16 h-16 mb-4">
      {skill.map((item, index) => (
        <div key={index}>
           <div className="w-16 h-16 mb-4">
            {/* <imgage src={c} alt={item.skill_name} /> */}
            {/* <CIcon alt={item.skill_name} className="w-full h-full" /> */}
            <Image src={C} alt={item.skill_name} width={500}
      height={500} ></Image>
            </div>
        </div>
    ))}
    </div>
  )
}

export default Skills
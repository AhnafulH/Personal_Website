import React from 'react'
import { skill } from '@/lib/skill'

import blackberryqnx_logo from '@/public/images/blackberryqnx_logo.png'


const Skills = () => {
  return (
    <div className="w-16 h-16 mb-4">
      {skill.map((item, index) => (
        <div key={index}>
           <div className="w-16 h-16 mb-4">
            <img src={blackberryqnx_logo.src} alt={item.skill_name} />
            </div>
        </div>
    ))}
    </div>
  )
}

export default Skills
import React from 'react'

import cpp from '@/public/skills_logo/c.svg'
import c from '@/public/skills_logo/c-1.svg'
import python from '@/public/skills_logo/python.svg'
import js from '@/public/skills_logo/logo-javascript.svg'
import html from '@/public/skills_logo/html.svg'
import css from '@/public/skills_logo/css.svg'
import njs from '@/public/skills_logo/next.svg'
import react from '@/public/skills_logo/react.svg'
import sqlite from '@/public/skills_logo/sqlite.svg'
import twcss from '@/public/skills_logo/tailwind-css.svg'

import Image from 'next/image'

const Skills2 = () => {
  return (
    <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-600">Technologies I have worked with</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-20 border-2 border-rose-500 content-center">
            <div className="">
                <Image src={cpp} alt="C++" width={80} height={80} />
            </div>
            <div className="">
                <Image src={njs} alt="C++" width={80} height={80} />
            </div>
            <div className="">
                <Image src={c} alt="C++" width={80} height={80} />
            </div>
            <div className="">
                <Image src={python} alt="C++" width={80} height={80} />
            </div>
            <div className="">
                <Image src={js} alt="C++" width={80} height={80} />
            </div>
            <div className="">
                <Image src={html} alt="C++" width={80} height={80} />
            </div>
            {/* <div className="">
                <Image src={css} alt="C++" width={80} height={80} />
            </div>
            <div className="">
                <Image src={react} alt="C++" width={80} height={80} />
            </div>
            <div className="basis-1/4 ">
                <Image src={sqlite} alt="C++" width={80} height={80} />
            </div>
            <div className="basis-1/4 ">
                <Image src={twcss} alt="C++" width={80} height={80} />
            </div> */}
        </div>
    </section>
  )
}

export default Skills2
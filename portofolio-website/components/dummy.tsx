"use client"

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

import { experiences } from '@/lib/experiences';
import blackberryqnx_logo from '@/public/images/blackberryqnx_logo.png'


const textVariant = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: 0.5,
      },
    },
};

// const ExperienceCard = ({ experience }) => (
//   <VerticalTimelineElement 
//     contentStyle={{ background: '#1d1836', color: '#fff'}}
//     contentArrowStyle={{ borderRight: '7px solid #232631'}}
//     date={experience.date}
//     icon={ 
//       <div>
//         <img
//           src={experience.icon}
//           alt={experience.company}
//           className="w-[60%] h-[60%] object-contain"
        
//         />
//       </div>
//     }
//   >
//     <div>
//       <h3 className="text-black text-[24px] font-bold">
//         {experience.title}
//       </h3>
//     </div>
//   </VerticalTimelineElement>
// )


const Experience = () => {

  return (
    <section>
      <motion.div variants={textVariant} className="relative z-10 p-8">
        <h2 className="text-2xl font-bold mb-4">
          What I have done so far
        </h2>
        <p className="text-lg mb-8">
          Experience
        </p>
      </motion.div>
      <div className="flex justify-center items-center w-full h-full">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            // <ExperienceCard key={index} experience={experience}/>
            <React.Fragment key={index}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                // icon={experience.logo.src}
                contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                date={experience.date}
                iconStyle={{ background: "black" }}
                // icon={experience.logo.src}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.logo.src}
                      alt={experience.company}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
              >
              {/* <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.company}</p>
              {/* <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {exper.description} */}
                <div>
                  <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                  <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                  >
                    {experience.company}
                  </p>
                </div>

                <ul className='mt-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>

            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;

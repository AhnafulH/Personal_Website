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
    <section className="bg-black">
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
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#000', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={blackberryqnx_logo.src}
                      alt={"bb"}
                      className='w-[60%] h-[60%] object-contain'
                    />
                    </div>
                }
              >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={blackberryqnx_logo.src}
              >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
              </VerticalTimelineElement>

            {/* </React.Fragment> */}
          {/* ))} */}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;

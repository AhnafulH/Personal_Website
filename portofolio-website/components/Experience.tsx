"use client"

import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '@/lib/experiences';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';


const Experience = () => {
  const {ref, inView}= useInView({
    threshold: 0.5,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Experience");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (

    <section id="experience" className="scroll-mt-28 mb-40" ref={ref}>
      <div className="text-center mb-10">
          <h2 className="text-3xl font-medium mb-2">Experience</h2>
          <p className="text-lg text-gray-600">My work experiences</p>
        </div>
    <VerticalTimeline
      animate={true}
      lineColor={'#f3f4f6'}
    >
      {experiences.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: '#f3f4f6', color: '#000',
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
              date={item.date}
              icon={<div className='flex justify-center items-center w-full h-full'>
                <img
                  src={item.logo.src}
                  alt={item.alt}
                  className='w-[90%] h-[90%] object-contain'
                />
              </div>}
              iconStyle={{
                background: item.background_color,
                fontSize: "1.5rem",
                width: "65px",
                height: "65px",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <h4 className="font-normal !mt-0">{item.company}</h4>

              <ul className="list-disc mt-4">
              {item.Points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
</VerticalTimeline>
</section>
  )
}

export default Experience

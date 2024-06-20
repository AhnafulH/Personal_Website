"use client"

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import blackberryqnx_logo from '@/public/images/blackberryqnx_logo.png'
import { experiences } from '@/lib/experiences';
// import blackberryqnx_logo1 from '@/public/images/blackberryqnx_logo1.jpeg


const Experience2 = () => {
  return (
    <VerticalTimeline
      animate={true}
    >
      {experiences.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={<div className='flex justify-center items-center w-full h-full'>
                <img
                  src={item.logo.src}
                  alt="bb"
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>

              <ul className="list-disc">
              {item.Points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#f3f4f6', color: '#000',
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
        date="2011 - present"
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={
            <div className='flex justify-center items-center w-full h-full'>
              <img
                src={blackberryqnx_logo.src}
                alt="bb"
                className='w-[60%] h-[60%] object-contain'
              />
            </div>
          }
        visible={true}
    >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={
            <div className='flex justify-center items-center w-full h-full'>
              <img
                src={blackberryqnx_logo.src}
                alt="bb"
                className='w-[60%] h-[60%] object-contain'
              />
            </div>
          }
        visible={true}
    >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
    </VerticalTimelineElement>
</VerticalTimeline>
  )
}

export default Experience2;

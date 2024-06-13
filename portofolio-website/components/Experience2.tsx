"use client"

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CgWorkAlt } from "react-icons/cg";

import blackberryqnx_logo from '@/public/images/blackberryqnx_logo.png'
import blackberryqnx_logo1 from '@/public/images/blackberryqnx_logo1.jpeg'

const Experience2 = () => {
  return (
    <VerticalTimeline
      animate={true}
    >
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
                src={blackberryqnx_logo1.src}
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

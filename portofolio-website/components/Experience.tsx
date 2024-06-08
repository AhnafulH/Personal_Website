"use client"

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

import { experiences } from '@/lib/experiences';
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

const ExperienceCard = ({ experience }) => {
  <VerticalTimelineElement>
    
  </VerticalTimelineElement>
}


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
      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;

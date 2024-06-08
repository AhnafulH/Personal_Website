import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

const textVariant = () => ({
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
});

const Experience: React.FC = () => {
  return (
    <div className="relative z-10 p-8">
        <h2 className="text-2xl font-bold mb-4">
          What I have done so far
        </h2>
        <p className="text-lg mb-8">
          Experience
        </p>
      </div>
  );
};

export default Experience;

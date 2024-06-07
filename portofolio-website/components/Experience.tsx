import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion";

import { textVariant } from "@/utils/motion";

const Experience = () => {
  return (
    <motion.div variants={textVariant()}>
      <p>
        What I have done so far
      </p>
      <p>
        Experience
      </p>
      <VerticalTimeline>
      
      </VerticalTimeline>
    </motion.div>
  )
}

export default Experience
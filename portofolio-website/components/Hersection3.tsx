"use client"

import React from 'react'
import {motion} from 'framer-motion'

const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const item = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1, transition: { duration: 0.5 } },
  };

const sentence = "Coding the future one project at a time";

const Hersection3 = () => {
    const words = sentence.split(" ");
  return (
    <motion.div initial="hidden" animate="visible" variants={container} className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <motion.h1 className="text-4xl font-bold text-gray-800 flex flex-wrap justify-center">
      {words.map((word, index) => (
        <motion.span key={index} variants={item} className="mx-1">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  </motion.div>
  )
}


export default Hersection3
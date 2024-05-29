import React from 'react'
import { motion } from "framer-motion"

const ScrollBtn = () => {
  return (
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <a href="#aout">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#121212]
        flex justify-center items-start p-2">
          <motion.div 
          animate={{
            y: [0, 24, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className="w-3 h-3 rounded-full bg-[#121212] mb-1"
          >

          </motion.div>
        </div>

      </a>
    </div>
  )
}

export default ScrollBtn


"use client"
import { motion } from "framer-motion";

import React from 'react';
const HeroSection2 = () => {
    return (
      <section className="pb-20 pt-36">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <div className="my-4">
              <h1 className="text-center text-[40px] md:text-6xl lg:text-7xl font-bold leading-snug tracking-wider">
              {/* Transforming Concepts into Seamless User Experiences */}
              Coding the Future One Project at a Time
              </h1>
            </div>
            <motion.h2 
              className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-wider my-5"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
                            Hey there! I'm Ahnaful
            </motion.h2>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection2;
  
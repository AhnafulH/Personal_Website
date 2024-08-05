"use client"
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaClipboard} from "react-icons/fa";
import { LinkPreview } from "@/components/ui/link-preview";

import React, {useState} from 'react';



const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.9,
    },
  },
};

const item = {
  hidden: { filter: 'blur(10px)', opacity: 0 },
  visible: { filter: 'blur(0px)', opacity: 1, transition: { duration: 0.5 } },
};

const itemSubheader = {
  hidden: { filter: 'blur(10px)', opacity: 0 },
  visible: { filter: 'blur(0px)', opacity: 1, transition: { duration: 1 } },
};

const containerSubheader = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 3.6,
      staggerChildren: 0.4,
    },
  },
};


const subheading = "Hey there! I'm Ahnaful";

const HeroSection2 = () => {
  const words = subheading.split(" ");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('akmahnaf@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

    return (
      <section className="pb-20 pt-36">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <motion.div className="my-4" initial="hidden" animate="visible" variants={container}>
              <motion.h1 className="text-center text-[40px] md:text-6xl lg:text-7xl font-bold leading-snug tracking-wider">
                <motion.span className="block" variants={item}>Coding the Future</motion.span>
                <motion.span className="block" variants={item}>One Project at a Time</motion.span>
              </motion.h1>
            </motion.div>

            <motion.div className="my-5" initial="hidden" animate="visible" variants={containerSubheader}>
            <motion.h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-wider">
              {words.map((word, index) => (
                <motion.span key={index} variants={itemSubheader} className="mx-1 inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </motion.div>


            <motion.p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl my-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              Student | Developer | Engineer based in Edmonton, Canada
            </motion.p>

          <motion.div className="flex items-center space-x-6 mt-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.4 + 0.3 * words.length + 1.3 }}
          >
            <a href="/path/to/your-resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="text-lg text-white bg-blue-600 hover:bg-blue-800 transition duration-300 px-4 py-2 rounded-full">
                View Resume
              </button>
            </a>
            <LinkPreview url="https://www.linkedin.com/in/ahnaful-hoque/" target="_blank" rel="noopener noreferrer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-900 transition duration-300" />
              </div>
              </LinkPreview>
            <LinkPreview url="https://github.com/AhnafulH">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <FaGithub className="text-3xl text-gray-800 hover:text-black transition duration-300" />
                </div>
            </LinkPreview>
            <LinkPreview url="https://devpost.com/Ahnaful" target="_blank" rel="noopener noreferrer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img src="/devpost-logo.svg" alt="Devpost" className="w-8 h-8 hover:opacity-80 transition duration-300" />
              </div>
            </LinkPreview>
          </motion.div>
          {/* <div className="flex items-center space-x-4 p-4 border rounded-lg bg-white shadow-lg">
            <span className="text-lg mr-2">akmahnaf@ualberta.com</span>
            <button onClick={handleCopyEmail} className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300">
              <FaClipboard className="text-2xl" />
              {copied && <span className="ml-2 text-sm text-green-500">Copied!</span>}
            </button>
          </div> */}
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection2;
  
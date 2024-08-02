"use client"
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaClipboard} from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { LinkPreview } from "@/components/ui/link-preview";

import React, {useState} from 'react';
const HeroSection2 = () => {
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
            <div className="my-4">
              <h1 className="text-center text-[40px] md:text-6xl lg:text-7xl font-bold leading-snug tracking-wider">
              Coding the Future One Project at a Time
              </h1>
            </div>
            <motion.h2 
              className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-wider my-5"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
                Hey there! I&apos;m Ahnaful
            </motion.h2>
            {/* <motion.h3 
                            className="text-center text-xl md:text-2xl lg:text-3xl font-light leading-snug tracking-wider mt-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Student | Developer | Engineer from Edmonton, Canada
                        </motion.h3> */}
             {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl my-3">
            Hi! I&apos;m Ahnaful, Computer Engineering Student based in Edmonton
            Student | Developer | Engineer from Edmonton, Canada
          </p> */}
          <motion.p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl my-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Student | Developer | Engineer based in Edmonton, Canada
          </motion.p>
          {/* <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>{" "}
      </p> */}

          <div className="flex items-center space-x-6 mt-6">
          <a href="/path/to/your-resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="text-lg text-white bg-blue-600 hover:bg-blue-800 transition duration-300 px-4 py-2 rounded-full">
                View Resume
              </button>
            </a>
            <a href="https://www.linkedin.com/in/ahnaful-hoque/" target="_blank" rel="noopener noreferrer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-900 transition duration-300" />
              </div>
            </a>
            <a href="https://github.com/AhnafulH" target="_blank" rel="noopener noreferrer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <FaGithub className="text-3xl text-gray-800 hover:text-black transition duration-300" />
              </div>
            </a>
            <a href="https://devpost.com/Ahnaful" target="_blank" rel="noopener noreferrer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img src="/devpost-logo.svg" alt="Devpost" className="w-8 h-8 hover:opacity-80 transition duration-300" />
              </div>
            </a>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-lg mr-2">akmahnaf@ualberta.com</span>
            <button onClick={handleCopyEmail} className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300">
              <FaClipboard className="text-2xl" />
              {copied && <span className="ml-2 text-sm text-green-500">Copied!</span>}
            </button>
          </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection2;
  
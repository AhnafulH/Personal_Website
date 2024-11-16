"use client"
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaClipboard, FaCopy} from "react-icons/fa";
import { LinkPreview } from "@/components/ui/link-preview";
import confetti from "canvas-confetti"
import ConfettiButton from '@/components/ui/Confetti'
import { useInView } from 'react-intersection-observer';
import React, {useState, useRef, useEffect} from 'react';
import { useActiveSectionContext } from '@/context/active-section-context';


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
  const {ref, inView}= useInView({
    threshold: 0.6,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  const words = subheading.split(" ");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('akmahnaf@ualberta.ca');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    confetti({
      particleCount: 100,
      spread: 90,
    });
    
  };

  return (
    <section className="pb-20 pt-36" ref={ref}>
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

          <motion.div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.4 + 0.3 * words.length + 1.3 }}
          >
            <button onClick={handleCopyEmail} className="px-5 py-2 border rounded-full bg-[#003153] shadow-lg text-gray-300 hover:text-white transition duration-300">
              <div className="flex items-center space-x-1">
                <span className="text-lg mr-2 text-white font-semibold">akmahnaf@ualberta.ca</span>
                <FaCopy className="text-xl" />
                {copied && <span className="ml-2 text-sm text-green-500">Copied!</span>}
              </div>
            </button>

            <a href="@/public/Ahnaful_Hoque_Resume" target="_blank" rel="noopener noreferrer">
              <button className="text-lg text-white bg-blue-600 hover:bg-blue-800 transition duration-300 px-4 py-2 rounded-full">
                View Resume
              </button>
            </a>
            <div className="flex space-x-4 mt-4 sm:mt-0">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;

import { motion } from 'framer-motion';
import React from "react"
const bounceIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: [1.2, 1],
    opacity: 1,
    transition: { duration: 0.6, ease: [0.68, -0.55, 0.27, 1.55] },
  },
};

const Dummy = () => (
  <motion.div initial="hidden" animate="visible" variants={bounceIn}>
    <h1>Ahnaful Hoque</h1>
    <p>Coding the future one project at a time</p>
  </motion.div>
);

export default Dummy;

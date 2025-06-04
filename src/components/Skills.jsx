// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Skills = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My toolbox</p>
      <h2 className={styles.sectionHeadText}>Skills</h2>
    </motion.div>

    <div className='mt-10 flex flex-wrap gap-10 justify-center'>
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          variants={fadeIn("up", "spring", index * 0.1, 0.5)}
          className='w-20 h-20'
        >
          <img src={tech.icon} alt={tech.name} className='w-full h-full object-contain' />
        </motion.div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Skills, "skills");

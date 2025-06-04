import React from "react";
import Tilt from 'react-parallax-tilt';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import cbit from "../assets/cbit.png";
import alphores from "../assets/alphores.png";
import teja from "../assets/teja.png";

const educationData = [
  {
    title: "Chaitanya Bharathi Institute of Technology (2022 - 2026)",
    subtitle: "Computer Science and Engineering (CSE)",
    grade: "CGPA: 9.58",
    icon: cbit,
  },
  {
    title: "Alphores Junior College, Hanamkonda (2020 - 2022)",
    subtitle: "Class: XII, MPC (Physics, Chemistry, Mathematics)",
    grade: "Grade: 98.9%",
    icon: alphores,
  },
  {
    title: "Teja International High School, Hanamkonda",
    subtitle: "Class: X",
    grade: "CGPA: 10",
    icon: teja,
  },
];


const EducationCard = ({ index, title, subtitle, grade, icon }) => (
  <Tilt
    className='xs:w-[300px] w-full'
    glareEnable={false}
    scale={1.05}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-10 px-6 min-h-[350px] flex justify-center items-center flex-col'
      >
        <img
          src={icon}
          alt='institute-logo'
          className='w-24 h-24 object-contain mb-4'
        />
        <h3 className='text-white text-[16px] font-bold text-center'>{title}</h3>
        <p className='text-secondary text-[14px] text-center mt-2'>{subtitle}</p>
        <p className='text-secondary text-[14px] text-center mt-1'>{grade}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Education</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className='mt-16 flex flex-wrap justify-center gap-10'>
        {educationData.map((edu, index) => (
          <EducationCard key={index} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

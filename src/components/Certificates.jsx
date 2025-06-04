import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const CertificateCard = ({ index, name, image, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.3, 0.75)}
    className='bg-black-200 p-5 rounded-2xl xs:w-[250px] w-full flex flex-col items-center'
  >
    <img
      src={image}
      alt={name}
      className='w-full h-[120px] object-contain rounded-lg mb-4'
    />
    <p className='text-white text-center font-medium text-[14px] mb-3'>
      {name}
    </p>
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='text-white bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-full text-[13px]'
    >
      View Certificate
    </a>
  </motion.div>
);

const Certificates = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Proof of Skill</p>
          <h2 className={styles.sectionHeadText}>Certificates</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6`}>
        {certificates.map((cert, index) => (
          <CertificateCard key={index} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificates");

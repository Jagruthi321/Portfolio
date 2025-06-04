import { motion } from "framer-motion";
import { styles } from "../styles";
import profilePic from "../assets/jagru.jpg"; 
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Line Indicator */}
        <div className="flex flex-col justify-center items-center hidden md:flex">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-80 violet-gradient" />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-white">
            Hello, I'm <span className="text-[#915EFF]">Jagruthi</span>
          </h2>
          <p className="text-[8px] sm:text-[12px] lg:text-[14px] mt-2 text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
  I’m a final-year Computer Science student at Chaitanya Bharathi Institute of Technology (CBIT), passionate about transforming logic into impactful solutions. With strong foundations in Data Structures and Algorithms, and Machine Learning, I’ve built real-world projects and collaborated on innovative ideas.
  <br></br>My technical expertise includes MERN stack, Python, and experience with machine learning and deep learning libraries like TensorFlow and scikit-learn.Projects like a Smart PPT Generator demonstrate my ability to merge creativity with technical precision.
  <br></br>Beyond academics, I’ve actively contributed to organizing national-level hackathons as a coordinator. Recognized in events like HackIndia and COSC Hackathon—and having solved over 300 problems on LeetCode—I thrive in environments that value innovation, collaboration, and continuous growth.
  <br></br>
  I'm now eager to bring fresh energy and forward-thinking ideas into a team that's building the future.
</p>

          {/* Buttons and Icons */}
          {/* Social Icons and Buttons */}
<div className="mt-6">
  {/* Row 1: Icons */}
  <div className="flex gap-6 justify-center lg:justify-start">
    <a href="https://github.com/Jagruthi321" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-white text-2xl hover:text-[#915EFF] hover:scale-125 transition duration-300" />
    </a>
    <a href="https://www.linkedin.com/in/jagruthireddy/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-white text-2xl hover:text-[#915EFF] hover:scale-125 transition duration-300" />
    </a>
    <a href="mailto:jagruthireddy321@gmail.com">
      <FaEnvelope className="text-white text-2xl hover:text-[#915EFF] hover:scale-125 transition duration-300" />
    </a>
  </div>

  {/* Row 2: Buttons */}
  <div className="flex gap-4 justify-center lg:justify-start mt-4">
    <a
      href="https://drive.google.com/file/d/1RlztODcIaMhw4B7mXNYB1fUSSJco3dVc/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="px-4 py-2 bg-[#915EFF] text-white rounded-lg hover:bg-purple-700 hover:scale-105 transition duration-300">
        Resume
      </button>
    </a>
    <a href="#contact">
      <button className="px-4 py-2 bg-[#915EFF] text-white rounded-lg hover:bg-purple-700 hover:scale-105 transition duration-300">
        Contact
      </button>
    </a>
  </div>
</div>

        </div>

        {/* Profile Image */}
        <div className="relative w-[360px] h-[360px] rounded-full overflow-hidden border-4 border-[#915EFF] shadow-xl hover:shadow-purple-600 hover:scale-105 transition-all duration-300">
          <img
            src={profilePic}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};


export default Hero;

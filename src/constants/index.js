import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  dbms,
  dsa,
  figma,
  ml,
  oops,
  os,
  python,
  sql,
  tailwind,
  javascript,
  linix,
  githb,
  bharat,
  COSC,
  datascience,
  gcloud,
  infy,
  VNR,
  cartoonise,
  house,
  movie,
  port,
  textspeech,
  traffic,
  ucc,
  infylogo,
  codetech,
  hackx,

} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Machine Learning",
    icon: ml,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Data Structures & Algorithms",
    icon: dsa,
  },
  {
    name: "Database Management Systems",
    icon: dbms,
  },
  {
    name: "Object-Oriented Programming",
    icon: oops,
  },
  {
    name: "Operating Systems",
    icon: os,
  },
  {
    name: "Github",
    icon: githb,
  },
  {
    name: "Linux",
    icon: linix,
  },
];

const experiences = [
  {
    title: "Python Intern",
    company_name: "Infosys Springboard",
    icon: infylogo,
    iconBg: "#383E56",
    date: "Mar 2024 - Jun 2024",
    points: [
      "Developed an automated system to extract bank cheque data from scanned PDFs using advanced OCR techniques, improving data extraction accuracy and efficiency.",
      "Used Python, Pytesseract, and OpenCV for image preprocessing and text recognition, and integrated it with a user-friendly front-end built with HTML/CSS and JavaScript.",
      "Streamlined the cheque processing workflow, significantly reducing manual data entry and speeding up document digitization for banking operations."
    ],
  },
  {
    title: "Student Coordinator",
    company_name: "HackXcelerate Hackathon",
    icon: hackx, // You can add a custom icon if needed
    iconBg: "#E6DEDD",
    date: "Apr 26 - Apr 27, 2024",
    points: [
      "Shown immense leadership skills while coordinating CBIT HackXcelerate 2024, a national-level hackathon.",
      "Collaborated with Microsoft and byteXL to ensure seamless execution of the event and enriched participant experience.",
      "Managed logistics, promotions, and team coordination, contributing to the event’s grand success."
    ],
  },
  {
    title: "Junior Coordinator",
    company_name: "United Coders Club",
    icon: ucc, // Or use a custom club logo if available
    iconBg: "#383E56",
    date: "Feb 2024 - Jan 2025",
    points: [
      "Organized and conducted multiple tech events during CBIT’s technical fest SUDHEE 2023 under the Tecstasy banner.",
      "Fostered innovation and peer learning by engaging students in hands-on technical activities.",
      "Helped build a collaborative and growth-focused club environment for juniors and seniors alike."
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Codetech IT Solutions",
    icon: codetech, // Optional: Replace with company logo if available
    iconBg: "#E6DEDD",
    date: "Jun 25 - Jul 25, 2024",
    points: [
      "Gained hands-on experience developing and optimizing various machine learning models using Python.",
      "Worked with real-world datasets, focused on data cleaning, feature engineering, model training, and evaluation.",
      "Used libraries like Scikit-learn, Pandas, and NumPy to improve model accuracy and efficiency."
    ],
  },
];

const certificates = [
  {
    name: "Google Cloud Computing Foundations and Generative AI Certificate",
    image: gcloud, 
    link: "https://drive.google.com/file/d/1nZGrzPBbwo2KUv1BSZypUKKqAqqei2yb/view?usp=sharing", 
  },
  {
    name: "Data Science Foundation Certification",
    image: datascience,
    link: "https://drive.google.com/file/d/1aEd7VmHmVRrXeWOYEiQJNCzwtg9fv4zX/view",
  },
  {
    name: "VNR Hackathon Certificate of Appreciation",
    image: VNR,
    link: "https://drive.google.com/file/d/13P1_8rUpjHNrXO6V7zFgTTh_AlX1v0ZA/view?usp=sharing",
  },
  {
    name: "COSC Hackathon Certificate of Special mention",
    image: COSC,
    link: "https://drive.google.com/file/d/1xHYX96ZMAhNNcQDcvYcCglrbdkZ3PJWD/view?usp=sharing",
  },
  {
    name: "Infosys Springboard Internship Certificate",
    image: infy,
    link: "https://drive.google.com/file/d/1Hr-wUcFLhdJ70B2NRMj0pTFForpxeuOg/view?usp=sharing",
  },
  {
    name: "Bharat Intern Internship Certificate",
    image: bharat,
    link: "https://drive.google.com/file/d/1l567Qv95hv1MPToXEaX9xulDjNe6lBit/view?usp=sharing",
  },
];


const projects = [
  {
    name: "Portfolio",
    description: "You are watching it right now 😉.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "Vite", color: "pink-text-gradient" },
    ],
    image: port,
    source_code_link: "https://github.com/Jagruthi321/Portfolio.git", 
  },
  {
    name: "Smart Traffic Management System",
    description:
      "Built an intelligent traffic signal control system in Python using Pygame that simulates real-time traffic and dynamically adjusts signal timings.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Pygame", color: "green-text-gradient" },
      { name: "OOP", color: "pink-text-gradient" },
    ],
    image: traffic, // Replace with traffic project image
    source_code_link: "https://github.com/Jagruthi321/Smart_Traffic_management.git",
  },
  {
    name: "Analysis-on-Movie-Reviews",
    description:
      "Sentiment analysis model on IMDB reviews using classification techniques with proper preprocessing and evaluation.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "Classification", color: "pink-text-gradient" },
    ],
    image: movie, // Replace with a relevant image
    source_code_link: "https://github.com/Jagruthi321/Analysis-on-Movie-Reviews.git",
  },
  {
    name: "Cartooniser",
    description:
      "Used OpenCV to cartoonize images via bilateral filtering and adaptive thresholding for smooth, edge-highlighted effects.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "Image Processing", color: "pink-text-gradient" },
    ],
    image: cartoonise, // Replace with cartooniser image
    source_code_link: "https://github.com/Jagruthi321/Cartooniser.git",
  },
  {
    name: "House-Price-Prediction",
    description:
      "Built a price prediction model on Boston Housing dataset using linear regression with visualization and evaluation.",
    tags: [
      { name: "Linear Regression", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "NumPy", color: "pink-text-gradient" },
    ],
    image: house, // Replace with price prediction image
    source_code_link: "https://github.com/Jagruthi321/House-Price-Prediction.git",
  },
  {
    name: "Text-To-Speech",
    description:
      "Text-to-Speech app using pyttsx3 with customizable voice, speed, and MP3 export via simple UI.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Tkinter", color: "green-text-gradient" },
      { name: "pyttsx3", color: "pink-text-gradient" },
    ],
    image: textspeech, // Replace with TTS image
    source_code_link: "https://github.com/Jagruthi321/Text-To-Speech.git",
  },
];


export { services, technologies, experiences, certificates, projects };

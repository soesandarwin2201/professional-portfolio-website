import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import ServiceCard from "../components/serviceCard";
import { services } from "../constants";

const About = () => {
     return (
       <>
         <motion.div variants={textVariant()} >
           <p className={styles.sectionSubText}>Introduction</p>
           <h2 className={styles.sectionHeadText}>Overview.</h2>
         </motion.div>
   
         <motion.p
           variants={fadeIn("", "", 0.1, 1)}
           className='mt-4 text-slate-800 text-[17px] max-w-3xl leading-[30px]'
         >
           I am a skilled software developer with experience in  JavaScript, and Ruby, and expertise in frameworks like React, Next.js, Ruby on Rails, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
         </motion.p>
   
         <div className='mt-20 flex flex-wrap gap-10'>
           {services.map((service, index) => (
             <ServiceCard key={service.title} index={index} {...service} />
           ))}
         </div>
       </>
     );
   };
   
   export default SectionWrapper(About, "about");
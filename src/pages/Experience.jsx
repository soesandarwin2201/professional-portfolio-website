import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
     return (
       <>
         <motion.div variants={textVariant()}>
           <p className={`${styles.sectionSubText} text-center`}>
             What I have done so far
           </p>
           <h2 className={`${styles.sectionHeadText} text-center`}>
             Work Experience.
           </h2>
         </motion.div>
   
         <div className='mt-10 flex flex-col'>
           <VerticalTimeline>
             {experiences.map((experience, index) => (
               <ExperienceCard
                 key={`experience-${index}`}
                 experience={experience}
               />
             ))}
           </VerticalTimeline>
         </div>
       </>
     );
   };
export default SectionWrapper(Experience, "");
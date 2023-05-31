import React from 'react';
import ProjectCard from '../components/ProjectCard';
import {Box, Grid} from "@mui/material";
import { projects } from '../constants';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Projects = () => {
     return (
          <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="grid container mx-auto justify-center mt-20">
        <div className={`flex flex-col justify-center w-full card-container`} >
        {projects.map((project, index) => (
            <ProjectCard
            key={index}
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
              tags={project.tags}
              description={project.description}
              className={`${index % 2 == 0 ? 'flex-row-reverse' : 'flex-row'}`}
            />
            ))}
            </div>
      </div>
     
    </>
      );
}
 
export default SectionWrapper(Projects, "");

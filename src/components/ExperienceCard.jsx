import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";

const ExperienceCard = ({ experience }) => {
     return (
       <VerticalTimelineElement
         contentStyle={{
           background: "#97B2DE",
           color: "#fff",
         }}
         contentArrowStyle={{ borderRight: "7px solid #1A488E" }}
         date={experience.date}
         iconStyle={{ background: experience.iconBg }}
         icon={
           <div className='flex justify-center items-center w-full h-full'>
             <img
               src={experience.icon}
               alt={experience.company_name}
               className='w-[60%] h-[60%] object-contain'
             />
           </div>
         }
       >
         <div>
           <h3 className='text-slate-800 text-[24px] font-bold'>{experience.title}</h3>
           <p
             className='text-slate-800 text-[16px] font-semibold'
             style={{ margin: 0 }}
           >
             {experience.company_name}
           </p>
         </div>
   
         <ul className='mt-5 list-disc ml-5 space-y-2'>
           {experience.points.map((point, index) => (
             <li
               key={`experience-point-${index}`}
               className='text-slate-800 text-[14px] pl-1 tracking-wider'
             >
               {point}
             </li>
           ))}
         </ul>
       </VerticalTimelineElement>
     );
   };

export default ExperienceCard;

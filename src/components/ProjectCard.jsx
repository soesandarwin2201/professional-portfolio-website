import React from 'react';
import IconLink from './IconLink';
import { styles } from '../styles';

const ProjectCard = (props) => {
  const { image, live, source, title, description, tags } = props;
  return (
    <div className="w-full flex flex-col gap-4 p-5 rounded-2xl project-card sm:flex-row sm:gap-8 mt-5">
      <div className="w-full sm:w-2/5">
        <img src={image} alt="project image" className="max-w-full h-auto project-img" />
      </div>
      <div className="w-full sm:w-3/5 flex flex-col justify-center">
        <h2 className={`${styles.sectionSubText} text-[20px] font-bold text-center`}>{title}</h2>
        <div className='mt-1 flex flex-wrap gap-2 justify-center'>
          {tags.map((tag) => (
            <button
              key={`${name}-${tag.name}`}
              className={`text-[16px] ${tag.color}`}
            >
              #{tag.name}
            </button>
          ))}
        </div>
        <p className='text-stone-950'>{description}</p>
        <div className='flex flex-wrap gap-2 justify-center'>
          <button
            onClick={() => window.open(live, "_blank")}
            className="tag text-white font-bold py-2 px-4 rounded">
            Live Version
          </button>
          <button
            onClick={() => window.open(source, "_blank")}
            className="tag text-white font-bold py-2 px-4 rounded">
            Source
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;


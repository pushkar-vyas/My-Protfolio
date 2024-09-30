import React from 'react';
import './skills.css'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiC, SiCplusplus, SiMongodb, SiTailwindcss, SiMysql, SiBootstrap } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 color="#E34F26" size={50} />, name: 'HTML5', level: 'Intermediate' },
  { icon: <FaCss3 color="#1572b6" size={50} />, name: 'CSS3', level: 'Intermediate' },
  { icon: <FaJs color="#F7DF1E" size={50} />, name: 'JavaScript', level: 'Intermediate' },
  { icon: <FaReact color="#16DAF8" size={50} />, name: 'React', level: 'Intermediate' },
  { icon: <SiBootstrap color="#7952b3" size={50} />, name: 'Bootstrap', level: 'Beginner' },
  { icon: <SiTailwindcss color="#38B2AC" size={50} />, name: 'Tailwind CSS', level: 'Intermediate' },
  
  { icon: <SiMongodb color="#47A248" size={50} />, name: 'MongoDB', level: 'Beginner ' },
  
  { icon: <SiC color="#00549D" size={50} />, name: 'C', level: 'Intermediate' },
];

const Skills = () => {
  return (
    
    <section id="Skills" className='skills container section' >
      <h2 className='section_title'>Skills</h2>
      
      <div className='skills_container grid'>
      
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className='skills_card'>
            <div className='skills_icons '>
              {skill.icon}
            </div>
            <div className="work_mask"></div>
            
              
                <h3 className='skills_name'>{skill.name}</h3>
                <span className='skills_level'>{skill.level}</span>
              
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

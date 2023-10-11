import logo from './logo.svg';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Tile from './Tile.js'
import experiences from './experiences.json'
import { useEffect, useState } from 'react';


function Experience() {
  return (
    <div className='bg-[#FD652F]/90 flex flex-col pb-4' id="experience"> 
    <div className="flex flex-col justify-center ml-32 mr-32">
        <h2 className=' font-sans font-semibold text-7xl text-[#001F5B] ml-6 mt-8'> Experience </h2>
        {
          experiences.map(experience=>{
            return(<Tile key={experience.id} company={experience.company} role={experience.role} dates={experience.dates} img={experience.img} desc={experience.desc}/>)
          })
        }
  
      </div>    
    </div>
  );
}

export default Experience;

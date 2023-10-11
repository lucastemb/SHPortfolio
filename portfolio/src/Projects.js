import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import cat from './ballincat.jpeg'
import projects from './projects.json'


function Projects() {
  return (
    <div className='bg-[#001f5b]/90 flex flex-col pb-4 h-full' id="projects"> 
    <div className="flex flex-col ml-32 mr-32">
    <h2 className=' font-sans font-semibold text-7xl text-white ml-6 mt-6'> Projects </h2>
    <div className="flex flex-col justify-center items-center"> 
    <div className="w-3/6 justify-center items-center"> 
    <Carousel dynamicHeight="true" autoPlay="true" interval="6000" infiniteLoop="true"> 
        {projects.map(project=>{
            return(
            <div key={project.id} className="">
            <img className=""src={project.img}/>
            <p className="text-white"> {project.title} </p> 
            <p> {project.desc} </p>
            </div>)
        })
        }
    </Carousel>
    </div>
    </div>
    </div>    
    </div>
  );
}

export default Projects;
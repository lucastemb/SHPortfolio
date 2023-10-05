import logo from './logo.svg';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import afrl from './amazon.png';
import shpe from './l3.png';
import ufdatastudio from './comillas.png'
import Tile from './Tile.js'

function Experience() {
  return (
    <div className='bg-[#FD652F]/90 flex flex-col pb-4'> 
        <h2 className=' font-sans font-semibold text-6xl text-[#001F5B] ml-6 mt-8'> Experience </h2>
        <Tile company="Amazon" role="Software Dev Engineer Intern, Alexa" dates="May 2023 - August 2023" img={afrl}></Tile>
        <Tile company="L3Harris" role="Software Engineer Intern, Space and Airborne Systems" dates="May 2022 - August 2022" img={shpe}/>
        <Tile company="ICAI Comillas Pontifical University" role="Research Aid" dates="January 2023-April 2023" img={ufdatastudio}/>
        
    </div>
  );
}

export default Experience;

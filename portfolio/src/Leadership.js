import logo from './logo.svg';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import afrl from './amazon.png';
import shp from './shpe.png';
import girls from './girls.png';
import ace from './ace.jpg';
import Tile from './Tile.js'

function Leadership() {
  return (
    <div className='bg-[#0070C0]/90 flex flex-col'>
    <div className="flex flex-col justify-center ml-32 mr-32">  
        <h2 className=' font-sans font-semibold text-7xl text-white ml-6 mt-6'> Leadership </h2>
        <Tile company="SHPE @ UF" role="Lead UI/UX Director" dates="2023-" img={shp}></Tile>
        <Tile company="Girls Who Code @ UF" role="Treasurer" dates="2022-2023" img={girls}></Tile>
        <Tile company="Association of Computer Engineers at UF" role="Web Developer" dates="2022-2023" img={ace}></Tile>
        <Tile company="SHPE @ UF" role="SHPEInnovative Director" dates="2021-2022" img={shp}></Tile>

    </div>     
    </div>
  );
}

export default Leadership;

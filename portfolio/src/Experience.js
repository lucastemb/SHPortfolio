import logo from './logo.svg';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import afrl from './afrl.png';
import shpe from './shpe.png';
import ufdatastudio from './ufdatastudio.png'

const WorkIcon = ({image}) => <img className="flex w-5" src={image}/>;

function Experience() {
  return (
    <div className='bg-[#001F5B] flex flex-row'> 
        <h2 className='text-white font-sans font-semibold text-6xl'> Experience </h2>
        <VerticalTimeline>
        <VerticalTimelineElement className="vertical-timeline-element" iconStyle={{background:'#FFF'}} 
        icon={<WorkIcon image={shpe}/>}>
            <h1 className="font-bold text-3xl"> Society for Hispanic Professional Engineers </h1>
            <h2 className=""> SHPEWorks Director </h2> 
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie rutrum felis vel facilisis. Maecenas accumsan dapibus nisi ac convallis. Mauris auctor consequat dolor in rhoncus. Donec eget nulla lectus.
            </p> 
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element" iconStyle={{background:'#0070C0'}} 
        icon={<WorkIcon className="flex items-center justify-center" image={ufdatastudio}/>}>
            <h1 className="font-bold text-3xl"> UF Data Studio </h1>
            <h2 className=""> Undergraduate Student Researcher </h2> 
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie rutrum felis vel facilisis. Maecenas accumsan dapibus nisi ac convallis. Mauris auctor consequat dolor in rhoncus. Donec eget nulla lectus.
            </p> 
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element" iconStyle={{background:'#72A9BE'}} 
        icon={<WorkIcon image={afrl}/>}>
            <h1 className="font-bold text-3xl"> Air Force Research Laboratory </h1>
            <h2 className=""> MSEIP Undergraduate Researcher </h2> 
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie rutrum felis vel facilisis. Maecenas accumsan dapibus nisi ac convallis. Mauris auctor consequat dolor in rhoncus. Donec eget nulla lectus.
            </p> 
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  );
}

export default Experience;

import '../styles/App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projects from '../json-data/projects.json';


function Projects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='bg-[#001f5b] flex flex-col pb-4 h-full' id="projects"> 
    <div className="flex flex-col ml-32 mr-32">
    <h2 className=' font-sans font-semibold text-7xl text-white ml-6 mt-6'> Projects </h2>
    <div className="flex flex-col justify-center items-center"> 
    <div className="w-3/6 justify-center items-center rounded"> 
    <Carousel responsive={responsive} arrows={false} infinite={true} swipable={true} showDots={true} dotListClass='text-white'> 
        {projects.map(project=>{
            return(
            <div key={project.id} className="flex flex-col items-center justify-center">
            <img className="bg-white p-8 rounded-md" src={project.img}/>
            <p className="text-white font-sans font-semibold text-center text-3xl mt-3 mb-8"> {project.title} </p> 
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
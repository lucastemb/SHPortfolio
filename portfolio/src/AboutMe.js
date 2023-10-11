import logo from './logo.svg';
import './App.css';
import photo from './ballincat.jpeg'
import { Link } from 'react-scroll';

function AboutMe() {
  return (
    <div className="flex flex-col bg-[#72A9BE]/50 h-screen">
    <nav className="flex flex-row justify-between text-[#001F5B]">
      <div className="ml-8 mr-8 mb-8 mt-3 flex flex-col justify-center">
      <h2 className="font-sans text-3xl font-bold"> Lucas Tembras </h2> 
      </div>
      <div className='ml-8 mr-8 mb-8 mt-3 text-md font-semibold'>
      <Link><a className="font-sans m-6">About Me</a></Link>
      <Link to="experience" smooth="true"><a className="font-sans m-6">Experience</a></Link>
      <Link to="leadership" smooth="true"><a className="font-sans m-6">Leadership</a></Link>
      <Link to="projects" smooth="true"><a className="font-sans m-6">Projects</a></Link>
      <Link to="contact" smooth="true"><a className="font-sans m-6">Contact</a></Link>
      <button className="font-sans m-6 text-[#FFF] bg-[#001F5B] rounded-lg w-40 h-8">  Download Resume </button>
  
      </div>
    </nav>
    {/* Info Section */}
    <div className="flex flex-row justify-center h-full items-center">
    <div className="flex flex-col text-white font-sans font-semibold w-[35%] mr-5"> 
    <h2 className="text-7xl text-[#001F5B]"> About Me </h2>
    <p className="font-normal text-[#001F5B]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit. Vitae justo eget magna fermentum iaculis eu non diam. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus.</p>
    <div className="mt-8 flex flex-row items-center">
    <svg width="24" height="24" className="mr-1" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>
    <p className="font-normal text-sm text-[#001F5B]"> Gainesville, Florida </p>
    </div>
    </div> 
    <div className="relative ml-5">
    <div className="h-56 z-10 relative overflow-hidden border-4 border-white top-0 left-0">
    <img src={photo} className=" w-full h-full"></img>
    </div>
    <div className="h-56 z-0 absolute overflow-hidden border-4 border-white top-6 left-4 -right-5 inset-x-0 bg-[#D33A02]">
    </div>
    </div>
    </div>
    </div> 
  );
}

export default AboutMe;

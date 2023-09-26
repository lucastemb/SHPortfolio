import logo from './logo.svg';
import './App.css';

function AboutMe() {
  return (
    <div className="flex flex-col bg-[#72A9BE]/50 h-screen">
    <nav className="flex flex-row justify-between bg-[#0070C0]/90 text-white">
      <div className="">
      <h2 className="font-sans text-xl font-semibold m-8"> Lucas Tembras </h2> 
      </div>
      <div className='m-8'>
      <a className="font-sans m-8">About Me</a>
      <a className="font-sans m-8">Work Experience</a>
      <a className="font-sans m-8">Projects</a>
      <a className="font-sans m-8">Contact Me</a>
      </div>
    </nav>
    {/* Info Section */}
    <div className="">
      <img src=""></img>
      <h2 className="text-red"> About Me </h2>
    </div>
    </div>
  );
}

export default AboutMe;

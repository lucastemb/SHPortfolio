import logo from './logo.svg';
import './App.css';

function AboutMe() {
  return (
    <div className="flex-col justify-center"> 
    <nav className="flex-col justify-between"> 
      <a classname="font-sans text-sm">About Me</a>
      <a classname="font-sans text-sm">Work Experience</a>
      <a classname="font-sans text-sm">Projects</a>
      <a classname="font-sans text-sm">Contact Me</a> 
    </nav>
    <div className="about-me">
      <h2> About Me </h2>
    </div>
    </div>
  );
}

export default AboutMe;

import logo from './logo.svg';
import './App.css';

function AboutMe() {
  return (
    <div className="flex-col">
    <nav className="flex-row justify-center align-center">
      <div className='text-left'>
        <h2 className="font-sans font-semibold"> Lucas Tembras </h2> 
      </div>
      <div className='text-right'>
      <a className="font-sans m-8">About Me</a>
      <a className="font-sans m-8">Work Experience</a>
      <a className="font-sans m-8">Projects</a>
      <a className="font-sans m-8">Contact Me</a>
      </div>
    </nav>
    <div className="about-me">
      <h2 className="text-red"> About Me </h2>
    </div>
    </div>
  );
}

export default AboutMe;

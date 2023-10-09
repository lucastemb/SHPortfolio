import logo from './logo.svg';
import './App.css';


function Tile(props) {
  return (
    <div className="bg-white h-72 rounded-lg mt-4 mb-4">
        <div className="flex flex-row justify-between h-full">
        <span className=""> 
        <img className="h-full"src={props.img}></img>
        </span>
        <span> 
        <h1 className="font-bold text-large"> {props.company} <span className="font-semibold"> - {props.role} </span> </h1>
        </span>
        <p> {props.dates}</p>
        </div>
    </div>
  );
}

export default Tile;

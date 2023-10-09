import logo from './logo.svg';
import './App.css';


function Tile(props) {
  return (
    <div className="bg-white h-72 rounded-lg mt-4 mb-4">
        <div className="flex flex-row justify-between h-full">
        <span className="w-[45%]"> 
        <img className="h-full"src={props.img}></img>
        </span>
        <span className="w-[35%]"> 
        <h1 className="font-bold text-large"> {props.company} <span className="font-semibold"> - {props.role} </span> </h1>
        <ul className="list-disc">
          {props.desc && props.desc.map(point=>{
            return (<li> {point} </li>)
          })}
        </ul>
        </span> 
        <span className="w-[25%]">
        <p> {props.dates}</p>
        </span>
        </div>
    </div>
  );
}

export default Tile;

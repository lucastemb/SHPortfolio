import logo from './logo.svg';
import './App.css';


function Tile(props) {
  return (
    <div className="bg-white">
        <div className="flex flex-row">
        <img className="w-5"src={props.img}></img>
        <h1 className="font-semibold text-large"> {props.company} </h1>
        <p className="font-semibold text-md"> - {props.role} </p>
        <p> {props.dates}</p>
        </div>
    </div>
  );
}

export default Tile;

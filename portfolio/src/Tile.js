import './styles/App.css';


function Tile(props) {
  return (
    <div className="bg-white rounded-lg mt-4 mb-4">
      <div className="flex flex-row justify-around h-full">
        <div className="flex flex-row w-[25%] p-4">
        <div className="flex justify-center items-center w-full">  
        <img className="max-h-80 place-self-center"src={props.img}></img>
        </div> 
        </div>
        <span className="flex flex-col w-[50%] p-8"> 
          <h1 className="font-bold text-sm lg:text-xl text-left text-[#001F5B]"> {props.company} <span className="font-semibold lg:text-xl"> - {props.role} </span> </h1>
          <ul className="list-disc text-[#001F5B] text-xs lg:text-sm max-h-full ml-4 p-4">
            {props.desc && props.desc.map(point => {
              return (<li className="p-1"> {point} </li>)
            })}
          </ul>
        </span>
        <div className="flex justify-center text-right w-[25%] align-right p-8">
        <p className="text-[#001F5B]"> {props.dates}</p>
        </div>
      </div>
    </div>
  );
}

export default Tile;

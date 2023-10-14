import './styles/App.css';


function Tile(props) {
  return (
    <div className="bg-white h-80 rounded-lg mt-4 mb-4">
      <div className="flex flex-row justify-between h-full">
        <span className="flex w-[25%] items-center">
          <img className="w-full" src={props.img}></img>
        </span>
        <span className="flex flex-col items-center w-[50%]">
          <h1 className="font-bold text-large text-[#001F5B]"> {props.company} <span className="font-semibold"> - {props.role} </span> </h1>
          <ul className="list-disc text-[#001F5B]">
            {props.desc && props.desc.map(point => {
              return (<li> {point} </li>)
            })}
          </ul>
        </span>
        <span className="flex text-right w-[25%]">
          <p> {props.dates}</p>
        </span>
      </div>
    </div>
  );
}

export default Tile;

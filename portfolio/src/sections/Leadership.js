import '../styles/App.css';
import Tile from '../Tile.js'
import leadership from '../json-data/leadership.json';

function Leadership() {
  return (
    <div className='bg-leadership flex flex-col' id="leadership">
      <div className="flex flex-col justify-center ml-32 mr-32">
        <h2 className=' font-sans font-semibold text-7xl text-white ml-6 mt-6'> Leadership </h2>
        {
          leadership.map(experience => {
            return (<Tile key={experience.id} company={experience.company} role={experience.role} dates={experience.dates} img={experience.img} desc={experience.desc} />)
          })
        }

      </div>
    </div>
  );
}

export default Leadership;

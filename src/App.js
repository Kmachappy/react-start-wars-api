import './App.css';
import {useState, useEffect} from 'react'
import Starships from './components/Starships';
import Header from './components/Header';
import Search from './components/Search';



function App() {
  
  const [starShips, setStarships] = useState(null)
  
  const getStarships = async () =>{
    const response = await fetch("https://swapi.dev/api/starships/")
    const starshipsData = await response.json()
    // console.log(starshipsData.results)
    setStarships(starshipsData.results)
  }

  const searchShips = (searchTerm)=>{
    console.log("inside searchship",searchTerm)
    let ship;
    if(searchTerm === ""){
      getStarships()
    }else{
    console.log("before filter ship name",starShips[5].name.toLowerCase())
    // ship = starships.filter(ship=> (ship.name == searchTerm))
    ship = starShips.filter(ship=> ship.name.toLowerCase().includes(searchTerm.toLowerCase()))
    // console.log("this is ship", ship)
      setStarships(ship)
    }
  }

  useEffect(()=>{getStarships()}, [])
  return (
    <div className="App">
      <Header/>
      <Search searchShips={searchShips}/>
      <Starships starships={starShips}/>
    </div>
  );
}

export default App;

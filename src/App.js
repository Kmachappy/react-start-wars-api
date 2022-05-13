import './App.css';
import {useState, useEffect} from 'react'
import Starships from './components/Starships';
import Header from './components/Header';
import Search from './components/Search';
import Buttons from './components/Buttons'


function App() {

  const [starShips, setStarships] = useState(null)
  const [links, setLinks] = useState({})
  console.log(links)


  const getStarships = async (url = "https://swapi.dev/api/starships/?page=1") =>{
    const response = await fetch(url)
    const starshipsData = await response.json()
    setStarships(starshipsData.results)
    setLinks({
      previous:starshipsData.previous,
      next:starshipsData.next
    })
  }

  const searchShips = (searchTerm)=>{
    if(searchTerm === ""){
      getStarships()
    }else{
    let ship = starShips.filter(ship=> ship.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setStarships(ship)
    }
  }  

  useEffect(()=>{getStarships()}, [])
  return (
    <div className="App">
      <Header/>
      <Buttons getStarships={getStarships} links={links}/>
      <Search searchShips={searchShips}/>
      <Starships starships={starShips}/>
    </div>
  );
}

export default App;

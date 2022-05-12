import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Starships from './components/Starships';
import Header from './components/Header';

function App() {
  
  const [starships, setStarships] = useState(null)

  const getStarships = async () =>{
    const response = await fetch()
  }
  
  
  return (
    <div className="App">
      <Header/>
      <Starships/>
    </div>
  );
}

export default App;

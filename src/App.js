import React, { useEffect, useState } from 'react';
import MainDisplay from './components/MainDisplay/MainDisplay';
// import NavBar from './components/NavBar/NavBar';
import './App.css'
import axios from 'axios';
import Modal from './components/Modal/Modal';
import SearchBar from './components/SearchBar/SearchBar';
import DisplayChart from './components/DisplayChart';
import ChartButton from './components/ChartButton/ChartButton';


function App() {

  const[hideShow,setHideShow]=useState(false)
  const [games, setGames] = useState([]);
  const [displayGames, setDisplayGames] = useState([])

  useEffect(() => {
    if (hideShow === false) getAllGames();
  }, [hideShow])

  const handleHideShow = () =>{
    setHideShow(!hideShow)
}
  

  async function getAllGames(prop){
    let response = await axios.get('https://localhost:44386/api/games');
    setGames(response.data);
    setDisplayGames(response.data)
    console.log(response.data)
  }
 
  const filterGames = (searchterm) => {
    
    let matchingGames = games.filter((game) => {
      if(game.name.toLowerCase().includes(searchterm.toLowerCase()))
        
      return true
    
    else return false
    
  })

  setDisplayGames(matchingGames) 
};

  return (
    <div>
        
        <SearchBar filterGames={filterGames}/>
        <ChartButton games={displayGames}/>
        <MainDisplay games={displayGames}/>
        
    </div>
  );
  }


export default App;

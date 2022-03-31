import React, { useEffect, useState } from 'react';
import MainDisplay from './components/MainDisplay/MainDisplay';
// import NavBar from './components/NavBar/NavBar';
import './App.css'
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';


function App() {

  const [games, setGames] = useState([]);
  const [displayGames, setDisplayGames] = useState([])

  useEffect(() => {
    getAllGames();
  })
  

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
      
        <MainDisplay games={displayGames}/>
        
    </div>
  );
  }


export default App;

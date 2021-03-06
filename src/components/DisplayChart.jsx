import React from "react";
import { Chart } from "react-google-charts";




const DisplayChart = (props) => {

  function generateDataForChart(){

      console.log(props.games);

      let filteredGames = props.games.filter(game => game.year > 2013);

      console.log('Filtered Games', filteredGames)

      let platforms = filteredGames.map(game => {
        return game.platform
      })

      console.log('Platforms' , platforms)

      let distinctPlatform = [...new Set(platforms)]

      console.log('Distinct Platforms',distinctPlatform)

      let platformArrays = distinctPlatform.map(platform => {

        let allGamesForPlatform = filteredGames.filter(game =>game.platform==platform);
        let content = []
        for (let i = 0; i < allGamesForPlatform.length; i++){
          content.push(allGamesForPlatform[i].globalSales);
        }
         return[platform,content,"silver"]
      });
       
      
        
        // loop through all gamesfor platform and sum each games for global sales, once we achieve the sum we need to put it in the return.       

       
      // close to generateDataForChart function
      console.log('PlatformArrays', platformArrays)

      
      const data = [
          ["Platform", "Sales",{role: "style"}], 
          ...platformArrays
        ];

        console.log('Data',data)
        
        return data;


  }
  return(
      <div>
          <h1>Platform By Global Sales in Millions </h1>
          <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataForChart()} />
      </div>
  );
} // close to component

export default DisplayChart;

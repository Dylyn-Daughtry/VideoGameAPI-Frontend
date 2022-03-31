import React, { useState } from 'react';
import './MainDisplay.css'

const MainDisplay = (props) => {
    return (
        <div className='wrapper'>
            <table className='prettyTable'>
                <thead className='headers'>
                    <tr>
                    <th className='hname hcell'>ID</th>
                    <th className='hname hcell'>Rank</th>
                    <th className='hname hcell'>Name</th>
                    <th className='hname hcell'>Platform</th>
                    <th className='hname hcell'>Year</th>
                    <th className='hname hcell'>Genre</th>
                    <th className='hartist hcell'>Publisher</th>
                    <th className='halbum hcell'>NA Sales</th>
                    <th className='halbum hcell'>EU Sales</th>
                    <th className='halbum hcell'>Japan Sales</th>
                    <th className='halbum hcell'>Other Sales</th>
                    <th className='hrd hcell'>Global Sales</th>
                    </tr>
                </thead>
                <tbody>
                {props.games && props.games.map((game, i)=>
                        (
                        <tr key={`entry-row-${i}`}>
                            <td className='name tcell'>{game.id}</td>
                            <td className='artist tcell'>{game.rank}</td>
                            <td className='album tcell'>{game.name}</td>
                            <td className='release_date tcell'>{game.platform}</td>
                            <td className='genre tcell'>{game.genre}</td>
                            <td className='genre tcell'>{game.publisher}</td>
                            <td className='genre tcell'>{game.northAmericaSales}</td>
                            <td className='genre tcell'>{game.europeSales}</td>
                            <td className='genre tcell'>{game.japanSales}</td>
                            <td className='genre tcell'>{game.otherSales}</td>
                            <td className='genre tcell'>{game.globalSales}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    )
}

export default MainDisplay
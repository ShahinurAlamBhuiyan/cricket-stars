import React, { useEffect, useState } from 'react';
import AddedPlayers from '../AddedPlayers/AddedPlayers';
import fakeData from '../FakeData/FakeData.json'
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Home.css'

const Home = () => {

    const [players, setPlayers] = useState([])
    const [added, setAdded] = useState([])
    useEffect(() => {
        setPlayers(fakeData)
    }, [])
    const handleAddedClick = (playerClick) => {
        const newAdded = [...added, playerClick]
        setAdded(newAdded)
    }

    return (
        <div className="home row">
            <div className='playerCard row col-md-8'>
                {
                    players.map(player => <SinglePlayer
                        handleAddedClick={handleAddedClick}
                        player={player}></SinglePlayer>)
                }
            </div>
            <div className='addedCard col-md-4'>
                <AddedPlayers added={added}></AddedPlayers>
            </div>
        </div>
    );
};

export default Home;
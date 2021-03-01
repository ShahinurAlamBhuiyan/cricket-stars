import './AddedPlayers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const AddedPlayers = (props) => {
    
    const added = props.added;
    const totalPlayerCost = added.reduce((totalPlayerCost, cost) => totalPlayerCost + cost.salary, 0);
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className='addedPlayers'>
            <h2>Players added : {added.length}</h2>
            <div className="details">
                <ol type='1'>
                    {
                        added.map((player) => <li>Name- {player.name};&nbsp;Salary- ${player.salary};&nbsp;Country- {player.country}</li>)
                    }
                </ol>
            </div>
            <h4>Total Cost  : ${totalPlayerCost}</h4>
            <button onClick={() => setIsClicked(true)}
            className='confirmBtn'><FontAwesomeIcon icon={faCheckCircle}/> {isClicked ? ' Confirmed' : ' Confirm'}</button>
        </div>
    );
};

export default AddedPlayers;
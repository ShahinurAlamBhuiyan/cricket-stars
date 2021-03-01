import React, { useState } from 'react';
import './SinglePlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const SinglePlayer = (props) => {
    const { name, img, salary, country, role } = props.player;
    const [isClicked, setIsClicked] = useState(false)
    
    return (
        <div className='singlePlayer col-md-4'>
            <img src={img} alt="" />
            <div className='textDiv'>
                    <h2>{name}</h2>
                    <p>{role}</p>
                    <p>{country}</p>
                    <h3>Salary : ${salary}</h3>
                <button disabled={isClicked} onClick={() => {props.handleAddedClick(props.player)
                setIsClicked(true)
                }} ><FontAwesomeIcon icon={faUserPlus}/>{isClicked ? ' Added' : ' Add me'}</button>
            </div>
        </div>
    );
};

export default SinglePlayer;
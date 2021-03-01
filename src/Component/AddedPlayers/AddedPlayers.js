import './AddedPlayers.css'

const AddedPlayers = (props) => {
    
    const added = props.added;
    const totalPlayerCost = added.reduce((totalPlayerCost, cost) => totalPlayerCost + cost.salary, 0);

    return (
        <div className='addedPlayers'>
            <h2>Players added : {added.length}</h2>
            <div className="details">
                <ol type='1'>
                    {
                        added.map((player) => <li className='list-gruup-item'>Name- {player.name};&nbsp;Salary- ${player.salary};&nbsp;Cuuntry- {player.country}</li>)
                    }
                </ol>
            </div>
            <h4>Total Cost  : ${totalPlayerCost}</h4>
        </div>
    );
};

export default AddedPlayers;
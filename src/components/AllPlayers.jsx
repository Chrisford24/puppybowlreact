import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import fetchDataHandler from '../API/fetchDataHandler'
import NavBar from './NavBar'
const BASE_API = " https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b"


const AllPlayers = () => {
    const [players, setPlayers] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function dataFetch() {
            try {
                const response = await fetchDataHandler();
                setPlayers(response);
            } catch (error) {
                console.log(error);
            }
        }

        dataFetch();
    }, [])

    return (
        <>
            <NavBar />
            <h1>AllPlayers</h1>
            {players && players.map((player) => {
                return (

                    <div key={player.id}>
                        <p>{player.name}</p>
                        <button onClick={() => navigate(`/players/${player.id}`) }>Details</button>
                        <button>Delete</button>
                    </div>
                )
            })}


        </>
    )
}

export default AllPlayers
import { useState, useEffect } from 'react'
import fetchDataHandler from '../API/fetchDataHandler'

const AllPlayers = () => {
    const [players, setPlayers] = useState(null);

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
            <h1>AllPlayers</h1>
            {players && players.map((player) => {
                return (

                    <div>
                        <p>{player.name}</p>
                        <button>Details</button>
                        <button>Delete</button>
                    </div>
                )
            })}


        </>
    )
}

export default AllPlayers
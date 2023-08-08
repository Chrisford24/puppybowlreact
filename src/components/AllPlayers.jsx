import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import fetchDataHandler from '../API/fetchDataHandler'
import NewPlayerForm from './NewPlayerForm'
import NavBar from './NavBar'
const BASE_API = " https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b"





const AllPlayers = () => {
    const [players, setPlayers] = useState(null);
    const [search, setSearch ] = useState('');
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
    }, [players])

    // const handleDelete = () =>{
    //     const response = fetch(`${BASE_API}/player/${player.id}`)
    //     console.log("player id: ", player.id)
    // }
   
    return (
        <>
            <NavBar />
            <input placeholder="Type to search..." onChange={(e)=>{
                setSearch(e.target.value);
            }}/>
            <h1>AllPlayers</h1>
            {players && players.filter((player) => {
                return search.toLowerCase() === '' 
                ? player
                : player.name.toLowerCase().includes(search)
            }).map((player) => {
                return (

                    <div key={player.id}>
                        <p>{player.name}</p>
                        <button onClick={() => navigate(`/players/${player.id}`) }>Details</button>
                        <button onClick={async(e)=>{
                            e.preventDefault();
                            const response = await fetch(`${BASE_API}/players/${player.id}`,{
                                method: 'DELETE'
                            }
                            )
                            setPlayers(players.filter((p)=>{p.id !== player.id}))
                            console.log(player.id)
                        }}>Delete</button>
                    </div>
                )
            })}


        </>
    )
}

export default AllPlayers
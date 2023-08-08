import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from "./NavBar"
const BASE_API = " https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b"




const SinglePlayer = () => {
    const [player, setPlayer] = useState(null);
    let { id } = useParams();
    useEffect(() => {
        const getPlayer = async () => {
            const response = await fetch(`${BASE_API}/players/${id}`);
            const data = await response.json();
            const playerInfo = data.data.player;
            setPlayer(playerInfo);
        }
        getPlayer();
    })

    

    return (
        <>
            <NavBar />
            <h1>Puppy Name: {player && player.name}</h1>
            <p>Puppy ID: {player && player.id}</p>
            <p>Puppy Breed: {player && player.breed}</p>
            <p>Puppy Status: {player && player.status}</p>
            <p>Puppyt Team: {player && player.teamId}</p>
        </>
            
      
    )
}

export default SinglePlayer
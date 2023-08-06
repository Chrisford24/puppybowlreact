import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from "./NavBar"
const BASE_API = " https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b"




const SinglePlayer = () =>{
const [player, setPlayer] = useState(null);
let { id } = useParams();
useEffect(()=>{
    const getPlayer = async () => {
        const response = await fetch(`${BASE_API}/players/${id}`);
        const data = await response.json();
        const playerInfo = data.data.player;
        setPlayer(playerInfo);
    }
    getPlayer();
})

    return(
        <>
            <NavBar />
            <h1>{player && player.name}</h1>
        </>
    )
}

export default SinglePlayer
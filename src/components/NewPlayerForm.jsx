import { useState } from 'react'
import NavBar from './NavBar'
const BASE_API = " https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b"


const handleSubmit = async (e) =>{
    
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        console.log(Object.fromEntries(formData.entries()));
        const puppy = Object.fromEntries(formData.entries());
        console.log("this is puppy: " ,puppy)
    
    const response = await fetch(`${BASE_API}/players`, {
        method: form.method,
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name: puppy.name,
            breed: puppy.breed,
            status: puppy.status,
            imageUrl: puppy.imageUrl,
            teamId: parseInt(puppy.teamId),
        }),
    })
    console.log('This is the response: ', response);
}

const NewPlayerForm = () =>{
    const [playerName, setPlayerName ] = useState('');
    const [breed, setBreed ] = useState('');
    const [status, setStatus ] = useState('');
    const [url, setUrl ] = useState('');
    const [team, setTeam ] = useState(''); 

    return(
        <>
            <NavBar />
            <form method="POST" onSubmit={handleSubmit} >
                <input name="name" type="text" placeholder="Enter Name" onChange={(e)=>setPlayerName(e.target.value)}/>
                <input name="breed" type="text" placeholder="Breed" onChange={(e)=> setBreed(e.target.value)}/>
                <select name="status" defaultValue="Field">
                    <option value="field">Field</option>
                    <option value="bench">Bench</option>
                </select>
                <input name="imageUrl" type="url" placeholder="image" onChange={(e)=>setUrl(e.target.value)}/>
                <select  name="teamId" defaultValue="Ruff">
                    <option value="88">Ruff</option>
                    <option value="89">Fluff</option>
                </select>
                <button>Submit</button>
            </form>
        </>
    )
}

export default NewPlayerForm
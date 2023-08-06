const BASE_API = " https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b"

const fetchDataHandler = async () =>{
const response = await fetch(`${BASE_API}/players`);
const result = await response.json();
const players = result.data.players
return players
}

export default fetchDataHandler
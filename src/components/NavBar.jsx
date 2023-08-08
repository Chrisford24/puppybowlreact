import { Link } from 'react-router-dom'

const NavBar = () => {

    return(
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/addPlayer">Add Player</Link>
        </div>
    )
}

export default NavBar
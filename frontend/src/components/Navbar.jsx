import { Link } from "react-router-dom";
import  "../css/Navbar.css"

function Navbar() {
    return <nav className= "navbar">
        <div className="navbar-brand">
            <Link to="/">Book App</Link>
        </div>
        <div className= "navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/lastread" className="nav-link">Last Read</Link>
            <Link to="/aboutme" className="nav-link">About Author</Link>
        </div>
    </nav>
}

export default Navbar;
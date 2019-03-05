import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar =() => {
  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-link">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-link">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-link">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>
     </div>
    </nav>
    )
  
}

export default Navbar;
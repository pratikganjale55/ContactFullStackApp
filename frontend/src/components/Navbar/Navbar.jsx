import React from 'react' ;
import { Link } from 'react-router-dom';
import "./Navbar.css" ;

const Home = () => {
  return (
    <div>
        
        <nav className="navbar ">
            <div className="container navbarContainer">
              <Link to="/" className="navbar-brand mb-0 h1">Contact List</Link>
              <Link to="/message" className="navbar-brand mb-0 h1">Massage List</Link>
            </div>
        </nav>
        
        
    </div>
  )
}

export default Home

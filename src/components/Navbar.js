import React, {useState} from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import {FaReact} from "react-icons/fa"
import {FaBars, FaTimes} from "react-icons/fa"
import {IconContext} from "react-icons/lib"

function Navbar() {
    const [click, setClick] = useState(false);
    const [tripleClickCount, setTripleClickCount] = useState(0);
  
    const handleClick = () => {
      setClick(!click);
  
      if (tripleClickCount === 2) {
        document.body.style.backgroundColor = "yellow";
      } else {
        setTripleClickCount(tripleClickCount + 1);
      }
    };
  
    const closeMobileMenu = () => {
      setClick(false);
      setTripleClickCount(0);
    };


    return(
        <>
        <IconContext.Provider value={{color: "#fff"}}>
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" >
                    <FaReact 
                    className="navbar-icon" 
                    onClick={closeMobileMenu}
                    />
                    Tim React
                </Link>
                {/* Icons open and close navBar */}
                <div className="menu-icon" onClick= {handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                {/* To show active link color */}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => 
                        "nav-links" + (isActive ? " activated" : "")}
                        onClick={closeMobileMenu}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Resume" className={({ isActive }) => 
                        "nav-links" + (isActive ? " activated" : "")}
                        onClick={closeMobileMenu}
                        >
                            Resume
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to="/About" className={({ isActive }) => 
                        "nav-links" + (isActive ? " activated" : "")}
                        onClick={closeMobileMenu}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Contact" className={({ isActive }) => 
                        "nav-links" + (isActive ? " activated" : "")}
                        onClick={closeMobileMenu}
                        >
                            Contact
                        </NavLink>
                    </li>
                   
                </ul>
            </div>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
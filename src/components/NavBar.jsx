import React from "react";
import '../Styles/NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import {Link} from 'react-scroll';




function NavBar(){
  const navRef = useRef();
  
  const showNavBar = () =>{
  navRef.current.classList.toggle('responsive-nav');
  };
  
  return(
    <div>
    <header>
      <div className='logo-container'>
        <h3 className="logo">F</h3>
      </div>
      <nav  ref={navRef}>

            <Link className="link" 
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={40}
              duration={1000}>
              Home
            </Link>
         
            <Link className="link" 
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={1380}
              duration={1500}>
              About
            </Link>
          
            <Link className="link" 
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={110}
              duration={1500}>
              Skills
            </Link>
          
            <Link className="link" 
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={10}
              duration={1500}>
              Projects
            </Link>
          
            <Link className="link" 
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={20}
              duration={1500}>
              Contact
            </Link>
         
        <button className='nav-btn nav-close-button' onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
    </div>
  );
}

export default NavBar;
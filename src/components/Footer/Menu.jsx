import React from "react";
import  { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import '../../Styles/Footer.css';
import {Link} from 'react-scroll';


function Menu(){
    return(
        <>
        <div className='menu-container'>
            <div className='icon-home-container'>
              <div className='icon-home'>
                <AiOutlineHome className='home' />
              </div>
              <div className='home-text'> 
                <Link className='home-link'
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={40}
                duration={1000}>
                  Home
                  </Link>
              </div>
            </div>
            
            <div className='icon-about-container'>
              <div className='icon-about'>
                <FaRegUser className='about' />
              </div>
              <div className='about-text'>
                <Link className='about-link'
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={280}
                duration={1500}>
                  About
                  </Link>
              </div>
            </div>
            
            <div className='icon-project-container'>
              <div className='icon-project'>
                <MdWork className='project' />
              </div>
              <div className='project-text'>
                <Link className='project-link'
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={10}
                duration={1500}>
                Projects
                </Link>
              </div>
            </div>
            
            <div className='icon-contact-container'>
              <div className='icon-contact'>
                <MdOutlinePermPhoneMsg className='contact' />
              </div>
              <div className='contact-text'>
                <Link className='contact-link'
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={20}
                duration={1500}>
                Contact
                </Link>
              </div>
            </div>
        </div>
        </>
    );
}

export default Menu;
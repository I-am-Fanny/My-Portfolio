import React from "react";
import  { AiOutlineHome } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import '../../Styles/Footer.css';


function Menu(){
    return(
        <>
        <div className='menu-container'>
            <div className='icon-home-container'>
              <div className='icon-home'>
                <AiOutlineHome className='home' />
              </div>
              <div className='home-text'>
                <a href='/#' className='home-link'>Home</a>
              </div>
            </div>
            
            <div className='icon-about-container'>
              <div className='icon-about'>
                <FaRegUser className='about' />
              </div>
              <div className='about-text'>
                <a href='/#' className='about-link'>About</a>
              </div>
            </div>
            
            <div className='icon-project-container'>
              <div className='icon-project'>
                <MdWork className='project' />
              </div>
              <div className='project-text'>
                <a href='/#' className='project-link'>Projects</a>
              </div>
            </div>
            
            <div className='icon-contact-container'>
              <div className='icon-contact'>
                <MdOutlinePermPhoneMsg className='contact' />
              </div>
              <div className='contact-text'>
                <a href='/#' className='contact-link'>Contact</a>
              </div>
            </div>
        </div>
        </>
    );
}

export default Menu;
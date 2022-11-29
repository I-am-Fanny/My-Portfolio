import React from "react";
import Menu from './Menu';
import '../../Styles/Footer.css';
import twitterLink from '../../img/twitter.png';
import githubLink from '../../img/github.png';
import linkedinLink  from '../../img/linkedin.png';
import { BsFillSuitHeartFill } from 'react-icons/bs';


function Footer(){ 
    return(
        
        <div className='footer-container'>
            <Menu />
            <div className='social-media-container'>
                <a href='https://twitter.com/FannyApablaza' target="_blank" rel="noopener noreferrer" className='social-link-twitter'>
                    <img src={twitterLink} alt='twitter link' className='footer-twitter' />
                </a>
                <a href='https://github.com/I-am-Fanny' target="_blank" rel="noopener noreferrer" className='social-link-github' >
                    <img src={githubLink} alt='github link' className='footer-github' />
                </a>
                <a href='https://www.linkedin.com/in/fannyapablaza/' target="_blank" rel="noopener noreferrer" className='social-link-linkedin'>
                    <img src={linkedinLink} alt='linkedin link' className='footer-linkedin'  />
                </a>
                
            </div>
            <div className='line-container'>
                <div className='line'/>
            </div>
            <div className='final-text-container'>
                <p className='final-text'>Designed and developed with <BsFillSuitHeartFill  className='final-icon' /> by Fanny Apablaza</p>
            </div>
                  
            </div>
        
    );
}

export default Footer;

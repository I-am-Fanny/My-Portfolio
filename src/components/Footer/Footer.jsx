import React from "react";
import Menu from './Menu';
import '../../Styles/Footer.css';
import twitterLink from '../../img/twitter.png';
import githubLink from '../../img/github.png';
import linkedinLink  from '../../img/linkedin.png';
import { BsFillSuitHeartFill } from 'react-icons/bs'


function Footer(){ 
    return(
        <>
        <div className='footer-container'>
            <Menu />
            <div className='social-media-container'>
                <a href='/#' className='social-link-twitter'>
                    <img src={twitterLink} alt='twitter link' />
                </a>
                <a href='/#' className='social-link-github'>
                    <img src={githubLink} alt='github link' />
                </a>
                <a href='/#' className='social-link-linkedin'>
                    <img src={linkedinLink} alt='linkedin link' />
                </a>
            </div>
            <div className='line-container'>
                <div className='line'/>
            </div>
            <div className='final-text-container'>
                <p className='final-text'>Designed and developed with <BsFillSuitHeartFill  className='final-icon' /> by Fanny Apablaza</p>
            </div>
        </div>
        </>
    );
}

export default Footer;
import React from "react";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import '../../Styles/Contact.css';



function Info(){
    return(
        <>
        <div className='info-frame'>
          <p className='info-title'>Connect with me</p>
          <p className='info-text'>I'm very approachable and would love to speak to you. Feel free to call me, send me an email, a message or follow me in Github and Linkedin.</p>
          <section className='info-frame-container'>
            <div className='phone-container'>
              <div className='phone-icon'>
                <BsFillTelephoneFill className='phone' />
              </div>
              <p className='phone-text'>+541160081306</p>
            </div>
            <div className='email-container'>
              <div className='email-icon'>
                <MdEmail className='email'/>
              </div>
              <p className='email-text'>fannyapablaza7@gmail.com</p>
              
            </div>
          </section>
        </div>
        </>
    );
}

export default Info;
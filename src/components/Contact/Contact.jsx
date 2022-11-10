import React from "react";
import '../../Styles/Contact.css';
import Social from './Social';
import Info from './Info';
import girlAndClock from '../../img/girl-clock.png';
import diamond from '../../img/diamond-footer.png';


function Contact(){
    return(
        <>
          <article className='general-contact-container' id="contact">
            <section className='frame-contact-container'>
              <div className='image-girl-container'>
                <img src={girlAndClock} alt='a girl on the clock' className='girl-clock' />
              </div>
              <div className='info-contact'>
                <div className='frame-contact '>
                  <div className='social-media'>

                    <Social
                    social='github'
                    web='https://github.com/I-am-Fanny'
                    name='Github'
                    logo='github'/>
                    <Social
                    social='linkedin'
                    web='https://www.linkedin.com/in/fannyapablaza/'
                    name='LinkedIn'
                    logo='linkedin' />
                    <Social
                    social='gmail'
                    web='mailto:fannyapablaza7@gmail.com'
                    name='Gmail'
                    logo='gmail' />
                    <Social
                    social='skype'
                    web='https://join.skype.com/invite/iRpfzTb9ezcn'
                    name='Skype'
                    logo='skype' />
                    <Social
                    social='whatsapp'
                    web='https://walink.co/229338' 
                    name='WhatsApp'
                    logo='whatsapp' />
                    <Social
                    social='twitter'
                    web='https://twitter.com/FannyApablaza'
                    name='Twitter'
                    logo='twitter'/>
                  </div>
                  <Info />
                </div>
              </div>
              <div className='diamond-container'>
                <div className='diamond-frame'>
                  <div className='diamond-image'>
                    <img src={diamond} alt='diamond' className='diamond' />
                  </div>
                </div>
              </div>
            </section>
          </article>
        </>
    );
}

export default Contact;
import React from "react";
import '../../Styles/Contact.css';



function Social({ name, logo, social, web }){
    return(
          <div className={social}>
            <div className='social-frame'>
              <p className='logo-name'>
                <a href={web} target='_blank' rel="noopener noreferrer" className='website-link'>{name}</a>
              </p>
              <img
              className='logo-image'
              src={require(`../../img/logo-${logo}.png`)}  
              alt={`Logo of ${name}`} />
            </div>
        </div>
        
    );
}

export default Social;
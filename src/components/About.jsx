import React from "react";
import thirdImage from '../img/third-image.png';
import bgCircle from '../img/bg-circle.png';
import fourthImage from '../img/fourth-image.png';
import '../Styles/About.css';

function About(){
  return(
    <div id="about">
    
    <article className='general-container'>
    <section className="background-radial"/>
    <img className='fourth-image' src={fourthImage} alt='diamons' />
      <section className='about-container' id="about">
        <div className='info-container'>
          <p className='title-about'>About me</p>
          <p className='text-about'>I'm a front-end developer located in Argentina. I have recently completed a front-end development degree. I am passionate about designing simple things with a good user experience. 
          I consider myself a well-organized person, independent, and extremely curious.</p>
          <img className='third-image' src={thirdImage} alt='girl' />
        </div>
      </section>
      
      <img className='bg-circle' src={bgCircle} alt='circles' />
      
      <img className='fourth-image' src={fourthImage} alt='diamons' />
    </article>
    </div>
  );

}

export default About;
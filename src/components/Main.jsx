import React from "react";
import '../Styles/Main.css';
import firstImage from '../img/first-image.png';
import secondImage from '../img/second-image.png';


function Main(){
   return(
    <div className='home-container' id="home">
    <div className='first-image-container'>
        <img className='first-image' src={firstImage} alt='planet' />
    </div>
    <main className='main'>
        <h1 className='title-main'>Hi, I'm</h1>
        <h2 className='text-main'>Fanny Apablaza Frontend Developer</h2>
        <section className='buttons-container'>
            
            <button className='first-button'>
                <a  href='https://drive.google.com/file/d/18TvFnUZ7Cr2MqwzQ4DogffH3YIGya85Q/view?usp=share_link' target='_blank' rel="noopener noreferrer" download='Apablaza-Fanny-CV.pdf' className='text-first-button'>Download CV</a>
                </button>
        </section>
    </main>
    <div className='second-image-container'>
        <img className='second-image' src={secondImage} alt='galaxy' />
    </div>
    </div>
    

   )
}

export default Main;
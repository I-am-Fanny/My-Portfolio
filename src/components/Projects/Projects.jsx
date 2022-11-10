import React from "react";
import '../../Styles/Projects.css';
import seventhImage from '../../img/seventh-image.png';
import tenthImage from '../../img/tenth-image.png'; 
import Websites from "./Websites";

function Projects(){
    return(
        <>
        <article className='projects-container' id="projects">
            <section className=''>
            <div className='title-project-container'>
                <p className='title-project'>Here are a some projects. See more on <a className='link-projects' href='https://github.com/I-am-Fanny'>Github</a></p>
            </div>
            <img className='seventh-image' src={seventhImage} alt='' />
                <img className='tenth-image' src={tenthImage} alt='' />
            </section>
            <section className='websites-container'>
              <Websites
              text='A to-do app for people to organize their day.Created with React.js, JSX and CSS.'
              title='Task-App'
              repository='https://github.com/I-am-Fanny/TO-DO--APP.git'
              website='https://to-do-fanny.netlify.app/' />
              <Websites
              text='Basic calculator created with React.js, JSX, and CSS.' 
              title='Calculator'
              repository='https://github.com/I-am-Fanny/React-Calculator.git'
              website='https://react-calculator-fanny.netlify.app/' />
              <Websites
              text='Basketball ecommerce created with HTML, CSS and JavaScript.'
              title='Ecommerce'
              repository='https://github.com/I-am-Fanny/Ecommerce-Encestalo-JavaScript.git'
              website='https://encestalo-ecommerce.netlify.app/' />
              <Websites
              text='Test your speed with a click counter created with React.js, JSX and CSS.'
              title='Click-Counter'
              repository='https://github.com/I-am-Fanny/Click-Counter.git'
              website='https://click-counter-fanny.netlify.app/' />
              <Websites
              text='Fully functional timer created with HTML, CSS and JavaScript.'
              title='Timer'
              repository= 'https://github.com/I-am-Fanny/Timer-JS.git'
              website= 'https://i-am-fanny.github.io/Timer-JS/' />
              <Websites
              text='A page to get started as a digital nomad. Created with HTML and CSS.'
              title='RemoteMind'
              repository='https://github.com/I-am-Fanny/Firts-Repository-HTML-CSS.git'
              website='https://remotemind.netlify.app/' />
            </section>
        </article>
        </>
    );
}

export default Projects;
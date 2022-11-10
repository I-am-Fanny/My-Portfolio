import React from "react";
import '../../Styles/Skills.css'
import bgBigCircle from '../../img/bg-big-circle.png';
import fifthImage from '../../img/fifth-image.png';
import sixthImage from '../../img/sixth-image.png';
import Tools from "./Tools";
import { Outlet } from "react-router-dom";

function Skills(){
 return(
    <>
    <article className='general-skill-container' id="skills">
        <img className='bg-big-circle' src={bgBigCircle} alt='circle' />
        <section className='frame-container'>
            
            <div className='skill-container'>
                <main className='rectangle' />
                <div className='title-skill-container'>
                    <p className='title-skill'>Skills & Tools</p>
                </div>
                <div className='tool-container'>
                    <Tools 
                    name='react'
                    image='react' />
                    
                    <Tools
                    name='node'
                    image='node' />
                    
                    <Tools
                    name='npm'
                    image='npm' />
                    
                    <Tools
                    name='javascript'
                    image='javascript' />
                    
                    <Tools
                    name='git'
                    image='git' />
                    
                    <Tools
                    name='github'
                    image='github' />
                    
                    <Tools
                    name='html'
                    image='html' />
                    
                    <Tools
                    name='boostrap'
                    image='boostrap' />
                    
                    <Tools
                    name='visual'
                    image='visual' />
                    
                    <Tools
                    name='figma'
                    image='figma' />
                    
                    <Tools
                    name='css'
                    image='css' />
                    
                    <Tools
                    name='sass'
                    image='sass' />
                
                </div>
                    <img className='fifth-image' src={fifthImage} alt='diamond' />
                    <img className='sixth-image' src={sixthImage} alt='astronaut girl' />
                </div>
        </section>
        <Outlet />
    </article>
    
    </>
 )
}

export default Skills;
import React from "react";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";



function App() {
  return (
    <React.Fragment className='app-container'>
    <NavBar />
    <Main id='main'/>
    <About id='about' />
    <Skills id='skills' />
    <Projects id='projects' />
    <Contact id='contact' />
    <Footer />
    </React.Fragment>
    
  );
}

export default App;

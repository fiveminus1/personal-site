import React from 'react';
import TypingComponent from './components/TypingComponent.js';
import AboutMe from './components/AboutMe.js';
import Contact from './components/Contact.js';
import './App.css';


function App() {
  return (
    <>
    <div className="App">
        <TypingComponent />
        <AboutMe />
        <Contact />
    </div>
    </>  
);
}

export default App



import React from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Hobbies from './Hobbies';
import '../stylesheets/App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Hobbies />
      </main>
      <footer>
        <p>Mercedes Carballal Copyright © 2020</p>
      </footer>
    </div>
  );
}

export default App;

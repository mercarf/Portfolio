import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import '../stylesheets/App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <main>
        <Projects />
        <Skills />
        <AboutMe />
      </main>
      <footer>
        <p>Mercedes Carballal Copyright © 2020</p>
      </footer>
    </div>
  );
}

export default App;

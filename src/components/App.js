import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
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
      <Footer />
    </div>
  );
}

export default App;

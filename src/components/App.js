import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import ContactMe from './ContactMe/ContactMe';
import '../stylesheets/App.scss';

function App() {
  return (
    <div className='App'>
      {/* <div className="containerBG">
        <ul className="cuadrados">
          <li></li>
          <li></li>
          <li></li>
          <li></li>/
        </ul>
      </div> */}
      <Header />
      <Hero />
      <main>
        <Projects />
        <Skills />
        <AboutMe />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;

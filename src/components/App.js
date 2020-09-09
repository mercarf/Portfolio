import React from 'react';
import '../stylesheets/App.css';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <p>Hola mundo</p>
      </header>
      <main>
        <h2>Home</h2>
        <ul>
          <li>Sobre mí/About me</li>
          <li>Habilidades/Skills</li>
          <li>Proyectos/Projects</li>
          <li>Experiencia/Experience</li>
          <li>Aficiones/Hobbies</li>
        </ul>
        <h2>Sobre mí/About me</h2>
        <p>bla bla bla</p>
        <h2>Habilidades/Skills</h2>
        <ul>
          <li>Tecnologias/Technologies</li>
          <li>Herramientas/Tools</li>
          <li>Habilidades blandas/Soft Skills</li>
        </ul>
        <h2>Proyectos/Projects</h2>
        <p>bla bla bla</p>
        <h2>Experiencia/Experience</h2>
        <p>bla bla bla</p>
        <h2>Aficiones/Hobbies</h2>
        <p>bla bla bla</p>
      </main>
      <footer>
        <p>Mercedes Carballal Copyright © 2020</p>
      </footer>
    </div>
  );
}

export default App;

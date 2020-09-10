import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className='menu'>
        <div className='bracket-left'>[</div>
        <nav className='nav'>
          <ul className='nav-list'>
            <li>
              <a href='#' title='Ir a Sobre mí'>
                Sobre mí/About me
              </a>
            </li>
            <li>
              <a href='#' title='Habilidades'>
                Habilidades/Skills
              </a>
            </li>
            <li>
              <a href='#' title='Ir a Proyectos'>
                Proyectos/Projects
              </a>
            </li>
            <li>
              <a href='#' title='Ir a Experiencia'>
                Experiencia/Experience
              </a>
            </li>
            <li>
              <a href='#' title='Ir a Aficionesí'>
                Aficiones/Hobbies
              </a>
            </li>
          </ul>
        </nav>
        <div className='bracket-right'>]</div>
      </div>
    </header>
  );
};

export default Header;

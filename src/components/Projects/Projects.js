import React from 'react';
import Project from '../Project/Project';
import portfolio from '../../assets/images/portfolio.PNG';
import rickymorty from '../../assets/images/rickymorty.PNG';
import pokedex from '../../assets/images/pokedex.PNG';
import serie from '../../assets/images/serie.PNG';
import numero from '../../assets/images/numero.PNG';
import smile from '../../assets/images/smile.PNG';
import quinteto from '../../assets/images/quinteto.PNG';
import gryffincode from '../../assets/images/gryffincode.PNG';
import zodiaco from '../../assets/images/zodiaco.PNG';


const Projects = () => {

  
  return (
    <section className='projects' id="projects">
      <h2 className="projects__title">Proyectos</h2>
      <ul className="projects__list">
        <li className="projects__list__pro">
      <Project imgProject={portfolio} title="Portfolio" tecnologies="HTML,SASS,JS,React" linkWeb="mercarf.github.io/portfolio/" linkRepo="https://github.com/mercarf/Portfolio" altProject="imagen del Portfolio"/>
        </li>
        <li className="projects__list__pro">
      <Project imgProject={rickymorty} title="Buscador de Personajes" tecnologies="HTML,SASS,JS,React" linkWeb="http://beta.adalab.es/modulo-3-evaluacion-final-mercarf/#/" linkRepo="https://github.com/mercarf/Rick-y-Morty-buscador-de-personajes" altProject="imagen del proyecto Buscador de personajes de Rick y Morty"/>
        </li>
        <li className="projects__list__pro">
      <Project imgProject={pokedex} title="Pokedex" tecnologies="HTML,SASS,JS,React" linkWeb="http://beta.adalab.es/modulo-3-evaluacion-intermedia-mercarf/" linkRepo="https://github.com/mercarf/Pokedex" altProject="imagen del proyecto Buscador de personajes de Rick y Morty"/>
        </li>
        <li className="projects__list__pro">
      <Project imgProject={serie} title="Buscador de Series" tecnologies="HTML,SASS,JS" linkWeb="http://beta.adalab.es/modulo-2-evaluacion-final-mercarf/" linkRepo="https://github.com/mercarf/Serie-Addict" altProject="imagen del proyecto Buscador de series"/>
        </li>
        <li className="projects__list__pro">
      <Project imgProject={numero} title="Adivina el número" tecnologies="HTML,SASS,JS" linkWeb="https://mercarf.github.io/Adivina-el-numero/" linkRepo="https://github.com/mercarf/Adivina-el-numero" altProject="imagen del juego Adivina el número"/>
        </li>
        <li className="projects__list__pro">
      <Project imgProject={smile} title="Adivina el número" tecnologies="HTML,SASS,JS" linkWeb="mercarf.github.io/smile-or-not/" linkRepo="https://github.com/mercarf/Smile-or-not" altProject="imagen de Sonríe o no"/>
        </li>
        <li className="projects__list__pro">
      <Project imgProject={zodiaco} title="Gryffincode" tecnologies="HTML,CSS,JS,React" linkWeb="http://beta.adalab.es/project-j-module-3-team-4/#/" linkRepo="https://github.com/Adalab/project-j-module-3-team-4" altProject="imagen del proyecto Gryffincode"/>
        </li>
        <li className="projects__list__pro">
      <Project imgProject={gryffincode} title="Gryffincode" tecnologies="HTML,CSS,JS" linkWeb="http://beta.adalab.es/project-promo-j-module-2-team-2-morning/" linkRepo="https://github.com/Adalab/project-promo-j-module-2-team-2-morning" altProject="imagen del proyecto Gryffincode"/>
        </li>
        <li className="projects__list__pro">
      <Project imgProject={quinteto} title="Quinteto de $sudo" tecnologies="HTML,CSS" linkWeb="http://beta.adalab.es/project-promo-j-module-1-team-4/" linkRepo="https://github.com/Adalab/project-promo-j-module-1-team-4" altProject="imagen del proyecto Quinteto de Sudo"/>
        </li>
      </ul>
    </section>
  );
};

export default Projects;

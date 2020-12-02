import React from 'react';
import Project from '../Project/Project';
import quinteto from '../../assets/images/close bracket.png';


const Projects = () => {

  
  return (
    <section className='projects'>
      <h2>Proyectos/Projects</h2>
      <ul>
        <li>
      <Project imgProject={quinteto} title="Quinteto" tecnologies="HTML,CSS" linkWeb="#" linkRepo="#" altProject="imagen del proyecto Quinteto de Sudo"/>
        </li>
      </ul>
    </section>
  );
};

export default Projects;

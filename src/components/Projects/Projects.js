import React from 'react';
import Project from '../Project/Project';
import portfolio from '../../assets/images/portfolio.PNG';
import js30 from '../../assets/images/js30.PNG';
import rickymorty from '../../assets/images/rickymorty.PNG';
import pokedex from '../../assets/images/pokedex.PNG';
import serie from '../../assets/images/serie.PNG';
import numero from '../../assets/images/numero.PNG';
import smile from '../../assets/images/smile.PNG';
import anonymous from '../../assets/images/anonymous.PNG';
import quinteto from '../../assets/images/quinteto.PNG';
import gryffincode from '../../assets/images/gryffincode.PNG';
import zodiaco from '../../assets/images/zodiaco.PNG';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className='projects__title'>Proyectos</h2>
      <p className='projects__text'>
        {' '}
        Estos son algunos de los pequeños proyectos que he ido desarrollando
      </p>
      <ul className='projects__list'>
        <li className='projects__list__pro'>
          <Project
            imgProject={portfolio}
            title='Portfolio'
            tecnologies='HTML | SASS | JS | React'
            linkWeb='mercarf.github.io/portfolio/'
            linkRepo='https://github.com/mercarf/Portfolio'
            altProject='imagen del Portfolio'
            info="Página web que estás viendo ahora mismo"
          />
        </li>
        <li className='projects__list__pro'>
          <Project
            imgProject={js30}
            title='JavaScript30 Challenges'
            tecnologies='HTML | SASS | JS'
            linkWeb='https://mercarf.github.io/JavaScript30/'
            linkRepo='https://github.com/mercarf/JavaScript30'
            altProject='imagen de 30 retos JavaScript'
            info="Varios retos de Wesbos con JavaScript personalizados a mi gusto"
          />
        </li>
        <li className='projects__list__pro'>
          <Project
            imgProject={rickymorty}
            title='Buscador de Personajes'
            tecnologies='HTML | SASS | JS | React'
            linkWeb='https://mercarf.github.io/Rick-y-Morty-Buscador-personajes/#/'
            linkRepo='https://github.com/mercarf/Rick-y-Morty-Buscador-personajes'
            altProject='imagen del proyecto Buscador de personajes de Rick y Morty'
            info="Aplicación web responsive con un listado de personajes ordenados por nombre,filtros y mas informacion al hacer pinchar sobre ellos."
          />
        </li>
        <li className='projects__list__pro'>
          <Project
            imgProject={pokedex}
            title='Pokedex'
            tecnologies='HTML | SASS | JS | React'
            linkWeb='https://mercarf.github.io/Pokedex/'
            linkRepo='https://github.com/mercarf/Pokedex'
            altProject='imagen del proyecto Buscador de personajes de Rick y Morty'
            info="Listado de pokemon obtenido a traves de un archivo '.json'"
          />
        </li>
        <li className='projects__list__pro'>
          <Project
            imgProject={serie}
            title='Buscador de Series'
            tecnologies='HTML | SASS | JS'
            linkWeb='https://mercarf.github.io/Serie-Addict/'
            linkRepo='https://github.com/mercarf/Serie-Addict'
            altProject='imagen del proyecto Buscador de series'
            info="Aplicación web para buscar series que nos permite guardarlas en favoritos, eliminarlas y usar el local storage para recordar tus preferencias"
          />
        </li>
        <li className='projects__list__pro'>
          <Project
            imgProject={numero}
            title='Adivina el número'
            tecnologies='HTML | SASS | JS'
            linkWeb='https://mercarf.github.io/Adivina-el-numero/'
            linkRepo='https://github.com/mercarf/Adivina-el-numero'
            altProject='imagen del juego Adivina el número'
            info="Juego en el que hay que adivinar un número aleatorio entre 1 y 100 con ayuda de pistas y un contador que lleva la cuenta de los intentos"
          />
        </li>
        <li className='projects__list__pro'>
          <Project
            imgProject={smile}
            title='Sonríe, o no'
            tecnologies='HTML | SASS | JS'
            linkWeb='https://mercarf.github.io/Smile-or-not/'
            linkRepo='https://github.com/mercarf/Smile-or-not'
            altProject='imagen de Sonríe o no'
            info="Mis inicios con JS para practicar la actualización del DOM al seleccionar un estado de ánimo"
          />
        </li>
        <li className='projects__list__pro'>
          <Project
            imgProject={anonymous}
            title='Anonymous Proxy'
            tecnologies='HTML | CSS'
            linkWeb='https://mercarf.github.io/Anonymous-proxy/'
            linkRepo='https://github.com/mercarf/Anonymous-proxy'
            altProject='imagen de la pagina Anonymous proxy'
            info="Página web desarrollada a partir de un diseño dado en Zeplin"
          />
        </li>
      </ul>
      <h2 className='projects__title'>Proyectos grupales</h2>
      <ul className='projects__list'>
        <li className='projects__list__pro'>
          <Project
            imgProject={zodiaco}
            title='Zodiac Team'
            tecnologies='HTML | CSS | JS | React'
            linkWeb='https://mercarf.github.io/Refactorizar-Zodiac-Team/#/'
            linkRepo='https://github.com/mercarf/Refactorizar-Zodiac-Team'
            altProject='imagen del proyecto Gryffincode'
            info="Proyecto de refactorización de una aplicación web con código heredado"
          />
        </li>
        <li className='projects__list__pro'>
          <Project
            imgProject={gryffincode}
            title='Gryffincode'
            tecnologies='HTML | CSS | JS'
            linkWeb='https://conchaasensio.github.io/project-promo-j-module-2-team-2-morning/'
            linkRepo='https://github.com/mercarf/Gryffincode'
            altProject='imagen del proyecto Gryffincode'
            info="Aplicación web que permite generar tu propia tarjeta de presentación personalizada y compartirla en Twitter"
          />
        </li>
        <li className='projects__list__pro'>
          <Project
            imgProject={quinteto}
            title='Quinteto de $sudo'
            tecnologies='HTML | CSS'
            linkWeb='https://mercarf.github.io/Quinteto-de-sudo/'
            linkRepo='https://github.com/mercarf/Quinteto-de-sudo'
            altProject='imagen del proyecto Quinteto de Sudo'
            info="Página web responsive diseñada para promocionar a potenciales clientes un equipo de personas"
          />
        </li>
      </ul>
    </section>
  );
};

export default Projects;

import React from 'react';
import myself from '../../assets/images/Mercedes.jpg';

const AboutMe = () => {
  return (
    <section className='aboutMe' id="aboutMe">
      <h2>Sobre mí</h2>
      <img src={myself} width="200px"/>
      <p>Mi nombre es <strong>Mercedes</strong> y soy <strong>desarrolladora front-end</strong>.
      Hace unos años me formé como ingeniero técnico topógrafo. 
      Trabajé durante unos cuantos años diseñando el despliegue de fibra óptica (FTTH).
      Siempre me han apasionado las tecnologías y el mundo digital y por eso he realizado cursos de delineado, diseño gráfico y el más reciente un programa de desarrollo Front End con Adalab donde me he formado para poder aportar mi inquietud y motivación en el proceso de desarrollo.

      </p>

    </section>
  );
};

export default AboutMe;

import React from 'react';
import Experience from './Experience/Experience';
import Hobbies from './Hobbies/Hobbies';
import myself from '../../assets/images/Mercedes.jpg';


const AboutMe = () => {
  return (
    <section className='aboutMe' id="aboutMe">
      <h2 className="aboutMe__title">Sobre mí</h2>
      <div className="aboutMe__imgCont">
        <img className="aboutMe__imgCont__img" src={myself} width="200px"/>
      </div>
      <div className="aboutMe__textCont">
        <p className="aboutMe__textCont__text">Mi nombre es <strong>Mercedes</strong> y soy <strong>desarrolladora Front End</strong>.
        Hace unos años me formé como <strong>ingeniero técnico topógrafo</strong>.
        Trabajé durante unos cuantos años <strong>diseñando</strong> el despliegue de fibra óptica <strong>(FTTH)</strong>.
        Siempre me han apasionado las tecnologías y el mundo digital y por eso he realizado cursos de delineado, diseño gráfico y el más reciente un programa de <strong>desarrollo Front End con Adalab</strong> donde me he formado para poder aportar mi inquietud y motivación en el proceso de desarrollo.
        </p>
      </div>
      <div>
        <Experience/>
        <Hobbies/>
      </div>

    </section>
  );
};

export default AboutMe;

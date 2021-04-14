import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Hobbies from './Hobbies/Hobbies';
import myself from '../../assets/images/Mercedes.jpg';


const AboutMe = () => {
  return (
    <section className='aboutMe' id="aboutMe">
      <h2 className="aboutMe__title">Sobre mí</h2>
      <div className="aboutMe__desc">
        <div className="aboutMe__desc__imgCont">
          <img className="aboutMe__desc__imgCont__img" src={myself} width="200px" />
        </div>
        <div className="aboutMe__desc__contentText">
          <p className="aboutMe__desc__contentText__text">Soy muy <strong>alegre, positiva y empática</strong>, habituada a <strong>trabajar en equipo</strong> y
          crear un buen ambiente de confianza. Me <strong>adapto</strong> muy bien a los cambios y, como buena ingeniera, también soy muy concienzuda,
          <strong> organizada</strong> y perfeccionista en todo lo que hago. Una persona <strong>perseverante</strong> y con <strong>motivación</strong> que
          le gusta <strong>resolver problemas</strong> y afrontar nuevos retos, y por eso mismo me encanta <strong>aprender cosas nuevas</strong> y aplicarlas
          para obtener mejores resultados.
          </p>
          <p className="aboutMe__desc__contentText__text">Si quieres saber más sobre mí pincha en los link de aquí abajo 😊</p>
        </div>
      </div>

      <ul className="aboutMe__menu">
        <li>
          <Link to='/aboutMe/experience' className="Link">Experiencia</Link>
        </li>
        <li>
          <Link to='/aboutMe/hobbies' className="Link">Aficiones</Link>
        </li>
        <li>
          <Link to='/aboutMe/education' className="Link">Educación</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/aboutMe/hobbies' render={Hobbies} />
        <Route path='/aboutMe/experience' render={Experience} />
        <Route path='/aboutMe/education' render={Education} />

      </Switch>

    </section >
  );
};

export default AboutMe;

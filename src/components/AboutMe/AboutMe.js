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
      <div className="aboutMe__imgCont">
        <img className="aboutMe__imgCont__img" src={myself} width="200px" />
      </div>
      <div className="aboutMe__textCont">
        <p className="aboutMe__textCont__text">Mi nombre es <strong>Mercedes</strong> y soy <strong>desarrolladora Front End</strong>.
        Hace unos años me formé como <strong>ingeniera técnica topógrafa</strong>.
        Trabajé durante unos cuantos años <strong>diseñando</strong> el despliegue de fibra óptica <strong>(FTTH)</strong> para diversas compañías de ámbito nacional e internacional.
        Siempre me han apasionado las tecnologías y el mundo digital y por eso sigo estudiando y formándome por mi cuenta, realizando cursos y de manera autodidacta. Si te interesa saber más.. ¡sigue avanzando hacia mi experiencia y hobbies!.
        </p>
      </div>

      <ul className="aboutMe__menu">
        <li>
          <Link to='/aboutMe/hobbies' className="Link">Aficiones</Link>
        </li>
        <li>
          <Link to='/aboutMe/experience' className="Link">Experiencia</Link>
        </li>
        <li>
          <Link to='/aboutMe/education' className="Link">Educación</Link>
        </li>
      </ul>
      <Route
        exact
        path='/'
        render={() => (<Hobbies />)} />
      <Switch>
        <Route path='/aboutMe/hobbies' render={Hobbies} />
        <Route path='/aboutMe/experience' render={Experience} />
        <Route path='/aboutMe/education' render={Education} />

      </Switch>

    </section >
  );
};

export default AboutMe;

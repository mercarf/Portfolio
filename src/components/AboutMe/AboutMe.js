import React from 'react';
import Experience from './Experience/Experience';
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
      <div>
        <Experience />
        <Hobbies />
      </div>

    </section>
  );
};

export default AboutMe;

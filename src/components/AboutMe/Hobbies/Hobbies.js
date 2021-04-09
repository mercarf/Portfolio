import React from 'react';
import books from '../../../assets/images/books.jpg';
import paint from '../../../assets/images/pintura1.jpg';
import digital from '../../../assets/images/digital3.jpg';
import family from '../../../assets/images/family.jpg';
import nature from '../../../assets/images/nature.jpg';

const Hobbies = () => {
  return (
    <section className='hobbies'>
      <h2 className="hobbies__title">Aficiones</h2>
      <div className="hobbies__container">
        <div className="hobbies__container__box">
          <div className="hobbies__container__box__img">
            <img src={family} alt="imagen familia" />
          </div>
          <h4 className="hobbies__container__box__title">Familia</h4>
          <ul className="hobbies__container__box__title__list">
            <li>Disfrutar</li>
            <li>Jugar</li>
            <li>Reír</li>
            <li>Amar</li>
            <li>Enseñar</li>
            <li>Aprender</li>
          </ul>
          <div className="box-hover">
            <p className="box-hover__text">Familia es donde el corazón vive, tus memorias existen, tu risa es plena y tu alma está a salvo.</p>
          </div>
        </div>
        <div className="hobbies__container__box">
          <div className="hobbies__container__box__img">
            <img src={books} alt="imagen libro" />
          </div>
          <h4 className="hobbies__container__box__title">Lectura</h4>
          <ul className="hobbies__container__box__title__list">
            <li>Ciencia Ficción</li>
            <li>Aventura</li>
            <li>Histórico</li>
            <li>Terror</li>
            <li>Suspense</li>
          </ul>
          <div className="box-hover">
            <p className="box-hover__text">"Cuando aprendas a leer serás libre para siempre" <br /><br /><span>Frederick Douglass</span></p>
            <p className="box-hover__text">"Un libro es el arma más efectiva contra la intolerancia e ignorancia" <br /><br /><span>Lyndon Baines Johnson</span></p>
          </div>
        </div>
        <div className="hobbies__container__box">
          <div className="hobbies__container__box__img">
            <img src={paint} alt="imagen pintura" />
          </div>
          <h4 className="hobbies__container__box__title">Pintura</h4>
          <ul className="hobbies__container__box__title__list">
            <li>Lienzos óleo/acrílico</li>
            <li>Lettering</li>
            <li>Mano alzada</li>
          </ul>
          <div className="box-hover">
            <p className="box-hover__text">"El arte es sobre todo un estado del alma" <br /><br /><span>Pablo Picasso</span></p>
            <p className="box-hover__text">"El arte es la expresión de los más profundos pensamientos por el camino más sencillo" <br /><br /><span>Albert Einstein</span></p>
          </div>
        </div>
        <div className="hobbies__container__box">
          <div className="hobbies__container__box__img">
            <img src={digital} alt="imagen ordenador, teclado y cámara de fotos" />
          </div>
          <h4 className="hobbies__container__box__title">Digital</h4>
          <ul className="hobbies__container__box__title__list">
            <li>Programación</li>
            <li>Diseño Gráfico</li>
            <li>Fotografía</li>
            <li>Edición</li>
          </ul>
          <div className="box-hover">
            <p className="box-hover__text">"En la era digital, lo más prudente es atreverse" <br /><br /><span>Shimon Peres</span></p>
            <p className="box-hover__text">"Una persona que nunca cometió un error, nunca intentó algo nuevo" <br /><br /><span>Albert Einstein</span></p>
          </div>
        </div>
        <div className="hobbies__container__box">
          <div className="hobbies__container__box__img">
            <img src={nature} alt="imagen pintura" />
          </div>
          <h4 className="hobbies__container__box__title">Naturaleza</h4>
          <ul className="hobbies__container__box__title__list">
            <li>Rutas</li>
            <li>Paseos</li>
            <li>Montaña</li>
            <li>Mar</li>
            <li>Aire</li>
            <li>Nieve</li>
          </ul>
          <div className="box-hover">
            <p className="box-hover__text">"La tierra ofrece lo suficiente para satisfacer las necesidades de todos, pero no la codicia de algunos" <br /><br /><span>Mahatma Gandhi</span></p>
          </div>
          <div className="box-hover"></div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;

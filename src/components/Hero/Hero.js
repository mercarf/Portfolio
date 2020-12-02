import React, { useState, useEffect } from 'react';
import Links from '../Links/Links';

const adjectives = [
  'alegre',
  'positiva',
  'empática',
  'perseverante',
  'motivada',
  'trabajadora',
  'resolutiva',
  'organizada',
  'de confianza',
];

const Hero = () => {
  const [adjectivesIndex, setAdjectivesIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setAdjectivesIndex((adjectivesIndex) =>
        adjectivesIndex === 8 ? 0 : adjectivesIndex + 1
      );
    }, 1500);
  }, []);

  return (
    <section className='hero'>
      <div className="hero__container">
      <h2 className='hero__container__title'>
        ¡Hola!
      </h2>
      <p className='hero__container__title'>Soy</p>
      <p className='hero__container__name'>Mercedes Carballal,</p>
      <p className='hero__container__title'>una persona <span className='hero__container__adjectives'>{adjectives[adjectivesIndex]}</span> </p>
      
      <p className='hero__container__title'>y desarrolladora <span className="hero__container__title__job">front-end</span> </p>{' '}
      </div>
      <Links />
    </section>
  );
};

export default Hero;

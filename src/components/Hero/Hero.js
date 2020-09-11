import React, { useState, useEffect } from 'react';
import './hero.scss';

const adjectives = [
  'maravillosa',
  'fantástica',
  'increíble',
  'fabuloso',
  'prodigiosa',
  'magnífica',
  'admirable',
  'brutal',
  'sensacional',
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
      <h2 className='hero__title'>
        ¡Bienvenido! Aquí encontrarás toda la información sobre la
      </h2>
      <span className='hero__adjectives'> {adjectives[adjectivesIndex]}</span>{' '}
      <h2 className='hero__title'>desarrolladora front-end</h2>{' '}
      <span className='hero__name'>Mercedes Carballal</span>
    </section>
  );
};

export default Hero;

import React from 'react';

const Skills = () => {
  return (
    <section className='skills'>
      <h2>Habilidades</h2>
      <div className="skills__cont">
        <div>
          <h3>Tecnologías</h3>
          <ul className="skills__cont__tecnologies">
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>JavaScript </li>
            <li>React</li>
            <li>Git</li>
            <li>Gulp</li>
          </ul>
        </div>
        <div>
          <h3>Habilidades</h3>
          <ul className="skills__cont__soft">
            <li>Alegre</li>
            <li>Buena en trabajo en equipo</li>
            <li>Genero buen ambiente de confianza y comunicacion</li>
            <li>Resolutiva </li>
            <li>Organizada</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

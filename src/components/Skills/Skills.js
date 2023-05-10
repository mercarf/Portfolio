import React from 'react';
import vsc from '../../assets/images/vsc.png';
import zeplin from '../../assets/images/zeplin.svg';

const Skills = () => {
  return (
    <section className='skills' id="skills">
      <section>
        <div className="skewed-skills"></div>
      </section>
      <h2 className="skills__title">Habilidades</h2>
      <div className="skills__cont">
        <div>
          <h3>Tecnologías</h3>
          <ul className="skills__cont__tecnologies">
            <li >
              <i className="fab fa-html5"></i>
              <span className="HTML">HTML 5</span>
            </li>
            <li >
              <i className="fab fa-css3-alt"></i>
              <span className="CSS">CSS</span>
            </li>
            <li >
              <i className="fab fa-sass"></i>
              <span className="SASS">SASS</span>
            </li>
            <li>
              <i className="fab fa-bootstrap"></i>
              <span className="Boostrap">Boostrap</span>
            </li>
            <li>
              <i className="fab fa-js-square"></i>
              <span className="JS">JavaScript</span>
            </li>
            <li>
              <i className="fab fa-react"></i>
              <span className="React">React</span>
            </li>
            <li>
              <i className="fab fa-git-alt"></i>
              <span className="Git">Git</span>
            </li>
            <li>
              <i className="fab fa-gulp"></i>
              <span className="Gulp">Gulp</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Herramientas</h3>
          <ul className="skills__cont__tools">
            <li>
              <i className="fab fa-github"></i>
              <span className="github">Github</span>
            </li>
            <li>
              <img src={vsc} width="50px" alt='Imagen de VSC' />
              <span className="vsc">Visual Studio Code</span>
            </li>
            <li>
              <i className="fab fa-npm"></i>
              <span className="npm">Npm</span>
            </li>
            <li>
              <i className="fab fa-trello"></i>
              <span className="trello">Trello </span>
            </li>
            <li>
              <i className="fab fa-slack"></i>
              <span className="slack">Slack</span>
            </li>
            <li>
              <img src={zeplin} width="60px" alt='Imagen de Zeplin' />
              <span className="zeplin">Zeplin</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Habilidades blandas</h3>
          <ul className="skills__cont__soft">
            <li><strong>Alegre <span role="img" aria-label="Smily">😊</span></strong>, <strong>positiva <span role="img" aria-label="okhand">👍🏼</span></strong> y <strong>empática <span role="img" aria-label="hugh">🤗</span>.</strong></li>
            <li>Habituada a trabajar en <strong>equipo <span role="img" aria-label="writehand">✍🏼</span></strong>.</li>
            <li>Buena <strong>comunicación</strong><span role="img" aria-label="phone">📞</span> y <em>confianza</em> <span role="img" aria-label="yeahhand">🤙🏼</span>.</li>
            <li><em>Adaptable</em>, <strong>resolutiva</strong>, <em>perseverante</em> 🧱.</li>
            <li>Organizada y con motivación <span role="img" aria-label="arm">💪🏼</span></li>
            <li>Con ganas de <strong>aprender</strong> 📚 y afrontar nuevos <strong>retos</strong> ✈.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

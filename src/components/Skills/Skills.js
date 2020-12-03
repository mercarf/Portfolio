import React from 'react';
import vsc from '../../assets/images/vsc.png';
import zeplin from '../../assets/images/zeplin.svg';

const Skills = () => {
  return (
    <section className='skills' id="skills">
      <h2>Habilidades</h2>
      <div className="skills__cont">
        <div>
          <h3>Tecnologías</h3>
          <ul className="skills__cont__tecnologies">
            <li >
              <i class="fab fa-html5"></i>
              <span className="HTML">HTML 5</span>
            </li>
            <li >
              <i class="fab fa-css3-alt"></i>
              <span className="CSS">CSS</span>
            </li>
            <li >
              <i class="fab fa-sass"></i>
              <span className="SASS">SASS</span>
            </li>
            <li>
              <i class="fab fa-bootstrap"></i>
              <span className="Boostrap">Boostrap</span>
            </li>
            <li>
              <i class="fab fa-js-square"></i>
              <span className="JS">JavaScript</span> 
            </li>
            <li>
              <i class="fab fa-react"></i>
              <span className="React">React</span>
            </li>
            <li>
              <i class="fab fa-git-alt"></i>
              <span className="Git">Git</span>
            </li>
            <li>
              <i class="fab fa-gulp"></i>
              <span className="Gulp">Gulp</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Herramientas</h3>
          <ul className="skills__cont__tools">
            <li>
              <i class="fab fa-github"></i>
              <span className="github">Github</span>
            </li>
            <li>
              <img src={vsc} width="50px"/>
              <span className="vsc">Visual Studio Code</span>
            </li>
            <li>
              <i class="fab fa-npm"></i>
              <span className="npm">Npm</span>
            </li>
            <li>
              <i class="fab fa-trello"></i>
              <span className="trello">Trello </span>
            </li>
            <li>
              <i class="fab fa-slack"></i>
              <span className="slack">Slack</span>
            </li>
            <li>
              <img src={zeplin} width="60px"/>
              <span className="zeplin">Zeplin</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Habilidades blandas</h3>
          <ul className="skills__cont__soft">
            <li><strong>Alegre 😊</strong>, <strong>positiva 👍🏼</strong> y <strong>empática 🤗.</strong></li>
            <li>Habituada a trabajar en <strong>equipo ✍🏼</strong>.</li>
            <li>Buena <strong>comunicación</strong>📞 y <em>confianza</em> 🤙🏼.</li>
            <li><em>Adaptable</em>, <strong>resolutiva</strong>, <em>perseverante</em> 🧱.</li>
            <li>Organizada y con motivación 💪🏼</li>
            <li>Con ganas de <strong>aprender</strong> 📚 y afrontar nuevos <strong>retos</strong> ✈.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

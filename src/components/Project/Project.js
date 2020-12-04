import React from 'react';
import web from '../../assets/images/pcweb.svg';
import github from '../../assets/images/github.svg';

const Project = ({ title, imgProject,altProject,tecnologies,linkWeb, linkRepo, info }) => {
  return (
    <div className="container">
        <div className="container__img">
          <img src={imgProject} alt={altProject}/>

        </div>
        <div className="container__text">
          <div className="container__text__info">
            <p>
            {info}
            </p>

          </div>
          <h3 className="container__text__title">
            {title}
          </h3>
          <p>{tecnologies}</p>
          <div className="container__text__links">
            <a
                href={linkWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="linkProject"
                >
                  <img src={web}className="web"/>
                <span>Página web</span>
            </a>
            <a href={linkRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="linkProject"
                >
                  <img src={github}className="repo"/>
                <span>Repositorio</span></a>
          </div>
          <p className="container__info">+ Info</p>

        </div>
      </div>
  );
};

Project.defaultProps = {
  extraClass: '',
};

export default Project;
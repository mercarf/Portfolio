import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__copy">Realizado con <span role="img" aria-label="Panda">❤️</span> por <a href="https://github.com/mercarf/Portfolio" target="_blank" rel="noopener noreferrer">Mercedes</a> © 2020</span>
      <nav className="social-media">
        <ul>
          <li><a href="https://www.linkedin.com/in/mercedescarballal/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/mercarf" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </nav>
      <div className='footer__home'>
        <a href="#hero" title="ir al inicio">
          <i className='fas fa-home'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

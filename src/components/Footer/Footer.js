import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__copy">Made with <span>❤️</span> by <a href="https://github.com/mercarf/Portfolio" target="_blank" rel="noopener noreferrer">Mercedes</a> © 2020</span>
      <div className='footer__home'>
        <a href="#hero" title="ir al inicio">
          <i class='fas fa-home'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

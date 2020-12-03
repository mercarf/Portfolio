import React, {useState} from 'react';

const Header = () => {

  const [activeMenu, setActiveMenu] = useState('');

  const changeMenu = (ev) => {
    const clickedBurguerMenu = ev.currentTarget.id;
    if (clickedBurguerMenu === activeMenu) {
      return setActiveMenu('');
    } else {
      return setActiveMenu(clickedBurguerMenu);
    }
  };

  // const updateButton =()=> {
  //   const icon = this.paused ? '[' : '->';
  //   console.log(icon);
  //   toggle.textContent = icon;
  // }

  return (
    <header className='header'>
      <div className='menu'>
        <div className='bracket-left' id='collapsible' onClick={changeMenu}>{activeMenu==='collapsible'?'->':'['}</div>
        <nav className={`nav ${activeMenu==='collapsible'?'':'hidden'}`}>
          <ul className='nav-list'>
            
            <li>
              <a href='#projects' title='Ir a Proyectos'>
                Proyectos
              </a>
            </li>
            <li>
              <a href='#skills' title='Habilidades'>
                Habilidades
              </a>
            </li>
            <li>
              <a href='#aboutMe' title='Ir a Sobre mí'>
                Sobre mí
              </a>
            </li>
          </ul>
        </nav>
        <div className='bracket-right'id='collapsible' onClick={changeMenu}>{activeMenu==='collapsible'?'<-':']'}</div>
      </div>
    </header>
  );
};

export default Header;

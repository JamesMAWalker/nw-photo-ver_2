import React from 'react';
import { ReactComponent as Logo } from '../../Icons/logo-icon.svg';

function MenuHandle({ toggleMenu, menuOpen, style }) {
  const handleClick = (e) => {
    e.stopPropagation();
    toggleMenu();
  }



  return (
    <div className={ menuOpen ? 'menu-closer' : 'menu-handle'} onClick={handleClick}>
      {menuOpen ? <span onClick={handleClick}>X</span> : <Logo style={style}/>}
    </div>
  );
}

export default MenuHandle;
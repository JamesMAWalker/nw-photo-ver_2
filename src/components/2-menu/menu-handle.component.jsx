import React from 'react';
import { ReactComponent as Logo } from '../../Icons/logo-icon-shadow.svg';

function MenuHandle({ toggleMenu }) {
  const handleClick = (e) => {
    e.stopPropagation();
    toggleMenu();
  }

  return (
    <div className='menu-handle' onClick={handleClick} >
      <Logo/>
    </div>
  );
}

export default MenuHandle;
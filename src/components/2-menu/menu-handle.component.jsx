import React from 'react';

function MenuHandle({ toggleMenu }) {
  const handleClick = (e) => {
    e.stopPropagation();
    toggleMenu();
  }

  return (
    <div className='menu-handle' onClick={handleClick} >
      <span className="handle handle-top"></span>
      <span className="handle handle-bottom"></span>
    </div>
  );
}

export default MenuHandle;
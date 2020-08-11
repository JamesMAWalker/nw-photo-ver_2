import React, { Component } from 'react';

import MenuContainer from '../2-menu/menu-container.component';
import PhotoContainer from '../1-photo/photo-container.component';
import MenuHandle from '../2-menu/menu-handle.component';
import MenuPhone from '../2-menu/menu-container--phone.component';

class HomePage extends Component {

  render() {
    let pathName = this.props.location.pathname.replace('/', '');
    const { toggleMenu, menuOpen, history } = this.props;

    return (
      <div className='App'>
        <MenuContainer menuOpen={menuOpen} history={history} />
        <MenuPhone
          toggleMenu={toggleMenu}
          menuOpen={menuOpen}
          history={history}
        />
        <MenuHandle toggleMenu={toggleMenu} menuOpen={menuOpen} />
        <PhotoContainer currCat={pathName} />
      </div>
    );
  } 
}

export default HomePage;
import React, { Component } from 'react';

import MenuContainer from '../2-menu/menu-container.component';
import PhotoContainer from '../1-photo/photo-container.component';
import MenuHandle from '../2-menu/menu-handle.component';

import { Logo } from '../0-logo/logo.component'
import MenuPhone from '../2-menu/menu-container--phone.component';

class LandingPage extends Component {

  toHome = () => {
    this.props.history.push('/home')
  }

  
  render() {
    const { toggleMenu, menuOpen, history } = this.props;

    const onLanding = history.location.pathname === "/"
      ? 99
      : "unset"

    console.log(this.props.history);  

    return (
      <div className='App'>
        <MenuHandle toggleMenu={toggleMenu} />
        <MenuPhone
          toggleMenu={toggleMenu}
          history={history}
          menuOpen={menuOpen}
        />
        <Logo
          zIndex={onLanding}
          classN='site-logo--photo'
          name='home'
          onClick={this.toHome}
        />
        <PhotoContainer menuOpen={menuOpen} toggleMenu={toggleMenu} toHome={this.toHome} />
      </div>
    );
  }
}

export default LandingPage;
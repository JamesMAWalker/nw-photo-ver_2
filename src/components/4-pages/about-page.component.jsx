import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../Icons/logo-icon.svg';
import { ReactComponent as Divider } from '../../Icons/title-divider.svg';
import MenuHandle from '../2-menu/menu-handle.component';
import MenuPhone from '../2-menu/menu-container--phone.component';
import MenuContainer from '../2-menu/menu-container.component';

class AboutPage extends Component {
  
  render() {
    const { toggleMenu, menuOpen, history, isPhone } = this.props;

    return (
      <>
        <div className='about'>
          {isPhone ? (
            <nav>
              <MenuHandle menuOpen={menuOpen} toggleMenu={toggleMenu} />
              <MenuPhone
                toggleMenu={toggleMenu}
                history={history}
                menuOpen={menuOpen}
              />
            </nav>
          ) : (
            <MenuContainer />
          )}
          <div className='about__photo-section'>
            <div className='about__text'>
              <h1 className='about__heading'>
                <span className='about__heading--1'>About</span>
                <br />
                <span className='about__heading--2'>Nishelle</span>
              </h1>
              <Divider className='divider' />
              <span className='about__text--1'>
                Nishelle loves to tell stories... through her photography.
              </span>
              <span className='about__text--2'>
                Her stories are based upon daydreams, reality, and often a
                mixture of the two - depending on how she sees fit. Through her
                camera she expresses the inner world of both herself and her
                subjects. Together they make magic!
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutPage;

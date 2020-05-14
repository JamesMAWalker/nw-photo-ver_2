import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { withRouter } from 'react-router-dom';

import CategoryLink from './category-link.component';
import { ReactComponent as InstaIcon } from '../../Icons/insta-icon-black.svg'
import { ReactComponent as FbIcon } from '../../Icons/fb-icon-black.svg'
import { ReactComponent as MediumIcon } from '../../Icons/med-icon-black.svg'
import { ReactComponent as Logo } from '../../Icons/logo-icon.svg';

import { PHOTO_DATA } from '../../data-store/photos.data';

class MenuPhone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoData: [
        PHOTO_DATA.calories,
        PHOTO_DATA.portrait,
        PHOTO_DATA.dreams,
        PHOTO_DATA.editorial,
      ],
    };
  }

  renderLinks = (list) => {
    const { history } = this.props;

    return list.map((e) => (
      <CategoryLink changeCat={history.push} key={uuid()} name={e.name} />
    ));
  };

  handleLogoClick = () => {
    this.props.history.push('/home');
  };

  render() {
    const { photoData } = this.state;
    const { menuOpen, toggleMenu } = this.props;

    let openClose = {
      display: menuOpen ? 'flex' : 'none',
    };

    return (
      <div style={openClose} onClick={() => toggleMenu()} className='menu-container--phone'>
        <Logo
          name='home'
          onClick={this.handleLogoClick}
          className='site-logo--menu'
        />
        <div className='links__container'>{this.renderLinks(photoData)}</div>
        <div className='menu-divider'></div>
        <div className='site-links__container'>
          <Link to='/home' className='page-link'>
            home
          </Link>
          <Link to='/about' className='page-link'>
            about
          </Link>
        </div>
        <div className='icons__container'>
          <a
            target='_blank'
            href='https://www.instagram.com/nishellewalkerphotography/'
          >
            <InstaIcon className='social-icon' />
          </a>
          <a>
            <MediumIcon className='social-icon' />
          </a>
          <a>
            <FbIcon className='social-icon' />
          </a>
        </div>
        <p className='copyright'>NishelleWalkerPhotography &copy;2020</p>
      </div>
    );
  }
}

export default MenuPhone;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import CategoryLink from './category-link.component';
import { InstaIcon } from '../5-icons/icons.components'
import { FbIcon } from '../5-icons/icons.components'
import { MediumIcon } from '../5-icons/icons.components'

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
      <div
        style={openClose}
        onClick={() => toggleMenu()}
        className='menu-container--phone'
      >
    
        <div className='links__container'>{this.renderLinks(photoData)}</div>
        <div className='menu-divider'></div>
        <div className='site-links__container'>
          <Link to='/home' className='page-link'>
            home
          </Link>
          <Link to='/about' className='page-link'>
            about
          </Link>
          <Link to='/contact' className='page-link'>
            contact
          </Link>
        </div>
        <div className='icons__container'>
          <a
            target='_blank'
            href='https://www.instagram.com/nishellewalkerphotography/'
          >
            <InstaIcon classN='social-icon' />
          </a>
          <a>
            <MediumIcon classN='social-icon' />
          </a>
          <a>
            <FbIcon classN='social-icon' />
          </a>
        </div>
        <p className='copyright'>NishelleWalkerPhotography &copy;2020</p>
      </div>
    );
  }
}

export default MenuPhone;
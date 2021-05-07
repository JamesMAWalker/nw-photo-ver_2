import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion'

import CategoryLink from './category-link.component';
import { InstaIcon } from '../5-icons/icons.components'
import { FbIcon } from '../5-icons/icons.components'
import { MediumIcon } from '../5-icons/icons.components'

import { PHOTO_DATA } from '../../data-store/photos.data';

const MenuPhone = (props) => {
  const photoData = [
    PHOTO_DATA.calories,
    PHOTO_DATA.portrait,
    PHOTO_DATA.dreams,
    PHOTO_DATA.editorial,
  ]

  const renderLinks = (list) => {
    const { history } = props;

    return list.map((e) => (
      <CategoryLink changeCat={history.push} key={uuid()} name={e.name.toLowerCase()} />
    ));
  };

  const handleLogoClick = () => {
    props.history.push('/home');
  };

  const { menuOpen, toggleMenu } = props;

  return (
    menuOpen && (
      <motion.div
        onClick={() => toggleMenu()}
        className='menu-container--phone'
        initial={{ opacity: 0, y: '20vh' }}
        transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100vh' }}
      >
        <div className='links__container'>
          {renderLinks(photoData)}
        </div>
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
            href='https://www.instagram.com/nishellemariephotography/'
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
        <p className='copyright'>
          Nishelle Walker Photography &copy;2020
        </p>
      </motion.div>
    )
  )
}

export default MenuPhone;
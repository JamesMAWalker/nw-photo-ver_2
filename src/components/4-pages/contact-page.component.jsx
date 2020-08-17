import React, { Component, Fragment } from 'react';

import MenuContainer from '../2-menu/menu-container.component';
import MenuPhone from '../2-menu/menu-container--phone.component';
import MenuHandle from '../2-menu/menu-handle.component';
import { ReactComponent as InstaIcon } from '../../Icons/insta-icon.svg';
import { ReactComponent as EmailIcon } from '../../Icons/email-icon.svg';
import { ReactComponent as PhoneIcon } from '../../Icons/phone-icon.svg';
import { ReactComponent as ContactHeader } from '../../Icons/contact-header.svg';

class ContactPage extends Component {
  
  render() {
    const { isPhone, menuOpen, toggleMenu, history } = this.props;
    const style = {
      fill: "white",
      transform: "scale(.8)"
    }

    return (
      <Fragment>
        <div className='contact'>
          {isPhone ? (
            <nav>
              <MenuHandle
                style={style}
                menuOpen={menuOpen}
                toggleMenu={toggleMenu}
              />
              <MenuPhone
                toggleMenu={toggleMenu}
                history={history}
                menuOpen={menuOpen}
              />
            </nav>
          ) : (
            <MenuContainer />
          )}
          <div className='contact-container'>
            <img
              src='https://res.cloudinary.com/jameswalker-work/image/upload/v1597675116/NW_Photography/camera-gear_vqbgbx.jpg'
              alt='contact header'
              className='contact-splash'
            />
            <div className='contact-info'>
              <ContactHeader className='contact-info__header' />
              <div className='contact-info__sectioner'>
                <span className='contact-info__sub-container'>
                  <a
                    href='https://www.instagram.com/nishellewalkerphotography/'
                    className='icon-wrapper'
                    target='blank'
                  >
                    <InstaIcon className='contact-icon' />
                  </a>
                  <span className='divider'>|</span>
                  <a
                    target='blank'
                    href='https://www.instagram.com/nishellewalkerphotography/'
                    className='insta'
                  >
                    @nishellewalkerphotography
                  </a>
                </span>
                <span className='contact-info__sub-container'>
                  <a
                    href='mailto:nishelle@nishellewalker.com'
                    className='icon-wrapper'
                    target='blank'
                  >
                    <EmailIcon className='contact-icon' />
                  </a>
                  <span className='divider'>|</span>
                  <span>nishelle@nishellewalker.com</span>
                </span>
                <span className='contact-info__sub-container'>
                  <a
                    href='tel:8059061221'
                    className='icon-wrapper'
                    target='blank'
                  >
                    <PhoneIcon className='contact-icon' opacity='.75' />
                  </a>
                  <span className='divider'>|</span>
                  <a href='tel:8059061221' className='phone'>
                    (805) 906-1221
                  </a>
                </span>
              </div>
              <span className='hello'>say hello :)</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContactPage;
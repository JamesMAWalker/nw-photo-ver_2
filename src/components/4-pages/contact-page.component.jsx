import React, { Component, Fragment } from 'react'

import MenuContainer from '../2-menu/menu-container.component'
import MenuPhone from '../2-menu/menu-container--phone.component'
import MenuHandle from '../2-menu/menu-handle.component'
import {
  ContactHeader,
  InstaIcon,
  EmailIcon,
  PhoneIcon,
  SmsIcon,
} from '../5-icons/icons.components'

class ContactPage extends Component {
  render() {
    const {
      isPhone,
      menuOpen,
      toggleMenu,
      history,
    } = this.props
    const style = {
      fill: 'white',
      transform: 'scale(.8)',
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
              <ContactHeader classN='contact-info__header' />
              <div className='contact-info__sectioner'>
                <span className='contact-info__sub-container'>
                  <a
                    href='https://www.instagram.com/nishellemariephotography/'
                    className='icon-wrapper'
                    target='blank'
                  >
                    <InstaIcon classN='contact-icon' />
                  </a>
                  <span className='divider'>|</span>
                  <a
                    target='blank'
                    href='https://www.instagram.com/nishellemariephotography/'
                    className='insta'
                  >
                    @nishellemariephotography
                  </a>
                </span>
                <span className='contact-info__sub-container'>
                  <a
                    href='mailto:nishelle@nishellewalker.com'
                    className='icon-wrapper'
                    target='_blank'
                  >
                    <EmailIcon classN='contact-icon' />
                  </a>
                  <span className='divider'>|</span>
                  <span>
                    <a
                      href='mailto:nishelle@nishellewalker.com'
                      className='icon-wrapper'
                      target='blank'
                    >
                      nishelle@nishellewalker.com
                    </a>
                  </span>
                </span>
                <span className='contact-info__sub-container'>
                  <a
                    href='sms:8059061221'
                    className='icon-wrapper'
                    target='blank'
                  >
                    {/* <PhoneIcon
                      classN='contact-icon'
                      opacity='.75'
                    /> */}
                    <SmsIcon
                      classN='contact-icon'
                    />
                  </a>
                  <span className='divider'>|</span>
                  <a
                    href='sms:8059061221'
                    className='phone'
                  >
                    (805) 906-1221
                  </a>
                </span>
              </div>
              <span className='hello'>say hello :)</span>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ContactPage

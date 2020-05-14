import React, { Component, Fragment } from 'react';
import Media from 'react-media';

import MenuContainer from '../2-menu/menu-container.component';
import MenuHandle from '../2-menu/menu-handle.component';
import PhotoContainer from '../1-photo/photo-container.component';
import CategorySelector from '../3-category/category-selector.component';
import MenuPhone from '../2-menu/menu-container--phone.component';
import PhoneSelector from '../3-category/category-selector--phone.component';

class CategoryPage extends Component {

  render() {
    const { toggleMenu, menuOpen, history } = this.props;
    const { catID } = this.props.match.params;
    let prevState;
    if (this.props.location.state) {
      prevState = this.props.location.state;
    }

    return (
      <>
        <Media
          queries={{
            desk: '(min-width: 53.125em)',
            phone: '(max-width: 53.125em)',
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.phone && (
                <div className='App'>
                  <MenuPhone
                    toggleMenu={toggleMenu}
                    history={history}
                    menuOpen={menuOpen}
                  />
                  <MenuHandle toggleMenu={toggleMenu} />
                  <PhotoContainer currCat={catID} prevState={prevState} />
                  <PhoneSelector />
                </div>
              )}
              {matches.desk && (
                <div className='App'>
                  <MenuContainer />
                  <PhotoContainer currCat={catID} prevState={prevState} />
                  <CategorySelector currCat={catID} />
                </div>
              )}
            </Fragment>
          )}
        </Media>
      </>
    );
  }
}

export default CategoryPage;

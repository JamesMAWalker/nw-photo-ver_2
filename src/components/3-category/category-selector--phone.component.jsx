import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

import CategoryItem from './category-item.component';
import { withRouter } from 'react-router-dom';

import { PHOTO_DATA } from '../../data-store/photos.data';

class PhoneSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: Object.values(PHOTO_DATA),
    };
  }

  render() {
    const { categories } = this.state;
    const { currCat, history } = this.props;
    
    const current = history.location.pathname.replace('/', '')
    
    console.log(`current category in phone selector is: ${history.location.pathname}`);

    return (
      <div className='phone-selector'>
        {categories.map((cat) => (
          <CategoryItem
            key={uuid()}
            current={current}
            currCat={currCat}
            indPos={`category__item--${categories.indexOf(cat) + 1}`}
            changeCat={history.push}
            name={cat.name.toLowerCase()}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(PhoneSelect);

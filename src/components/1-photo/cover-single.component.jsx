import React, { Component } from 'react';

import Media from 'react-media'
import Slider from 'react-slick';

import { PHOTO_DATA } from '../../data-store/photos.data';

class CoverSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coverPhotos: Object.values(PHOTO_DATA.coverPhotos.photos),
      singleCover: PHOTO_DATA.dreams.photos.float,
    };
  }

  render() {
    const { currCat, toggleMenu } = this.props;
    const { singleCover } = this.state;

    const style = {
      objectPosition: '0% 36% !important',
    };

    let coverSize = currCat === 'home' ? '--truncated' : '';

    return (
      <Media
        queries={{
          desk: '(min-width: 53.125em)',
          phone: '(max-width: 53.125em)',
        }}
      >
        {(matches) => (
          <div
            className='cover-single'
            onClick={matches.phone ? toggleMenu : null}
          >
            <img
              style={style}
              className={`photo-single photo-single${coverSize}`}
              src={singleCover.link}
              alt={singleCover.name}
              key={singleCover.name}
              name='home'
            />
          </div>
        )}
      </Media>
    )
  }
}

export default CoverSingle;


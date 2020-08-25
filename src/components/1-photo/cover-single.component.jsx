import React, { Component } from 'react';
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
    const { currCat } = this.props;
    const { singleCover } = this.state;

    const style = {
      objectPosition: '0% 36% !important',
    };

    let coverSize = currCat === 'home' ? '--truncated' : '';

    return (
      <div className='cover-single'>
        <img
          style={style}
          className={`photo-single photo-single${coverSize}`}
          src={singleCover.link}
          alt={singleCover.name}
          key={singleCover.name}
          name='home'
        />
      </div>
    );
  }
}

export default CoverSingle;


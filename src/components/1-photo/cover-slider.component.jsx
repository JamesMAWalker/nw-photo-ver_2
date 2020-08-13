import React, { Component } from 'react';
import Slider from 'react-slick';
import { PHOTO_DATA } from '../../data-store/photos.data';


class CoverSlider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      coverPhotos: Object.values(PHOTO_DATA.coverPhotos.photos),
      singleCover: PHOTO_DATA.dreams.photos.float
    };
  }
  
  render() {
    const settings = {
      fade: true,
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 1900,
    };

    const { singleCover } = this.state;

    const style = {
      objectPosition: "0% 36% !important"
    }

    console.log(style);

    return (
      <Slider className='photo-slider' {...settings}>
        <img
          style={style}
          className='photo-single'
          src={singleCover.link}
          alt={singleCover.name}
          key={singleCover.name}
          name='home'
        />
      </Slider>
    );
  }
}

export default CoverSlider;


// {
//   this.state.coverPhotos.map((photo) => (
//     <img
//       className='photo-single'
//       src={photo.link}
//       alt={photo.name}
//       key={photo.name}
//       name='home'
//     />
//   ));
// }
import React, { Component } from 'react';
import Slider from 'react-slick';
import { PHOTO_DATA } from '../../data-store/photos.data';


class PhotoSlider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      editorials: Object.values(PHOTO_DATA.editorial.photos)
    };
  }

  // componentDidMount() {
  //   this.play();    
  // }

  // play = () => {
  //   this.slider.slickPlay();
  // }
  
  render() {
    const settings = {
      fade: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 1900,
    };

    return (
      <Slider
        // ref={slider => (this.slider = slider)}
        className='photo-slider'
        {...settings}
      >
        {this.state.editorials.map(photo => (
          <img
            className='photo-single'
            src={photo.link}
            alt={photo.name}
            key={photo.name}
          />
        ))}
      </Slider>
    );
  }
}

export default PhotoSlider;
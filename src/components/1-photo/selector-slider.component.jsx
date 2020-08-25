import React, { Component, Fragment } from 'react';
import Media from 'react-media';
import Slider from 'react-slick';
import { v4 as uuid } from 'uuid';

import { PHOTO_DATA } from '../../data-store/photos.data';
import PhotoLarge from './photo-large.component';
import NextArrow from './arrows/next-arrow.component';
import PrevArrow from './arrows/prev-arrow.component';

class SelectorSlider extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      dreams: Object.values(PHOTO_DATA.dreams.photos),
      editorial: Object.values(PHOTO_DATA.editorial.photos),
    }
  }
  

  render() {
    const { currCat, prevState } = this.props;
    console.log(currCat);
    
    const { [currCat]: cat } = this.state;

    const settings = {
      fade: currCat === 'dreams' ? true : false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 4,
      pauseOnHover: false,
      slidesToScroll: 1,
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

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
              {matches.desk && (
                <Slider className='selector__slider' {...settings}>
                  {cat.map((photo) => (
                    <PhotoLarge
                      catID={currCat}
                      photoID={photo.name}
                      key={uuid()}
                      src={photo.link}
                      alt={photo.name}
                    />
                  ))}
                </Slider>
              )}
              {matches.phone && (
                <div className='large-photo__container'>
                  {cat.map((photo) => (
                    <PhotoLarge
                      catID={currCat}
                      photoID={photo.name}
                      key={uuid()}
                      src={photo.link}
                      alt={photo.name}
                      
                    />
                  ))}
                </div>
              )}
            </Fragment>
          )}
        </Media>
      </>
    );
  }
}

export default SelectorSlider;
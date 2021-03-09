import React, { Component, Fragment } from 'react';
import Media from 'react-media';
import Slider from 'react-slick';
import { v4 as uuid } from 'uuid';

import { PHOTO_DATA } from '../../data-store/photos.data';
import PhotoLarge from './photo-large.component';
import { NextArr } from '../5-icons/icons.components'
import { PrevArr } from '../5-icons/icons.components'

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
      nextArrow: (
        <svg
          width='85'
          height='17'
          viewBox='0 0 85 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='slick-arrow slick-next'
        >
          <g filter='url(#filter0_d)'>
            <line
              x1='3'
              y1='7.23999'
              x2='77'
              y2='7.23999'
              stroke='white'
            />
            <path
              d='M66.9642 3C67.8121 6.72124 71.3983 7.23716 79.256 7.23239'
              stroke='white'
            />
            <path
              d='M71.15 7.17993C67.2341 7.57078 65.367 8.18193 62.548 9.8267'
              stroke='white'
              stroke-width='0.5'
            />
          </g>
          <defs>
            <filter
              id='filter0_d'
              x='0'
              y='0.414795'
              width='84.5641'
              height='15.6628'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood
                flood-opacity='0'
                result='BackgroundImageFix'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              />
              <feOffset dx='1' dy='2' />
              <feGaussianBlur stdDeviation='2' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      ),
      prevArrow: (
        <svg
          width='86'
          height='17'
          viewBox='0 0 86 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='slick-arrow slick-prev'
        >
          <g filter='url(#filter0_d)'>
            <line
              y1='-0.5'
              x2='74'
              y2='-0.5'
              transform='matrix(-1 0 0 1 80.256 7.73999)'
              stroke='white'
            />
            <path
              d='M16.2917 3C15.4439 6.72124 11.8577 7.23716 4.00001 7.23239'
              stroke='white'
            />
            <path
              d='M12.106 7.17993C16.0219 7.57078 17.889 8.18193 20.708 9.8267'
              stroke='white'
              stroke-width='0.5'
            />
          </g>
          <defs>
            <filter
              id='filter0_d'
              x='0.691895'
              y='0.414795'
              width='84.5641'
              height='15.6628'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood
                flood-opacity='0'
                result='BackgroundImageFix'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              />
              <feOffset dx='1' dy='2' />
              <feGaussianBlur stdDeviation='2' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      ),
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
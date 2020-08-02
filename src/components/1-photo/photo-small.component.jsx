import React, { Component } from 'react';

class PhotoSmall extends Component {
  
  adjustCrop = name => {
    if (name === 'the_BEET') {
      return 'translateY(-75px)'
    } else if (name === 'papurika_horizon') {
      return 'translateY(-175px)';  
    } else if (name === 'you_know_you_want_one') {
      return 'translateY(-75px)';  
    } else {
      return 'center'
    }
  };  



  render() {
    const { alt, src, bgco } = this.props;

    const plchColor = {
      backgroundColor: bgco,
      transform: this.adjustCrop(alt)
    };

    return (
      <div style={plchColor} className='photo-wrapper'>
        <img className='photo--small' src={src} alt={alt} />
      </div>
    );
  }
}

export default PhotoSmall;
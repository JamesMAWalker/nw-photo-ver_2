import React, { Component } from 'react';

class PhotoSmall extends Component {
  
  adjustCrop = name => {
    if (name === 'papurika_horizon' & window.innerWidth > 850) {
      return 'translateY(-10px)';  
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
        <img style={plchColor} className='photo--small' src={src} alt={alt} />
      </div>
    );
  }
}

export default PhotoSmall;
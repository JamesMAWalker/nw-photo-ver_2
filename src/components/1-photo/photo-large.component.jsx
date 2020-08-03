import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PhotoLarge extends Component {

  render() {
    const { alt, src, key } = this.props;
    

    return (
      <img
        key={key}
        src={src}
        alt={alt}
        className={`photo--large photo--large`}
      />
    );
  }
}

export default withRouter(PhotoLarge);
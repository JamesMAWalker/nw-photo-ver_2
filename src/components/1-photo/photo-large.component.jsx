import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { v4 as uuid } from 'uuid';

class PhotoLarge extends Component {

  render() {
    const { alt, src } = this.props;

    return (
      <img
        key={uuid()}
        src={src}
        alt={alt}
        className={`photo--large photo--large${alt}`}
      />
    );
  }
}

export default withRouter(PhotoLarge);
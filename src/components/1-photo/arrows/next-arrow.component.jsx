import React, { Component } from 'react';
import { NextArr } from '../../5-icons/icons.components'

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <NextArr
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

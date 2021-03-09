import React, { Component } from 'react';
import { PrevArr } from '../../5-icons/icons.components'

export default function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <PrevArr
      className={className}
      style={{ ...style, display: 'block'}}
      onClick={onClick}
    />
  );
}

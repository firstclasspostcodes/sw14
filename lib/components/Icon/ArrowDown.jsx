
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="arrow-down" d="M23.29858,17.57349l-6.47937,9.25616a.99994.99994,0,0,1-1.63842,0L8.70142,17.57349A1,1,0,0,1,9.52063,16H13V6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V16h3.47937A1,1,0,0,1,23.29858,17.57349Z"/>
</svg>
);

export const ArrowDown = createIcon(SVG, 'ArrowDown');

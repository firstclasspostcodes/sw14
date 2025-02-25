
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="arrow-up" d="M22.47937,16H19V26a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1V16H9.52063a1,1,0,0,1-.81921-1.57349l6.47937-9.25616a.99994.99994,0,0,1,1.63842,0l6.47937,9.25616A1,1,0,0,1,22.47937,16Z"/>
</svg>
);

export const ArrowUp = createIcon(SVG, 'ArrowUp');


/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="arrow-right" d="M26.82965,16.81921l-9.25622,6.47937A1,1,0,0,1,16,22.47937V19H6a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H16V9.52063a1,1,0,0,1,1.57343-.81921l9.25622,6.47937A.99994.99994,0,0,1,26.82965,16.81921Z"/>
</svg>
);

export const ArrowRight = createIcon(SVG, 'ArrowRight');

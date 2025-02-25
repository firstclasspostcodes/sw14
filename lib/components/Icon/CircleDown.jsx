
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-down" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4Zm4.81006,12.57019-3.98859,5.74622a.99994.99994,0,0,1-1.643,0l-3.98853-5.74622A1,1,0,0,1,12.01141,15H14V11a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v4h1.98859A1,1,0,0,1,20.81006,16.57019Z"/>
</svg>
);

export const CircleDown = createIcon(SVG, 'CircleDown');

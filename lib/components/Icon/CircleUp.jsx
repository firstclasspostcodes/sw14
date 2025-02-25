
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-up" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4Zm3.98859,13H18v4a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V17H12.01141a1,1,0,0,1-.82147-1.57031l3.98859-5.74622a1.00006,1.00006,0,0,1,1.643,0l3.98853,5.74622A1,1,0,0,1,19.98859,17Z"/>
</svg>
);

export const CircleUp = createIcon(SVG, 'CircleUp');

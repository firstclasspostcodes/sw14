
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-play" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4ZM20.16022,16.82178l-5.66541,3.22583A1,1,0,0,1,13,19.17871v-6.4519a1,1,0,0,1,1.49481-.8689l5.66541,3.22583A1,1,0,0,1,20.16022,16.82178Z"/>
</svg>
);

export const SquarePlay = createIcon(SVG, 'SquarePlay');

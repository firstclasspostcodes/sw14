
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-left" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4ZM22,17a1,1,0,0,1-1,1H17v1.98853a1,1,0,0,1-1.57019.82153L9.68353,16.82153a1.00005,1.00005,0,0,1,0-1.64306l5.74628-3.98853A.99991.99991,0,0,1,17,12.01147V14h4a1,1,0,0,1,1,1Z"/>
</svg>
);

export const SquareLeft = createIcon(SVG, 'SquareLeft');

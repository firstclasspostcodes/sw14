
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-right" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4ZM22.31647,16.82153l-5.74628,3.98853A1,1,0,0,1,15,19.98853V18H11a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h4V12.01147a.99991.99991,0,0,1,1.57019-.82153l5.74628,3.98853A1.00005,1.00005,0,0,1,22.31647,16.82153Z"/>
</svg>
);

export const SquareRight = createIcon(SVG, 'SquareRight');

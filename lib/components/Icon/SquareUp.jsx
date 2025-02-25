
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-up" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4ZM19.98859,17H18v4a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V17H12.01141a1.00006,1.00006,0,0,1-.82147-1.57031l3.98859-5.7461a.99982.99982,0,0,1,1.643,0l3.98853,5.7461A1.00006,1.00006,0,0,1,19.98859,17Z"/>
</svg>
);

export const SquareUp = createIcon(SVG, 'SquareUp');

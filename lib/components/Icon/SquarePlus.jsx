
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-plus" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4ZM22,17a1,1,0,0,1-1,1H18v3a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V18H11a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h3V11a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v3h3a1,1,0,0,1,1,1Z"/>
</svg>
);

export const SquarePlus = createIcon(SVG, 'SquarePlus');

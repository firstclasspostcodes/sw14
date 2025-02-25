
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-more" d="M23.5,5H8.5A3.50424,3.50424,0,0,0,5,8.5v15A3.50424,3.50424,0,0,0,8.5,27h15A3.50424,3.50424,0,0,0,27,23.5V8.5A3.50424,3.50424,0,0,0,23.5,5ZM10,18a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,10,18Zm6,0a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,16,18Zm6,0a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,22,18Z"/>
</svg>
);

export const SquareMore = createIcon(SVG, 'SquareMore');

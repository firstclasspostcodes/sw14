
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="magnet" d="M20,11h5v7.5A8.50951,8.50951,0,0,1,16.5,27h-1A8.50951,8.50951,0,0,1,7,18.5V11h5v7.5A3.50424,3.50424,0,0,0,15.5,22h1A3.50424,3.50424,0,0,0,20,18.5ZM12,6a1,1,0,0,0-1-1H8A1,1,0,0,0,7,6V9h5ZM24,5H21a1,1,0,0,0-1,1V9h5V6A1,1,0,0,0,24,5Z"/>
</svg>
);

export const Magnet = createIcon(SVG, 'Magnet');


/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="oxygen-bottles" d="M5,15H15v7H5Zm12,7H27V15H17ZM23,8.10077V6h1a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H20a1,1,0,0,0-1,1V5a1,1,0,0,0,1,1h1V8.10077A5.00112,5.00112,0,0,0,17,13H27A5.00112,5.00112,0,0,0,23,8.10077Zm-12,0V6h1a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H8A1,1,0,0,0,7,4V5A1,1,0,0,0,8,6H9V8.10077A5.00112,5.00112,0,0,0,5,13H15A5.00112,5.00112,0,0,0,11,8.10077ZM17,27a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V24H17ZM5,27a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V24H5Z"/>
</svg>
);

export const OxygenBottles = createIcon(SVG, 'OxygenBottles');


/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="italic" d="M22,5V6a1,1,0,0,1-1,1H19.38635L15.70453,25H17a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H9.99994a1,1,0,0,1-1-1V26a1,1,0,0,1,1-1h1.20459L14.88635,7H14a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h7A1,1,0,0,1,22,5Z"/>
</svg>
);

export const Italic = createIcon(SVG, 'Italic');

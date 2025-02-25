
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-right" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4Zm6.31647,12.82153-5.74628,3.98853A1,1,0,0,1,15,19.98853V18H11a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h4V12.01147a1,1,0,0,1,1.57019-.82153l5.74628,3.98853A1.00005,1.00005,0,0,1,22.31647,16.82153Z"/>
</svg>
);

export const CircleRight = createIcon(SVG, 'CircleRight');

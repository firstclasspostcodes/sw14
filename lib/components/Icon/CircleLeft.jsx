
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-left" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4Zm6,13a1,1,0,0,1-1,1H17v1.98853a1,1,0,0,1-1.57019.82153L9.68353,16.82153a1.00005,1.00005,0,0,1,0-1.64306l5.74628-3.98853A1,1,0,0,1,17,12.01147V14h4a1,1,0,0,1,1,1Z"/>
</svg>
);

export const CircleLeft = createIcon(SVG, 'CircleLeft');

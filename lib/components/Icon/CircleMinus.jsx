
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-minus" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4Zm6,13a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1Z"/>
</svg>
);

export const CircleMinus = createIcon(SVG, 'CircleMinus');

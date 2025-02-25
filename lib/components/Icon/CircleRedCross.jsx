
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-red-cross" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4Zm8,13.5a.5.5,0,0,1-.5.5H18v5.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5V18H8.5a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,.5-.5H14V8.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V14h5.5a.5.5,0,0,1,.5.5Z"/>
</svg>
);

export const CircleRedCross = createIcon(SVG, 'CircleRedCross');

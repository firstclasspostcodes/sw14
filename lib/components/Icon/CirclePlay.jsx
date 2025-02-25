
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-play" d="M16,4A12,12,0,1,0,28,16,12.01312,12.01312,0,0,0,16,4Zm4.16022,12.82178-5.66541,3.22583A1,1,0,0,1,13,19.17871v-6.4519a1.00005,1.00005,0,0,1,1.49481-.869l5.66541,3.226A1,1,0,0,1,20.16022,16.82178Z"/>
</svg>
);

export const CirclePlay = createIcon(SVG, 'CirclePlay');

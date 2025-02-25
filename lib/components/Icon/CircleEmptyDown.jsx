
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-empty-down" d="M16,4A12,12,0,1,0,28,16,12.01343,12.01343,0,0,0,16,4Zm0,21a9,9,0,1,1,9-9A9.01016,9.01016,0,0,1,16,25Zm4.81006-8.42981-3.98859,5.74628a1,1,0,0,1-1.643,0l-3.98853-5.74628A1,1,0,0,1,12.01141,15H14V11a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v4h1.98859A1,1,0,0,1,20.81006,16.57019Z"/>
</svg>
);

export const CircleEmptyDown = createIcon(SVG, 'CircleEmptyDown');

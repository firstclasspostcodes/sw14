
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-empty-left" d="M16,4A12,12,0,1,0,28,16,12.01343,12.01343,0,0,0,16,4Zm0,21a9,9,0,1,1,9-9A9.01016,9.01016,0,0,1,16,25Zm6-10v2a1,1,0,0,1-1,1H17v1.98859a1,1,0,0,1-1.57019.82147L9.68353,16.82147a1,1,0,0,1,0-1.643l5.74628-3.98853A1,1,0,0,1,17,12.01141V14h4A1,1,0,0,1,22,15Z"/>
</svg>
);

export const CircleEmptyLeft = createIcon(SVG, 'CircleEmptyLeft');

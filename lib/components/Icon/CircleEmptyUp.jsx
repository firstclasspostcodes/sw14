
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-empty-up" d="M16,4A12,12,0,1,0,28,16,12.01343,12.01343,0,0,0,16,4Zm0,21a9,9,0,1,1,9-9A9.01016,9.01016,0,0,1,16,25Zm4.81006-9.57019A1,1,0,0,1,19.98859,17H18v4a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V17H12.01141a1,1,0,0,1-.82147-1.57019l3.98859-5.74628a1,1,0,0,1,1.643,0Z"/>
</svg>
);

export const CircleEmptyUp = createIcon(SVG, 'CircleEmptyUp');

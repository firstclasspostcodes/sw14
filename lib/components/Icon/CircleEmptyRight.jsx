
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-empty-right" d="M16,4A12,12,0,1,0,28,16,12.01343,12.01343,0,0,0,16,4Zm0,21a9,9,0,1,1,9-9A9.01016,9.01016,0,0,1,16,25Zm6.31647-8.17847-5.74628,3.98853A1,1,0,0,1,15,19.98859V18H11a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1h4V12.01141a1,1,0,0,1,1.57019-.82147l5.74628,3.98859A1,1,0,0,1,22.31647,16.82153Z"/>
</svg>
);

export const CircleEmptyRight = createIcon(SVG, 'CircleEmptyRight');

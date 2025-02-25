
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-empty-play" d="M16,4.00684a12,12,0,1,0,12,12A12.01343,12.01343,0,0,0,16,4.00684Zm0,21a9,9,0,1,1,9-9A9.01016,9.01016,0,0,1,16,25.00684Zm4.16022-8.18512-5.66541,3.226A1,1,0,0,1,13,19.17865V12.72681a1,1,0,0,1,1.49481-.869l5.66541,3.22589A1,1,0,0,1,20.16022,16.82172Z"/>
</svg>
);

export const CircleEmptyPlay = createIcon(SVG, 'CircleEmptyPlay');

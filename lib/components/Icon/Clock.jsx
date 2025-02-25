
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="clock" d="M16,4A12,12,0,1,0,28,16,12.01343,12.01343,0,0,0,16,4Zm0,21a9,9,0,1,1,9-9A9.01016,9.01016,0,0,1,16,25Zm2-9a1.994,1.994,0,0,1-3.7226,1H12a1,1,0,0,1,0-2h2.2774A1.996,1.996,0,0,1,15,14.27734V10a1,1,0,0,1,2,0v4.27734A1.99156,1.99156,0,0,1,18,16Z"/>
</svg>
);

export const Clock = createIcon(SVG, 'Clock');

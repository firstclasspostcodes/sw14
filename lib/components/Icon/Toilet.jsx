
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="toilet" d="M11,15H27v1c0,3.866-3,6-6,7s-3,5-3,5H11V24.69263a2.033,2.033,0,0,0-1.48682-1.91748A5.00218,5.00218,0,0,1,6,18V5A1,1,0,0,1,7,4h3a1,1,0,0,1,1,1Zm15-4H13v2H27V12A1,1,0,0,0,26,11Z"/>
</svg>
);

export const Toilet = createIcon(SVG, 'Toilet');

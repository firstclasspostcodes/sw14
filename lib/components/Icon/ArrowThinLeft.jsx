
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="arrow-thin-left" d="M28,15v2a1,1,0,0,1-1,1H11.82861L15.475,21.64648a.49983.49983,0,0,1,0,.707L13.35358,24.4751a.5.5,0,0,1-.70716,0L4.87848,16.707a.99986.99986,0,0,1,0-1.41406L12.64642,7.5249a.5.5,0,0,1,.70716,0L15.475,9.64648a.49983.49983,0,0,1,0,.707L11.82861,14H27A1,1,0,0,1,28,15Z"/>
</svg>
);

export const ArrowThinLeft = createIcon(SVG, 'ArrowThinLeft');

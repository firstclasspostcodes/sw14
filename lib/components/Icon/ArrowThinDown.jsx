
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="arrow-thin-down" d="M24.475,19.35352l-7.76795,7.76806a1.00022,1.00022,0,0,1-1.41418,0L7.525,19.35352a.49983.49983,0,0,1,0-.707L9.64642,16.5249a.5.5,0,0,1,.70716,0L14,20.17139V5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V20.17139l3.64642-3.64649a.5.5,0,0,1,.70716,0L24.475,18.64648A.49983.49983,0,0,1,24.475,19.35352Z"/>
</svg>
);

export const ArrowThinDown = createIcon(SVG, 'ArrowThinDown');

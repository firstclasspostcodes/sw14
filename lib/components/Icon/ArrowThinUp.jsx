
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="arrow-thin-up" d="M24.475,13.35352,22.35358,15.4751a.5.5,0,0,1-.70716,0L18,11.82861V27a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V11.82861L10.35358,15.4751a.5.5,0,0,1-.70716,0L7.525,13.35352a.49983.49983,0,0,1,0-.707l7.76795-7.76806a1.00022,1.00022,0,0,1,1.41418,0L24.475,12.64648A.49983.49983,0,0,1,24.475,13.35352Z"/>
</svg>
);

export const ArrowThinUp = createIcon(SVG, 'ArrowThinUp');

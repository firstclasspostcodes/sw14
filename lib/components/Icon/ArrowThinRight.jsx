
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="arrow-thin-right" d="M27.12152,16.707,19.35358,24.4751a.5.5,0,0,1-.70716,0L16.525,22.35352a.49983.49983,0,0,1,0-.707L20.17139,18H5a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1H20.17139L16.525,10.35352a.49983.49983,0,0,1,0-.707L18.64642,7.5249a.5.5,0,0,1,.70716,0L27.12152,15.293A.99986.99986,0,0,1,27.12152,16.707Z"/>
</svg>
);

export const ArrowThinRight = createIcon(SVG, 'ArrowThinRight');

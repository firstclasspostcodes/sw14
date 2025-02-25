
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bitcoin" d="M22.89746,15.4754A5.82681,5.82681,0,0,0,24,12a5.79177,5.79177,0,0,0-4.00067-5.5849V4.977a1,1,0,0,0-1-1h-1a1,1,0,0,0-1,1V6h-3V4.977a1,1,0,0,0-1-1h-1a1,1,0,0,0-1,1V6H9A1,1,0,0,0,8,7V8A1,1,0,0,0,9,9h1V23H9a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h1.99933v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V26h3v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V25.85425A5.87842,5.87842,0,0,0,25,20,5.73418,5.73418,0,0,0,22.89746,15.4754ZM14,10h3.5c.417,0,2.5.09619,2.5,2s-2.083,2-2.5,2H14Zm4.5,12H14V18h4.5c.417,0,2.5.09619,2.5,2S18.917,22,18.5,22Z"/>
</svg>
);

export const Bitcoin = createIcon(SVG, 'Bitcoin');

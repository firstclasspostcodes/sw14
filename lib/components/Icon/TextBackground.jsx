
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="text-background" d="M25,4H6A2,2,0,0,0,4,6V26a2.00006,2.00006,0,0,0,2,2H25a2.00006,2.00006,0,0,0,2-2V6A2,2,0,0,0,25,4Zm-3,9a1,1,0,0,1-1,1H20a1,1,0,0,1-1-1V12H16.99933v8h1a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1h-5a1,1,0,0,1-1-1V21a1,1,0,0,1,1-1h1V12H12v1a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1l-.00067-3a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1Z"/>
</svg>
);

export const TextBackground = createIcon(SVG, 'TextBackground');

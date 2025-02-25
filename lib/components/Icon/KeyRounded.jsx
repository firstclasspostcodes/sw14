
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="key-rounded" d="M27.99982,12h-11.869a7.5,7.5,0,1,0,0,7h1.33356l2.03552-2.03552,2,2,2-2,2,2,2-2,1.36371,1.36364,2.13629-1.66137v-2.3335ZM8,16a1.00291,1.00291,0,0,1-1,1H6a1.00291,1.00291,0,0,1-1-1V15a1.00291,1.00291,0,0,1,1-1H7a1.00291,1.00291,0,0,1,1,1Z"/>
</svg>
);

export const KeyRounded = createIcon(SVG, 'KeyRounded');

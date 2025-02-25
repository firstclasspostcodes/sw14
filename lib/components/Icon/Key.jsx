
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="key" d="M27.99994,12H16L14.2,9.6A4.00005,4.00005,0,0,0,11,8H7a3.99992,3.99992,0,0,0-4,4v7a3.99992,3.99992,0,0,0,4,4h4a4.00005,4.00005,0,0,0,3.2-1.6L16,19h1.46442l2.03552-2.03552,2,2,2-2,2,2,2-2,1.36377,1.36377,2.13623-1.6615v-2.3335ZM9,17a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H8a1,1,0,0,1,1,1Z"/>
</svg>
);

export const Key = createIcon(SVG, 'Key');

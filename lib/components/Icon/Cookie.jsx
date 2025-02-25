
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="cookie" d="M16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Zm4,4a1,1,0,1,1-1,1A1,1,0,0,1,20,8ZM8,12.5A1.5,1.5,0,1,1,9.5,14,1.5,1.5,0,0,1,8,12.5ZM12,21a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,12,21Zm4,4a1,1,0,1,1,1-1A1,1,0,0,1,16,25Zm1.5-10A1.5,1.5,0,1,1,19,13.5,1.5,1.5,0,0,1,17.5,15Zm3,6A1.5,1.5,0,1,1,22,19.5,1.5,1.5,0,0,1,20.5,21ZM24,16a1,1,0,1,1,1-1A1,1,0,0,1,24,16Z"/>
</svg>
);

export const Cookie = createIcon(SVG, 'Cookie');

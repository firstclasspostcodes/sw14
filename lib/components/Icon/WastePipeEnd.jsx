
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="waste-pipe-end" d="M20,5V19a1,1,0,0,1-1,1H18a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h1A1,1,0,0,1,20,5ZM14,6H4V18H14a1,1,0,0,0,1-1V7A1,1,0,0,0,14,6Zm8,9.76111v2.05212c1.54279,1.86,1,2.87757,1,4.18677a3,3,0,0,0,6,0C29,20.48926,26.76843,16.76758,22,15.76111Z"/>
</svg>
);

export const WastePipeEnd = createIcon(SVG, 'WastePipeEnd');

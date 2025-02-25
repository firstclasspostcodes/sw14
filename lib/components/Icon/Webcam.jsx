
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="webcam" d="M16,5a9,9,0,1,0,9,9A9,9,0,0,0,16,5Zm0,14a4,4,0,1,1,4-4A4,4,0,0,1,16,19Zm2-4a2,2,0,0,1-4,0,1.97428,1.97428,0,0,1,.0733-.50739,1.49285,1.49285,0,0,0,1.41931-1.41925A1.97469,1.97469,0,0,1,16,13,2.00241,2.00241,0,0,1,18,15Zm2,11v1a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1V26a1,1,0,0,1,1-1h6A1,1,0,0,1,20,26Z"/>
</svg>
);

export const Webcam = createIcon(SVG, 'Webcam');

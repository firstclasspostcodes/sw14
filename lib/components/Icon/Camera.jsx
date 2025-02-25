
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="camera" d="M25,8H22.125L21.81,6.91992A2.83342,2.83342,0,0,0,19.25,5h-6.5a2.83342,2.83342,0,0,0-2.56,1.91992L9.875,8H7a3.00879,3.00879,0,0,0-3,3V23a3.00879,3.00879,0,0,0,3,3H25a3.00879,3.00879,0,0,0,3-3V11A3.00879,3.00879,0,0,0,25,8ZM16,23a6,6,0,1,1,6-6A6,6,0,0,1,16,23ZM26,11.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5ZM20,17a4,4,0,1,1-4-4A3.99992,3.99992,0,0,1,20,17Z"/>
</svg>
);

export const Camera = createIcon(SVG, 'Camera');

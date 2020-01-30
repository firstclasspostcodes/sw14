
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bed" d="M28,17V27.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5V25H7v2.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5V17a2,2,0,0,1,2-2H26A2,2,0,0,1,28,17ZM8,11a1,1,0,0,1,1-1h5a1,1,0,0,1,1,1v2h2V11a1,1,0,0,1,1-1h5a1,1,0,0,1,1,1v2h2V9a4,4,0,0,0-4-4H10A4,4,0,0,0,6,9v4H8Z"/>
</svg>
);

export const Bed = createIcon(SVG, 'Bed');

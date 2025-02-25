
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="dustbin" d="M25,7H7V5.05713a1,1,0,0,1,1.05548-.99854l16,.88892A1,1,0,0,1,25,5.946ZM22.5,19a5.45523,5.45523,0,0,1,2.5.60742V9H6v2a1,1,0,0,0,1,1h.82019a.99983.99983,0,0,1,.97858.794l2.86694,13.61816A2.00007,2.00007,0,0,0,13.6228,28h4.63788A5.497,5.497,0,0,1,22.5,19ZM26,24.5A3.5,3.5,0,1,1,22.5,21,3.5,3.5,0,0,1,26,24.5Zm-2,0A1.5,1.5,0,1,0,22.5,26,1.50168,1.50168,0,0,0,24,24.5Z"/>
</svg>
);

export const Dustbin = createIcon(SVG, 'Dustbin');


/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="vr-inside" d="M26,7H6A2.00006,2.00006,0,0,0,4,9V23a2.00006,2.00006,0,0,0,2,2h4.65417a2.00027,2.00027,0,0,0,1.857-1.25732l.9942-2.48536A1.99974,1.99974,0,0,1,15.3623,20h1.29187a1.99989,1.99989,0,0,1,1.857,1.25732l.9942,2.48536A2.00011,2.00011,0,0,0,21.3623,25H26a2.00006,2.00006,0,0,0,2-2V9A2.00006,2.00006,0,0,0,26,7ZM11.5,17A2.5,2.5,0,1,1,14,14.5,2.5,2.5,0,0,1,11.5,17Zm9,0A2.5,2.5,0,1,1,23,14.5,2.5,2.5,0,0,1,20.5,17Z"/>
</svg>
);

export const VrInside = createIcon(SVG, 'VrInside');

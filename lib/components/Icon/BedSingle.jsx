
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bed-single" d="M26,17V27.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5V25H9v2.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5V17a2,2,0,0,1,2-2H24A2,2,0,0,1,26,17ZM11,11a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v2h3V9a4,4,0,0,0-4-4H12A4,4,0,0,0,8,9v4h3Z"/>
</svg>
);

export const BedSingle = createIcon(SVG, 'BedSingle');

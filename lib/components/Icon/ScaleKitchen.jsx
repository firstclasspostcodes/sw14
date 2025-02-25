
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="scale-kitchen" d="M26.55591,25.63135l-2.25-12A2.00012,2.00012,0,0,0,22.34015,12H18V10H14v2H9.65985a2.00012,2.00012,0,0,0-1.96576,1.63135l-2.25,12A2,2,0,0,0,7.40985,28h17.1803A2,2,0,0,0,26.55591,25.63135ZM16,26a6,6,0,1,1,6-6A6.00657,6.00657,0,0,1,16,26ZM7,6V5H26V6a2.00006,2.00006,0,0,1-2,2H9A2.00006,2.00006,0,0,1,7,6Zm9.54974,10.49756.35077,3.50732a.905.905,0,1,1-1.801,0l.35077-3.50732a.55248.55248,0,0,1,1.09948,0Z"/>
</svg>
);

export const ScaleKitchen = createIcon(SVG, 'ScaleKitchen');


/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="pot" d="M26,10H6A3,3,0,0,1,9,7h4V6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7h4A3,3,0,0,1,26,10Zm2,4H26V12H6v2H4a1,1,0,0,0,0,2H6V26a2.00229,2.00229,0,0,0,2,2H24a2.00229,2.00229,0,0,0,2-2V16h2a1,1,0,0,0,0-2Z"/>
</svg>
);

export const Pot = createIcon(SVG, 'Pot');

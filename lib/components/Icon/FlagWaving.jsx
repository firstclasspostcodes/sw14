
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="flag-waving" d="M27.61188,10.3288l-1.33338,8A2,2,0,0,1,24.30573,20H18a2,2,0,0,1-2-2H11v8a1,1,0,0,1,1,1v1H7V27a1,1,0,0,1,1-1V5A1,1,0,0,1,9,4h1a1,1,0,0,1,1,1V6h7a2.00591,2.00591,0,0,1,2,2h5.6391A2,2,0,0,1,27.61188,10.3288Z"/>
</svg>
);

export const FlagWaving = createIcon(SVG, 'FlagWaving');

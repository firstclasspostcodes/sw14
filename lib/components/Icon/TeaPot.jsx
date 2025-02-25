
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="tea-pot" d="M19,11a2,2,0,0,1,2,2v1H11V13a2,2,0,0,1,2-2h1a2,2,0,0,1,4,0ZM9,11a5.00588,5.00588,0,0,1,5-5h4a5.00588,5.00588,0,0,1,5,5v2.06317a13.0721,13.0721,0,0,1,2,1.57794V11a7.00818,7.00818,0,0,0-7-7H14a7.00818,7.00818,0,0,0-7,7v3.76971a13.21932,13.21932,0,0,1,2-1.63037Zm14.53729,5H8.60645A11.37991,11.37991,0,0,0,6.9502,17.95038L3,17,2,19l3.19611,3.27454A11.54086,11.54086,0,0,0,5,24.36481V25a3,3,0,0,0,3,3H24a3,3,0,0,0,3-3V24A10.95211,10.95211,0,0,0,23.53729,16Z"/>
</svg>
);

export const TeaPot = createIcon(SVG, 'TeaPot');

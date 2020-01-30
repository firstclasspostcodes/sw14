
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="plant" d="M24,16v1.5a.5.5,0,0,1-.5.5H8.5a.5.5,0,0,1-.5-.5V16a1,1,0,0,1,1-1h6V12.83771l-2.417-1.39514C9.18079,12.76147,7.24084,9.28979,7.5777,7.67969c1.14795-1.027,4.70892-1.1427,5.61694,1.80633L15,10.52808V8.02887c-2.47778-2.28058-.52295-5.50787.993-6.00574,1.51312.497,3.46393,3.71344,1.007,5.99329v2.51166L18.80536,9.486c.908-2.949,4.469-2.83331,5.61694-1.80633.33686,1.6101-1.60309,5.08178-5.00525,3.76288L17,12.83771V15h6A1,1,0,0,1,24,16ZM10.85071,27.17889A1,1,0,0,0,11.83459,28h8.33082a1,1,0,0,0,.98388-.82111L22.45453,20H9.54547Z"/>
</svg>
);

export const Plant = createIcon(SVG, 'Plant');

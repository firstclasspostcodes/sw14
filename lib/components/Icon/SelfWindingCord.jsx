
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="self-winding-cord" d="M28,16.02a11.93115,11.93115,0,0,1-3.65674,8.57806l-.35119.313A5.73229,5.73229,0,0,1,20.417,26.19678a6.03049,6.03049,0,0,1-5.89258-5.67371A5.0162,5.0162,0,0,1,11,16l.00037-1.98a1,1,0,0,1,1-1h1v-2.5a1,1,0,1,1,2,0v2.5h2v-2.5a1,1,0,1,1,2,0v2.5h1a1,1,0,0,1,1,1L21,16a4.98944,4.98944,0,0,1-3.45526,4.50183A3.00485,3.00485,0,0,0,20.417,23.19678a2.75345,2.75345,0,0,0,1.72992-.63513,8.983,8.983,0,1,0-8.14136,2.22808A7.94556,7.94556,0,0,0,18.0813,27.8269,11.99388,11.99388,0,1,1,28,16.02Z"/>
</svg>
);

export const SelfWindingCord = createIcon(SVG, 'SelfWindingCord');

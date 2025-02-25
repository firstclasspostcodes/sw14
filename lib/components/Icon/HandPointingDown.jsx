
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="hand-pointing-down" d="M10,7V3H21V7a1,1,0,0,1-1,1H11A1,1,0,0,1,10,7Zm13.41418,5.41418L21,10H10.5L9.285,12.025A2.00006,2.00006,0,0,0,9,13.054V18.614a2,2,0,0,0,1.29773,1.87262L17,23v5.5a1.5,1.5,0,0,0,3,0V17a1,1,0,0,1,2,0v2.79285a.5.5,0,0,0,.85358.35351l.5606-.56061A2.00008,2.00008,0,0,0,24,18.17139v-4.343A1.99982,1.99982,0,0,0,23.41418,12.41418Z"/>
</svg>
);

export const HandPointingDown = createIcon(SVG, 'HandPointingDown');

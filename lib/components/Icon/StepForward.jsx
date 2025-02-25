
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="step-forward" d="M27.11536,15.31934l-6.54187,4.5791A.9999.9999,0,0,1,19,19.07935V17H13.5A4.5,4.5,0,0,0,9,21.5V23a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V21.5A9.50008,9.50008,0,0,1,13.5,12H19V9.92065a1.00006,1.00006,0,0,1,1.57349-.81933l6.54187,4.57934A1.0002,1.0002,0,0,1,27.11536,15.31934Z"/>
</svg>
);

export const StepForward = createIcon(SVG, 'StepForward');

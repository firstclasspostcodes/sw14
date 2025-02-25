
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="step-back" d="M28,21.5V23a1,1,0,0,1-1,1H24a1,1,0,0,1-1-1V21.5A4.5,4.5,0,0,0,18.5,17H13v2.07935a.9999.9999,0,0,1-1.57349.81909l-6.54187-4.5791a1.0002,1.0002,0,0,1,0-1.63868l6.54187-4.57934A1.00006,1.00006,0,0,1,13,9.92065V12h5.5A9.50008,9.50008,0,0,1,28,21.5Z"/>
</svg>
);

export const StepBack = createIcon(SVG, 'StepBack');

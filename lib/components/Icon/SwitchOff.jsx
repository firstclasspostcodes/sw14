
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="switch-off" d="M21,7H11a9,9,0,0,0,0,18H21A9,9,0,0,0,21,7Zm0,15H11a6,6,0,0,1,0-12H21a6,6,0,0,1,0,12Zm-6-6a4,4,0,1,1-4-4A4.004,4.004,0,0,1,15,16Z"/>
</svg>
);

export const SwitchOff = createIcon(SVG, 'SwitchOff');

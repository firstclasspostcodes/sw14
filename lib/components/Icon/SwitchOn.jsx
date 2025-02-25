
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="switch-on" d="M25,16a4,4,0,1,1-4-4A4.004,4.004,0,0,1,25,16Zm5,0a9.00984,9.00984,0,0,1-9,9H11A9,9,0,0,1,11,7H21A9.00984,9.00984,0,0,1,30,16Zm-3,0a6,6,0,1,0-6,6A6.00657,6.00657,0,0,0,27,16Z"/>
</svg>
);

export const SwitchOn = createIcon(SVG, 'SwitchOn');

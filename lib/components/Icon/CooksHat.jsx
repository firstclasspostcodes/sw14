
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="cooks-hat" d="M28,13.5c0,2.57684-2.12952,4.73358-5,5.33044V23H9V19.991C6.22736,19.94342,4,18.55,4,16a4.10209,4.10209,0,0,1,3.066-3.654A6.07074,6.07074,0,0,1,7,11.5,6.76393,6.76393,0,0,1,14,5a7.11384,7.11384,0,0,1,5.97827,3.13141A7.87856,7.87856,0,0,1,21.4,8C25.0451,8,28,10.46246,28,13.5ZM9,27a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V25H9Z"/>
</svg>
);

export const CooksHat = createIcon(SVG, 'CooksHat');

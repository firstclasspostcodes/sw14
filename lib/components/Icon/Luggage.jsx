
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="luggage" d="M14,6H12V5a2.00229,2.00229,0,0,1,2-2h4a2.00229,2.00229,0,0,1,2,2V6H18.00012L18,5H14Zm11,5V23a3.00879,3.00879,0,0,1-3,3v1a1,1,0,0,1-1,1H20a1,1,0,0,1-1-1V26H13v1a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V26a3.00879,3.00879,0,0,1-3-3V11a3.00879,3.00879,0,0,1,3-3H22A3.00879,3.00879,0,0,1,25,11Zm-7,.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5Z"/>
</svg>
);

export const Luggage = createIcon(SVG, 'Luggage');

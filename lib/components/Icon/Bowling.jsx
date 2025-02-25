
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="bowling" d="M16,5A11,11,0,1,0,27,16,11.01245,11.01245,0,0,0,16,5Zm-4.5,7A1.5,1.5,0,1,1,13,10.5,1.5,1.5,0,0,1,11.5,12Zm4,3A1.5,1.5,0,1,1,17,13.5,1.5,1.5,0,0,1,15.5,15Zm0-5A1.5,1.5,0,1,1,17,8.5,1.5,1.5,0,0,1,15.5,10Z"/>
</svg>
);

export const Bowling = createIcon(SVG, 'Bowling');

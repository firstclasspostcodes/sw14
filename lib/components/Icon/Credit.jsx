
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="credit" d="M8.20923,17.41577a6.99759,6.99759,0,1,1,9.50616-8.376A10.5136,10.5136,0,0,0,8.20923,17.41577ZM18.5,10.917A8.583,8.583,0,1,0,27.083,19.5,8.59307,8.59307,0,0,0,18.5,10.917Z"/>
</svg>
);

export const Credit = createIcon(SVG, 'Credit');

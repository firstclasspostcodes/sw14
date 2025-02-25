
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="stop" d="M25,8V24a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8A1,1,0,0,1,8,7H24A1,1,0,0,1,25,8Z"/>
</svg>
);

export const Stop = createIcon(SVG, 'Stop');


/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="minus" d="M26,14v4a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H25A1,1,0,0,1,26,14Z"/>
</svg>
);

export const Minus = createIcon(SVG, 'Minus');


/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="circle-empty" d="M16,5A11,11,0,1,0,27,16,11.01245,11.01245,0,0,0,16,5Zm0,19a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,16,24Z"/>
</svg>
);

export const CircleEmpty = createIcon(SVG, 'CircleEmpty');

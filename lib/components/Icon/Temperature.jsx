
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="temperature" d="M20,18.835V8.08594a4,4,0,0,0-8,0V18.835a5.50005,5.50005,0,1,0,8,0Zm-4,6.25049a2.49807,2.49807,0,0,1-1-4.78809V14.08545a1,1,0,0,1,2,0v6.21191a2.49807,2.49807,0,0,1-1,4.78809Z"/>
</svg>
);

export const Temperature = createIcon(SVG, 'Temperature');

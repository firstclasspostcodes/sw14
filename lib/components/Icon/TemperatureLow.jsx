
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="temperature-low" d="M31.19617,9a.99945.99945,0,0,1-1.366.366L27,7.73206V11a1,1,0,0,1-2,0V7.73206L22.16986,9.366a1,1,0,1,1-1-1.73194L24,6,21.16986,4.366a1,1,0,1,1,1-1.73194L25,4.26794V1a1,1,0,0,1,2,0V4.26794L29.83014,2.634a1,1,0,1,1,1,1.73194L28,6l2.83014,1.634A.99933.99933,0,0,1,31.19617,9ZM17,18.835a5.50005,5.50005,0,1,1-8,0V8.08594a4,4,0,0,1,8,0Zm-1.5,3.75049A2.5018,2.5018,0,0,0,14,20.29736V18.08545a1,1,0,0,0-2,0v2.21191a2.49874,2.49874,0,1,0,3.5,2.28809Z"/>
</svg>
);

export const TemperatureLow = createIcon(SVG, 'TemperatureLow');

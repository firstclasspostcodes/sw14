
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="mouse" d="M19,8.2937V7a1,1,0,0,0-1-1H17V2H15V6H14a1,1,0,0,0-1,1V8.2937A7.0002,7.0002,0,0,0,8,15v7a7,7,0,0,0,7,7h2a7,7,0,0,0,7-7V15A7.0002,7.0002,0,0,0,19,8.2937ZM18,15.5A1.5,1.5,0,0,1,16.5,17h-1A1.5,1.5,0,0,1,14,15.5v-3A1.5,1.5,0,0,1,15.5,11h1A1.5,1.5,0,0,1,18,12.5Z"/>
</svg>
);

export const Mouse = createIcon(SVG, 'Mouse');

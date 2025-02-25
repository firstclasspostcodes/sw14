
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="underline" d="M26,5V6a1,1,0,0,1-1,1H24v9a7.6542,7.6542,0,0,1-8,8,7.6542,7.6542,0,0,1-8-8V7H7A1,1,0,0,1,6,6V5A1,1,0,0,1,7,4h6a1,1,0,0,1,1,1V6a1,1,0,0,1-1,1H12v9a3.71489,3.71489,0,0,0,4,4,3.71489,3.71489,0,0,0,4-4V7H19a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h6A1,1,0,0,1,26,5Zm-.5,21H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h19a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,25.5,26Z"/>
</svg>
);

export const Underline = createIcon(SVG, 'Underline');

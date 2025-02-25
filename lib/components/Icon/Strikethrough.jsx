
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="strikethrough" d="M20,25v1a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1V25a1,1,0,0,1,1-1h1V19h4v5h1A1,1,0,0,1,20,25ZM24.00067,9h1A.99943.99943,0,0,0,26,8V5a.99943.99943,0,0,0-.99933-1H7A1,1,0,0,0,6,5l.00067,3a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V7H14v8H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h19a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H18V7h5.00067V8A1,1,0,0,0,24.00067,9Z"/>
</svg>
);

export const Strikethrough = createIcon(SVG, 'Strikethrough');


/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="text-underline" d="M26,26.5v1a.5.5,0,0,1-.5.5H6.5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h19A.5.5,0,0,1,26,26.5ZM8.00067,9h1a1,1,0,0,0,1-1V7H14V21H13a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V22a1,1,0,0,0-1-1H18V7h4.00067V8a1,1,0,0,0,1,1h1A.99943.99943,0,0,0,25,8V5a.99943.99943,0,0,0-.99933-1H8A1,1,0,0,0,7,5l.00067,3A1,1,0,0,0,8.00067,9Z"/>
</svg>
);

export const TextUnderline = createIcon(SVG, 'TextUnderline');

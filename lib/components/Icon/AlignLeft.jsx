
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="align-left" d="M28,18v8a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1H27A1,1,0,0,1,28,18ZM5,4A1,1,0,0,0,4,5V27a1,1,0,0,0,2,0V5A1,1,0,0,0,5,4ZM8,14V6A.99943.99943,0,0,1,9,5h8a.99943.99943,0,0,1,1,1v8a.99943.99943,0,0,1-1,1H9A.99943.99943,0,0,1,8,14Zm2-1h6V7H10Z"/>
</svg>
);

export const AlignLeft = createIcon(SVG, 'AlignLeft');

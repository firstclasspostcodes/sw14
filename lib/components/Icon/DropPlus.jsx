
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="drop-plus" d="M18,7H14V4h4ZM14,28h4V25H14ZM7,14H4v4H7ZM24.5,4H22V7h2.5a.50609.50609,0,0,1,.5.5V10h3V7.5A3.50424,3.50424,0,0,0,24.5,4ZM25,18h3V14H25Zm0,6.5a.50609.50609,0,0,1-.5.5H22v3h2.5A3.50424,3.50424,0,0,0,28,24.5V22H25ZM7,7.5A.50609.50609,0,0,1,7.5,7H10V4H7.5A3.50424,3.50424,0,0,0,4,7.5V10H7Zm0,17V22H4v2.5A3.50424,3.50424,0,0,0,7.5,28H10V25H7.5A.50609.50609,0,0,1,7,24.5ZM22,15a1,1,0,0,0-1-1H18V11a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1v3H11a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h3v3a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V18h3a1,1,0,0,0,1-1Z"/>
</svg>
);

export const DropPlus = createIcon(SVG, 'DropPlus');

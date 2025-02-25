
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="drop-down" d="M14,25h4v3H14ZM18,4H14V7h4ZM7,14H4v4H7ZM24.5,4H22V7h2.5a.50609.50609,0,0,1,.5.5V10h3V7.5A3.50424,3.50424,0,0,0,24.5,4ZM25,18h3V14H25ZM4,7.5V10H7V7.5A.50609.50609,0,0,1,7.5,7H10V4H7.5A3.50424,3.50424,0,0,0,4,7.5Zm21,17a.50609.50609,0,0,1-.5.5H22v3h2.5A3.50424,3.50424,0,0,0,28,24.5V22H25Zm-18,0V22H4v2.5A3.50424,3.50424,0,0,0,7.5,28H10V25H7.5A.50609.50609,0,0,1,7,24.5ZM19.98859,15H18V11a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1v4H12.01141a1,1,0,0,0-.82147,1.57019l3.98853,5.74622a.99994.99994,0,0,0,1.643,0l3.98859-5.74622A1,1,0,0,0,19.98859,15Z"/>
</svg>
);

export const DropDown = createIcon(SVG, 'DropDown');

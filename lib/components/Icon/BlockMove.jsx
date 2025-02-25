
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="block-move" d="M7.5,12H10v3H7.5a.50609.50609,0,0,0-.5.5V18H4V15.5A3.50424,3.50424,0,0,1,7.5,12ZM7,24.5V22H4v2.5A3.50424,3.50424,0,0,0,7.5,28H10V25H7.5A.50609.50609,0,0,1,7,24.5Zm10,0a.50609.50609,0,0,1-.5.5H14v3h2.5A3.50424,3.50424,0,0,0,20,24.5V22H17Zm11-17v9A3.50424,3.50424,0,0,1,24.5,20h-9A3.50424,3.50424,0,0,1,12,16.5v-9A3.50424,3.50424,0,0,1,15.5,4h9A3.50424,3.50424,0,0,1,28,7.5Zm-3,0a.50609.50609,0,0,0-.5-.5h-9a.50609.50609,0,0,0-.5.5v9a.50609.50609,0,0,0,.5.5h9a.50609.50609,0,0,0,.5-.5Z"/>
</svg>
);

export const BlockMove = createIcon(SVG, 'BlockMove');

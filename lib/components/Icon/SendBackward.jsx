
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="send-backward" d="M14,15H5a.99943.99943,0,0,1-1-1V5A.99943.99943,0,0,1,5,4h9a.99943.99943,0,0,1,1,1v9A.99943.99943,0,0,1,14,15Zm7.5-6H17v3h3v8H12V17H9v4.5A1.50039,1.50039,0,0,0,10.5,23h11A1.50039,1.50039,0,0,0,23,21.5v-11A1.50039,1.50039,0,0,0,21.5,9Z"/>
</svg>
);

export const SendBackward = createIcon(SVG, 'SendBackward');

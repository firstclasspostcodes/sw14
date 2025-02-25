
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-alert" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4ZM18,22a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm0-9-.92035,4.59814A.5.5,0,0,1,16.58936,18H15.40918a.5.5,0,0,1-.4903-.40186L14,13V10a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Z"/>
</svg>
);

export const SquareAlert = createIcon(SVG, 'SquareAlert');

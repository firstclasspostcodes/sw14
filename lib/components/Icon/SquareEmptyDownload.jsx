
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-empty-download" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4ZM25,24.5a.50641.50641,0,0,1-.5.5H7.5a.50641.50641,0,0,1-.5-.5V7.5A.50641.50641,0,0,1,7.5,7h17a.50641.50641,0,0,1,.5.5Zm-4.18994-7.92981-3.98859,5.74628a1,1,0,0,1-1.643,0l-3.98853-5.74628A1,1,0,0,1,12.01141,15H14V11a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v4h1.98859A1,1,0,0,1,20.81006,16.57019Z"/>
</svg>
);

export const SquareEmptyDownload = createIcon(SVG, 'SquareEmptyDownload');


/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-empty-left" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4ZM25,24.5a.50641.50641,0,0,1-.5.5H7.5a.50641.50641,0,0,1-.5-.5V7.5A.50641.50641,0,0,1,7.5,7h17a.50641.50641,0,0,1,.5.5ZM22,15v2a1,1,0,0,1-1,1H17v1.98859a1,1,0,0,1-1.57019.82147L9.68353,16.82147a1,1,0,0,1,0-1.643l5.74628-3.98853A1,1,0,0,1,17,12.01141V14h4A1,1,0,0,1,22,15Z"/>
</svg>
);

export const SquareEmptyLeft = createIcon(SVG, 'SquareEmptyLeft');

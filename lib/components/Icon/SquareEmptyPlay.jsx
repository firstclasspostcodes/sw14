
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-empty-play" d="M24.5,4H7.5A3.50424,3.50424,0,0,0,4,7.5v17A3.50424,3.50424,0,0,0,7.5,28h17A3.50424,3.50424,0,0,0,28,24.5V7.5A3.50424,3.50424,0,0,0,24.5,4ZM25,24.5a.50641.50641,0,0,1-.5.5H7.5a.50641.50641,0,0,1-.5-.5V7.5A.50641.50641,0,0,1,7.5,7h17a.50641.50641,0,0,1,.5.5Zm-4.83978-7.67828-5.66541,3.226A1,1,0,0,1,13,19.17865V12.72681a1,1,0,0,1,1.49481-.869l5.66541,3.22589A1,1,0,0,1,20.16022,16.82172Z"/>
</svg>
);

export const SquareEmptyPlay = createIcon(SVG, 'SquareEmptyPlay');

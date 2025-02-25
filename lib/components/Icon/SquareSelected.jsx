
/* eslint-disable prettier/prettier */
import React from 'react';
import { createIcon } from './src';

const SVG = (<svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path id="square-selected" d="M23.5,5H8.5A3.50424,3.50424,0,0,0,5,8.5v15A3.50424,3.50424,0,0,0,8.5,27h15A3.50424,3.50424,0,0,0,27,23.5V8.5A3.50424,3.50424,0,0,0,23.5,5ZM24,23.5a.50641.50641,0,0,1-.5.5H8.5a.50641.50641,0,0,1-.5-.5V8.5A.50641.50641,0,0,1,8.5,8h15a.50641.50641,0,0,1,.5.5ZM21,12v8a1,1,0,0,1-1,1H12a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1h8A1,1,0,0,1,21,12Z"/>
</svg>
);

export const SquareSelected = createIcon(SVG, 'SquareSelected');
